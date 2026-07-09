---
name: lint
description: Use when asked to lint, check code style, or fix eslint issues in the bigwigs-tech Next.js project.
---

# Lint

Runs ESLint (flat config, `eslint.config.mjs`, `eslint-config-next`) over the project.

## Steps

1. `npm run lint` — runs `eslint`.
2. Fix reported issues; re-run to confirm a clean pass.
3. For auto-fixable issues, prefer `npx eslint --fix <path>` on the specific files rather than a blanket fix across the repo.
