import ServiceDetailHero from "@/components/servicePage/ServiceDetailHero";
import IconGridSection from "@/components/servicePage/IconGridSection";
import ProcessTimeline from "@/components/servicePage/ProcessTimeline";
import FAQAccordion from "@/components/servicePage/FAQAccordion";
import ClosingCta from "@/components/servicePage/ClosingCta";
import FullScreenSection from "@/components/servicePage/FullScreenSection";
import {
  transcriptionHero,
  transcriptionChallenges,
  transcriptionCapabilities,
  transcriptionProcessSteps,
  transcriptionFaq,
  transcriptionBottomCta,
} from "@/components/servicePage/content/transcriptionServices";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

export default function TranscriptionServices() {
  useDocumentTitle("Transcription Services | Bigwigs Technologies");

  return (
    <main className="relative w-full overflow-x-hidden">
      <ServiceDetailHero {...transcriptionHero} />

      <FullScreenSection>
        <IconGridSection
          eyebrow={transcriptionChallenges.eyebrow}
          heading={transcriptionChallenges.heading}
          headerAlign="center"
          align="center"
          items={transcriptionChallenges.items}
          columnsClassName="grid-cols-2 sm:grid-cols-3 lg:grid-cols-6"
        />
      </FullScreenSection>

      <FullScreenSection>
        <IconGridSection
          eyebrow={transcriptionCapabilities.eyebrow}
          heading={transcriptionCapabilities.heading}
          headerAlign="center"
          items={transcriptionCapabilities.items}
          columnsClassName="grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
        />
      </FullScreenSection>

      <FullScreenSection>
        <ProcessTimeline
          eyebrow="How We Work"
          heading="Six Stages to a Delivered Transcript"
          steps={transcriptionProcessSteps}
          desktopColumnsClassName="grid-cols-3 xl:grid-cols-6"
        />
      </FullScreenSection>

      <FAQAccordion items={transcriptionFaq} />

      <ClosingCta
        heading={transcriptionBottomCta.heading}
        description={transcriptionBottomCta.description}
        primary={transcriptionBottomCta.primaryAction}
        secondary={transcriptionBottomCta.secondaryAction}
      />
    </main>
  );
}
