# Progress Tracking Agent

## Goal

Automatically record daily project progress into a Google Sheet.

This is the first automation coding practice project inside Job Search Agent OS. It should stay simple at the beginning and grow only after the basic workflow works reliably.

## What This Agent Should Do

The agent should help capture daily progress such as:
- Date
- Subproject worked on
- Completed work
- Blockers
- Next step
- Notes or links

The first working version should append one clear progress entry to a Google Sheet.

## What This Agent Should Not Do Yet

- Do not create a complex app.
- Do not add unnecessary frameworks.
- Do not automate unrelated job search tasks.
- Do not store credentials in Git or Google Drive.

## Expected Future Files

Current files:
- `docs/sheet-schema.md` defines the Google Sheet columns.
- `scripts/add-progress-entry.ps1` appends one progress entry to a local CSV staging file.
- `config/progress-tracker.example.json` shows non-secret configuration values for a future Google Sheets sync.
- `templates/daily-progress-entry.json` gives a copyable daily entry shape.

Generated local data:
- `data/progress-log.csv` is created by the script and is gitignored.

## Sheet Columns

The first sheet uses these columns:
- `Date`
- `Subproject`
- `Completed Work`
- `Blockers`
- `Next Step`
- `Notes`
- `Source`
- `Created At`

See `docs/sheet-schema.md` for details.

## Add A Local Progress Entry

From the repository root:

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File .\01-progress-tracking-agent\scripts\add-progress-entry.ps1 `
  -Subproject "01-progress-tracking-agent" `
  -CompletedWork "Defined the local CSV staging workflow." `
  -NextStep "Add Google Sheets append support after the sheet exists." `
  -Notes "First version intentionally has no external dependencies."
```

This creates or updates:

```text
01-progress-tracking-agent/data/progress-log.csv
```

## Implementation Stages

1. Local CSV staging workflow.
2. Manual Google Sheet setup using the documented columns.
3. Google Sheets append workflow after credentials and sheet ID are available.
4. Basic validation tests if the script grows beyond simple row creation.

## Next Step

Create the Google Sheet with the documented columns, then add a sync or append path that uses a local, gitignored credential file.
