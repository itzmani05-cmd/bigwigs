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
import ChecklistWorkflowSection from "@/components/industryPage/ChecklistWorkflowSection";
import WhoWeServeSection from "@/components/industryPage/WhoWeServeSection";
import BusinessBenefitsSection from "@/components/industryPage/BusinessBenefitsSection";
import WhyUsSection from "@/components/industryPage/WhyUsSection";
import UseCasesCarousel from "@/components/industryPage/UseCasesCarousel";
import CaseStudySection from "@/components/industryPage/CaseStudySection";
import ProcessSection from "@/components/industryPage/ProcessSection";
import FaqSection from "@/components/industryPage/FaqSection";
import {
  aiAgentsHero,
  aiAgentsChallenges,
  aiAgentsSolutions,
  whatAreAiAgents,
  assistantsAndCustomerService,
  departmentAgents,
  multiAgentEcosystem,
  agentRag,
  workflowAutomation,
  agentArchitecture,
  aiAgentsWhoWeServe,
  aiAgentsBusinessBenefits,
  aiAgentsWhyUs,
  aiAgentsUseCases,
  aiAgentsCaseStudy,
  aiAgentsProcess,
  aiAgentsFaq,
  aiAgentsBottomCta,
} from "@/components/industryPage/content/aiAgentsAutomation";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

export default function AiAgentsAutomation() {
  useDocumentTitle("AI Agents & Intelligent Automation | Bigwigs Technologies");

  return (
    <main className="relative w-full overflow-x-hidden">
      <IndustriesBackground />
      <IndustryHero {...aiAgentsHero} />
      <GlowDivider />
      <ChallengesSection {...aiAgentsChallenges} />
      <GlowDivider />
      <SolutionsSection {...aiAgentsSolutions} />
      <GlowDivider />
      <SplitFeatureListSection eyebrow="What Are AI Agents?" {...whatAreAiAgents} />
      <GlowDivider />
      <TwoFeatureCardsSection eyebrow="Enterprise Assistants & Customer Service" {...assistantsAndCustomerService} />
      <GlowDivider />
      <TwoFeatureCardsSection eyebrow="Sales · HR · Finance Agents" {...departmentAgents} />
      <GlowDivider />
      <SplitFeatureListSection eyebrow="Multi-Agent Ecosystem" {...multiAgentEcosystem} />
      <GlowDivider />
      <DashboardPanelSection eyebrow="Retrieval-Augmented Generation" {...agentRag} />
      <GlowDivider />
      <MarqueeWorkflowSection eyebrow="Workflow Automation" {...workflowAutomation} />
      <GlowDivider />
      <ChecklistWorkflowSection eyebrow="AI Agent Architecture" {...agentArchitecture} />
      <GlowDivider />
      <WhoWeServeSection eyebrow="Industries We Serve" {...aiAgentsWhoWeServe} />
      <GlowDivider />
      <BusinessBenefitsSection eyebrow="Business Benefits" {...aiAgentsBusinessBenefits} />
      <GlowDivider />
      <WhyUsSection eyebrow="Why Bigwigs" {...aiAgentsWhyUs} />
      <GlowDivider />
      <UseCasesCarousel eyebrow="Sample Use Cases" {...aiAgentsUseCases} />
      <GlowDivider />
      <CaseStudySection eyebrow="Case Study" {...aiAgentsCaseStudy} />
      <GlowDivider />
      <ProcessSection eyebrow="Our Delivery Process" {...aiAgentsProcess} />
      <GlowDivider />
      <FaqSection eyebrow="Frequently Asked Questions" {...aiAgentsFaq} />

      <CTASection {...aiAgentsBottomCta} />
    </main>
  );
}
