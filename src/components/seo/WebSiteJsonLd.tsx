import { Helmet } from "react-helmet-async";
import { SITE_NAME, SITE_URL } from "@/lib/seo/config";

/** Renders once, site-wide (see App.tsx). No SearchAction — the site has no on-site search. */
export default function WebSiteJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(data)}</script>
    </Helmet>
  );
}
