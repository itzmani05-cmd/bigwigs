import IndustriesBackground from "@/components/industries/IndustriesBackground";
import GlowDivider from "@/components/industryPage/GlowDivider";
import CTASection from "@/components/ui/CTASection";
import IndustryHero from "@/components/industryPage/IndustryHero";
import ChallengesSection from "@/components/industryPage/ChallengesSection";
import SolutionsSection from "@/components/industryPage/SolutionsSection";
import NumberedListWorkflowSection from "@/components/industryPage/NumberedListWorkflowSection";
import SplitFeatureListSection from "@/components/industryPage/SplitFeatureListSection";
import ChecklistWorkflowSection from "@/components/industryPage/ChecklistWorkflowSection";
import MarqueeWorkflowSection from "@/components/industryPage/MarqueeWorkflowSection";
import DashboardPanelSection from "@/components/industryPage/DashboardPanelSection";
import TwoFeatureCardsSection from "@/components/industryPage/TwoFeatureCardsSection";
import WhoWeServeSection from "@/components/industryPage/WhoWeServeSection";
import BusinessBenefitsSection from "@/components/industryPage/BusinessBenefitsSection";
import WhyUsSection from "@/components/industryPage/WhyUsSection";
import UseCasesCarousel from "@/components/industryPage/UseCasesCarousel";
import ProcessSection from "@/components/industryPage/ProcessSection";
import FaqSection from "@/components/industryPage/FaqSection";
import {
  publishingHero,
  publishingChallenges,
  publishingSolutions,
  digitalPublishingServices,
  aiAssistedPublishing,
  editorialContentServices,
  documentProcessing,
  publishingSoftware,
  accessibilityLocalization,
  assetsAndData,
  publishingWhoWeServe,
  publishingBusinessBenefits,
  publishingWhyUs,
  publishingUseCases,
  publishingProcess,
  publishingFaq,
  publishingBottomCta,
} from "@/components/industryPage/content/publishing";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

export default function PublishingMediaSolutions() {
  useDocumentTitle("Publishing & Media Solutions | Bigwigs Technologies");

  return (
    <main className="relative w-full overflow-x-hidden">
      <IndustriesBackground />
      <IndustryHero {...publishingHero} />
      <GlowDivider />
      <ChallengesSection {...publishingChallenges} />
      <GlowDivider />
      <SolutionsSection {...publishingSolutions} />
      <GlowDivider />
      <NumberedListWorkflowSection eyebrow="Digital Publishing Services" {...digitalPublishingServices} />
      <GlowDivider />
      <SplitFeatureListSection eyebrow="AI-Assisted Publishing" {...aiAssistedPublishing} />
      <GlowDivider />
      <ChecklistWorkflowSection eyebrow="Editorial & Content Services" {...editorialContentServices} />
      <GlowDivider />
      <MarqueeWorkflowSection eyebrow="Intelligent Document Processing" {...documentProcessing} />
      <GlowDivider />
      <DashboardPanelSection eyebrow="Publishing Software Development" {...publishingSoftware} />
      <GlowDivider />
      <TwoFeatureCardsSection eyebrow="Accessibility & Localization" {...accessibilityLocalization} />
      <GlowDivider />
      <TwoFeatureCardsSection eyebrow="Digital Asset Management & AI Data Services" {...assetsAndData} />
      <GlowDivider />
      <WhoWeServeSection eyebrow="Industries We Serve" {...publishingWhoWeServe} />
      <GlowDivider />
      <BusinessBenefitsSection eyebrow="Business Benefits" {...publishingBusinessBenefits} />
      <GlowDivider />
      <WhyUsSection eyebrow="Why Choose Bigwigs?" {...publishingWhyUs} />
      <GlowDivider />
      <UseCasesCarousel eyebrow="Sample Use Cases" {...publishingUseCases} />
      <GlowDivider />
      <ProcessSection eyebrow="Our Delivery Process" {...publishingProcess} />
      <GlowDivider />
      <FaqSection eyebrow="Frequently Asked Questions" {...publishingFaq} />

      <CTASection {...publishingBottomCta} />
    </main>
  );
}
