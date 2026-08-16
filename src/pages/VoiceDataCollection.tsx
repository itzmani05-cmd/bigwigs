import ServiceDetailHero from "@/components/servicePage/ServiceDetailHero";
import IconGridSection from "@/components/servicePage/IconGridSection";
import ProcessTimeline from "@/components/servicePage/ProcessTimeline";
import FAQAccordion from "@/components/servicePage/FAQAccordion";
import ClosingCta from "@/components/servicePage/ClosingCta";
import FullScreenSection from "@/components/servicePage/FullScreenSection";
import {
  voiceHero,
  voiceChallenges,
  voiceCapabilities,
  voiceProcessSteps,
  voiceFaq,
  voiceBottomCta,
} from "@/components/servicePage/content/voiceDataCollection";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

export default function VoiceDataCollection() {
  useDocumentTitle("Voice & Speech Data Collection | Bigwigs Technologies");

  return (
    <main className="relative w-full overflow-x-hidden">
      <ServiceDetailHero {...voiceHero} />

      <FullScreenSection>
        <IconGridSection
          eyebrow={voiceChallenges.eyebrow}
          heading={voiceChallenges.heading}
          headerAlign="center"
          align="center"
          items={voiceChallenges.items}
          columnsClassName="grid-cols-2 sm:grid-cols-3 lg:grid-cols-6"
        />
      </FullScreenSection>

      <FullScreenSection>
        <IconGridSection
          eyebrow={voiceCapabilities.eyebrow}
          heading={voiceCapabilities.heading}
          headerAlign="center"
          items={voiceCapabilities.items}
          columnsClassName="grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
        />
      </FullScreenSection>

      <FullScreenSection>
        <ProcessTimeline
          eyebrow="How We Work"
          heading="Six Stages. No Guesswork."
          steps={voiceProcessSteps}
          desktopColumnsClassName="grid-cols-3 xl:grid-cols-6"
        />
      </FullScreenSection>

      <FAQAccordion items={voiceFaq} />

      <ClosingCta
        heading={voiceBottomCta.heading}
        description={voiceBottomCta.description}
        primary={voiceBottomCta.primaryAction}
        secondary={voiceBottomCta.secondaryAction}
      />
    </main>
  );
}
