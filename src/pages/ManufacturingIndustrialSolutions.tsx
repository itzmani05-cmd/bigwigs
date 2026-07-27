import IndustriesBackground from "@/components/industries/IndustriesBackground";
import GlowDivider from "@/components/industryPage/GlowDivider";
import CTASection from "@/components/ui/CTASection";
import IndustryHero from "@/components/industryPage/IndustryHero";
import ChallengesSection from "@/components/industryPage/ChallengesSection";
import SolutionsSection from "@/components/industryPage/SolutionsSection";
import NumberedListWorkflowSection from "@/components/industryPage/NumberedListWorkflowSection";
import ChecklistWorkflowSection from "@/components/industryPage/ChecklistWorkflowSection";
import SplitFeatureListSection from "@/components/industryPage/SplitFeatureListSection";
import DashboardPanelSection from "@/components/industryPage/DashboardPanelSection";
import MarqueeWorkflowSection from "@/components/industryPage/MarqueeWorkflowSection";
import TwoFeatureCardsSection from "@/components/industryPage/TwoFeatureCardsSection";
import WhoWeServeSection from "@/components/industryPage/WhoWeServeSection";
import BusinessBenefitsSection from "@/components/industryPage/BusinessBenefitsSection";
import WhyUsSection from "@/components/industryPage/WhyUsSection";
import UseCasesCarousel from "@/components/industryPage/UseCasesCarousel";
import ProcessSection from "@/components/industryPage/ProcessSection";
import FaqSection from "@/components/industryPage/FaqSection";
import {
  manufacturingHero,
  manufacturingChallenges,
  manufacturingSolutions,
  computerVisionInspection,
  predictiveMaintenance,
  aiDataServices,
  softwareDashboard,
  documentProcessing,
  dataAnalytics,
  safetyAccessibility,
  manufacturingWhoWeServe,
  manufacturingBusinessBenefits,
  manufacturingWhyUs,
  manufacturingUseCases,
  manufacturingProcess,
  manufacturingFaq,
  manufacturingBottomCta,
} from "@/components/industryPage/content/manufacturing";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

export default function ManufacturingIndustrialSolutions() {
  useDocumentTitle("Manufacturing & Industrial Solutions | Bigwigs Technologies");

  return (
    <main className="relative w-full overflow-x-hidden">
      <IndustriesBackground />
      <IndustryHero {...manufacturingHero} />
      <GlowDivider />
      <ChallengesSection {...manufacturingChallenges} />
      <GlowDivider />
      <SolutionsSection {...manufacturingSolutions} />
      <GlowDivider />
      <NumberedListWorkflowSection eyebrow="Computer Vision for Quality Inspection" {...computerVisionInspection} />
      <GlowDivider />
      <ChecklistWorkflowSection eyebrow="Predictive Maintenance" {...predictiveMaintenance} />
      <GlowDivider />
      <SplitFeatureListSection eyebrow="AI Data Services" {...aiDataServices} />
      <GlowDivider />
      <DashboardPanelSection eyebrow="Industrial Software Development" {...softwareDashboard} />
      <GlowDivider />
      <MarqueeWorkflowSection eyebrow="Intelligent Document Processing" {...documentProcessing} />
      <GlowDivider />
      <TwoFeatureCardsSection eyebrow="AI Data Collection & Industrial Analytics" {...dataAnalytics} />
      <GlowDivider />
      <TwoFeatureCardsSection eyebrow="Worker Safety & Accessibility" {...safetyAccessibility} />
      <GlowDivider />
      <WhoWeServeSection eyebrow="Industries We Serve" {...manufacturingWhoWeServe} />
      <GlowDivider />
      <BusinessBenefitsSection eyebrow="Business Benefits" {...manufacturingBusinessBenefits} />
      <GlowDivider />
      <WhyUsSection eyebrow="Why Choose Bigwigs?" {...manufacturingWhyUs} />
      <GlowDivider />
      <UseCasesCarousel eyebrow="Sample Use Cases" {...manufacturingUseCases} />
      <GlowDivider />
      <ProcessSection eyebrow="Our Delivery Process" {...manufacturingProcess} />
      <GlowDivider />
      <FaqSection eyebrow="Frequently Asked Questions" {...manufacturingFaq} />

      <CTASection {...manufacturingBottomCta} />
    </main>
  );
}
