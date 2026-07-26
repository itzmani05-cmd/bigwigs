import { Workflow, TrendingUp, TrendingDown, Zap } from "lucide-react";
import PageBackground from "@/components/servicePage/PageBackground";
import SectionDivider from "@/components/servicePage/SectionDivider";
import IconGridSection from "@/components/servicePage/IconGridSection";
import StatsBar from "@/components/servicePage/StatsBar";
import FAQAccordion from "@/components/servicePage/FAQAccordion";
import ClosingCta from "@/components/servicePage/ClosingCta";
import AiAgentsHero from "@/components/aiagents/AiAgentsHero";
import WhatAreAiAgentsSection from "@/components/aiagents/WhatAreAiAgentsSection";
import EnterpriseAssistantsSection from "@/components/aiagents/EnterpriseAssistantsSection";
import CustomerServiceAgentsSection from "@/components/aiagents/CustomerServiceAgentsSection";
import SalesHrFinanceAgentsSection from "@/components/aiagents/SalesHrFinanceAgentsSection";
import MultiAgentEcosystemSection from "@/components/aiagents/MultiAgentEcosystemSection";
import AgentRagSection from "@/components/aiagents/AgentRagSection";
import WorkflowAutomationSection from "@/components/aiagents/WorkflowAutomationSection";
import AiAgentArchitectureSection from "@/components/aiagents/AiAgentArchitectureSection";
import AiAgentsCaseStudy from "@/components/aiagents/AiAgentsCaseStudy";
import { agentServices } from "@/components/aiagents/agentServicesData";
import { agentIndustries } from "@/components/aiagents/agentIndustriesData";
import { whyAgentReasons } from "@/components/aiagents/whyBigwigsAgentsData";
import { agentFaqItems } from "@/components/aiagents/agentFaqData";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

export default function AiAgentsAutomation() {
  useDocumentTitle("AI Agents & Intelligent Automation | Bigwigs Technologies");

  return (
    <main className="relative w-full overflow-x-hidden">
      <PageBackground />
      <AiAgentsHero />
      <SectionDivider />

      <div className="bg-slate-50/60">
        <WhatAreAiAgentsSection />
      </div>

      <SectionDivider />

      <IconGridSection
        id="agent-services"
        eyebrow="Our AI Agent Services"
        heading="Eight ways we help you build a digital workforce"
        description="Assistants, agents, and orchestration — one team across the full automation stack."
        items={agentServices}
        columnsClassName="grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
        iconTone="blue"
        hoverable
      />

      <SectionDivider />
      <EnterpriseAssistantsSection />
      <SectionDivider />

      <div className="bg-slate-50/60">
        <CustomerServiceAgentsSection />
      </div>

      <SectionDivider />
      <SalesHrFinanceAgentsSection />
      <SectionDivider />

      <div className="bg-slate-50/60">
        <MultiAgentEcosystemSection />
      </div>

      <SectionDivider />
      <AgentRagSection />
      <SectionDivider />

      <div className="bg-slate-50/60">
        <WorkflowAutomationSection />
      </div>

      <SectionDivider />
      <AiAgentArchitectureSection />
      <SectionDivider />

      <div className="bg-slate-50/60">
        <IconGridSection
          eyebrow="Industries We Serve"
          heading="AI agents deployed across every sector"
          items={agentIndustries.map((industry) => ({ icon: industry.icon, title: industry.name }))}
          columnsClassName="grid-cols-3 sm:grid-cols-4 lg:grid-cols-6"
          align="center"
          iconShape="circle"
          iconTone="blue"
          headerAlign="center"
          maxWidthClassName="max-w-5xl"
        />
      </div>

      <SectionDivider />

      <IconGridSection
        eyebrow="Why Bigwigs"
        heading="Six reasons enterprises trust our automation teams"
        items={whyAgentReasons}
        columnsClassName="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        titleSize="md"
        headerAlign="center"
        maxWidthClassName="max-w-5xl"
      />

      <StatsBar
        stats={[
          { icon: Workflow, value: 70, suffix: "%", label: "Task Automation" },
          { icon: TrendingUp, value: 60, suffix: "%", label: "Higher Productivity" },
          { icon: TrendingDown, value: 50, suffix: "%", label: "Lower Operational Costs" },
          { icon: Zap, value: 99, suffix: "%", label: "AI Availability" },
        ]}
      />

      <SectionDivider />
      <AiAgentsCaseStudy />
      <SectionDivider />

      <div className="bg-slate-50/60">
        <FAQAccordion items={agentFaqItems} />
      </div>

      <ClosingCta
        heading="Build your digital workforce with enterprise AI agents"
        description="Whether you're automating customer support, enterprise operations, HR workflows, finance processes, or knowledge management, Bigwigs Technologies delivers secure, scalable, and intelligent AI Agent solutions that transform the way your business operates."
        primary={{ label: "Schedule an AI Strategy Session", href: "#contact" }}
        secondary={{ label: "Speak With AI Automation Experts", href: "#contact" }}
      />
    </main>
  );
}
