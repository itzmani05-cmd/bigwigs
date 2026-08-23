import { Globe2 } from "lucide-react";
import IndustriesHero from "@/components/industries/IndustriesHero";
import IndustriesGrid from "@/components/industries/IndustriesGrid";
import IndustriesProcessTimeline from "@/components/industries/IndustriesProcessTimeline";
import FAQAccordion from "@/components/servicePage/FAQAccordion";
import CTASection from "@/components/ui/CTASection";
import { industriesFaqItems } from "@/components/industries/industriesFaqData";
import SEO from "@/components/seo/SEO";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import { getRouteMeta } from "@/lib/seo/routes";

export default function Industries() {
  const meta = getRouteMeta("/industries");

  return (
    <main className="relative w-full overflow-x-hidden">
      <SEO title={meta.title} description={meta.description} canonical={meta.path} />
      <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }, { name: "Industries" }]} />
      <IndustriesHero />
      <IndustriesGrid />
      <IndustriesProcessTimeline />
      <FAQAccordion items={industriesFaqItems} />

      <CTASection
        icon={Globe2}
        heading="Transform Your Industry With AI"
        description="Partner with Bigwigs Technologies to build intelligent, scalable, and secure AI solutions tailored for your business."
        primaryAction={{ label: "Get Started", href: "/demo" }}
        secondaryAction={{ label: "Talk To Experts", href: "/contact", showArrow: true }}
      />
    </main>
  );
}
