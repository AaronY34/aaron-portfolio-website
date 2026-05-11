# Job Search Agent OS

Job Search Agent OS is a long-term project for building a personal job search workflow that combines automation, structured tracking, reusable career knowledge, and human review.

The project has three connected parts:

1. **Progress Tracking Agent**
   Generates daily markdown progress logs from Git evidence. This is also the first automation coding practice project.

2. **Portfolio Website**
   A personal website for projects, profile, resume, and case studies. It will later be deployed to Vercel.

3. **Job Search Automation System**
   A human-in-the-loop workflow for finding jobs, tracking applications, analyzing job descriptions, tailoring resumes and cover letters, preparing application answers, monitoring email updates, and reminding the user about next actions.

This system should help organize and speed up the job search, but it should not make final application decisions or submit applications automatically.

## Local And Drive Storage

This local repository is for:
- Code
- Scripts
- Automation
- Git repo files
- README files
- Local development documentation
- Prompt libraries and structured working notes

Google Drive is for non-code assets:
- Resumes
- Cover letters
- Job description backups
- Screenshots
- Exported PDFs
- Portfolio assets
- Documentation files that need access across PC and Mac

Google Drive project folder:
https://drive.google.com/drive/folders/1lvkCqFUQ1KodKogQYl8upHOGYr-7b_ra?usp=drive_link

## Repository Layout

```text
job-search-agent-os/
  AGENTS.md
  README.md
  project-roadmap.md
  docs/
    architecture.md
    google-drive-map.md
    safety-rules.md
  01-progress-tracking-agent/
    README.md
  02-portfolio-website/
    README.md
  03-job-search-automation/
    README.md
  shared/
    prompt-library/
    resume-knowledge-base/
    project-notes/
    templates/
```

## Current Status

The project foundation is in place. The current active implementation is the Progress Tracking Agent V1, which writes local markdown logs into the repository instead of using Google Sheets.

## Next Step

Run the Progress Tracking Agent manually, review the generated daily markdown log, and commit `docs/progress/daily/YYYY-MM-DD.md` plus `docs/progress/progress-index.md`.
