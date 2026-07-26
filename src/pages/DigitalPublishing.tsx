import { FileStack, Building2, ShieldCheck, Zap } from "lucide-react";
import PageBackground from "@/components/servicePage/PageBackground";
import SectionDivider from "@/components/servicePage/SectionDivider";
import IconGridSection from "@/components/servicePage/IconGridSection";
import ProcessTimeline from "@/components/servicePage/ProcessTimeline";
import StatsBar from "@/components/servicePage/StatsBar";
import FAQAccordion from "@/components/servicePage/FAQAccordion";
import ClosingCta from "@/components/servicePage/ClosingCta";
import DigitalPublishingHero from "@/components/publishing/DigitalPublishingHero";
import EbookConversionSection from "@/components/publishing/EbookConversionSection";
import XmlStructuredContentSection from "@/components/publishing/XmlStructuredContentSection";
import TypesettingLayoutSection from "@/components/publishing/TypesettingLayoutSection";
import ContentDigitizationSection from "@/components/publishing/ContentDigitizationSection";
import ContentConversionSection from "@/components/publishing/ContentConversionSection";
import AccessibilitySection from "@/components/publishing/AccessibilitySection";
import SpecializedPublishingSection from "@/components/publishing/SpecializedPublishingSection";
import PublishingCaseStudy from "@/components/publishing/PublishingCaseStudy";
import { publishingServices } from "@/components/publishing/publishingServicesData";
import { publishingWorkflowSteps } from "@/components/publishing/publishingWorkflowData";
import { publishingIndustries } from "@/components/publishing/publishingIndustriesData";
import { whyPublishingReasons } from "@/components/publishing/whyBigwigsPublishingData";
import { publishingFaqItems } from "@/components/publishing/publishingFaqData";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

export default function DigitalPublishing() {
  useDocumentTitle("Digital Publishing Services | Bigwigs Technologies");

  return (
    <main className="relative w-full overflow-x-hidden">
      <PageBackground />
      <DigitalPublishingHero />
      <SectionDivider />

      <div className="bg-slate-50/60">
        <IconGridSection
          id="publishing-services"
          eyebrow="Our Digital Publishing Services"
          heading="Nine ways we help you publish for the digital era"
          description="Conversion, structuring, and production — one team across the full publishing pipeline."
          items={publishingServices}
          columnsClassName="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          iconTone="blue"
          hoverable
        />
      </div>

      <SectionDivider />
      <EbookConversionSection />
      <SectionDivider />

      <div className="bg-slate-50/60">
        <XmlStructuredContentSection />
      </div>

      <SectionDivider />
      <TypesettingLayoutSection />
      <SectionDivider />

      <div className="bg-slate-50/60">
        <ContentDigitizationSection />
      </div>

      <SectionDivider />
      <ContentConversionSection />
      <SectionDivider />

      <div className="bg-slate-50/60">
        <AccessibilitySection />
      </div>

      <SectionDivider />
      <SpecializedPublishingSection />
      <SectionDivider />

      <ProcessTimeline
        eyebrow="Digital Publishing Workflow"
        heading="Five stages between manuscript and delivery"
        steps={publishingWorkflowSteps}
        desktopColumnsClassName="grid-cols-5"
      />

      <SectionDivider />

      <div className="bg-slate-50/60">
        <IconGridSection
          eyebrow="Industries We Serve"
          heading="Publishing expertise across every sector"
          items={publishingIndustries.map((industry) => ({ icon: industry.icon, title: industry.name }))}
          columnsClassName="grid-cols-2 sm:grid-cols-4 lg:grid-cols-5"
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
        heading="Six reasons publishers trust our production teams"
        items={whyPublishingReasons}
        columnsClassName="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        titleSize="md"
        headerAlign="center"
        maxWidthClassName="max-w-5xl"
      />

      <StatsBar
        stats={[
          { icon: FileStack, value: 10, suffix: "M+", label: "Pages Processed" },
          { icon: Building2, value: 100, suffix: "+", label: "Publishing Projects" },
          { icon: ShieldCheck, value: 99, suffix: ".5%", label: "Quality Accuracy" },
          { icon: Zap, value: 40, suffix: "%", label: "Faster Publishing Cycles" },
        ]}
      />

      <SectionDivider />
      <PublishingCaseStudy />
      <SectionDivider />

      <div className="bg-slate-50/60">
        <FAQAccordion items={publishingFaqItems} />
      </div>

      <ClosingCta
        heading="Modernize your publishing for the digital era"
        description="Whether you're publishing books, journals, corporate reports, educational content, or enterprise documentation, Bigwigs Technologies delivers secure, scalable, and high-quality digital publishing solutions for the modern world."
        primary={{ label: "Discuss Your Publishing Project", href: "#contact" }}
        secondary={{ label: "Contact Our Publishing Experts", href: "#contact" }}
      />
    </main>
  );
}
