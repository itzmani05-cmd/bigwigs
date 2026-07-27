import IndustriesBackground from "@/components/industries/IndustriesBackground";
import GlowDivider from "@/components/industryPage/GlowDivider";
import CTASection from "@/components/ui/CTASection";
import IndustryHero from "@/components/industryPage/IndustryHero";
import ChallengesSection from "@/components/industryPage/ChallengesSection";
import SolutionsSection from "@/components/industryPage/SolutionsSection";
import NumberedListWorkflowSection from "@/components/industryPage/NumberedListWorkflowSection";
import MarqueeWorkflowSection from "@/components/industryPage/MarqueeWorkflowSection";
import SplitFeatureListSection from "@/components/industryPage/SplitFeatureListSection";
import ChecklistWorkflowSection from "@/components/industryPage/ChecklistWorkflowSection";
import DashboardPanelSection from "@/components/industryPage/DashboardPanelSection";
import TwoFeatureCardsSection from "@/components/industryPage/TwoFeatureCardsSection";
import WhoWeServeSection from "@/components/industryPage/WhoWeServeSection";
import BusinessBenefitsSection from "@/components/industryPage/BusinessBenefitsSection";
import WhyUsSection from "@/components/industryPage/WhyUsSection";
import UseCasesCarousel from "@/components/industryPage/UseCasesCarousel";
import ProcessSection from "@/components/industryPage/ProcessSection";
import FaqSection from "@/components/industryPage/FaqSection";
import {
  governmentHero,
  governmentChallenges,
  governmentSolutions,
  digitalGovernmentPlatforms,
  documentProcessing,
  aiDataServices,
  smartCitySolutions,
  softwareDashboard,
  communicationAccessibility,
  publishingSecurity,
  governmentWhoWeServe,
  governmentBusinessBenefits,
  governmentWhyUs,
  governmentUseCases,
  governmentProcess,
  governmentFaq,
  governmentBottomCta,
} from "@/components/industryPage/content/government";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

export default function GovernmentPublicSectorSolutions() {
  useDocumentTitle("Government & Public Sector Solutions | Bigwigs Technologies");

  return (
    <main className="relative w-full overflow-x-hidden">
      <IndustriesBackground />
      <IndustryHero {...governmentHero} />
      <GlowDivider />
      <ChallengesSection {...governmentChallenges} />
      <GlowDivider />
      <SolutionsSection {...governmentSolutions} />
      <GlowDivider />
      <NumberedListWorkflowSection eyebrow="Digital Government Platforms" {...digitalGovernmentPlatforms} />
      <GlowDivider />
      <MarqueeWorkflowSection eyebrow="Intelligent Document Processing" {...documentProcessing} />
      <GlowDivider />
      <SplitFeatureListSection eyebrow="AI Data Services" {...aiDataServices} />
      <GlowDivider />
      <ChecklistWorkflowSection eyebrow="Smart City Solutions" {...smartCitySolutions} />
      <GlowDivider />
      <DashboardPanelSection eyebrow="Government Software Development" {...softwareDashboard} />
      <GlowDivider />
      <TwoFeatureCardsSection eyebrow="Multilingual Communication & Accessibility" {...communicationAccessibility} />
      <GlowDivider />
      <TwoFeatureCardsSection eyebrow="Digital Publishing & Security" {...publishingSecurity} />
      <GlowDivider />
      <WhoWeServeSection eyebrow="Industries We Serve" {...governmentWhoWeServe} />
      <GlowDivider />
      <BusinessBenefitsSection eyebrow="Business Benefits" {...governmentBusinessBenefits} />
      <GlowDivider />
      <WhyUsSection eyebrow="Why Choose Bigwigs?" {...governmentWhyUs} />
      <GlowDivider />
      <UseCasesCarousel eyebrow="Sample Use Cases" {...governmentUseCases} />
      <GlowDivider />
      <ProcessSection eyebrow="Our Delivery Process" {...governmentProcess} />
      <GlowDivider />
      <FaqSection eyebrow="Frequently Asked Questions" {...governmentFaq} />

      <CTASection {...governmentBottomCta} />
    </main>
  );
}
