import ServiceDetailHero from "@/components/servicePage/ServiceDetailHero";
import IconGridSection from "@/components/servicePage/IconGridSection";
import ProcessTimeline from "@/components/servicePage/ProcessTimeline";
import FAQAccordion from "@/components/servicePage/FAQAccordion";
import ClosingCta from "@/components/servicePage/ClosingCta";
import FullScreenSection from "@/components/servicePage/FullScreenSection";
import {
  genAiHero,
  genAiChallenges,
  genAiCapabilities,
  genAiProcessSteps,
  genAiFaq,
  genAiBottomCta,
} from "@/components/servicePage/content/generativeAi";
import SEO from "@/components/seo/SEO";
import { getRouteMeta } from "@/lib/seo/routes";

export default function GenerativeAi() {
  const meta = getRouteMeta("/service/generative-ai");

  return (
    <main className="relative w-full overflow-x-hidden">
      <SEO title={meta.title} description={meta.description} canonical={meta.path} />
      <ServiceDetailHero {...genAiHero} />

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
        <ProcessTimeline
          eyebrow="How We Work"
          heading="Six Stages. No Guesswork."
          steps={genAiProcessSteps}
          desktopColumnsClassName="grid-cols-3 xl:grid-cols-6"
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
