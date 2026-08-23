import ServiceDetailHero from "@/components/servicePage/ServiceDetailHero";
import IconGridSection from "@/components/servicePage/IconGridSection";
import StatsBar from "@/components/servicePage/StatsBar";
import ProcessTimeline from "@/components/servicePage/ProcessTimeline";
import FAQAccordion from "@/components/servicePage/FAQAccordion";
import ClosingCta from "@/components/servicePage/ClosingCta";
import FullScreenSection from "@/components/servicePage/FullScreenSection";
import {
  translationHero,
  translationChallenges,
  translationCapabilities,
  translationProcessSteps,
  translationDifferentiators,
  translationFaq,
  translationBottomCta,
} from "@/components/servicePage/content/translationLocalization";
import { serviceStats } from "@/components/servicePage/content/shared";
import SEO from "@/components/seo/SEO";
import { getRouteMeta } from "@/lib/seo/routes";

export default function TranslationLocalization() {
  const meta = getRouteMeta("/service/translation-localization");

  return (
    <main className="relative w-full overflow-x-hidden">
      <SEO title={meta.title} description={meta.description} canonical={meta.path} />
      <ServiceDetailHero {...translationHero} category="Services" />

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
        <StatsBar stats={serviceStats} />
      </FullScreenSection>

      <FullScreenSection>
        <ProcessTimeline
          eyebrow="How We Work"
          heading="Five Stages. Every Language."
          steps={translationProcessSteps}
          desktopColumnsClassName="grid-cols-3 xl:grid-cols-5"
        />
      </FullScreenSection>

      <FullScreenSection>
        <IconGridSection
          eyebrow={translationDifferentiators.eyebrow}
          heading={translationDifferentiators.heading}
          headerAlign="center"
          align="center"
          items={translationDifferentiators.items}
          columnsClassName="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
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
