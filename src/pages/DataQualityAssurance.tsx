import { ShieldCheck, TrendingUp, Zap, Building2 } from "lucide-react";
import PageBackground from "@/components/servicePage/PageBackground";
import SectionDivider from "@/components/servicePage/SectionDivider";
import IconGridSection from "@/components/servicePage/IconGridSection";
import ProcessTimeline from "@/components/servicePage/ProcessTimeline";
import StatsBar from "@/components/servicePage/StatsBar";
import FAQAccordion from "@/components/servicePage/FAQAccordion";
import ClosingCta from "@/components/servicePage/ClosingCta";
import DataQAHero from "@/components/dataqa/DataQAHero";
import AnnotationQualitySection from "@/components/dataqa/AnnotationQualitySection";
import ThreePillarsSection from "@/components/dataqa/ThreePillarsSection";
import QualityMetricsSection from "@/components/dataqa/QualityMetricsSection";
import ContinuousImprovementSection from "@/components/dataqa/ContinuousImprovementSection";
import SecurityDataIntegritySection from "@/components/dataqa/SecurityDataIntegritySection";
import DataQACaseStudy from "@/components/dataqa/DataQACaseStudy";
import { qaServices } from "@/components/dataqa/qaServicesData";
import { validationPillars } from "@/components/dataqa/validationPillarsData";
import { textMedicalLlmPillars } from "@/components/dataqa/textMedicalLlmData";
import { qaWorkflowSteps } from "@/components/dataqa/qaWorkflowData";
import { qaIndustries } from "@/components/dataqa/qaIndustriesData";
import { whyQaReasons } from "@/components/dataqa/whyBigwigsQaData";
import { qaFaqItems } from "@/components/dataqa/qaFaqData";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

export default function DataQualityAssurance() {
  useDocumentTitle("Data Validation & Quality Assurance | Bigwigs Technologies");

  return (
    <main className="relative w-full overflow-x-hidden">
      <PageBackground />
      <DataQAHero />
      <SectionDivider />

      <div className="bg-slate-50/60">
        <IconGridSection
          id="qa-services"
          eyebrow="Our QA Services"
          heading="Eight ways we validate your data before it trains a model"
          description="One team across annotation, media, text, and LLM validation — not eight separate vendors."
          items={qaServices}
          columnsClassName="grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
          iconTone="blue"
          hoverable
        />
      </div>

      <SectionDivider />
      <AnnotationQualitySection />
      <SectionDivider />

      <div className="bg-slate-50/60">
        <ThreePillarsSection
          eyebrow="Image · Video · Audio Validation"
          heading="Every media type, checked against its own standard"
          pillars={validationPillars}
        />
      </div>

      <SectionDivider />

      <ThreePillarsSection
        eyebrow="Text · Medical · LLM Validation"
        heading="Specialized review for specialized data"
        pillars={textMedicalLlmPillars}
      />

      <SectionDivider />

      <ProcessTimeline
        eyebrow="Multi-Level QA Workflow"
        heading="Four review levels stand between annotation and delivery"
        steps={qaWorkflowSteps}
        desktopColumnsClassName="grid-cols-4"
      />

      <SectionDivider />

      <div className="bg-slate-50/60">
        <QualityMetricsSection />
      </div>

      <SectionDivider />
      <ContinuousImprovementSection />
      <SectionDivider />

      <div className="bg-slate-50/60">
        <SecurityDataIntegritySection />
      </div>

      <SectionDivider />

      <IconGridSection
        eyebrow="Industries We Support"
        heading="Quality assurance across every sector"
        items={qaIndustries.map((industry) => ({ icon: industry.icon, title: industry.name }))}
        columnsClassName="grid-cols-3 sm:grid-cols-4 lg:grid-cols-6"
        align="center"
        iconShape="circle"
        iconTone="blue"
        headerAlign="center"
        maxWidthClassName="max-w-5xl"
      />

      <SectionDivider />

      <div className="bg-slate-50/60">
        <IconGridSection
          eyebrow="Why Bigwigs"
          heading="Six reasons AI teams trust our QA process"
          items={whyQaReasons}
          columnsClassName="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          titleSize="md"
          headerAlign="center"
          maxWidthClassName="max-w-5xl"
        />

        <StatsBar
          stats={[
            { icon: ShieldCheck, value: 99, suffix: ".5%", label: "Validation Accuracy" },
            { icon: TrendingUp, value: 60, suffix: "%", label: "Reduced Rework" },
            { icon: Zap, value: 40, suffix: "%", label: "Faster AI Deployment" },
            { icon: Building2, value: 100, suffix: "+", label: "Enterprise QA Projects" },
          ]}
        />
      </div>

      <SectionDivider />
      <DataQACaseStudy />
      <SectionDivider />

      <div className="bg-slate-50/60">
        <FAQAccordion items={qaFaqItems} />
      </div>

      <ClosingCta
        heading="Build AI models with trusted data"
        description="From annotation validation and medical data review to LLM dataset evaluation and enterprise quality assurance, Bigwigs Technologies helps organizations deliver AI-ready datasets with confidence."
        primary={{ label: "Request a Data Quality Assessment", href: "#contact" }}
        secondary={{ label: "Speak With Our QA Specialist", href: "#contact" }}
      />
    </main>
  );
}
