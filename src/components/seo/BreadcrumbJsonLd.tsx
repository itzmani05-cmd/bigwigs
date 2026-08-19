import { Helmet } from "react-helmet-async";
import { toAbsoluteUrl } from "@/lib/seo/config";

export interface BreadcrumbItem {
  name: string;
  /** Relative path, e.g. "/case-studies". Omit for the current (last) item. */
  path?: string;
}

/** Mirrors an on-page breadcrumb trail as BreadcrumbList structured data. */
export default function BreadcrumbJsonLd({ items }: { items: BreadcrumbItem[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      ...(item.path ? { item: toAbsoluteUrl(item.path) } : {}),
    })),
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(data)}</script>
    </Helmet>
  );
}
