import IndustriesBackground from "@/components/industries/IndustriesBackground";
import GlowDivider from "@/components/industryPage/GlowDivider";
import CTASection from "@/components/ui/CTASection";
import IndustryHero from "@/components/industryPage/IndustryHero";
import ChallengesSection from "@/components/industryPage/ChallengesSection";
import SolutionsSection from "@/components/industryPage/SolutionsSection";
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
import ProcessSection from "@/components/industryPage/ProcessSection";
import FaqSection from "@/components/industryPage/FaqSection";
import {
  retailHero,
  retailChallenges,
  retailSolutions,
  catalogManagement,
  computerVision,
  softwareDashboard,
  documentProcessing,
  predictiveAnalytics,
  voiceLanguageAccessibility,
  retailWhoWeServe,
  retailBusinessBenefits,
  retailWhyUs,
  retailUseCases,
  retailCaseStudy,
  retailProcess,
  retailFaq,
  retailBottomCta,
} from "@/components/industryPage/content/retail";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

export default function RetailEcommerce() {
  useDocumentTitle("Retail & E-Commerce Solutions | Bigwigs Technologies");

  return (
    <main className="relative w-full overflow-x-hidden">
      <IndustriesBackground />
      <IndustryHero {...retailHero} />
      <GlowDivider />
      <ChallengesSection {...retailChallenges} />
      <GlowDivider />
      <SolutionsSection {...retailSolutions} />
      <GlowDivider />
      <NumberedListWorkflowSection eyebrow="AI Product Catalog Management" {...catalogManagement} />
      <GlowDivider />
      <SplitFeatureListSection eyebrow="Computer Vision for Retail" {...computerVision} />
      <GlowDivider />
      <DashboardPanelSection eyebrow="Retail Software Development" {...softwareDashboard} />
      <GlowDivider />
      <MarqueeWorkflowSection eyebrow="Intelligent Document Processing" {...documentProcessing} />
      <GlowDivider />
      <ChecklistWorkflowSection eyebrow="Predictive Analytics" {...predictiveAnalytics} />
      <GlowDivider />
      <TwoFeatureCardsSection eyebrow="Voice, Language & Accessibility" {...voiceLanguageAccessibility} />
      <GlowDivider />
      <WhoWeServeSection eyebrow="Industries We Serve" {...retailWhoWeServe} />
      <GlowDivider />
      <BusinessBenefitsSection eyebrow="Business Benefits" {...retailBusinessBenefits} />
      <GlowDivider />
      <WhyUsSection eyebrow="Why Choose Bigwigs?" {...retailWhyUs} />
      <GlowDivider />
      <UseCasesCarousel eyebrow="Sample Use Cases" {...retailUseCases} />
      <GlowDivider />
      <CaseStudySection eyebrow="Case Study" {...retailCaseStudy} />
      <GlowDivider />
      <ProcessSection {...retailProcess} />
      <GlowDivider />
      <FaqSection eyebrow="Frequently Asked Questions" {...retailFaq} />

      <CTASection {...retailBottomCta} />
    </main>
  );
}
