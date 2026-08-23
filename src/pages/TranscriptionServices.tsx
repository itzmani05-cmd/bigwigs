import ServiceDetailHero from "@/components/servicePage/ServiceDetailHero";
import IconGridSection from "@/components/servicePage/IconGridSection";
import StatsBar from "@/components/servicePage/StatsBar";
import ProcessTimeline from "@/components/servicePage/ProcessTimeline";
import FAQAccordion from "@/components/servicePage/FAQAccordion";
import ClosingCta from "@/components/servicePage/ClosingCta";
import FullScreenSection from "@/components/servicePage/FullScreenSection";
import {
  transcriptionHero,
  transcriptionChallenges,
  transcriptionCapabilities,
  transcriptionProcessSteps,
  transcriptionDifferentiators,
  transcriptionFaq,
  transcriptionBottomCta,
} from "@/components/servicePage/content/transcriptionServices";
import { serviceStats } from "@/components/servicePage/content/shared";
import SEO from "@/components/seo/SEO";
import { getRouteMeta } from "@/lib/seo/routes";

export default function TranscriptionServices() {
  const meta = getRouteMeta("/service/transcription-services");

  return (
    <main className="relative w-full overflow-x-hidden">
      <SEO title={meta.title} description={meta.description} canonical={meta.path} />
      <ServiceDetailHero {...transcriptionHero} category="Services" />

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
        <StatsBar stats={serviceStats} />
      </FullScreenSection>

      <FullScreenSection>
        <ProcessTimeline
          eyebrow="How We Work"
          heading="Six Stages to a Delivered Transcript"
          steps={transcriptionProcessSteps}
          desktopColumnsClassName="grid-cols-3 xl:grid-cols-6"
        />
      </FullScreenSection>

      <FullScreenSection>
        <IconGridSection
          eyebrow={transcriptionDifferentiators.eyebrow}
          heading={transcriptionDifferentiators.heading}
          headerAlign="center"
          align="center"
          items={transcriptionDifferentiators.items}
          columnsClassName="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
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
