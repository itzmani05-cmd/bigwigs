---
name: build
description: Use when asked to build, type-check, or validate a production build of the bigwigs-tech Next.js app before shipping/deploying.
---

# Build

Produces and validates a production build.

## Steps

1. `npm run build` — runs `next build` (includes TypeScript type-checking).
2. Address any type errors or build failures reported.
3. Optionally `npm run start` to smoke-test the production build locally.
