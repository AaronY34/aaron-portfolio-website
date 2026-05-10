# Architecture

## Overview

Job Search Agent OS is organized as three subprojects plus shared resources.

The local repository contains code, scripts, automation logic, prompts, templates, and development documentation. Google Drive contains non-code assets that need to be portable across devices.

## Subprojects

### 1. Progress Tracking Agent

Purpose: Record daily project progress into a Google Sheet.

Expected inputs:
- Date
- Project or subproject name
- Work completed
- Blockers
- Next step
- Optional time spent or confidence level

Expected output:
- A new row in a Google Sheet for each progress update.

Current implementation:
- The first working path appends rows to a local gitignored CSV staging file.
- The CSV uses the same columns planned for Google Sheets so the sync step can be added later without changing the daily entry shape.
- Development progress can be generated from Git evidence: commit subjects, committed files, and current modified files.

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
