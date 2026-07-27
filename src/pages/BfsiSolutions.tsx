import IndustriesBackground from "@/components/industries/IndustriesBackground";
import GlowDivider from "@/components/industryPage/GlowDivider";
import CTASection from "@/components/ui/CTASection";
import IndustryHero from "@/components/industryPage/IndustryHero";
import ChallengesSection from "@/components/industryPage/ChallengesSection";
import SolutionsSection from "@/components/industryPage/SolutionsSection";
import NumberedListWorkflowSection from "@/components/industryPage/NumberedListWorkflowSection";
import SplitFeatureListSection from "@/components/industryPage/SplitFeatureListSection";
import DashboardPanelSection from "@/components/industryPage/DashboardPanelSection";
import TwoFeatureCardsSection from "@/components/industryPage/TwoFeatureCardsSection";
import WhoWeServeSection from "@/components/industryPage/WhoWeServeSection";
import BusinessBenefitsSection from "@/components/industryPage/BusinessBenefitsSection";
import WhyUsSection from "@/components/industryPage/WhyUsSection";
import UseCasesCarousel from "@/components/industryPage/UseCasesCarousel";
import CaseStudySection from "@/components/industryPage/CaseStudySection";
import ProcessSection from "@/components/industryPage/ProcessSection";
import FaqSection from "@/components/industryPage/FaqSection";
import {
  bfsiHero,
  bfsiChallenges,
  bfsiSolutions,
  idp,
  bfsiAiSolutions,
  bfsiSoftwareDashboard,
  bfsiAccessibilityLanguage,
  bfsiWhoWeServe,
  bfsiBusinessBenefits,
  bfsiWhyUs,
  bfsiUseCases,
  bfsiCaseStudy,
  bfsiProcess,
  bfsiFaq,
  bfsiBottomCta,
} from "@/components/industryPage/content/bfsi";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

export default function BfsiSolutions() {
  useDocumentTitle("Banking, Financial Services & Insurance | Bigwigs Technologies");

  return (
    <main className="relative w-full overflow-x-hidden">
      <IndustriesBackground />
      <IndustryHero {...bfsiHero} />
      <GlowDivider />
      <ChallengesSection {...bfsiChallenges} />
      <GlowDivider />
      <SolutionsSection {...bfsiSolutions} />
      <GlowDivider />
      <NumberedListWorkflowSection eyebrow="Intelligent Document Processing" {...idp} />
      <GlowDivider />
      <SplitFeatureListSection eyebrow="AI & Machine Learning Solutions" {...bfsiAiSolutions} />
      <GlowDivider />
      <DashboardPanelSection eyebrow="Software Development" {...bfsiSoftwareDashboard} />
      <GlowDivider />
      <TwoFeatureCardsSection eyebrow="Language & Accessibility" {...bfsiAccessibilityLanguage} />
      <GlowDivider />
      <WhoWeServeSection eyebrow="Industries We Serve" {...bfsiWhoWeServe} />
      <GlowDivider />
      <BusinessBenefitsSection eyebrow="Business Benefits" {...bfsiBusinessBenefits} />
      <GlowDivider />
      <WhyUsSection eyebrow="Why Choose Bigwigs?" {...bfsiWhyUs} />
      <GlowDivider />
      <UseCasesCarousel eyebrow="Sample Use Cases" {...bfsiUseCases} />
      <GlowDivider />
      <CaseStudySection eyebrow="Case Study" {...bfsiCaseStudy} />
      <GlowDivider />
      <ProcessSection {...bfsiProcess} />
      <GlowDivider />
      <FaqSection eyebrow="Frequently Asked Questions" {...bfsiFaq} />

      <CTASection {...bfsiBottomCta} />
    </main>
  );
}
