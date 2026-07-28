import IndustriesBackground from "@/components/industries/IndustriesBackground";
import GlowDivider from "@/components/industryPage/GlowDivider";
import CTASection from "@/components/ui/CTASection";
import IndustryHero from "@/components/industryPage/IndustryHero";
import ChallengesSection from "@/components/industryPage/ChallengesSection";
import SolutionsSection from "@/components/industryPage/SolutionsSection";
import SplitFeatureListSection from "@/components/industryPage/SplitFeatureListSection";
import NumberedListWorkflowSection from "@/components/industryPage/NumberedListWorkflowSection";
import TwoFeatureCardsSection from "@/components/industryPage/TwoFeatureCardsSection";
import ChecklistWorkflowSection from "@/components/industryPage/ChecklistWorkflowSection";
import MarqueeWorkflowSection from "@/components/industryPage/MarqueeWorkflowSection";
import WhoWeServeSection from "@/components/industryPage/WhoWeServeSection";
import BusinessBenefitsSection from "@/components/industryPage/BusinessBenefitsSection";
import WhyUsSection from "@/components/industryPage/WhyUsSection";
import UseCasesCarousel from "@/components/industryPage/UseCasesCarousel";
import CaseStudySection from "@/components/industryPage/CaseStudySection";
import ProcessSection from "@/components/industryPage/ProcessSection";
import FaqSection from "@/components/industryPage/FaqSection";
import {
  annotationHero,
  annotationChallenges,
  annotationSolutions,
  whyAnnotationMatters,
  imageAnnotation,
  videoAndLidar,
  advancedAnnotation,
  ocrDocumentAi,
  dataLabelingValidation,
  annotationWhoWeServe,
  annotationBusinessBenefits,
  annotationWhyUs,
  annotationUseCases,
  annotationCaseStudy,
  annotationProcess,
  annotationFaq,
  annotationBottomCta,
} from "@/components/industryPage/content/aiDataAnnotation";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

export default function AiDataAnnotation() {
  useDocumentTitle("AI Data Annotation Services | Bigwigs Technologies");

  return (
    <main className="relative w-full overflow-x-hidden">
      <IndustriesBackground />
      <IndustryHero {...annotationHero} />
      <GlowDivider />
      <ChallengesSection {...annotationChallenges} />
      <GlowDivider />
      <SolutionsSection {...annotationSolutions} />
      <GlowDivider />
      <SplitFeatureListSection eyebrow="Why AI Data Annotation Matters" {...whyAnnotationMatters} />
      <GlowDivider />
      <NumberedListWorkflowSection eyebrow="Image Annotation" {...imageAnnotation} />
      <GlowDivider />
      <TwoFeatureCardsSection eyebrow="Video & LiDAR Annotation" {...videoAndLidar} />
      <GlowDivider />
      <TwoFeatureCardsSection eyebrow="Advanced Annotation" {...advancedAnnotation} />
      <GlowDivider />
      <ChecklistWorkflowSection eyebrow="OCR & Document AI" {...ocrDocumentAi} />
      <GlowDivider />
      <MarqueeWorkflowSection eyebrow="Data Labeling & Validation" {...dataLabelingValidation} />
      <GlowDivider />
      <WhoWeServeSection eyebrow="Industries We Serve" {...annotationWhoWeServe} />
      <GlowDivider />
      <BusinessBenefitsSection eyebrow="Business Benefits" {...annotationBusinessBenefits} />
      <GlowDivider />
      <WhyUsSection eyebrow="Why Bigwigs" {...annotationWhyUs} />
      <GlowDivider />
      <UseCasesCarousel eyebrow="Sample Use Cases" {...annotationUseCases} />
      <GlowDivider />
      <CaseStudySection eyebrow="Case Study" {...annotationCaseStudy} />
      <GlowDivider />
      <ProcessSection eyebrow="Our Workflow" {...annotationProcess} />
      <GlowDivider />
      <FaqSection eyebrow="Frequently Asked Questions" {...annotationFaq} />

      <CTASection {...annotationBottomCta} />
    </main>
  );
}
