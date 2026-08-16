import ServiceDetailHero from "@/components/servicePage/ServiceDetailHero";
import IconGridSection from "@/components/servicePage/IconGridSection";
import ProcessTimeline from "@/components/servicePage/ProcessTimeline";
import FAQAccordion from "@/components/servicePage/FAQAccordion";
import ClosingCta from "@/components/servicePage/ClosingCta";
import FullScreenSection from "@/components/servicePage/FullScreenSection";
import {
  governmentHero,
  governmentChallenges,
  governmentCapabilities,
  governmentProcessSteps,
  governmentFaq,
  governmentBottomCta,
} from "@/components/servicePage/content/government";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

export default function GovernmentPublicSectorSolutions() {
  useDocumentTitle("Government & Public Sector Solutions | Bigwigs Technologies");

  return (
    <main className="relative w-full overflow-x-hidden">
      <ServiceDetailHero {...governmentHero} />

      <FullScreenSection>
        <IconGridSection
          eyebrow={governmentChallenges.eyebrow}
          heading={governmentChallenges.heading}
          headerAlign="center"
          align="center"
          items={governmentChallenges.items}
          columnsClassName="grid-cols-2 sm:grid-cols-3 lg:grid-cols-6"
        />
      </FullScreenSection>

      <FullScreenSection>
        <IconGridSection
          eyebrow={governmentCapabilities.eyebrow}
          heading={governmentCapabilities.heading}
          headerAlign="center"
          items={governmentCapabilities.items}
          columnsClassName="grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
        />
      </FullScreenSection>

      <FullScreenSection>
        <ProcessTimeline
          eyebrow="How We Work"
          heading="Five Stages. No Guesswork."
          steps={governmentProcessSteps}
          desktopColumnsClassName="grid-cols-5"
        />
      </FullScreenSection>

      <FAQAccordion items={governmentFaq} />

      <ClosingCta
        heading={governmentBottomCta.heading}
        description={governmentBottomCta.description}
        primary={governmentBottomCta.primaryAction}
        secondary={governmentBottomCta.secondaryAction}
      />
    </main>
  );
}
