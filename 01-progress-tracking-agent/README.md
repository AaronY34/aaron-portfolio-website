# Progress Tracking Agent

## Goal

Generate local daily progress logs as markdown files inside this GitHub repository.

This is the first automation coding practice project inside Job Search Agent OS. V1 intentionally avoids Google Sheets, OpenAI, and extra dependencies. It uses deterministic Git evidence so progress logs stay reviewable and easy to commit.

## Current Workflow

From the repository root:

```bash
python3 01-progress-tracking-agent/src/main.py
```

The script creates a daily log:

```text
docs/progress/daily/YYYY-MM-DD.md
```

It also updates the index:

```text
docs/progress/progress-index.md
```

## What The Script Does

1. Reads Git commits for the selected date.
2. Detects working tree files modified on the selected date.
3. Optionally reads `shared/project-notes/daily-note.md` if it exists.
4. Generates a markdown daily log.
5. Saves the log under `docs/progress/daily/`.
6. Updates `docs/progress/progress-index.md`.
7. Refuses to overwrite an existing daily log unless `--force` is passed.

## Status Rules

- `Done`: commits exist for the selected date.
- `Partial`: no commits exist, but working tree files were modified on the selected date.
- `No Activity`: no commits or modified working tree files were detected.

The script does not invent progress. It uses commit messages, committed file paths, modified file paths, and the optional daily note as its only evidence.

## Optional Flags

```bash
python3 01-progress-tracking-agent/src/main.py --date 2026-05-10
python3 01-progress-tracking-agent/src/main.py --force
python3 01-progress-tracking-agent/src/main.py --project-root /path/to/job-search-agent-os
```

See `01-progress-tracking-agent/docs/usage.md` for details.

## Current Files

- `src/main.py` generates markdown daily logs from Git evidence.
- `docs/usage.md` explains manual usage and commit steps.
- `requirements.txt` records that V1 has no third-party Python dependencies.
- `../../docs/progress/daily/.gitkeep` keeps the daily log folder in Git.
- `../../docs/progress/progress-index.md` links to generated daily logs.

## Later V2 Ideas

- Add AI-assisted summary generation after the deterministic workflow is reliable.
- Add Google Sheet export after local markdown logs are stable.
- Add tests if the script grows beyond simple deterministic file generation.
