import ServiceDetailHero from "@/components/servicePage/ServiceDetailHero";
import IconGridSection from "@/components/servicePage/IconGridSection";
import StatsBar from "@/components/servicePage/StatsBar";
import ProcessTimeline from "@/components/servicePage/ProcessTimeline";
import FAQAccordion from "@/components/servicePage/FAQAccordion";
import ClosingCta from "@/components/servicePage/ClosingCta";
import FullScreenSection from "@/components/servicePage/FullScreenSection";
import RelatedWork from "@/components/servicePage/RelatedWork";
import {
  healthcareAiHero,
  healthcareAiChallenges,
  healthcareAiCapabilities,
  healthcareAiProcessSteps,
  healthcareAiDifferentiators,
  healthcareAiFaq,
  healthcareAiBottomCta,
} from "@/components/servicePage/content/healthcareAi";
import { serviceStats } from "@/components/servicePage/content/shared";
import SEO from "@/components/seo/SEO";
import { getRouteMeta } from "@/lib/seo/routes";

export default function HealthcareAI() {
  const meta = getRouteMeta("/service/healthcare-ai");

  return (
    <main className="relative w-full overflow-x-hidden">
      <SEO title={meta.title} description={meta.description} canonical={meta.path} />
      <ServiceDetailHero {...healthcareAiHero} category="Services" />

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
        <StatsBar stats={serviceStats} />
      </FullScreenSection>

      <FullScreenSection>
        <ProcessTimeline
          eyebrow="How We Work"
          heading="Six Stages. Clinical to Production."
          steps={healthcareAiProcessSteps}
          desktopColumnsClassName="grid-cols-3 xl:grid-cols-6"
        />
      </FullScreenSection>

      <FullScreenSection>
        <IconGridSection
          eyebrow={healthcareAiDifferentiators.eyebrow}
          heading={healthcareAiDifferentiators.heading}
          headerAlign="center"
          align="center"
          items={healthcareAiDifferentiators.items}
          columnsClassName="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        />
      </FullScreenSection>

      <RelatedWork slugs={["radiology-triage-annotation"]} />

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
