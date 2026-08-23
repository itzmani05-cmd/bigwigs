import ServiceDetailHero from "@/components/servicePage/ServiceDetailHero";
import IconGridSection from "@/components/servicePage/IconGridSection";
import StatsBar from "@/components/servicePage/StatsBar";
import ProcessTimeline from "@/components/servicePage/ProcessTimeline";
import FAQAccordion from "@/components/servicePage/FAQAccordion";
import ClosingCta from "@/components/servicePage/ClosingCta";
import FullScreenSection from "@/components/servicePage/FullScreenSection";
import RelatedWork from "@/components/servicePage/RelatedWork";
import {
  annotationHero,
  annotationChallenges,
  annotationCapabilities,
  annotationProcessSteps,
  annotationDifferentiators,
  annotationFaq,
  annotationBottomCta,
} from "@/components/servicePage/content/aiDataAnnotation";
import { serviceStats } from "@/components/servicePage/content/shared";
import SEO from "@/components/seo/SEO";
import { getRouteMeta } from "@/lib/seo/routes";

export default function AiDataAnnotation() {
  const meta = getRouteMeta("/service/ai-data-annotation");

  return (
    <main className="relative w-full overflow-x-hidden">
      <SEO title={meta.title} description={meta.description} canonical={meta.path} />
      <ServiceDetailHero {...annotationHero} category="Services" />

      <FullScreenSection>
        <IconGridSection
          eyebrow={annotationChallenges.eyebrow}
          heading={annotationChallenges.heading}
          headerAlign="center"
          align="center"
          items={annotationChallenges.items}
          columnsClassName="grid-cols-2 sm:grid-cols-3 lg:grid-cols-6"
        />
      </FullScreenSection>

      <FullScreenSection>
        <IconGridSection
          eyebrow={annotationCapabilities.eyebrow}
          heading={annotationCapabilities.heading}
          headerAlign="center"
          items={annotationCapabilities.items}
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
          steps={annotationProcessSteps}
          desktopColumnsClassName="grid-cols-3 xl:grid-cols-6"
        />
      </FullScreenSection>

      <FullScreenSection>
        <IconGridSection
          eyebrow={annotationDifferentiators.eyebrow}
          heading={annotationDifferentiators.heading}
          headerAlign="center"
          align="center"
          items={annotationDifferentiators.items}
          columnsClassName="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        />
      </FullScreenSection>

      <RelatedWork
        slugs={["radiology-triage-annotation", "autonomous-driving-lidar-annotation", "retail-visual-catalog-automation"]}
      />

      <FAQAccordion items={annotationFaq} />

      <ClosingCta
        heading={annotationBottomCta.heading}
        description={annotationBottomCta.description}
        primary={annotationBottomCta.primaryAction}
        secondary={annotationBottomCta.secondaryAction}
      />
    </main>
  );
}
