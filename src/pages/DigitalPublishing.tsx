import ServiceDetailHero from "@/components/servicePage/ServiceDetailHero";
import IconGridSection from "@/components/servicePage/IconGridSection";
import ProcessTimeline from "@/components/servicePage/ProcessTimeline";
import FAQAccordion from "@/components/servicePage/FAQAccordion";
import ClosingCta from "@/components/servicePage/ClosingCta";
import FullScreenSection from "@/components/servicePage/FullScreenSection";
import {
  publishingHero,
  publishingChallenges,
  publishingCapabilities,
  publishingProcessSteps,
  publishingFaq,
  publishingBottomCta,
} from "@/components/servicePage/content/digitalPublishing";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

export default function DigitalPublishing() {
  useDocumentTitle("Digital Publishing Services | Bigwigs Technologies");

  return (
    <main className="relative w-full overflow-x-hidden">
      <ServiceDetailHero {...publishingHero} />

      <FullScreenSection>
        <IconGridSection
          eyebrow={publishingChallenges.eyebrow}
          heading={publishingChallenges.heading}
          headerAlign="center"
          align="center"
          items={publishingChallenges.items}
          columnsClassName="grid-cols-2 sm:grid-cols-3 lg:grid-cols-6"
        />
      </FullScreenSection>

      <FullScreenSection>
        <IconGridSection
          eyebrow={publishingCapabilities.eyebrow}
          heading={publishingCapabilities.heading}
          headerAlign="center"
          items={publishingCapabilities.items}
          columnsClassName="grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
        />
      </FullScreenSection>

      <FullScreenSection>
        <ProcessTimeline
          eyebrow="How We Work"
          heading="Five Stages. Manuscript to Delivery."
          steps={publishingProcessSteps}
          desktopColumnsClassName="grid-cols-5"
        />
      </FullScreenSection>

      <FAQAccordion items={publishingFaq} />

      <ClosingCta
        heading={publishingBottomCta.heading}
        description={publishingBottomCta.description}
        primary={publishingBottomCta.primaryAction}
        secondary={publishingBottomCta.secondaryAction}
      />
    </main>
  );
}
