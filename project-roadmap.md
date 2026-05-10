# Project Roadmap

## Phase 1: Project Foundation

Goal: Create a clean project structure and define the rules for local files, Google Drive assets, safety, and architecture.

Status: In progress.

Tasks:
- Create repository folder structure.
- Add top-level documentation.
- Define storage boundaries between local repo and Google Drive.
- Define safety rules for credentials and job applications.

## Phase 2: Progress Tracking Agent

Goal: Build the first automation practice project: a simple agent or script that records daily progress into a Google Sheet.

Initial tasks:
- Design the Google Sheet columns. Status: done.
- Decide what counts as a daily progress entry. Status: done.
- Create a minimal local script or workflow to add one row. Status: done for local CSV staging.
- Add README instructions for running and testing the workflow. Status: done.
- Create the actual Google Sheet and add append/sync support. Status: next.

## Phase 3: Portfolio Website

Goal: Build a personal website for profile, projects, resume, and case studies.

Initial tasks:
- Decide the website sections.
- Create content inventory from Google Drive assets.
- Choose the web stack when implementation begins.
- Build locally first, then prepare for Vercel deployment.

## Phase 4: Job Search Automation System

Goal: Build a human-in-the-loop workflow for job search tracking and application preparation.

Initial tasks:
- Define the job tracking sheet structure.
- Define job intake sources such as LinkedIn and Indeed alerts.
- Create a job description backup process.
- Create prompts for JD analysis, resume tailoring, cover letters, and application answers.
- Add reminders and email update tracking.

## Phase 5: Integration And Refinement

Goal: Connect the three subprojects into one practical operating system.

Possible integrations:
- Progress tracker records work across all subprojects.
- Portfolio site pulls from project case study notes.
- Job search system uses resume knowledge base and templates.
- Documentation stays synchronized between local repo and Google Drive assets.
