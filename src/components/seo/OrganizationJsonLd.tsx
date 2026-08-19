import { Helmet } from "react-helmet-async";
import { ORGANIZATION_CONTACT, SITE_LEGAL_NAME, SITE_NAME, SITE_URL } from "@/lib/seo/config";

/**
 * Renders once, site-wide (see App.tsx). Fields are sourced from the real
 * contact details in Footer.tsx — no placeholder/fabricated data. Social
 * profile links are omitted because Footer.tsx's social icons currently
 * point to "#" placeholders, not real profiles.
 */
export default function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    legalName: SITE_LEGAL_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/assets/Logo.png`,
    telephone: ORGANIZATION_CONTACT.telephone,
    email: ORGANIZATION_CONTACT.email,
    address: {
      "@type": "PostalAddress",
      ...ORGANIZATION_CONTACT.address,
    },
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(data)}</script>
    </Helmet>
  );
}
