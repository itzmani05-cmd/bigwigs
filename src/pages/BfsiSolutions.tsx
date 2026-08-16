import ServiceDetailHero from "@/components/servicePage/ServiceDetailHero";
import IconGridSection from "@/components/servicePage/IconGridSection";
import ProcessTimeline from "@/components/servicePage/ProcessTimeline";
import FAQAccordion from "@/components/servicePage/FAQAccordion";
import ClosingCta from "@/components/servicePage/ClosingCta";
import FullScreenSection from "@/components/servicePage/FullScreenSection";
import {
  bfsiHero,
  bfsiChallenges,
  bfsiCapabilities,
  bfsiProcessSteps,
  bfsiFaq,
  bfsiBottomCta,
} from "@/components/servicePage/content/bfsi";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

export default function BfsiSolutions() {
  useDocumentTitle("Banking, Financial Services & Insurance | Bigwigs Technologies");

  return (
    <main className="relative w-full overflow-x-hidden">
      <ServiceDetailHero {...bfsiHero} />

      <FullScreenSection>
        <IconGridSection
          eyebrow={bfsiChallenges.eyebrow}
          heading={bfsiChallenges.heading}
          headerAlign="center"
          align="center"
          items={bfsiChallenges.items}
          columnsClassName="grid-cols-2 sm:grid-cols-3 lg:grid-cols-6"
        />
      </FullScreenSection>

      <FullScreenSection>
        <IconGridSection
          eyebrow={bfsiCapabilities.eyebrow}
          heading={bfsiCapabilities.heading}
          headerAlign="center"
          items={bfsiCapabilities.items}
          columnsClassName="grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
        />
      </FullScreenSection>

      <FullScreenSection>
        <ProcessTimeline
          eyebrow="How We Work"
          heading="Six Stages. No Guesswork."
          steps={bfsiProcessSteps}
          desktopColumnsClassName="grid-cols-3 xl:grid-cols-6"
        />
      </FullScreenSection>

      <FAQAccordion items={bfsiFaq} />

      <ClosingCta
        heading={bfsiBottomCta.heading}
        description={bfsiBottomCta.description}
        primary={bfsiBottomCta.primaryAction}
        secondary={bfsiBottomCta.secondaryAction}
      />
    </main>
  );
}
