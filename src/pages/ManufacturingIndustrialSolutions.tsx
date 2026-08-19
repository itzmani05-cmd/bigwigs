import ServiceDetailHero from "@/components/servicePage/ServiceDetailHero";
import IconGridSection from "@/components/servicePage/IconGridSection";
import ProcessTimeline from "@/components/servicePage/ProcessTimeline";
import FAQAccordion from "@/components/servicePage/FAQAccordion";
import ClosingCta from "@/components/servicePage/ClosingCta";
import FullScreenSection from "@/components/servicePage/FullScreenSection";
import {
  manufacturingHero,
  manufacturingChallenges,
  manufacturingCapabilities,
  manufacturingProcessSteps,
  manufacturingFaq,
  manufacturingBottomCta,
} from "@/components/servicePage/content/manufacturing";
import SEO from "@/components/seo/SEO";
import { getRouteMeta } from "@/lib/seo/routes";

export default function ManufacturingIndustrialSolutions() {
  const meta = getRouteMeta("/industries/manufacturing-industrial-solutions");

  return (
    <main className="relative w-full overflow-x-hidden">
      <SEO title={meta.title} description={meta.description} canonical={meta.path} />
      <ServiceDetailHero {...manufacturingHero} />

      <FullScreenSection>
        <IconGridSection
          eyebrow={manufacturingChallenges.eyebrow}
          heading={manufacturingChallenges.heading}
          headerAlign="center"
          align="center"
          items={manufacturingChallenges.items}
          columnsClassName="grid-cols-2 sm:grid-cols-3 lg:grid-cols-6"
        />
      </FullScreenSection>

      <FullScreenSection>
        <IconGridSection
          eyebrow={manufacturingCapabilities.eyebrow}
          heading={manufacturingCapabilities.heading}
          headerAlign="center"
          items={manufacturingCapabilities.items}
          columnsClassName="grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
        />
      </FullScreenSection>

      <FullScreenSection>
        <ProcessTimeline
          eyebrow="How We Work"
          heading="Five Stages. No Guesswork."
          steps={manufacturingProcessSteps}
          desktopColumnsClassName="grid-cols-5"
        />
      </FullScreenSection>

      <FAQAccordion items={manufacturingFaq} />

      <ClosingCta
        heading={manufacturingBottomCta.heading}
        description={manufacturingBottomCta.description}
        primary={manufacturingBottomCta.primaryAction}
        secondary={manufacturingBottomCta.secondaryAction}
      />
    </main>
  );
}
