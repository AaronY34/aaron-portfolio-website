# GitHub Actions Automation

The daily progress tracker can run in GitHub Actions so the markdown log is generated from the cloud repository, regardless of whether the work happened on Mac or PC.

## Schedule

GitHub Actions cron schedules use UTC, not repository-local time zones. To target 23:59 in Vancouver, the workflow runs at both possible UTC equivalents:

- `06:59 UTC`, which matches `23:59` in Vancouver during daylight saving time.
- `07:59 UTC`, which matches `23:59` in Vancouver during standard time.

The workflow checks the current `America/Vancouver` hour before generating a log. If the scheduled run is not in the 23:00 Vancouver hour, it exits cleanly without writing a log. This keeps the schedule aligned across daylight saving changes.

## Manual Runs

To run the workflow manually:

1. Open the repository on GitHub.
2. Go to **Actions**.
3. Select **Daily Progress Log**.
4. Click **Run workflow**.
5. Choose the `main` branch and run it.

Manual runs do not use the scheduled-hour guard. They generate the log for the current Vancouver date.

## What The Cloud Run Can Summarize

The GitHub Actions runner only sees what has been pushed to GitHub. That means it can summarize:

- Commits already pushed to the repository.
- Files changed inside those pushed commits.
- Repository files that exist in GitHub at workflow runtime.

It cannot see uncommitted work on your Mac or PC. It also cannot see local commits that have not been pushed yet.

## Switching Between Mac And PC

When switching devices:

1. Commit useful local work before switching.
2. Push the branch to GitHub.
3. Pull the latest changes on the other device.

If work stays uncommitted or unpushed on one machine, the GitHub Actions daily log cannot include it. For local-only notes, add them to `shared/project-notes/daily-note.md`, commit them, and push before the scheduled run.

## Disabling The Workflow

To disable the automation without deleting it:

1. Open the repository on GitHub.
2. Go to **Actions**.
3. Select **Daily Progress Log**.
4. Use **Disable workflow** from the workflow menu.

To disable it in code, remove or comment out the `schedule` block in `.github/workflows/daily-progress-log.yml`. The `workflow_dispatch` block can remain if you still want manual runs.
