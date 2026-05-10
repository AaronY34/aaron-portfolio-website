# Safety Rules

## Job Applications

- Do not auto-submit job applications.
- Do not send resumes, cover letters, outreach messages, or application answers without explicit user approval.
- Drafts are allowed. Final submission stays with the user.

## Credentials And Secrets

- Do not commit API keys, service account credentials, OAuth client secrets, tokens, or `.env` files.
- Do not store sensitive credentials in Google Drive unless the user explicitly creates a private credentials folder and confirms the intended use.
- Use gitignored local files for secrets when implementation begins.

## Data Handling

- Treat resumes, cover letters, job descriptions, and email content as private personal data.
- Keep only necessary data in local files.
- Avoid duplicating sensitive personal information across unnecessary locations.

## Automation Boundaries

Allowed automation:
- Tracking progress.
- Organizing job leads.
- Analyzing job descriptions.
- Drafting tailored materials.
- Preparing reminders.
- Summarizing email updates.

Not allowed without explicit approval:
- Sending emails.
- Submitting applications.
- Uploading resumes to job sites.
- Changing live profile data.
- Deleting important Drive files or local project files.

## Development Safety

- Start with small scripts and clear documentation.
- Avoid unnecessary frameworks until the project needs them.
- Keep generated files and build outputs out of Git and Google Drive.
