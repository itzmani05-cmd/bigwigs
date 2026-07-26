import { ShieldCheck, Stethoscope, ScanLine, Zap } from "lucide-react";
import PageBackground from "@/components/servicePage/PageBackground";
import SectionDivider from "@/components/servicePage/SectionDivider";
import IconGridSection from "@/components/servicePage/IconGridSection";
import ProcessTimeline from "@/components/servicePage/ProcessTimeline";
import StatsBar from "@/components/servicePage/StatsBar";
import FAQAccordion from "@/components/servicePage/FAQAccordion";
import ClosingCta from "@/components/servicePage/ClosingCta";
import HealthcareHero from "@/components/healthcare/HealthcareHero";
import MedicalImageAnnotationSection from "@/components/healthcare/MedicalImageAnnotationSection";
import ClinicalNlpSection from "@/components/healthcare/ClinicalNlpSection";
import HealthcareApplicationsSection from "@/components/healthcare/HealthcareApplicationsSection";
import ComplianceSection from "@/components/healthcare/ComplianceSection";
import SuccessStorySection from "@/components/healthcare/SuccessStorySection";
import { healthcareServices } from "@/components/healthcare/healthcareServicesData";
import { healthcareProducts } from "@/components/healthcare/healthcareSoftwareData";
import { workflowSteps } from "@/components/healthcare/healthcareWorkflowData";
import { healthcareIndustries } from "@/components/healthcare/healthcareIndustriesData";
import { whyHealthcareReasons } from "@/components/healthcare/whyBigwigsHealthcareData";
import { healthcareFaqItems } from "@/components/healthcare/healthcareFaqData";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

export default function HealthcareAI() {
  useDocumentTitle("Healthcare AI | Bigwigs Technologies");

  return (
    <main className="relative w-full overflow-x-hidden">
      <PageBackground />
      <HealthcareHero />
      <SectionDivider />

      <div className="bg-slate-50/60">
        <IconGridSection
          id="healthcare-services"
          eyebrow="Our Healthcare AI Services"
          heading="Eight ways we support clinical AI"
          description="From raw scans to production diagnostic tools — one team across the full pipeline."
          items={healthcareServices}
          columnsClassName="grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
          iconTone="blue"
        />
      </div>

      <SectionDivider />
      <MedicalImageAnnotationSection />
      <ClinicalNlpSection />
      <SectionDivider />

      <div className="bg-slate-50/60">
        <HealthcareApplicationsSection />
      </div>

      <SectionDivider />

      <IconGridSection
        eyebrow="Healthcare Software"
        heading="The systems your care teams live in"
        description="Built for clinicians and administrators, not just for a demo."
        items={healthcareProducts}
        columnsClassName="grid-cols-2 sm:grid-cols-4"
        align="center"
      />

      <SectionDivider />

      <div className="bg-slate-50/60">
        <ComplianceSection />
      </div>

      <SectionDivider />

      <ProcessTimeline
        eyebrow="Healthcare AI Workflow"
        heading="Eight stages between idea and clinical use"
        steps={workflowSteps}
        desktopColumnsClassName="grid-cols-8"
      />

      <SectionDivider />

      <div className="bg-slate-50/60">
        <IconGridSection
          eyebrow="Industries"
          heading="Across the healthcare ecosystem"
          items={healthcareIndustries.map((industry) => ({ icon: industry.icon, title: industry.name }))}
          columnsClassName="grid-cols-2 sm:grid-cols-4"
          align="center"
          iconShape="circle"
          iconTone="blue"
          headerAlign="center"
          maxWidthClassName="max-w-4xl"
        />
      </div>

      <SectionDivider />

      <IconGridSection
        eyebrow="Why Bigwigs"
        heading="Six reasons healthcare teams trust us"
        items={whyHealthcareReasons}
        columnsClassName="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        titleSize="md"
        headerAlign="center"
        maxWidthClassName="max-w-5xl"
      />

      <div className="bg-slate-50/60">
        <StatsBar
          stats={[
            { icon: ShieldCheck, value: 99, suffix: ".5%", label: "Annotation Quality" },
            { icon: Stethoscope, value: 50, suffix: "+", label: "Healthcare Projects" },
            { icon: ScanLine, value: 10, suffix: "M+", label: "Medical Images Processed" },
            { icon: Zap, value: 40, suffix: "%", label: "Faster AI Development" },
          ]}
        />
      </div>

      <SectionDivider />
      <SuccessStorySection />
      <SectionDivider />

      <div className="bg-slate-50/60">
        <FAQAccordion items={healthcareFaqItems} />
      </div>

      <ClosingCta
        heading="Let's build the future of intelligent healthcare"
        description="Whether you're developing AI-powered diagnostics, digital health platforms, or enterprise healthcare systems, Bigwigs Technologies helps you deliver secure, scalable, and intelligent healthcare solutions."
        primary={{ label: "Discuss Your Healthcare AI Project", href: "#contact" }}
        secondary={{ label: "Contact Our Healthcare Team", href: "#contact" }}
      />
    </main>
  );
}
