# Progress Tracking Agent Usage

Run the generator from the repository root:

```bash
python3 01-progress-tracking-agent/src/main.py
```

This creates:

```text
docs/progress/daily/YYYY-MM-DD.md
```

It also updates:

```text
docs/progress/progress-index.md
```

## Optional Flags

Use a specific date:

```bash
python3 01-progress-tracking-agent/src/main.py --date 2026-05-10
```

Overwrite an existing log:

```bash
python3 01-progress-tracking-agent/src/main.py --force
```

Run against a specific repository root:

```bash
python3 01-progress-tracking-agent/src/main.py --project-root /path/to/job-search-agent-os
```

Flags can be combined:

```bash
python3 01-progress-tracking-agent/src/main.py --date 2026-05-10 --force --project-root /path/to/job-search-agent-os
```

## Optional Daily Note

If this file exists, the generator includes it in the daily log:

```text
shared/project-notes/daily-note.md
```

Use it for short human-written notes that Git cannot know, such as blockers or context. The script includes the note as written and does not summarize it with AI.

## Status Rules

- `Done`: at least one Git commit exists for the selected date.
- `Partial`: no commits exist, but working tree files were modified on the selected date.
- `No Activity`: no commits or modified working tree files were detected for the selected date.

## Commit The Generated Log

After running the script, review the generated markdown file. Then commit the log and index:

```bash
git add docs/progress/daily/YYYY-MM-DD.md docs/progress/progress-index.md
git commit -m "Add daily progress log for YYYY-MM-DD"
```
