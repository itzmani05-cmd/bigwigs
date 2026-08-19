import ServiceDetailHero from "@/components/servicePage/ServiceDetailHero";
import IconGridSection from "@/components/servicePage/IconGridSection";
import ProcessTimeline from "@/components/servicePage/ProcessTimeline";
import FAQAccordion from "@/components/servicePage/FAQAccordion";
import ClosingCta from "@/components/servicePage/ClosingCta";
import FullScreenSection from "@/components/servicePage/FullScreenSection";
import {
  healthcareAiHero,
  healthcareAiChallenges,
  healthcareAiCapabilities,
  healthcareAiProcessSteps,
  healthcareAiFaq,
  healthcareAiBottomCta,
} from "@/components/servicePage/content/healthcareAi";
import SEO from "@/components/seo/SEO";
import { getRouteMeta } from "@/lib/seo/routes";

export default function HealthcareAI() {
  const meta = getRouteMeta("/service/healthcare-ai");

  return (
    <main className="relative w-full overflow-x-hidden">
      <SEO title={meta.title} description={meta.description} canonical={meta.path} />
      <ServiceDetailHero {...healthcareAiHero} />

      <FullScreenSection>
        <IconGridSection
          eyebrow={healthcareAiChallenges.eyebrow}
          heading={healthcareAiChallenges.heading}
          headerAlign="center"
          align="center"
          items={healthcareAiChallenges.items}
          columnsClassName="grid-cols-2 sm:grid-cols-3 lg:grid-cols-6"
        />
      </FullScreenSection>

      <FullScreenSection>
        <IconGridSection
          eyebrow={healthcareAiCapabilities.eyebrow}
          heading={healthcareAiCapabilities.heading}
          headerAlign="center"
          items={healthcareAiCapabilities.items}
          columnsClassName="grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
        />
      </FullScreenSection>

      <FullScreenSection>
        <ProcessTimeline
          eyebrow="How We Work"
          heading="Six Stages. Clinical to Production."
          steps={healthcareAiProcessSteps}
          desktopColumnsClassName="grid-cols-3 xl:grid-cols-6"
        />
      </FullScreenSection>

      <FAQAccordion items={healthcareAiFaq} />

      <ClosingCta
        heading={healthcareAiBottomCta.heading}
        description={healthcareAiBottomCta.description}
        primary={healthcareAiBottomCta.primaryAction}
        secondary={healthcareAiBottomCta.secondaryAction}
      />
    </main>
  );
}
