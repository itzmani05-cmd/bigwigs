/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Production site origin, e.g. https://www.bigwigstech.com — set in Vercel project env vars. */
  readonly VITE_SITE_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
