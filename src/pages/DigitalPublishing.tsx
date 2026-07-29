import IndustriesBackground from "@/components/industries/IndustriesBackground";
import GlowDivider from "@/components/industryPage/GlowDivider";
import CTASection from "@/components/ui/CTASection";
import IndustryHero from "@/components/industryPage/IndustryHero";
import SolutionsSection from "@/components/industryPage/SolutionsSection";
import TwoFeatureCardsSection from "@/components/industryPage/TwoFeatureCardsSection";
import ChecklistWorkflowSection from "@/components/industryPage/ChecklistWorkflowSection";
import MarqueeWorkflowSection from "@/components/industryPage/MarqueeWorkflowSection";
import ChallengesSection from "@/components/industryPage/ChallengesSection";
import WhoWeServeSection from "@/components/industryPage/WhoWeServeSection";
import BusinessBenefitsSection from "@/components/industryPage/BusinessBenefitsSection";
import CaseStudySection from "@/components/industryPage/CaseStudySection";
import ProcessSection from "@/components/industryPage/ProcessSection";
import FaqSection from "@/components/industryPage/FaqSection";
import {
  digitalPublishingHero,
  digitalPublishingSolutions,
  digitalPublishingFormats,
  digitalPublishingDigitization,
  digitalPublishingConversion,
  digitalPublishingAccessibility,
  digitalPublishingSpecialized,
  digitalPublishingWhoWeServe,
  digitalPublishingBusinessBenefits,
  digitalPublishingCaseStudy,
  digitalPublishingProcess,
  digitalPublishingFaq,
  digitalPublishingBottomCta,
} from "@/components/industryPage/content/digitalPublishing";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

export default function DigitalPublishing() {
  useDocumentTitle("Digital Publishing Services | Bigwigs Technologies");

  return (
    <main className="relative w-full overflow-x-hidden">
      <IndustriesBackground />
      <IndustryHero {...digitalPublishingHero} />
      <GlowDivider />
      <SolutionsSection {...digitalPublishingSolutions} />
      <GlowDivider />
      <TwoFeatureCardsSection {...digitalPublishingFormats} />
      <GlowDivider />
      <ChecklistWorkflowSection {...digitalPublishingDigitization} />
      <GlowDivider />
      <MarqueeWorkflowSection {...digitalPublishingConversion} />
      <GlowDivider />
      <ChallengesSection {...digitalPublishingAccessibility} />
      <GlowDivider />
      <TwoFeatureCardsSection {...digitalPublishingSpecialized} />
      <GlowDivider />
      <WhoWeServeSection {...digitalPublishingWhoWeServe} />
      <GlowDivider />
      <BusinessBenefitsSection {...digitalPublishingBusinessBenefits} />
      <GlowDivider />
      <CaseStudySection {...digitalPublishingCaseStudy} />
      <GlowDivider />
      <ProcessSection {...digitalPublishingProcess} />
      <GlowDivider />
      <FaqSection eyebrow="Frequently Asked Questions" {...digitalPublishingFaq} />

      <CTASection {...digitalPublishingBottomCta} />
    </main>
  );
}
