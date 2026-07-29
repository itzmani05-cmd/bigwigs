import IndustriesBackground from "@/components/industries/IndustriesBackground";
import GlowDivider from "@/components/industryPage/GlowDivider";
import CTASection from "@/components/ui/CTASection";
import IndustryHero from "@/components/industryPage/IndustryHero";
import SolutionsSection from "@/components/industryPage/SolutionsSection";
import NumberedListWorkflowSection from "@/components/industryPage/NumberedListWorkflowSection";
import TwoFeatureCardsSection from "@/components/industryPage/TwoFeatureCardsSection";
import ProcessSection from "@/components/industryPage/ProcessSection";
import MarqueeWorkflowSection from "@/components/industryPage/MarqueeWorkflowSection";
import ChecklistWorkflowSection from "@/components/industryPage/ChecklistWorkflowSection";
import WhoWeServeSection from "@/components/industryPage/WhoWeServeSection";
import BusinessBenefitsSection from "@/components/industryPage/BusinessBenefitsSection";
import CaseStudySection from "@/components/industryPage/CaseStudySection";
import FaqSection from "@/components/industryPage/FaqSection";
import {
  dataQaHero,
  dataQaSolutions,
  dataQaAnnotationQuality,
  dataQaMediaValidation,
  dataQaWorkflow,
  dataQaContinuousImprovement,
  dataQaSecurityIntegrity,
  dataQaWhoWeServe,
  dataQaBusinessBenefits,
  dataQaCaseStudy,
  dataQaFaq,
  dataQaBottomCta,
} from "@/components/industryPage/content/dataQualityAssurance";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

export default function DataQualityAssurance() {
  useDocumentTitle("Data Validation & Quality Assurance | Bigwigs Technologies");

  return (
    <main className="relative w-full overflow-x-hidden">
      <IndustriesBackground />
      <IndustryHero {...dataQaHero} />
      <GlowDivider />
      <SolutionsSection {...dataQaSolutions} />
      <GlowDivider />
      <NumberedListWorkflowSection {...dataQaAnnotationQuality} />
      <GlowDivider />
      <TwoFeatureCardsSection {...dataQaMediaValidation} />
      <GlowDivider />
      <ProcessSection {...dataQaWorkflow} />
      <GlowDivider />
      <MarqueeWorkflowSection {...dataQaContinuousImprovement} />
      <GlowDivider />
      <ChecklistWorkflowSection {...dataQaSecurityIntegrity} />
      <GlowDivider />
      <WhoWeServeSection {...dataQaWhoWeServe} />
      <GlowDivider />
      <BusinessBenefitsSection {...dataQaBusinessBenefits} />
      <GlowDivider />
      <CaseStudySection {...dataQaCaseStudy} />
      <GlowDivider />
      <FaqSection eyebrow="Frequently Asked Questions" {...dataQaFaq} />

      <CTASection {...dataQaBottomCta} />
    </main>
  );
}
