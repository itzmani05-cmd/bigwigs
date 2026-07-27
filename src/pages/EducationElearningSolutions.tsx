import IndustriesBackground from "@/components/industries/IndustriesBackground";
import GlowDivider from "@/components/industryPage/GlowDivider";
import CTASection from "@/components/ui/CTASection";
import IndustryHero from "@/components/industryPage/IndustryHero";
import ChallengesSection from "@/components/industryPage/ChallengesSection";
import SolutionsSection from "@/components/industryPage/SolutionsSection";
import NumberedListWorkflowSection from "@/components/industryPage/NumberedListWorkflowSection";
import SplitFeatureListSection from "@/components/industryPage/SplitFeatureListSection";
import TwoFeatureCardsSection from "@/components/industryPage/TwoFeatureCardsSection";
import ChecklistWorkflowSection from "@/components/industryPage/ChecklistWorkflowSection";
import DashboardPanelSection from "@/components/industryPage/DashboardPanelSection";
import MarqueeWorkflowSection from "@/components/industryPage/MarqueeWorkflowSection";
import WhoWeServeSection from "@/components/industryPage/WhoWeServeSection";
import BusinessBenefitsSection from "@/components/industryPage/BusinessBenefitsSection";
import WhyUsSection from "@/components/industryPage/WhyUsSection";
import UseCasesCarousel from "@/components/industryPage/UseCasesCarousel";
import ProcessSection from "@/components/industryPage/ProcessSection";
import FaqSection from "@/components/industryPage/FaqSection";
import {
  educationHero,
  educationChallenges,
  educationSolutions,
  lms,
  aiLearning,
  contentPublishing,
  accessibilityServices,
  dataLanguage,
  studentInfoSystems,
  assessmentExamination,
  educationWhoWeServe,
  educationBusinessBenefits,
  educationWhyUs,
  educationUseCases,
  educationProcess,
  educationFaq,
  educationBottomCta,
} from "@/components/industryPage/content/education";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

export default function EducationElearningSolutions() {
  useDocumentTitle("Education & eLearning Solutions | Bigwigs Technologies");

  return (
    <main className="relative w-full overflow-x-hidden">
      <IndustriesBackground />
      <IndustryHero {...educationHero} />
      <GlowDivider />
      <ChallengesSection {...educationChallenges} />
      <GlowDivider />
      <SolutionsSection {...educationSolutions} />
      <GlowDivider />
      <NumberedListWorkflowSection eyebrow="Learning Management Systems (LMS)" {...lms} />
      <GlowDivider />
      <SplitFeatureListSection eyebrow="AI-Powered Learning Solutions" {...aiLearning} />
      <GlowDivider />
      <TwoFeatureCardsSection eyebrow="Educational Content & Digital Publishing" {...contentPublishing} />
      <GlowDivider />
      <ChecklistWorkflowSection eyebrow="Accessibility Services" {...accessibilityServices} />
      <GlowDivider />
      <TwoFeatureCardsSection eyebrow="AI Data Services & Language Services" {...dataLanguage} />
      <GlowDivider />
      <DashboardPanelSection eyebrow="Student Information Systems" {...studentInfoSystems} />
      <GlowDivider />
      <MarqueeWorkflowSection eyebrow="Assessment & Examination Solutions" {...assessmentExamination} />
      <GlowDivider />
      <WhoWeServeSection eyebrow="Industries We Serve" {...educationWhoWeServe} />
      <GlowDivider />
      <BusinessBenefitsSection eyebrow="Business Benefits" {...educationBusinessBenefits} />
      <GlowDivider />
      <WhyUsSection eyebrow="Why Choose Bigwigs?" {...educationWhyUs} />
      <GlowDivider />
      <UseCasesCarousel eyebrow="Sample Use Cases" {...educationUseCases} />
      <GlowDivider />
      <ProcessSection eyebrow="Our Delivery Process" {...educationProcess} />
      <GlowDivider />
      <FaqSection eyebrow="Frequently Asked Questions" {...educationFaq} />

      <CTASection {...educationBottomCta} />
    </main>
  );
}
