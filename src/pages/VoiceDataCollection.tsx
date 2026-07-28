import IndustriesBackground from "@/components/industries/IndustriesBackground";
import GlowDivider from "@/components/industryPage/GlowDivider";
import CTASection from "@/components/ui/CTASection";
import IndustryHero from "@/components/industryPage/IndustryHero";
import ChallengesSection from "@/components/industryPage/ChallengesSection";
import SolutionsSection from "@/components/industryPage/SolutionsSection";
import TwoFeatureCardsSection from "@/components/industryPage/TwoFeatureCardsSection";
import DashboardPanelSection from "@/components/industryPage/DashboardPanelSection";
import SplitFeatureListSection from "@/components/industryPage/SplitFeatureListSection";
import MarqueeWorkflowSection from "@/components/industryPage/MarqueeWorkflowSection";
import WhoWeServeSection from "@/components/industryPage/WhoWeServeSection";
import BusinessBenefitsSection from "@/components/industryPage/BusinessBenefitsSection";
import WhyUsSection from "@/components/industryPage/WhyUsSection";
import UseCasesCarousel from "@/components/industryPage/UseCasesCarousel";
import CaseStudySection from "@/components/industryPage/CaseStudySection";
import ProcessSection from "@/components/industryPage/ProcessSection";
import FaqSection from "@/components/industryPage/FaqSection";
import {
  voiceDataHero,
  voiceChallenges,
  voiceSolutions,
  speechWakeWordCollection,
  accentsLanguages,
  speechAnnotationQa,
  voiceApplications,
  voiceWorkflow,
  voiceWhoWeServe,
  voiceBusinessBenefits,
  voiceWhyUs,
  voiceUseCases,
  voiceCaseStudy,
  voiceProcess,
  voiceFaq,
  voiceBottomCta,
} from "@/components/industryPage/content/voiceDataCollection";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

export default function VoiceDataCollection() {
  useDocumentTitle("Voice & Speech Data Collection | Bigwigs Technologies");

  return (
    <main className="relative w-full overflow-x-hidden">
      <IndustriesBackground />
      <IndustryHero {...voiceDataHero} />
      <GlowDivider />
      <ChallengesSection {...voiceChallenges} />
      <GlowDivider />
      <SolutionsSection {...voiceSolutions} />
      <GlowDivider />
      <TwoFeatureCardsSection eyebrow="Speech & Wake Word Collection" {...speechWakeWordCollection} />
      <GlowDivider />
      <TwoFeatureCardsSection eyebrow="Accents & Languages" {...accentsLanguages} />
      <GlowDivider />
      <DashboardPanelSection eyebrow="Speech Annotation & Quality Assurance" {...speechAnnotationQa} />
      <GlowDivider />
      <SplitFeatureListSection eyebrow="AI Dataset Applications" {...voiceApplications} />
      <GlowDivider />
      <MarqueeWorkflowSection eyebrow="Voice Data Collection Process" {...voiceWorkflow} />
      <GlowDivider />
      <WhoWeServeSection eyebrow="Industries We Serve" {...voiceWhoWeServe} />
      <GlowDivider />
      <BusinessBenefitsSection eyebrow="Business Benefits" {...voiceBusinessBenefits} />
      <GlowDivider />
      <WhyUsSection eyebrow="Why Bigwigs" {...voiceWhyUs} />
      <GlowDivider />
      <UseCasesCarousel eyebrow="Sample Use Cases" {...voiceUseCases} />
      <GlowDivider />
      <CaseStudySection eyebrow="Case Study" {...voiceCaseStudy} />
      <GlowDivider />
      <ProcessSection eyebrow="Our Delivery Process" {...voiceProcess} />
      <GlowDivider />
      <FaqSection eyebrow="Frequently Asked Questions" {...voiceFaq} />

      <CTASection {...voiceBottomCta} />
    </main>
  );
}
