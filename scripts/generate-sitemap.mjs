// @ts-check
/**
 * Generates public/sitemap.xml from the same route registry the app uses
 * for per-page SEO metadata (src/lib/seo/routes.ts), so the sitemap can't
 * drift from what's actually in App.tsx's <Routes>.
 *
 * Runs via `tsx` (not plain node) so it can import the .ts registry directly
 * — but it deliberately does NOT import caseStudiesData.ts, because that
 * file pulls in PNG/JPG assets via Vite-only `import x from "*.png"` syntax
 * that only Vite's asset plugin can resolve. The 6 case-study slugs below
 * are mirrored by hand; update this list if a case study is added, removed,
 * or renamed in src/components/caseStudies/caseStudiesData.ts.
 */
import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
import { ROUTES } from "../src/lib/seo/routes.ts";

const __dirname = dirname(fileURLToPath(import.meta.url));

// Keep in sync with config.ts's FALLBACK_SITE_URL — see note there.
const SITE_URL = (process.env.VITE_SITE_URL || "https://www.bigwigstech.com").replace(/\/+$/, "");

/** Mirrors caseStudiesData.ts — see file header comment. */
const CASE_STUDY_SLUGS = [
  "radiology-triage-annotation",
  "autonomous-driving-lidar-annotation",
  "retail-visual-catalog-automation",
  "fraud-detection-document-intelligence",
  "crop-health-monitoring-ai",
  "smart-city-traffic-intelligence",
];

const today = new Date().toISOString().slice(0, 10);

/** @type {{ loc: string; priority: number }[]} */
const urls = [
  ...ROUTES.map((r) => ({ loc: r.path, priority: r.priority ?? 0.5 })),
  ...CASE_STUDY_SLUGS.map((slug) => ({ loc: `/case-studies/${slug}`, priority: 0.6 })),
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${SITE_URL}${u.loc}</loc>
    <lastmod>${today}</lastmod>
    <priority>${u.priority.toFixed(1)}</priority>
  </url>`
  )
  .join("\n")}
</urlset>
`;

const outPath = resolve(__dirname, "../public/sitemap.xml");
writeFileSync(outPath, xml, "utf-8");
console.log(`Wrote ${urls.length} URLs to public/sitemap.xml (SITE_URL=${SITE_URL})`);
