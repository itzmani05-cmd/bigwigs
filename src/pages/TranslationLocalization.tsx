import ServiceDetailHero from "@/components/servicePage/ServiceDetailHero";
import IconGridSection from "@/components/servicePage/IconGridSection";
import ProcessTimeline from "@/components/servicePage/ProcessTimeline";
import FAQAccordion from "@/components/servicePage/FAQAccordion";
import ClosingCta from "@/components/servicePage/ClosingCta";
import FullScreenSection from "@/components/servicePage/FullScreenSection";
import {
  translationHero,
  translationChallenges,
  translationCapabilities,
  translationProcessSteps,
  translationFaq,
  translationBottomCta,
} from "@/components/servicePage/content/translationLocalization";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

export default function TranslationLocalization() {
  useDocumentTitle("Translation & Localization | Bigwigs Technologies");

  return (
    <main className="relative w-full overflow-x-hidden">
      <ServiceDetailHero {...translationHero} />

      <FullScreenSection>
        <IconGridSection
          eyebrow={translationChallenges.eyebrow}
          heading={translationChallenges.heading}
          headerAlign="center"
          align="center"
          items={translationChallenges.items}
          columnsClassName="grid-cols-2 sm:grid-cols-3 lg:grid-cols-6"
        />
      </FullScreenSection>

      <FullScreenSection>
        <IconGridSection
          eyebrow={translationCapabilities.eyebrow}
          heading={translationCapabilities.heading}
          headerAlign="center"
          items={translationCapabilities.items}
          columnsClassName="grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
        />
      </FullScreenSection>

      <FullScreenSection>
        <ProcessTimeline
          eyebrow="How We Work"
          heading="Five Stages. Every Language."
          steps={translationProcessSteps}
          desktopColumnsClassName="grid-cols-5"
        />
      </FullScreenSection>

      <FAQAccordion items={translationFaq} />

      <ClosingCta
        heading={translationBottomCta.heading}
        description={translationBottomCta.description}
        primary={translationBottomCta.primaryAction}
        secondary={translationBottomCta.secondaryAction}
      />
    </main>
  );
}
