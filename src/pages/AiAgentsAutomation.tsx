import ServiceDetailHero from "@/components/servicePage/ServiceDetailHero";
import IconGridSection from "@/components/servicePage/IconGridSection";
import StatsBar from "@/components/servicePage/StatsBar";
import ProcessTimeline from "@/components/servicePage/ProcessTimeline";
import FAQAccordion from "@/components/servicePage/FAQAccordion";
import ClosingCta from "@/components/servicePage/ClosingCta";
import FullScreenSection from "@/components/servicePage/FullScreenSection";
import {
  agentsHero,
  agentsChallenges,
  agentsCapabilities,
  agentsProcessSteps,
  agentsDifferentiators,
  agentsFaq,
  agentsBottomCta,
} from "@/components/servicePage/content/aiAgentsAutomation";
import { serviceStats } from "@/components/servicePage/content/shared";
import SEO from "@/components/seo/SEO";
import { getRouteMeta } from "@/lib/seo/routes";

export default function AiAgentsAutomation() {
  const meta = getRouteMeta("/service/ai-agents-automation");

  return (
    <main className="relative w-full overflow-x-hidden">
      <SEO title={meta.title} description={meta.description} canonical={meta.path} />
      <ServiceDetailHero {...agentsHero} category="Services" />

      <FullScreenSection>
        <IconGridSection
          eyebrow={agentsChallenges.eyebrow}
          heading={agentsChallenges.heading}
          headerAlign="center"
          align="center"
          items={agentsChallenges.items}
          columnsClassName="grid-cols-2 sm:grid-cols-3 lg:grid-cols-6"
        />
      </FullScreenSection>

      <FullScreenSection>
        <IconGridSection
          eyebrow={agentsCapabilities.eyebrow}
          heading={agentsCapabilities.heading}
          headerAlign="center"
          items={agentsCapabilities.items}
          columnsClassName="grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
        />
      </FullScreenSection>

      <FullScreenSection>
        <StatsBar stats={serviceStats} />
      </FullScreenSection>

      <FullScreenSection>
        <ProcessTimeline
          eyebrow="How We Work"
          heading="Six Stages to a Production AI Workforce"
          steps={agentsProcessSteps}
          desktopColumnsClassName="grid-cols-3 xl:grid-cols-6"
        />
      </FullScreenSection>

      <FullScreenSection>
        <IconGridSection
          eyebrow={agentsDifferentiators.eyebrow}
          heading={agentsDifferentiators.heading}
          headerAlign="center"
          align="center"
          items={agentsDifferentiators.items}
          columnsClassName="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        />
      </FullScreenSection>

      <FAQAccordion items={agentsFaq} />

      <ClosingCta
        heading={agentsBottomCta.heading}
        description={agentsBottomCta.description}
        primary={agentsBottomCta.primaryAction}
        secondary={agentsBottomCta.secondaryAction}
      />
    </main>
  );
}
