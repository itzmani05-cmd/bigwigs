import ServiceDetailHero from "@/components/servicePage/ServiceDetailHero";
import IconGridSection from "@/components/servicePage/IconGridSection";
import ProcessTimeline from "@/components/servicePage/ProcessTimeline";
import FAQAccordion from "@/components/servicePage/FAQAccordion";
import ClosingCta from "@/components/servicePage/ClosingCta";
import FullScreenSection from "@/components/servicePage/FullScreenSection";
import {
  educationHero,
  educationChallenges,
  educationCapabilities,
  educationProcessSteps,
  educationFaq,
  educationBottomCta,
} from "@/components/servicePage/content/education";
import SEO from "@/components/seo/SEO";
import { getRouteMeta } from "@/lib/seo/routes";

export default function EducationElearningSolutions() {
  const meta = getRouteMeta("/industries/education-elearning-solutions");

  return (
    <main className="relative w-full overflow-x-hidden">
      <SEO title={meta.title} description={meta.description} canonical={meta.path} />
      <ServiceDetailHero {...educationHero} />

      <FullScreenSection>
        <IconGridSection
          eyebrow={educationChallenges.eyebrow}
          heading={educationChallenges.heading}
          headerAlign="center"
          align="center"
          items={educationChallenges.items}
          columnsClassName="grid-cols-2 sm:grid-cols-3 lg:grid-cols-6"
        />
      </FullScreenSection>

      <FullScreenSection>
        <IconGridSection
          eyebrow={educationCapabilities.eyebrow}
          heading={educationCapabilities.heading}
          headerAlign="center"
          items={educationCapabilities.items}
          columnsClassName="grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
        />
      </FullScreenSection>

      <FullScreenSection>
        <ProcessTimeline
          eyebrow="How We Work"
          heading="Five Stages. Discovery to Support."
          steps={educationProcessSteps}
          desktopColumnsClassName="grid-cols-5"
        />
      </FullScreenSection>

      <FAQAccordion items={educationFaq} />

      <ClosingCta
        heading={educationBottomCta.heading}
        description={educationBottomCta.description}
        primary={educationBottomCta.primaryAction}
        secondary={educationBottomCta.secondaryAction}
      />
    </main>
  );
}
