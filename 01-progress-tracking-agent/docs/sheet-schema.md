# Progress Tracking Sheet Schema

This document defines the first Google Sheet structure for the Progress Tracking Agent.

The sheet should be named `Progress Log` unless there is already a better name in Drive.

## Columns

| Column | Required | Description | Example |
| --- | --- | --- | --- |
| `Date` | Yes | Work date in `YYYY-MM-DD` format. | `2026-05-10` |
| `Subproject` | Yes | Project area worked on. | `01-progress-tracking-agent` |
| `Completed Work` | Yes | Short summary of what was completed. | `Defined CSV staging workflow.` |
| `Blockers` | No | Anything slowing progress. Use `None` when clear. | `Need Google Sheet ID.` |
| `Next Step` | Yes | The next concrete action. | `Create Google Sheets sync script.` |
| `Notes` | No | Extra context, links, or decisions. | `Kept first version dependency-free.` |
| `Source` | Yes | Where the row came from. | `local-csv` or `git-evidence` |
| `Created At` | Yes | Timestamp for when the row was created. | `2026-05-10T17:40:00Z` |

## Daily Entry Rule

One row should represent one meaningful progress update. It does not need to summarize an entire day if there were multiple distinct work sessions.

Good entries are:
- Specific enough to remember what changed.
- Short enough to scan later.
- Honest about blockers and next steps.

## Evidence Rule

The Progress Tracking Agent should prefer repository evidence over memory. For development work, use:
- Git commit subjects as the completed-work source.
- Files changed in those commits as supporting evidence.
- Current modified files as in-progress evidence when the entry date is today and work has not been committed yet.

Rows created this way should use `git-evidence` as the source.

## First Implementation Boundary

The first implementation writes rows to a local CSV staging file:

```text
01-progress-tracking-agent/data/progress-log.csv
```

That file is intentionally gitignored because it is generated local data. Once the local row format is stable, a later step can add a Google Sheets append workflow that reads the same columns.
