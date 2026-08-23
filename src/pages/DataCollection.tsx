import ServiceDetailHero from "@/components/servicePage/ServiceDetailHero";
import IconGridSection from "@/components/servicePage/IconGridSection";
import StatsBar from "@/components/servicePage/StatsBar";
import ProcessTimeline from "@/components/servicePage/ProcessTimeline";
import FAQAccordion from "@/components/servicePage/FAQAccordion";
import ClosingCta from "@/components/servicePage/ClosingCta";
import FullScreenSection from "@/components/servicePage/FullScreenSection";
import RelatedWork from "@/components/servicePage/RelatedWork";
import {
  dataCollectionHero,
  dataCollectionChallenges,
  dataCollectionCapabilities,
  dataCollectionProcessSteps,
  dataCollectionDifferentiators,
  dataCollectionFaq,
  dataCollectionBottomCta,
} from "@/components/servicePage/content/dataCollection";
import { serviceStats } from "@/components/servicePage/content/shared";
import SEO from "@/components/seo/SEO";
import { getRouteMeta } from "@/lib/seo/routes";

export default function DataCollection() {
  const meta = getRouteMeta("/service/data-collection");

  return (
    <main className="relative w-full overflow-x-hidden">
      <SEO title={meta.title} description={meta.description} canonical={meta.path} />
      <ServiceDetailHero {...dataCollectionHero} category="Services" />

      <FullScreenSection>
        <IconGridSection
          eyebrow={dataCollectionChallenges.eyebrow}
          heading={dataCollectionChallenges.heading}
          headerAlign="center"
          align="center"
          items={dataCollectionChallenges.items}
          columnsClassName="grid-cols-2 sm:grid-cols-3 lg:grid-cols-6"
        />
      </FullScreenSection>

      <FullScreenSection>
        <IconGridSection
          eyebrow={dataCollectionCapabilities.eyebrow}
          heading={dataCollectionCapabilities.heading}
          headerAlign="center"
          items={dataCollectionCapabilities.items}
          columnsClassName="grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
        />
      </FullScreenSection>

      <FullScreenSection>
        <StatsBar stats={serviceStats} />
      </FullScreenSection>

      <FullScreenSection>
        <ProcessTimeline
          eyebrow="How We Work"
          heading="Five Stages Between Planning and Delivery"
          steps={dataCollectionProcessSteps}
          desktopColumnsClassName="grid-cols-3 xl:grid-cols-5"
        />
      </FullScreenSection>

      <FullScreenSection>
        <IconGridSection
          eyebrow={dataCollectionDifferentiators.eyebrow}
          heading={dataCollectionDifferentiators.heading}
          headerAlign="center"
          align="center"
          items={dataCollectionDifferentiators.items}
          columnsClassName="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        />
      </FullScreenSection>

      <RelatedWork slugs={["crop-health-monitoring-ai", "autonomous-driving-lidar-annotation"]} />

      <FAQAccordion items={dataCollectionFaq} />

      <ClosingCta
        heading={dataCollectionBottomCta.heading}
        description={dataCollectionBottomCta.description}
        primary={dataCollectionBottomCta.primaryAction}
        secondary={dataCollectionBottomCta.secondaryAction}
      />
    </main>
  );
}
