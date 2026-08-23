/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Production site origin, e.g. https://www.bigwigstech.com — set in Vercel project env vars. */
  readonly VITE_SITE_URL?: string;
  /** ISO date-time (with timezone offset) the site goes live, e.g. "2026-09-01T09:00:00+05:30".
   *  Until this moment, LaunchGate shows a countdown instead of the site. Unset or in the past = site opens immediately. */
  readonly VITE_LAUNCH_AT?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
