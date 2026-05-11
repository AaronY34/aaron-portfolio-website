#!/usr/bin/env python3
"""Generate deterministic daily progress logs from Git evidence."""

from __future__ import annotations

import argparse
import subprocess
from dataclasses import dataclass
from datetime import date, datetime, time
from pathlib import Path


STATUS_NO_ACTIVITY = "No Activity"
STATUS_PARTIAL = "Partial"
STATUS_DONE = "Done"


@dataclass(frozen=True)
class Commit:
    sha: str
    subject: str


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description="Generate a markdown daily progress log from Git commits and modified files."
    )
    parser.add_argument(
        "--date",
        default=date.today().isoformat(),
        help="Log date in YYYY-MM-DD format. Defaults to today.",
    )
    parser.add_argument(
        "--force",
        action="store_true",
        help="Overwrite an existing daily log for the selected date.",
    )
    parser.add_argument(
        "--project-root",
        default="",
        help="Path to the repository root. Defaults to auto-detection from the current directory.",
    )
    return parser.parse_args()


def parse_log_date(value: str) -> date:
    try:
        return datetime.strptime(value, "%Y-%m-%d").date()
    except ValueError as exc:
        raise SystemExit("Date must use YYYY-MM-DD format.") from exc


def run_git(project_root: Path, args: list[str]) -> list[str]:
    result = subprocess.run(
        ["git", "-C", str(project_root), *args],
        check=False,
        capture_output=True,
        text=True,
    )
    if result.returncode != 0:
        message = result.stderr.strip() or result.stdout.strip()
        raise RuntimeError(f"Git command failed: git {' '.join(args)}\n{message}")
    return [line for line in result.stdout.splitlines() if line.strip()]


def resolve_project_root(requested_root: str) -> Path:
    if requested_root:
        root = Path(requested_root).expanduser().resolve()
    else:
        result = subprocess.run(
            ["git", "rev-parse", "--show-toplevel"],
            check=False,
            capture_output=True,
            text=True,
        )
        if result.returncode == 0 and result.stdout.strip():
            root = Path(result.stdout.strip()).resolve()
        else:
            root = Path.cwd().resolve()

    try:
        inside_work_tree = run_git(root, ["rev-parse", "--is-inside-work-tree"])
    except RuntimeError as exc:
        raise SystemExit(f"{root} is not a Git work tree or Git is unavailable.\n{exc}") from exc

    if inside_work_tree[:1] != ["true"]:
        raise SystemExit(f"{root} is not a Git work tree.")

    return root


def day_bounds(log_date: date) -> tuple[str, str]:
    start = datetime.combine(log_date, time.min).isoformat()
    end = datetime.combine(log_date, time.max).isoformat()
    return start, end


def get_commits(project_root: Path, log_date: date) -> list[Commit]:
    since, until = day_bounds(log_date)
    lines = run_git(
        project_root,
        ["log", f"--since={since}", f"--until={until}", "--pretty=format:%h%x09%s"],
    )
    commits: list[Commit] = []
    for line in lines:
        sha, _, subject = line.partition("\t")
        if sha and subject:
            commits.append(Commit(sha=sha.strip(), subject=subject.strip()))
    return commits


def get_commit_files(project_root: Path, log_date: date) -> list[str]:
    since, until = day_bounds(log_date)
    lines = run_git(
        project_root,
        ["log", f"--since={since}", f"--until={until}", "--pretty=format:", "--name-only"],
    )
    return sorted(set(line.strip() for line in lines if line.strip()))


def get_candidate_working_files(project_root: Path) -> list[str]:
    lines = run_git(project_root, ["status", "--porcelain", "--untracked-files=all"])
    files: list[str] = []
    for line in lines:
        if len(line) < 4:
            continue
        path_text = line[3:].strip()
        if " -> " in path_text:
            path_text = path_text.split(" -> ", 1)[1].strip()
        path_text = path_text.strip('"')
        if path_text:
            files.append(path_text)
    return sorted(set(files))


def was_modified_on(path: Path, log_date: date) -> bool:
    if not path.exists() or path.is_dir():
        return False
    modified_at = datetime.fromtimestamp(path.stat().st_mtime).date()
    return modified_at == log_date


def get_modified_files(project_root: Path, log_date: date) -> list[str]:
    files = []
    for relative_path in get_candidate_working_files(project_root):
        absolute_path = project_root / relative_path
        if was_modified_on(absolute_path, log_date):
            files.append(relative_path)
    return sorted(set(files))


def read_daily_note(project_root: Path) -> str:
    note_path = project_root / "shared" / "project-notes" / "daily-note.md"
    if not note_path.exists():
        return ""
    return note_path.read_text(encoding="utf-8").strip()


def determine_status(commits: list[Commit], files_modified: list[str], daily_note: str) -> str:
    if commits:
        return STATUS_DONE
    if files_modified or daily_note:
        return STATUS_PARTIAL
    return STATUS_NO_ACTIVITY


def unique_sorted(values: list[str]) -> list[str]:
    return sorted(set(value for value in values if value.strip()))


def bullet_list(values: list[str], empty_text: str = "None") -> str:
    if not values:
        return f"- {empty_text}"
    return "\n".join(f"- {value}" for value in values)


def commit_list(commits: list[Commit]) -> str:
    if not commits:
        return "- None"
    return "\n".join(f"- `{commit.sha}` — {commit.subject}" for commit in commits)


