import { Helmet } from "react-helmet-async";
import { DEFAULT_OG_IMAGE, DEFAULT_TWITTER_CARD, SITE_NAME, toAbsoluteUrl } from "@/lib/seo/config";

interface SEOProps {
  title: string;
  description: string;
  /** Relative path, e.g. "/about" — resolved against SITE_URL for canonical/og:url. */
  canonical: string;
  ogTitle?: string;
  ogDescription?: string;
  /** Relative or absolute image URL. Falls back to the site default OG image. */
  ogImage?: string;
  ogType?: "website" | "article";
  twitterCard?: "summary" | "summary_large_image";
  /** Keeps low-value pages (e.g. 404) out of search results without removing them from the site. */
  noIndex?: boolean;
}

export default function SEO({
  title,
  description,
  canonical,
  ogTitle,
  ogDescription,
  ogImage,
  ogType = "website",
  twitterCard = DEFAULT_TWITTER_CARD,
  noIndex = false,
}: SEOProps) {
  const url = toAbsoluteUrl(canonical);
  const image = ogImage ? toAbsoluteUrl(ogImage) : DEFAULT_OG_IMAGE;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta name="robots" content={noIndex ? "noindex, nofollow" : "index, follow"} />

      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={ogTitle ?? title} />
      <meta property="og:description" content={ogDescription ?? description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />

      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={ogTitle ?? title} />
      <meta name="twitter:description" content={ogDescription ?? description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}
