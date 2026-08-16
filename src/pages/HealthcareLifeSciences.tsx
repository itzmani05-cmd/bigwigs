import ServiceDetailHero from "@/components/servicePage/ServiceDetailHero";
import IconGridSection from "@/components/servicePage/IconGridSection";
import ProcessTimeline from "@/components/servicePage/ProcessTimeline";
import FAQAccordion from "@/components/servicePage/FAQAccordion";
import ClosingCta from "@/components/servicePage/ClosingCta";
import FullScreenSection from "@/components/servicePage/FullScreenSection";
import {
  healthcareHero,
  healthcareChallenges,
  healthcareCapabilities,
  healthcareProcessSteps,
  healthcareFaq,
  healthcareBottomCta,
} from "@/components/servicePage/content/healthcare";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

export default function HealthcareLifeSciences() {
  useDocumentTitle("Healthcare & Life Sciences | Bigwigs Technologies");

  return (
    <main className="relative w-full overflow-x-hidden">
      <ServiceDetailHero {...healthcareHero} />

      <FullScreenSection>
        <IconGridSection
          eyebrow={healthcareChallenges.eyebrow}
          heading={healthcareChallenges.heading}
          headerAlign="center"
          align="center"
          items={healthcareChallenges.items}
          columnsClassName="grid-cols-2 sm:grid-cols-3 lg:grid-cols-6"
        />
      </FullScreenSection>

      <FullScreenSection>
        <IconGridSection
          eyebrow={healthcareCapabilities.eyebrow}
          heading={healthcareCapabilities.heading}
          headerAlign="center"
          items={healthcareCapabilities.items}
          columnsClassName="grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
        />
      </FullScreenSection>

      <FullScreenSection>
        <ProcessTimeline
          eyebrow="How We Work"
          heading="Six Stages. Clinical to Production."
          steps={healthcareProcessSteps}
          desktopColumnsClassName="grid-cols-3 xl:grid-cols-6"
        />
      </FullScreenSection>

      <FAQAccordion items={healthcareFaq} />

      <ClosingCta
        heading={healthcareBottomCta.heading}
        description={healthcareBottomCta.description}
        primary={healthcareBottomCta.primaryAction}
        secondary={healthcareBottomCta.secondaryAction}
      />
    </main>
  );
}
