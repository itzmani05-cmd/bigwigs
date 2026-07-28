import IndustriesBackground from "@/components/industries/IndustriesBackground";
import GlowDivider from "@/components/industryPage/GlowDivider";
import CTASection from "@/components/ui/CTASection";
import IndustryHero from "@/components/industryPage/IndustryHero";
import ChallengesSection from "@/components/industryPage/ChallengesSection";
import SolutionsSection from "@/components/industryPage/SolutionsSection";
import SplitFeatureListSection from "@/components/industryPage/SplitFeatureListSection";
import TwoFeatureCardsSection from "@/components/industryPage/TwoFeatureCardsSection";
import DashboardPanelSection from "@/components/industryPage/DashboardPanelSection";
import MarqueeWorkflowSection from "@/components/industryPage/MarqueeWorkflowSection";
import WhoWeServeSection from "@/components/industryPage/WhoWeServeSection";
import BusinessBenefitsSection from "@/components/industryPage/BusinessBenefitsSection";
import WhyUsSection from "@/components/industryPage/WhyUsSection";
import UseCasesCarousel from "@/components/industryPage/UseCasesCarousel";
import CaseStudySection from "@/components/industryPage/CaseStudySection";
import ProcessSection from "@/components/industryPage/ProcessSection";
import FaqSection from "@/components/industryPage/FaqSection";
import {
  transcriptionHero,
  transcriptionChallenges,
  transcriptionSolutions,
  aiAssistedTranscription,
  audioVideoTranscription,
  medicalLegalTranscription,
  languagesSupported,
  captioningSubtitling,
  businessResearchTranscription,
  transcriptionWhoWeServe,
  transcriptionBusinessBenefits,
  transcriptionWhyUs,
  transcriptionUseCases,
  transcriptionCaseStudy,
  transcriptionProcess,
  transcriptionFaq,
  transcriptionBottomCta,
} from "@/components/industryPage/content/transcriptionServices";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

export default function TranscriptionServices() {
  useDocumentTitle("Transcription Services | Bigwigs Technologies");

  return (
    <main className="relative w-full overflow-x-hidden">
      <IndustriesBackground />
      <IndustryHero {...transcriptionHero} />
      <GlowDivider />
      <ChallengesSection {...transcriptionChallenges} />
      <GlowDivider />
      <SolutionsSection {...transcriptionSolutions} />
      <GlowDivider />
      <SplitFeatureListSection eyebrow="AI-Assisted Transcription" {...aiAssistedTranscription} />
      <GlowDivider />
      <TwoFeatureCardsSection eyebrow="Audio & Video Transcription" {...audioVideoTranscription} />
      <GlowDivider />
      <TwoFeatureCardsSection eyebrow="Medical & Legal Transcription" {...medicalLegalTranscription} />
      <GlowDivider />
      <TwoFeatureCardsSection eyebrow="Languages We Support" {...languagesSupported} />
      <GlowDivider />
      <DashboardPanelSection eyebrow="Captioning & Subtitling" {...captioningSubtitling} />
      <GlowDivider />
      <MarqueeWorkflowSection eyebrow="Business & Research Transcription" {...businessResearchTranscription} />
      <GlowDivider />
      <WhoWeServeSection eyebrow="Industries We Serve" {...transcriptionWhoWeServe} />
      <GlowDivider />
      <BusinessBenefitsSection eyebrow="Business Benefits" {...transcriptionBusinessBenefits} />
      <GlowDivider />
      <WhyUsSection eyebrow="Why Bigwigs" {...transcriptionWhyUs} />
      <GlowDivider />
      <UseCasesCarousel eyebrow="Sample Use Cases" {...transcriptionUseCases} />
      <GlowDivider />
      <CaseStudySection eyebrow="Case Study" {...transcriptionCaseStudy} />
      <GlowDivider />
      <ProcessSection eyebrow="Our Delivery Process" {...transcriptionProcess} />
      <GlowDivider />
      <FaqSection eyebrow="Frequently Asked Questions" {...transcriptionFaq} />

      <CTASection {...transcriptionBottomCta} />
    </main>
  );
}
