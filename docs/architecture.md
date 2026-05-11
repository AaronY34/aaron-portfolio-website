# Architecture

## Overview

Job Search Agent OS is organized as three subprojects plus shared resources.

The local repository contains code, scripts, automation logic, prompts, templates, and development documentation. Google Drive contains non-code assets that need to be portable across devices.

## Subprojects

### 1. Progress Tracking Agent

Purpose: Record daily project progress as markdown logs committed to the repository.

Expected inputs:
- Git commits for the selected date
- Working tree files modified on the selected date
- Optional human note at `shared/project-notes/daily-note.md`

Expected outputs:
- A daily markdown log at `docs/progress/daily/YYYY-MM-DD.md`
- An updated index at `docs/progress/progress-index.md`

Current implementation:
- `01-progress-tracking-agent/src/main.py` generates deterministic markdown logs from Git evidence.
- The generator avoids OpenAI and Google Sheets dependencies in V1.
- Status is derived from evidence: `Done` for commit activity, `Partial` for modified-file activity only, and `No Activity` when neither exists.
- Future V2 work may add AI summaries and Google Sheet export after the local markdown workflow is stable.

### 2. Portfolio Website

Purpose: Present the user's projects, profile, resume, and case studies.

Expected inputs:
- Project descriptions
- Resume content
- Case study notes
- Screenshots and portfolio assets from Google Drive

Expected output:
- A website that can later be deployed to Vercel.

### 3. Job Search Automation System

Purpose: Support a structured, human-reviewed job search workflow.

Expected inputs:
- Job alerts from LinkedIn, Indeed, or email
- Job descriptions
- Resume knowledge base
- Cover letter templates
- Application status updates

Expected outputs:
- Job tracking rows in Google Sheets
- JD analysis summaries
- Tailored resume suggestions
- Draft cover letters
- Draft application answers
- Reminders for follow-up actions

## Shared Resources

The `shared/` folder holds reusable project materials:
- `prompt-library/` for prompts used across workflows.
- `resume-knowledge-base/` for structured career facts and reusable resume material.
- `project-notes/` for working notes and decisions.
- `templates/` for reusable local templates.

## Human-In-The-Loop Rule

The system may help analyze, draft, organize, and remind. The user makes final decisions and manually submits applications.
