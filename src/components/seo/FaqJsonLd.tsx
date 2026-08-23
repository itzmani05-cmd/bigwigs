import { Helmet } from "react-helmet-async";

export interface FaqJsonLdItem {
  question: string;
  answer: string;
}

/** Renders FAQPage structured data for an on-page FAQ list — eligible for
 *  Google's FAQ rich result. Drop this next to any FAQ accordion. */
export default function FaqJsonLd({ items }: { items: FaqJsonLdItem[] }) {
  if (items.length === 0) return null;

  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(data)}</script>
    </Helmet>
  );
}
