import ServiceDetailHero from "@/components/servicePage/ServiceDetailHero";
import IconGridSection from "@/components/servicePage/IconGridSection";
import StatsBar from "@/components/servicePage/StatsBar";
import ProcessTimeline from "@/components/servicePage/ProcessTimeline";
import FAQAccordion from "@/components/servicePage/FAQAccordion";
import ClosingCta from "@/components/servicePage/ClosingCta";
import FullScreenSection from "@/components/servicePage/FullScreenSection";
import {
  genAiHero,
  genAiChallenges,
  genAiCapabilities,
  genAiProcessSteps,
  genAiDifferentiators,
  genAiFaq,
  genAiBottomCta,
} from "@/components/servicePage/content/generativeAi";
import { serviceStats } from "@/components/servicePage/content/shared";
import SEO from "@/components/seo/SEO";
import { getRouteMeta } from "@/lib/seo/routes";

export default function GenerativeAi() {
  const meta = getRouteMeta("/service/generative-ai");

  return (
    <main className="relative w-full overflow-x-hidden">
      <SEO title={meta.title} description={meta.description} canonical={meta.path} />
      <ServiceDetailHero {...genAiHero} category="Services" />

      <FullScreenSection>
        <IconGridSection
          eyebrow={genAiChallenges.eyebrow}
          heading={genAiChallenges.heading}
          headerAlign="center"
          align="center"
          items={genAiChallenges.items}
          columnsClassName="grid-cols-2 sm:grid-cols-3 lg:grid-cols-6"
        />
      </FullScreenSection>

      <FullScreenSection>
        <IconGridSection
          eyebrow={genAiCapabilities.eyebrow}
          heading={genAiCapabilities.heading}
          headerAlign="center"
          items={genAiCapabilities.items}
          columnsClassName="grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
        />
      </FullScreenSection>

      <FullScreenSection>
        <StatsBar stats={serviceStats} />
      </FullScreenSection>

      <FullScreenSection>
        <ProcessTimeline
          eyebrow="How We Work"
          heading="Six Stages. No Guesswork."
          steps={genAiProcessSteps}
          desktopColumnsClassName="grid-cols-3 xl:grid-cols-6"
        />
      </FullScreenSection>

      <FullScreenSection>
        <IconGridSection
          eyebrow={genAiDifferentiators.eyebrow}
          heading={genAiDifferentiators.heading}
          headerAlign="center"
          align="center"
          items={genAiDifferentiators.items}
          columnsClassName="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        />
      </FullScreenSection>

      <FAQAccordion items={genAiFaq} />

      <ClosingCta
        heading={genAiBottomCta.heading}
        description={genAiBottomCta.description}
        primary={genAiBottomCta.primaryAction}
        secondary={genAiBottomCta.secondaryAction}
      />
    </main>
  );
}