def build_summary(status: str, commits: list[Commit], files_modified: list[str], daily_note: str) -> str:
    evidence_parts = []
    if commits:
        evidence_parts.append(f"{len(commits)} commit(s)")
    if files_modified:
        evidence_parts.append(f"{len(files_modified)} modified file(s)")
    if daily_note:
        evidence_parts.append("1 manual note")

    if not evidence_parts:
        return "No Git commits, modified files, or manual note were detected for this date."

    evidence_text = ", ".join(evidence_parts)
    if status == STATUS_DONE:
        return f"Completed work is indicated by {evidence_text}."
    return f"Activity is indicated by {evidence_text}, but no commit evidence confirms completed work."


def detect_outputs(commits: list[Commit], files_modified: list[str]) -> list[str]:
    outputs = []
    for commit in commits:
        outputs.append(f"Commit `{commit.sha}`: {commit.subject}")
    outputs.extend(files_modified)
    return outputs


def detect_blockers(daily_note: str) -> list[str]:
    if not daily_note:
        return []

    blockers = []
    for line in daily_note.splitlines():
        normalized = line.strip().lstrip("-* ").strip()
        lowered = normalized.lower()
        if normalized and ("blocker" in lowered or "blocked" in lowered):
            blockers.append(normalized)
    return blockers


def suggest_next_step(status: str, daily_note: str) -> str:
    if daily_note:
        for line in daily_note.splitlines():
            normalized = line.strip().lstrip("-* ").strip()
            lowered = normalized.lower()
            if lowered.startswith("next step:") or lowered.startswith("next:"):
                return normalized.split(":", 1)[1].strip()

    if status == STATUS_DONE:
        return "Review the generated log and commit it if accurate."
    if status == STATUS_PARTIAL:
        return "Review modified files and commit completed work when ready."
    return "Review the project roadmap and choose the next task."


def raw_evidence_block(
    commits: list[Commit],
    files_modified: list[str],
    daily_note: str,
) -> str:
    commit_lines = [f"{commit.sha} {commit.subject}" for commit in commits]
    raw_lines = [
        "commits:",
        *(commit_lines if commit_lines else ["None"]),
        "files_modified:",
        *(files_modified if files_modified else ["None"]),
        "manual_note:",
        daily_note if daily_note else "None",
    ]
    return "\n".join(raw_lines)


def render_log(
    log_date: date,
    status: str,
    commits: list[Commit],
    commit_files: list[str],
    modified_files: list[str],
    daily_note: str,
) -> str:
    files_modified = unique_sorted(commit_files + modified_files)
    manual_note_section = ""
    if daily_note:
        manual_note_section = f"""
### Manual Note
{daily_note}
"""

    outputs = detect_outputs(commits, files_modified)
    blockers = detect_blockers(daily_note)
    next_step = suggest_next_step(status, daily_note)
    summary = build_summary(status, commits, files_modified, daily_note)
    raw_evidence = raw_evidence_block(commits, files_modified, daily_note)

    return f"""# Daily Progress Log — {log_date.isoformat()}

## Status
{status}

## Summary
{summary}

## Evidence

### Git Commits
{commit_list(commits)}

### Files Modified
{bullet_list(files_modified)}
{manual_note_section}
## Output
{bullet_list(outputs, empty_text="No concrete outputs detected.")}

## Blockers
{bullet_list(blockers, empty_text="None detected.")}

## Next Step
- {next_step}

## Raw Evidence

```text
{raw_evidence}
```
"""


def write_log(project_root: Path, log_date: date, content: str, force: bool) -> Path:
    output_dir = project_root / "docs" / "progress" / "daily"
    output_dir.mkdir(parents=True, exist_ok=True)
    output_path = output_dir / f"{log_date.isoformat()}.md"

    if output_path.exists() and not force:
        raise SystemExit(f"{output_path} already exists. Re-run with --force to overwrite it.")

    output_path.write_text(content, encoding="utf-8")
    return output_path


def update_index(project_root: Path, log_date: date, status: str) -> Path:
    index_path = project_root / "docs" / "progress" / "progress-index.md"
    index_path.parent.mkdir(parents=True, exist_ok=True)

    entry = f"- [{log_date.isoformat()}](daily/{log_date.isoformat()}.md) - {status}"
    if index_path.exists():
        lines = index_path.read_text(encoding="utf-8").splitlines()
    else:
        lines = ["# Progress Index", "", "Daily generated progress logs.", ""]

    lines = [line for line in lines if not line.startswith(f"- [{log_date.isoformat()}]")]
    lines.append(entry)

    header = lines[:4]
    entries = sorted(
        [line for line in lines[4:] if line.startswith("- [")],
        reverse=True,
    )
    index_path.write_text("\n".join(header + entries) + "\n", encoding="utf-8")
    return index_path


def main() -> int:
    args = parse_args()
    log_date = parse_log_date(args.date)
    project_root = resolve_project_root(args.project_root)

    commits = get_commits(project_root, log_date)
    commit_files = get_commit_files(project_root, log_date)
    modified_files = get_modified_files(project_root, log_date)
    daily_note = read_daily_note(project_root)
    files_modified = unique_sorted(commit_files + modified_files)
    status = determine_status(commits, files_modified, daily_note)

    content = render_log(
        log_date=log_date,
        status=status,
        commits=commits,
        commit_files=commit_files,
        modified_files=modified_files,
        daily_note=daily_note,
    )
    output_path = write_log(project_root, log_date, content, args.force)
    index_path = update_index(project_root, log_date, status)

    print(f"Daily progress log written: {output_path}")
    print(f"Progress index updated: {index_path}")
    print(f"Status: {status}")
    return 0


if __name__ == "__main__":
    try:
        raise SystemExit(main())
    except FileNotFoundError as exc:
        if exc.filename == "git":
            raise SystemExit("Git was not found. Install Git and run this script inside the repository.")
        raise
