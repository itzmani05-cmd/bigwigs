import ServiceDetailHero from "@/components/servicePage/ServiceDetailHero";
import IconGridSection from "@/components/servicePage/IconGridSection";
import ProcessTimeline from "@/components/servicePage/ProcessTimeline";
import FAQAccordion from "@/components/servicePage/FAQAccordion";
import ClosingCta from "@/components/servicePage/ClosingCta";
import FullScreenSection from "@/components/servicePage/FullScreenSection";
import {
  agentsHero,
  agentsChallenges,
  agentsCapabilities,
  agentsProcessSteps,
  agentsFaq,
  agentsBottomCta,
} from "@/components/servicePage/content/aiAgentsAutomation";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

export default function AiAgentsAutomation() {
  useDocumentTitle("AI Agents & Intelligent Automation | Bigwigs Technologies");

  return (
    <main className="relative w-full overflow-x-hidden">
      <ServiceDetailHero {...agentsHero} />

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
        <ProcessTimeline
          eyebrow="How We Work"
          heading="Six Stages to a Production AI Workforce"
          steps={agentsProcessSteps}
          desktopColumnsClassName="grid-cols-3 xl:grid-cols-6"
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
