import ServiceDetailHero from "@/components/servicePage/ServiceDetailHero";
import IconGridSection from "@/components/servicePage/IconGridSection";
import ProcessTimeline from "@/components/servicePage/ProcessTimeline";
import FAQAccordion from "@/components/servicePage/FAQAccordion";
import ClosingCta from "@/components/servicePage/ClosingCta";
import FullScreenSection from "@/components/servicePage/FullScreenSection";
import {
  automotiveHero,
  automotiveChallenges,
  automotiveCapabilities,
  automotiveProcessSteps,
  automotiveFaq,
  automotiveBottomCta,
} from "@/components/servicePage/content/automotive";
import SEO from "@/components/seo/SEO";
import { getRouteMeta } from "@/lib/seo/routes";

export default function AutomotiveMobility() {
  const meta = getRouteMeta("/industries/automotive-mobility");

  return (
    <main className="relative w-full overflow-x-hidden">
      <SEO title={meta.title} description={meta.description} canonical={meta.path} />
      <ServiceDetailHero {...automotiveHero} category="Industries" />

      <FullScreenSection>
        <IconGridSection
          eyebrow={automotiveChallenges.eyebrow}
          heading={automotiveChallenges.heading}
          headerAlign="center"
          align="center"
          items={automotiveChallenges.items}
          columnsClassName="grid-cols-2 sm:grid-cols-3 lg:grid-cols-6"
        />
      </FullScreenSection>

      <FullScreenSection>
        <IconGridSection
          eyebrow={automotiveCapabilities.eyebrow}
          heading={automotiveCapabilities.heading}
          headerAlign="center"
          items={automotiveCapabilities.items}
          columnsClassName="grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
        />
      </FullScreenSection>

      <FullScreenSection>
        <ProcessTimeline
          eyebrow="How We Work"
          heading="Five Stages. No Guesswork."
          steps={automotiveProcessSteps}
          desktopColumnsClassName="grid-cols-3 xl:grid-cols-5"
        />
      </FullScreenSection>

      <FAQAccordion items={automotiveFaq} />

      <ClosingCta
        heading={automotiveBottomCta.heading}
        description={automotiveBottomCta.description}
        primary={automotiveBottomCta.primaryAction}
        secondary={automotiveBottomCta.secondaryAction}
      />
    </main>
  );
}
