import ServiceDetailHero from "@/components/servicePage/ServiceDetailHero";
import IconGridSection from "@/components/servicePage/IconGridSection";
import StatsBar from "@/components/servicePage/StatsBar";
import ProcessTimeline from "@/components/servicePage/ProcessTimeline";
import FAQAccordion from "@/components/servicePage/FAQAccordion";
import ClosingCta from "@/components/servicePage/ClosingCta";
import FullScreenSection from "@/components/servicePage/FullScreenSection";
import RelatedWork from "@/components/servicePage/RelatedWork";
import {
  dataQaHero,
  dataQaChallenges,
  dataQaCapabilities,
  dataQaProcessSteps,
  dataQaDifferentiators,
  dataQaFaq,
  dataQaBottomCta,
} from "@/components/servicePage/content/dataQualityAssurance";
import { serviceStats } from "@/components/servicePage/content/shared";
import SEO from "@/components/seo/SEO";
import { getRouteMeta } from "@/lib/seo/routes";

export default function DataQualityAssurance() {
  const meta = getRouteMeta("/service/data-quality-assurance");

  return (
    <main className="relative w-full overflow-x-hidden">
      <SEO title={meta.title} description={meta.description} canonical={meta.path} />
      <ServiceDetailHero {...dataQaHero} category="Services" />

      <FullScreenSection>
        <IconGridSection
          eyebrow={dataQaChallenges.eyebrow}
          heading={dataQaChallenges.heading}
          headerAlign="center"
          align="center"
          items={dataQaChallenges.items}
          columnsClassName="grid-cols-2 sm:grid-cols-3 lg:grid-cols-6"
        />
      </FullScreenSection>

      <FullScreenSection>
        <IconGridSection
          eyebrow={dataQaCapabilities.eyebrow}
          heading={dataQaCapabilities.heading}
          headerAlign="center"
          items={dataQaCapabilities.items}
          columnsClassName="grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
        />
      </FullScreenSection>

      <FullScreenSection>
        <StatsBar stats={serviceStats} />
      </FullScreenSection>

      <FullScreenSection>
        <ProcessTimeline
          eyebrow="How We Work"
          heading="Five Stages. Zero Guesswork."
          steps={dataQaProcessSteps}
          desktopColumnsClassName="grid-cols-3 xl:grid-cols-5"
        />
      </FullScreenSection>

      <FullScreenSection>
        <IconGridSection
          eyebrow={dataQaDifferentiators.eyebrow}
          heading={dataQaDifferentiators.heading}
          headerAlign="center"
          align="center"
          items={dataQaDifferentiators.items}
          columnsClassName="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        />
      </FullScreenSection>

      <RelatedWork
        slugs={["radiology-triage-annotation", "retail-visual-catalog-automation", "smart-city-traffic-intelligence"]}
      />

      <FAQAccordion items={dataQaFaq} />

      <ClosingCta
        heading={dataQaBottomCta.heading}
        description={dataQaBottomCta.description}
        primary={dataQaBottomCta.primaryAction}
        secondary={dataQaBottomCta.secondaryAction}
      />
    </main>
  );
}
