import ServiceDetailHero from "@/components/servicePage/ServiceDetailHero";
import IconGridSection from "@/components/servicePage/IconGridSection";
import StatsBar from "@/components/servicePage/StatsBar";
import ProcessTimeline from "@/components/servicePage/ProcessTimeline";
import FAQAccordion from "@/components/servicePage/FAQAccordion";
import ClosingCta from "@/components/servicePage/ClosingCta";
import FullScreenSection from "@/components/servicePage/FullScreenSection";
import {
  publishingHero,
  publishingChallenges,
  publishingCapabilities,
  publishingProcessSteps,
  publishingDifferentiators,
  publishingFaq,
  publishingBottomCta,
} from "@/components/servicePage/content/digitalPublishing";
import { serviceStats } from "@/components/servicePage/content/shared";
import SEO from "@/components/seo/SEO";
import { getRouteMeta } from "@/lib/seo/routes";

export default function DigitalPublishing() {
  const meta = getRouteMeta("/service/digital-publishing");

  return (
    <main className="relative w-full overflow-x-hidden">
      <SEO title={meta.title} description={meta.description} canonical={meta.path} />
      <ServiceDetailHero {...publishingHero} category="Services" />

      <FullScreenSection>
        <IconGridSection
          eyebrow={publishingChallenges.eyebrow}
          heading={publishingChallenges.heading}
          headerAlign="center"
          align="center"
          items={publishingChallenges.items}
          columnsClassName="grid-cols-2 sm:grid-cols-3 lg:grid-cols-6"
        />
      </FullScreenSection>

      <FullScreenSection>
        <IconGridSection
          eyebrow={publishingCapabilities.eyebrow}
          heading={publishingCapabilities.heading}
          headerAlign="center"
          items={publishingCapabilities.items}
          columnsClassName="grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
        />
      </FullScreenSection>

      <FullScreenSection>
        <StatsBar stats={serviceStats} />
      </FullScreenSection>

      <FullScreenSection>
        <ProcessTimeline
          eyebrow="How We Work"
          heading="Five Stages. Manuscript to Delivery."
          steps={publishingProcessSteps}
          desktopColumnsClassName="grid-cols-3 xl:grid-cols-5"
        />
      </FullScreenSection>

      <FullScreenSection>
        <IconGridSection
          eyebrow={publishingDifferentiators.eyebrow}
          heading={publishingDifferentiators.heading}
          headerAlign="center"
          align="center"
          items={publishingDifferentiators.items}
          columnsClassName="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        />
      </FullScreenSection>

      <FAQAccordion items={publishingFaq} />

      <ClosingCta
        heading={publishingBottomCta.heading}
        description={publishingBottomCta.description}
        primary={publishingBottomCta.primaryAction}
        secondary={publishingBottomCta.secondaryAction}
      />
    </main>
  );
}
