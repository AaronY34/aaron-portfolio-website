# Portfolio Website

## Goal

Build a clean personal portfolio website for job search positioning and project showcase.

Positioning:

```text
IT Implementation | Workflow Automation | Data Analysis | AI-assisted Systems
```

This subproject is separate from `01-progress-tracking-agent`. It contains the website source only. Non-code assets such as screenshots, resume PDFs, case study exports, and profile images should stay in the Google Drive project folder unless there is a clear reason to commit optimized web assets.

## Tech Stack

- Next.js
- TypeScript
- Tailwind CSS
- Vercel-ready project structure

## Current Scope

This is the simplest working website structure. It includes:

- A Next.js app shell.
- A single home page.
- Basic metadata.
- Tailwind styling.
- Structured portfolio content in `src/data/profile.ts`.

It does not include deployment setup, analytics, CMS, external APIs, or large media assets yet.

## Folder Structure

```text
02-portfolio-website/
  README.md
  next.config.mjs
  package.json
  postcss.config.mjs
  tailwind.config.ts
  tsconfig.json
  public/
  src/
    app/
      globals.css
      layout.tsx
      page.tsx
    data/
      profile.ts
```

## Run Locally

From this folder:

```bash
npm install
npm run dev
```

Then open:

```text
http://localhost:3000
```

## Build Check

```bash
npm run build
```

## Vercel Notes

When ready to deploy:

1. Push the repository to GitHub.
2. Create a Vercel project.
3. Set the project root to `02-portfolio-website`.
4. Use the default Next.js build settings.

## Next Content Tasks

- Write a sharper profile summary.
- Add real project entries and case study notes.
- Decide whether the resume should be a page, PDF link, or both.
- Add screenshots or project images from Google Drive only after choosing final assets.
