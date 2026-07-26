import { ShieldCheck, Boxes, Building2, Zap } from "lucide-react";
import PageBackground from "@/components/servicePage/PageBackground";
import SectionDivider from "@/components/servicePage/SectionDivider";
import IconGridSection from "@/components/servicePage/IconGridSection";
import ProcessTimeline from "@/components/servicePage/ProcessTimeline";
import StatsBar from "@/components/servicePage/StatsBar";
import FAQAccordion from "@/components/servicePage/FAQAccordion";
import ClosingCta from "@/components/servicePage/ClosingCta";
import AiAnnotationHero from "@/components/annotation/AiAnnotationHero";
import WhyAnnotationMattersSection from "@/components/annotation/WhyAnnotationMattersSection";
import ImageAnnotationSection from "@/components/annotation/ImageAnnotationSection";
import VideoAnnotationSection from "@/components/annotation/VideoAnnotationSection";
import LidarAnnotationSection from "@/components/annotation/LidarAnnotationSection";
import AdvancedAnnotationSection from "@/components/annotation/AdvancedAnnotationSection";
import OcrDocumentAiSection from "@/components/annotation/OcrDocumentAiSection";
import DataLabelingValidationSection from "@/components/annotation/DataLabelingValidationSection";
import AnnotationCaseStudy from "@/components/annotation/AnnotationCaseStudy";
import { annotationServices } from "@/components/annotation/annotationServicesData";
import { annotationWorkflowSteps } from "@/components/annotation/annotationWorkflowData";
import { annotationIndustries } from "@/components/annotation/annotationIndustriesData";
import { whyAnnotationReasons } from "@/components/annotation/whyBigwigsAnnotationData";
import { annotationFaqItems } from "@/components/annotation/annotationFaqData";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

export default function AiDataAnnotation() {
  useDocumentTitle("AI Data Annotation Services | Bigwigs Technologies");

  return (
    <main className="relative w-full overflow-x-hidden">
      <PageBackground />
      <AiAnnotationHero />
      <SectionDivider />

      <div className="bg-slate-50/60">
        <WhyAnnotationMattersSection />
      </div>

      <SectionDivider />

      <IconGridSection
        id="annotation-services"
        eyebrow="Our AI Annotation Services"
        heading="Nine ways we help you train reliable AI"
        description="Image, video, LiDAR, and document annotation — one team across the full pipeline."
        items={annotationServices}
        columnsClassName="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        iconTone="blue"
        hoverable
      />

      <SectionDivider />
      <ImageAnnotationSection />
      <SectionDivider />

      <div className="bg-slate-50/60">
        <VideoAnnotationSection />
      </div>

      <SectionDivider />
      <LidarAnnotationSection />
      <SectionDivider />

      <div className="bg-slate-50/60">
        <AdvancedAnnotationSection />
      </div>

      <SectionDivider />
      <OcrDocumentAiSection />
      <SectionDivider />

      <div className="bg-slate-50/60">
        <DataLabelingValidationSection />
      </div>

      <SectionDivider />

      <ProcessTimeline
        eyebrow="Our Workflow"
        heading="Seven stages between raw data and a trained model"
        steps={annotationWorkflowSteps}
        desktopColumnsClassName="grid-cols-7"
      />

      <SectionDivider />

      <div className="bg-slate-50/60">
        <IconGridSection
          eyebrow="Industries We Serve"
          heading="Annotation expertise across every sector"
          items={annotationIndustries.map((industry) => ({ icon: industry.icon, title: industry.name }))}
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
        heading="Six reasons AI teams trust our annotation teams"
        items={whyAnnotationReasons}
        columnsClassName="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        titleSize="md"
        headerAlign="center"
        maxWidthClassName="max-w-5xl"
      />

      <StatsBar
        stats={[
          { icon: ShieldCheck, value: 99, suffix: ".5%", label: "Annotation Accuracy" },
          { icon: Boxes, value: 50, suffix: "M+", label: "Objects Annotated" },
          { icon: Building2, value: 100, suffix: "+", label: "Enterprise AI Projects" },
          { icon: Zap, value: 40, suffix: "%", label: "Faster Model Training" },
        ]}
      />

      <SectionDivider />
      <AnnotationCaseStudy />
      <SectionDivider />

      <div className="bg-slate-50/60">
        <FAQAccordion items={annotationFaqItems} />
      </div>

      <ClosingCta
        heading="Accelerate AI innovation with enterprise annotation"
        description="Whether you're building Computer Vision systems, Autonomous Driving platforms, Healthcare AI, Robotics, Document AI, or Large Language Models, Bigwigs Technologies delivers secure, scalable, and enterprise-grade annotation services that power the next generation of Artificial Intelligence."
        primary={{ label: "Start Your AI Annotation Project", href: "#contact" }}
        secondary={{ label: "Talk To AI Specialists", href: "#contact" }}
      />
    </main>
  );
}
