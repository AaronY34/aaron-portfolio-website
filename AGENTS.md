# AGENTS.md

## Project Name
Job Search Agent OS

## Purpose
This repository is the local development home for a long-term, human-in-the-loop job search operating system. It contains code, scripts, automation, project READMEs, architecture notes, prompts, and development documentation.

## Storage Rules
- Keep code, scripts, automation, Git repo files, README files, and local development notes in this local folder.
- Keep non-code assets in the Google Drive project folder: resumes, cover letters, job description backups, screenshots, exported PDFs, portfolio assets, and documentation files that need to be accessible across PC and Mac.
- Do not put `node_modules`, Python virtual environments, `.git` folders, build outputs, or sensitive `.env` files into Google Drive.
- Never store API keys or service account credentials in Git or Google Drive unless the user explicitly creates a private credentials folder and that folder is gitignored.

## Agent Behavior
- Do not auto-submit job applications.
- Keep the user in control of resume changes, cover letters, application answers, outreach, and final submission decisions.
- Prefer small, readable steps over large framework setup.
- Do not create frameworks, apps, or dependencies until the user asks for implementation.
- Document decisions as they are made.

## Subprojects
1. `01-progress-tracking-agent` - Daily progress log generation into repository markdown files.
2. `02-portfolio-website` - Personal portfolio website for projects, profile, resume, and case studies.
3. `03-job-search-automation` - Human-in-the-loop job discovery, tracking, document tailoring, and follow-up system.

## Current First Task
Use `01-progress-tracking-agent` to generate local markdown daily progress logs from Git evidence. Do not add Google Sheets or OpenAI API dependencies until a later V2 is requested.
