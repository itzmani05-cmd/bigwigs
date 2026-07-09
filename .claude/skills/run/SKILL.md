
---
name: run
description: Use when asked to run, start, or preview the bigwigs-tech app locally, or to confirm a change works by exercising the dev server (Next.js 16 + React 19 + Tailwind 4).
---

# Run

Launches the local dev server for this Next.js app and verifies a change works end-to-end.

## Steps

1. `npm run dev` (starts Next.js dev server, default http://localhost:3000)
2. Open the relevant route in a browser and exercise the changed feature (golden path + edge cases).
3. Watch the terminal for compile errors/warnings and the browser console for runtime errors.
4. Stop the server when done (Ctrl+C) unless the user wants it left running.

## Notes

- Use `npm run build` first if you need to validate a production build rather than dev mode.
- Fill in project-specific gotchas here as they're discovered (env vars, ports, auth, etc.).
