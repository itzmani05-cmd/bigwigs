import ServiceDetailHero from "@/components/servicePage/ServiceDetailHero";
import IconGridSection from "@/components/servicePage/IconGridSection";
import ProcessTimeline from "@/components/servicePage/ProcessTimeline";
import FAQAccordion from "@/components/servicePage/FAQAccordion";
import ClosingCta from "@/components/servicePage/ClosingCta";
import FullScreenSection from "@/components/servicePage/FullScreenSection";
import {
  softwareHero,
  softwareChallenges,
  softwareCapabilities,
  softwareProcessSteps,
  softwareFaq,
  softwareBottomCta,
} from "@/components/servicePage/content/softwareDevelopment";
import SEO from "@/components/seo/SEO";
import { getRouteMeta } from "@/lib/seo/routes";

export default function SoftwareDevelopment() {
  const meta = getRouteMeta("/service/software-development");

  return (
    <main className="relative w-full overflow-x-hidden">
      <SEO title={meta.title} description={meta.description} canonical={meta.path} />
      <ServiceDetailHero {...softwareHero} />

      <FullScreenSection>
        <IconGridSection
          eyebrow={softwareChallenges.eyebrow}
          heading={softwareChallenges.heading}
          headerAlign="center"
          align="center"
          items={softwareChallenges.items}
          columnsClassName="grid-cols-2 sm:grid-cols-3 lg:grid-cols-6"
        />
      </FullScreenSection>

      <FullScreenSection>
        <IconGridSection
          eyebrow={softwareCapabilities.eyebrow}
          heading={softwareCapabilities.heading}
          headerAlign="center"
          items={softwareCapabilities.items}
          columnsClassName="grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
        />
      </FullScreenSection>

      <FullScreenSection>
        <ProcessTimeline
          eyebrow="How We Work"
          heading="Six Stages. No Guesswork."
          steps={softwareProcessSteps}
          desktopColumnsClassName="grid-cols-3 xl:grid-cols-6"
        />
      </FullScreenSection>

      <FAQAccordion items={softwareFaq} />

      <ClosingCta
        heading={softwareBottomCta.heading}
        description={softwareBottomCta.description}
        primary={softwareBottomCta.primaryAction}
        secondary={softwareBottomCta.secondaryAction}
      />
    </main>
  );
}
