import IndustriesBackground from "@/components/industries/IndustriesBackground";
import GlowDivider from "@/components/industryPage/GlowDivider";
import CTASection from "@/components/ui/CTASection";
import IndustryHero from "@/components/industryPage/IndustryHero";
import ChallengesSection from "@/components/industryPage/ChallengesSection";
import SolutionsSection from "@/components/industryPage/SolutionsSection";
import NumberedListWorkflowSection from "@/components/industryPage/NumberedListWorkflowSection";
import ChecklistWorkflowSection from "@/components/industryPage/ChecklistWorkflowSection";
import DashboardPanelSection from "@/components/industryPage/DashboardPanelSection";
import SplitFeatureListSection from "@/components/industryPage/SplitFeatureListSection";
import TwoFeatureCardsSection from "@/components/industryPage/TwoFeatureCardsSection";
import MarqueeWorkflowSection from "@/components/industryPage/MarqueeWorkflowSection";
import WhoWeServeSection from "@/components/industryPage/WhoWeServeSection";
import BusinessBenefitsSection from "@/components/industryPage/BusinessBenefitsSection";
import WhyUsSection from "@/components/industryPage/WhyUsSection";
import UseCasesCarousel from "@/components/industryPage/UseCasesCarousel";
import CaseStudySection from "@/components/industryPage/CaseStudySection";
import ProcessSection from "@/components/industryPage/ProcessSection";
import FaqSection from "@/components/industryPage/FaqSection";
import {
  dataCollectionHero,
  dataCollectionChallenges,
  dataCollectionSolutions,
  imageDataCollection,
  videoDataCollection,
  audioSpeechData,
  textAndDocumentDatasets,
  multilingualAndSynthetic,
  dataPreparation,
  participantRecruitment,
  dataCollectionWhoWeServe,
  dataCollectionBusinessBenefits,
  dataCollectionWhyUs,
  dataCollectionUseCases,
  dataCollectionCaseStudy,
  dataCollectionProcess,
  dataCollectionFaq,
  dataCollectionBottomCta,
} from "@/components/industryPage/content/dataCollection";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

export default function DataCollection() {
  useDocumentTitle("Data Collection & AI Datasets | Bigwigs Technologies");

  return (
    <main className="relative w-full overflow-x-hidden">
      <IndustriesBackground />
      <IndustryHero {...dataCollectionHero} />
      <GlowDivider />
      <ChallengesSection {...dataCollectionChallenges} />
      <GlowDivider />
      <SolutionsSection {...dataCollectionSolutions} />
      <GlowDivider />
      <NumberedListWorkflowSection eyebrow="Image Data Collection" {...imageDataCollection} />
      <GlowDivider />
      <ChecklistWorkflowSection eyebrow="Video Data Collection" {...videoDataCollection} />
      <GlowDivider />
      <DashboardPanelSection eyebrow="Audio & Speech Data" {...audioSpeechData} />
      <GlowDivider />
      <SplitFeatureListSection eyebrow="Text & Document Datasets" {...textAndDocumentDatasets} />
      <GlowDivider />
      <TwoFeatureCardsSection eyebrow="Multilingual & Synthetic Data" {...multilingualAndSynthetic} />
      <GlowDivider />
      <ChecklistWorkflowSection eyebrow="Data Preparation" {...dataPreparation} />
      <GlowDivider />
      <MarqueeWorkflowSection eyebrow="Participant Recruitment" {...participantRecruitment} />
      <GlowDivider />
      <WhoWeServeSection eyebrow="Industries We Serve" {...dataCollectionWhoWeServe} />
      <GlowDivider />
      <BusinessBenefitsSection eyebrow="Business Benefits" {...dataCollectionBusinessBenefits} />
      <GlowDivider />
      <WhyUsSection eyebrow="Why Bigwigs" {...dataCollectionWhyUs} />
      <GlowDivider />
      <UseCasesCarousel eyebrow="Sample Use Cases" {...dataCollectionUseCases} />
      <GlowDivider />
      <CaseStudySection eyebrow="Case Study" {...dataCollectionCaseStudy} />
      <GlowDivider />
      <ProcessSection eyebrow="Data Collection Workflow" {...dataCollectionProcess} />
      <GlowDivider />
      <FaqSection eyebrow="Frequently Asked Questions" {...dataCollectionFaq} />

      <CTASection {...dataCollectionBottomCta} />
    </main>
  );
}
