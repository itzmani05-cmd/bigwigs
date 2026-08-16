import ServiceDetailHero from "@/components/servicePage/ServiceDetailHero";
import IconGridSection from "@/components/servicePage/IconGridSection";
import ProcessTimeline from "@/components/servicePage/ProcessTimeline";
import FAQAccordion from "@/components/servicePage/FAQAccordion";
import ClosingCta from "@/components/servicePage/ClosingCta";
import FullScreenSection from "@/components/servicePage/FullScreenSection";
import {
  retailHero,
  retailChallenges,
  retailCapabilities,
  retailProcessSteps,
  retailFaq,
  retailBottomCta,
} from "@/components/servicePage/content/retail";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

export default function RetailEcommerce() {
  useDocumentTitle("Retail & E-Commerce Solutions | Bigwigs Technologies");

  return (
    <main className="relative w-full overflow-x-hidden">
      <ServiceDetailHero {...retailHero} />

      <FullScreenSection>
        <IconGridSection
          eyebrow={retailChallenges.eyebrow}
          heading={retailChallenges.heading}
          headerAlign="center"
          align="center"
          items={retailChallenges.items}
          columnsClassName="grid-cols-2 sm:grid-cols-3 lg:grid-cols-6"
        />
      </FullScreenSection>

      <FullScreenSection>
        <IconGridSection
          eyebrow={retailCapabilities.eyebrow}
          heading={retailCapabilities.heading}
          headerAlign="center"
          items={retailCapabilities.items}
          columnsClassName="grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
        />
      </FullScreenSection>

      <FullScreenSection>
        <ProcessTimeline
          eyebrow="How We Work"
          heading="Five Stages. No Guesswork."
          steps={retailProcessSteps}
          desktopColumnsClassName="grid-cols-5"
        />
      </FullScreenSection>

      <FAQAccordion items={retailFaq} />

      <ClosingCta
        heading={retailBottomCta.heading}
        description={retailBottomCta.description}
        primary={retailBottomCta.primaryAction}
        secondary={retailBottomCta.secondaryAction}
      />
    </main>
  );
}
