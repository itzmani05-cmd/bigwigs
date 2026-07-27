import IndustriesBackground from "@/components/industries/IndustriesBackground";
import GlowDivider from "@/components/industryPage/GlowDivider";
import CTASection from "@/components/ui/CTASection";
import IndustryHero from "@/components/industryPage/IndustryHero";
import ChallengesSection from "@/components/industryPage/ChallengesSection";
import SolutionsSection from "@/components/industryPage/SolutionsSection";
import MedicalImagingSection from "@/components/industryPage/MedicalImagingSection";
import NumberedListWorkflowSection from "@/components/industryPage/NumberedListWorkflowSection";
import SplitFeatureListSection from "@/components/industryPage/SplitFeatureListSection";
import DashboardPanelSection from "@/components/industryPage/DashboardPanelSection";
import MarqueeWorkflowSection from "@/components/industryPage/MarqueeWorkflowSection";
import ChecklistWorkflowSection from "@/components/industryPage/ChecklistWorkflowSection";
import TwoFeatureCardsSection from "@/components/industryPage/TwoFeatureCardsSection";
import WhoWeServeSection from "@/components/industryPage/WhoWeServeSection";
import BusinessBenefitsSection from "@/components/industryPage/BusinessBenefitsSection";
import WhyUsSection from "@/components/industryPage/WhyUsSection";
import UseCasesCarousel from "@/components/industryPage/UseCasesCarousel";
import CaseStudySection from "@/components/industryPage/CaseStudySection";
import FaqSection from "@/components/industryPage/FaqSection";
import {
  healthcareHero,
  healthcareChallenges,
  healthcareSolutions,
  clinicalNlp,
  aiSolutions,
  softwareDashboard,
  documentProcessing,
  aiDataServices,
  accessibilityLanguage,
  whoWeServe,
  businessBenefits,
  whyUs,
  useCases,
  caseStudy,
  faq,
  bottomCta,
} from "@/components/industryPage/content/healthcare";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

export default function HealthcareLifeSciences() {
  useDocumentTitle("Healthcare & Life Sciences | Bigwigs Technologies");

  return (
    <main className="relative w-full overflow-x-hidden">
      <IndustriesBackground />
      <IndustryHero {...healthcareHero} />
      <GlowDivider />
      <ChallengesSection {...healthcareChallenges} />
      <GlowDivider />
      <SolutionsSection {...healthcareSolutions} />
      <GlowDivider />
      <MedicalImagingSection />
      <GlowDivider />
      <NumberedListWorkflowSection eyebrow="Clinical NLP" {...clinicalNlp} />
      <GlowDivider />
      <SplitFeatureListSection eyebrow="Healthcare AI Solutions" {...aiSolutions} />
      <GlowDivider />
      <DashboardPanelSection eyebrow="Healthcare Software" {...softwareDashboard} />
      <GlowDivider />
      <MarqueeWorkflowSection eyebrow="Intelligent Document Processing" {...documentProcessing} />
      <GlowDivider />
      <ChecklistWorkflowSection eyebrow="AI Data Services" {...aiDataServices} />
      <GlowDivider />
      <TwoFeatureCardsSection eyebrow="Accessibility & Language" {...accessibilityLanguage} />
      <GlowDivider />
      <WhoWeServeSection {...whoWeServe} />
      <GlowDivider />
      <BusinessBenefitsSection {...businessBenefits} />
      <GlowDivider />
      <WhyUsSection {...whyUs} />
      <GlowDivider />
      <UseCasesCarousel {...useCases} />
      <GlowDivider />
      <CaseStudySection {...caseStudy} />
      <GlowDivider />
      <FaqSection {...faq} />

      <CTASection {...bottomCta} />
    </main>
  );
}
