import ServiceDetailHero from "@/components/servicePage/ServiceDetailHero";
import IconGridSection from "@/components/servicePage/IconGridSection";
import ProcessTimeline from "@/components/servicePage/ProcessTimeline";
import FAQAccordion from "@/components/servicePage/FAQAccordion";
import ClosingCta from "@/components/servicePage/ClosingCta";
import FullScreenSection from "@/components/servicePage/FullScreenSection";
import {
  industryPublishingHero,
  industryPublishingChallenges,
  industryPublishingCapabilities,
  industryPublishingProcessSteps,
  industryPublishingFaq,
  industryPublishingBottomCta,
} from "@/components/servicePage/content/industryPublishing";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

export default function PublishingMediaSolutions() {
  useDocumentTitle("Publishing & Media Solutions | Bigwigs Technologies");

  return (
    <main className="relative w-full overflow-x-hidden">
      <ServiceDetailHero {...industryPublishingHero} />

      <FullScreenSection>
        <IconGridSection
          eyebrow={industryPublishingChallenges.eyebrow}
          heading={industryPublishingChallenges.heading}
          headerAlign="center"
          align="center"
          items={industryPublishingChallenges.items}
          columnsClassName="grid-cols-2 sm:grid-cols-3 lg:grid-cols-6"
        />
      </FullScreenSection>

      <FullScreenSection>
        <IconGridSection
          eyebrow={industryPublishingCapabilities.eyebrow}
          heading={industryPublishingCapabilities.heading}
          headerAlign="center"
          items={industryPublishingCapabilities.items}
          columnsClassName="grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
        />
      </FullScreenSection>

      <FullScreenSection>
        <ProcessTimeline
          eyebrow="How We Work"
          heading="Five Stages. Discovery to Optimization."
          steps={industryPublishingProcessSteps}
          desktopColumnsClassName="grid-cols-5"
        />
      </FullScreenSection>

      <FAQAccordion items={industryPublishingFaq} />

      <ClosingCta
        heading={industryPublishingBottomCta.heading}
        description={industryPublishingBottomCta.description}
        primary={industryPublishingBottomCta.primaryAction}
        secondary={industryPublishingBottomCta.secondaryAction}
      />
    </main>
  );
}
