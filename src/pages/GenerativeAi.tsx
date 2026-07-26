import { Sparkles, Target, Workflow, TrendingDown } from "lucide-react";
import PageBackground from "@/components/servicePage/PageBackground";
import SectionDivider from "@/components/servicePage/SectionDivider";
import IconGridSection from "@/components/servicePage/IconGridSection";
import ProcessTimeline from "@/components/servicePage/ProcessTimeline";
import StatsBar from "@/components/servicePage/StatsBar";
import FAQAccordion from "@/components/servicePage/FAQAccordion";
import ClosingCta from "@/components/servicePage/ClosingCta";
import GenerativeAiHero from "@/components/genai/GenerativeAiHero";
import GenerativeAiEcosystemSection from "@/components/genai/GenerativeAiEcosystemSection";
import LargeLanguageModelsSection from "@/components/genai/LargeLanguageModelsSection";
import PromptEngineeringSection from "@/components/genai/PromptEngineeringSection";
import AiChatbotsSection from "@/components/genai/AiChatbotsSection";
import AiAgentsSection from "@/components/genai/AiAgentsSection";
import RagSection from "@/components/genai/RagSection";
import DocumentIntelligenceSection from "@/components/genai/DocumentIntelligenceSection";
import AiWorkflowAutomationSection from "@/components/genai/AiWorkflowAutomationSection";
import GenAiCaseStudy from "@/components/genai/GenAiCaseStudy";
import { genaiCapabilities } from "@/components/genai/genaiCapabilitiesData";
import { deliveryProcessSteps } from "@/components/genai/deliveryProcessData";
import { genaiIndustries } from "@/components/genai/genaiIndustriesData";
import { whyGenaiReasons } from "@/components/genai/whyBigwigsGenaiData";
import { genaiFaqItems } from "@/components/genai/genaiFaqData";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

export default function GenerativeAi() {
  useDocumentTitle("Generative AI Services | Bigwigs Technologies");

  return (
    <main className="relative w-full overflow-x-hidden">
      <PageBackground />
      <GenerativeAiHero />
      <SectionDivider />

      <div className="bg-slate-50/60">
        <GenerativeAiEcosystemSection />
      </div>

      <SectionDivider />

      <IconGridSection
        id="genai-capabilities"
        eyebrow="Our Generative AI Capabilities"
        heading="Eight ways we help you put Generative AI to work"
        description="LLMs, agents, and automation — one team across the full Generative AI stack."
        items={genaiCapabilities}
        columnsClassName="grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
        iconTone="blue"
        hoverable
      />

      <SectionDivider />
      <LargeLanguageModelsSection />
      <SectionDivider />

      <div className="bg-slate-50/60">
        <PromptEngineeringSection />
      </div>

      <SectionDivider />
      <AiChatbotsSection />
      <SectionDivider />

      <div className="bg-slate-50/60">
        <AiAgentsSection />
      </div>

      <SectionDivider />
      <RagSection />
      <SectionDivider />

      <div className="bg-slate-50/60">
        <DocumentIntelligenceSection />
      </div>

      <SectionDivider />
      <AiWorkflowAutomationSection />
      <SectionDivider />

      <div className="bg-slate-50/60">
        <IconGridSection
          eyebrow="Industries We Serve"
          heading="Generative AI expertise across every sector"
          items={genaiIndustries.map((industry) => ({ icon: industry.icon, title: industry.name }))}
          columnsClassName="grid-cols-3 sm:grid-cols-4 lg:grid-cols-6"
          align="center"
          iconShape="circle"
          iconTone="blue"
          headerAlign="center"
          maxWidthClassName="max-w-5xl"
        />
      </div>

      <SectionDivider />

      <ProcessTimeline
        eyebrow="Our Delivery Process"
        heading="Six stages between an idea and a production AI system"
        steps={deliveryProcessSteps}
        desktopColumnsClassName="grid-cols-6"
      />

      <SectionDivider />

      <IconGridSection
        eyebrow="Why Bigwigs"
        heading="Six reasons enterprises trust our AI teams"
        items={whyGenaiReasons}
        columnsClassName="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        titleSize="md"
        headerAlign="center"
        maxWidthClassName="max-w-5xl"
      />

      <StatsBar
        stats={[
          { icon: Sparkles, value: 50, suffix: "+", label: "Enterprise AI Solutions" },
          { icon: Target, value: 99, suffix: "%", label: "Response Accuracy" },
          { icon: Workflow, value: 60, suffix: "%", label: "Workflow Automation" },
          { icon: TrendingDown, value: 40, suffix: "%", label: "Operational Cost Reduction" },
        ]}
      />

      <SectionDivider />
      <GenAiCaseStudy />
      <SectionDivider />

      <div className="bg-slate-50/60">
        <FAQAccordion items={genaiFaqItems} />
      </div>

      <ClosingCta
        heading="Transform every workflow with enterprise AI"
        description="Whether you're building intelligent assistants, deploying AI agents, integrating enterprise knowledge with RAG, or automating business operations, Bigwigs Technologies delivers secure, scalable, and production-ready Generative AI solutions that drive measurable business value."
        primary={{ label: "Request a Generative AI Consultation", href: "#contact" }}
        secondary={{ label: "Talk To Our AI Experts", href: "#contact" }}
      />
    </main>
  );
}
