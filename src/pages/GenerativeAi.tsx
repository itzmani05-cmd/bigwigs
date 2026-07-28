import IndustriesBackground from "@/components/industries/IndustriesBackground";
import GlowDivider from "@/components/industryPage/GlowDivider";
import CTASection from "@/components/ui/CTASection";
import IndustryHero from "@/components/industryPage/IndustryHero";
import ChallengesSection from "@/components/industryPage/ChallengesSection";
import SolutionsSection from "@/components/industryPage/SolutionsSection";
import SplitFeatureListSection from "@/components/industryPage/SplitFeatureListSection";
import NumberedListWorkflowSection from "@/components/industryPage/NumberedListWorkflowSection";
import ChecklistWorkflowSection from "@/components/industryPage/ChecklistWorkflowSection";
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
  generativeAiHero,
  generativeAiChallenges,
  generativeAiSolutions,
  generativeAiEcosystem,
  largeLanguageModels,
  promptEngineering,
  chatbotsAndAgents,
  retrievalAugmentedGeneration,
  documentIntelligence,
  workflowAutomation,
  generativeAiWhoWeServe,
  generativeAiBusinessBenefits,
  generativeAiWhyUs,
  generativeAiUseCases,
  generativeAiCaseStudy,
  generativeAiProcess,
  generativeAiFaq,
  generativeAiBottomCta,
} from "@/components/industryPage/content/generativeAi";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

export default function GenerativeAi() {
  useDocumentTitle("Generative AI Services | Bigwigs Technologies");

  return (
    <main className="relative w-full overflow-x-hidden">
      <IndustriesBackground />
      <IndustryHero {...generativeAiHero} />
      <GlowDivider />
      <ChallengesSection {...generativeAiChallenges} />
      <GlowDivider />
      <SolutionsSection {...generativeAiSolutions} />
      <GlowDivider />
      <SplitFeatureListSection eyebrow="Generative AI Ecosystem" {...generativeAiEcosystem} />
      <GlowDivider />
      <NumberedListWorkflowSection eyebrow="Large Language Models" {...largeLanguageModels} />
      <GlowDivider />
      <ChecklistWorkflowSection eyebrow="Prompt Engineering" {...promptEngineering} />
      <GlowDivider />
      <TwoFeatureCardsSection eyebrow="AI Chatbots & AI Agents" {...chatbotsAndAgents} />
      <GlowDivider />
      <SplitFeatureListSection eyebrow="Retrieval-Augmented Generation" {...retrievalAugmentedGeneration} />
      <GlowDivider />
      <ChecklistWorkflowSection eyebrow="Document Intelligence" {...documentIntelligence} />
      <GlowDivider />
      <MarqueeWorkflowSection eyebrow="AI Workflow Automation" {...workflowAutomation} />
      <GlowDivider />
      <WhoWeServeSection eyebrow="Industries We Serve" {...generativeAiWhoWeServe} />
      <GlowDivider />
      <BusinessBenefitsSection eyebrow="Business Benefits" {...generativeAiBusinessBenefits} />
      <GlowDivider />
      <WhyUsSection eyebrow="Why Bigwigs" {...generativeAiWhyUs} />
      <GlowDivider />
      <UseCasesCarousel eyebrow="Sample Use Cases" {...generativeAiUseCases} />
      <GlowDivider />
      <CaseStudySection eyebrow="Case Study" {...generativeAiCaseStudy} />
      <GlowDivider />
      <ProcessSection eyebrow="Our Delivery Process" {...generativeAiProcess} />
      <GlowDivider />
      <FaqSection eyebrow="Frequently Asked Questions" {...generativeAiFaq} />

      <CTASection {...generativeAiBottomCta} />
    </main>
  );
}
