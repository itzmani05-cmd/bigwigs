import { Globe2 } from "lucide-react";
import IndustriesHero from "@/components/industries/IndustriesHero";
import IndustriesGrid from "@/components/industries/IndustriesGrid";
import ProcessTimeline from "@/components/servicePage/ProcessTimeline";
import FAQAccordion from "@/components/servicePage/FAQAccordion";
import CTASection from "@/components/ui/CTASection";
import { industriesProcessSteps } from "@/components/industries/industriesProcessData";
import { industriesFaqItems } from "@/components/industries/industriesFaqData";
import SEO from "@/components/seo/SEO";
import { getRouteMeta } from "@/lib/seo/routes";

export default function Industries() {
  const meta = getRouteMeta("/industries");

  return (
    <main className="relative w-full overflow-x-hidden">
      <SEO title={meta.title} description={meta.description} canonical={meta.path} />
      <IndustriesHero />
      <IndustriesGrid />
      <ProcessTimeline
        eyebrow="How We Work"
        heading="Six Stages. Every Industry."
        steps={industriesProcessSteps}
        desktopColumnsClassName="grid-cols-3 xl:grid-cols-6"
      />
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
