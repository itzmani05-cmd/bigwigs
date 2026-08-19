/**
 * Centralized SEO configuration. `VITE_SITE_URL` should be set in Vercel's
 * project env vars once the production domain is live — everything else
 * (canonical URLs, OG/Twitter tags, sitemap) derives from this one value.
 *
 * Falls back to the domain implied by the site's own contact emails
 * (vignesh@bigwigstech.com / hr@bigwigstech.com in Footer.tsx) rather than
 * a Vercel preview URL or localhost, so tags stay meaningful even unset.
 */
const FALLBACK_SITE_URL = "https://www.bigwigstech.com";

const rawSiteUrl = import.meta.env.VITE_SITE_URL as string | undefined;

export const SITE_URL = (rawSiteUrl || FALLBACK_SITE_URL).replace(/\/+$/, "");

export const SITE_NAME = "Bigwigs Technologies";

export const SITE_LEGAL_NAME = "Bigwigs Technologies Private Limited";

export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`;

export const DEFAULT_TWITTER_CARD = "summary_large_image" as const;

export const ORGANIZATION_CONTACT = {
  telephone: "+91-93447-69914",
  email: "vignesh@bigwigstech.com",
  address: {
    streetAddress: "2nd Floor, Vijaya Mini Hall, 206, Mathur",
    addressRegion: "Tamil Nadu",
    postalCode: "622515",
    addressCountry: "IN",
  },
};

export function toAbsoluteUrl(path: string): string {
  if (/^https?:\/\//i.test(path)) return path;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}
