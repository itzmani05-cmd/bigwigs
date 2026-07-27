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
import CaseStudySection from "@/components/industryPage/CaseStudySection";
import ProcessSection from "@/components/industryPage/ProcessSection";
import FaqSection from "@/components/industryPage/FaqSection";
import {
  automotiveHero,
  automotiveChallenges,
  automotiveSolutions,
  annotation,
  sensorProcessing,
  computerVision,
  softwareDashboard,
  documentProcessing,
  evMobility,
  automotiveWhoWeServe,
  automotiveBusinessBenefits,
  automotiveWhyUs,
  automotiveUseCases,
  automotiveCaseStudy,
  automotiveProcess,
  automotiveFaq,
  automotiveBottomCta,
} from "@/components/industryPage/content/automotive";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

export default function AutomotiveMobility() {
  useDocumentTitle("Automotive & Mobility Solutions | Bigwigs Technologies");

  return (
    <main className="relative w-full overflow-x-hidden">
      <IndustriesBackground />
      <IndustryHero {...automotiveHero} />
      <GlowDivider />
      <ChallengesSection {...automotiveChallenges} />
      <GlowDivider />
      <SolutionsSection {...automotiveSolutions} />
      <GlowDivider />
      <NumberedListWorkflowSection eyebrow="Autonomous Driving Data Annotation" {...annotation} />
      <GlowDivider />
      <ChecklistWorkflowSection eyebrow="LiDAR & Sensor Data Processing" {...sensorProcessing} />
      <GlowDivider />
      <SplitFeatureListSection eyebrow="Computer Vision Solutions" {...computerVision} />
      <GlowDivider />
      <DashboardPanelSection eyebrow="Software Development" {...softwareDashboard} />
      <GlowDivider />
      <MarqueeWorkflowSection eyebrow="Intelligent Document Processing" {...documentProcessing} />
      <GlowDivider />
      <TwoFeatureCardsSection eyebrow="EV & Smart Mobility" {...evMobility} />
      <GlowDivider />
      <WhoWeServeSection eyebrow="Industries We Serve" {...automotiveWhoWeServe} />
      <GlowDivider />
      <BusinessBenefitsSection eyebrow="Business Benefits" {...automotiveBusinessBenefits} />
      <GlowDivider />
      <WhyUsSection eyebrow="Why Choose Bigwigs?" {...automotiveWhyUs} />
      <GlowDivider />
      <UseCasesCarousel eyebrow="Sample Use Cases" {...automotiveUseCases} />
      <GlowDivider />
      <CaseStudySection eyebrow="Case Study" {...automotiveCaseStudy} />
      <GlowDivider />
      <ProcessSection {...automotiveProcess} />
      <GlowDivider />
      <FaqSection eyebrow="Frequently Asked Questions" {...automotiveFaq} />

      <CTASection {...automotiveBottomCta} />
    </main>
  );
}
