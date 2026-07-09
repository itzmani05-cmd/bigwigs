---
name: verify
description: Use to verify a code change in bigwigs-tech actually works end-to-end (not just lint/build) — drive the affected route/component in the browser. Starting point mirroring Claude Code's built-in verify skill.
---

# Verify

Starter scaffold for this project's manual verification checklist.

## Steps

1. `npm run dev`, open the affected page.
2. Exercise the golden path and known edge cases for the change.
3. Check browser console + terminal for errors/warnings.
4. Note any regressions in nearby features.
