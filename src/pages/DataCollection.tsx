import { Database, Globe2, ShieldCheck, Zap } from "lucide-react";
import PageBackground from "@/components/servicePage/PageBackground";
import SectionDivider from "@/components/servicePage/SectionDivider";
import IconGridSection from "@/components/servicePage/IconGridSection";
import ProcessTimeline from "@/components/servicePage/ProcessTimeline";
import StatsBar from "@/components/servicePage/StatsBar";
import FAQAccordion from "@/components/servicePage/FAQAccordion";
import ClosingCta from "@/components/servicePage/ClosingCta";
import DataCollectionHero from "@/components/datacollection/DataCollectionHero";
import ImageDataCollectionSection from "@/components/datacollection/ImageDataCollectionSection";
import VideoDataCollectionSection from "@/components/datacollection/VideoDataCollectionSection";
import AudioSpeechDataSection from "@/components/datacollection/AudioSpeechDataSection";
import TextDocumentDatasetsSection from "@/components/datacollection/TextDocumentDatasetsSection";
import MultilingualDatasetsSection from "@/components/datacollection/MultilingualDatasetsSection";
import SyntheticDataSection from "@/components/datacollection/SyntheticDataSection";
import DataPreparationSection from "@/components/datacollection/DataPreparationSection";
import ParticipantRecruitmentSection from "@/components/datacollection/ParticipantRecruitmentSection";
import DataCollectionCaseStudy from "@/components/datacollection/DataCollectionCaseStudy";
import { dataServices } from "@/components/datacollection/dataServicesData";
import { dataWorkflowSteps } from "@/components/datacollection/dataWorkflowData";
import { dataIndustries } from "@/components/datacollection/dataIndustriesData";
import { whyDataReasons } from "@/components/datacollection/whyBigwigsDataData";
import { dataFaqItems } from "@/components/datacollection/dataFaqData";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

export default function DataCollection() {
  useDocumentTitle("Data Collection & AI Datasets | Bigwigs Technologies");

  return (
    <main className="relative w-full overflow-x-hidden">
      <PageBackground />
      <DataCollectionHero />
      <SectionDivider />

      <div className="bg-slate-50/60">
        <IconGridSection
          id="data-services"
          eyebrow="Our Data Collection Services"
          heading="Nine ways we help you build AI-ready datasets"
          description="Collection, preparation, and recruitment — one team across the full dataset pipeline."
          items={dataServices}
          columnsClassName="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          iconTone="blue"
          hoverable
        />
      </div>

      <SectionDivider />
      <ImageDataCollectionSection />
      <SectionDivider />

      <div className="bg-slate-50/60">
        <VideoDataCollectionSection />
      </div>

      <SectionDivider />
      <AudioSpeechDataSection />
      <SectionDivider />

      <div className="bg-slate-50/60">
        <TextDocumentDatasetsSection />
      </div>

      <SectionDivider />
      <MultilingualDatasetsSection />
      <SectionDivider />

      <div className="bg-slate-50/60">
        <SyntheticDataSection />
      </div>

      <SectionDivider />
      <DataPreparationSection />
      <SectionDivider />

      <div className="bg-slate-50/60">
        <ParticipantRecruitmentSection />
      </div>

      <SectionDivider />

      <IconGridSection
        eyebrow="Industries We Serve"
        heading="Dataset expertise across every sector"
        items={dataIndustries.map((industry) => ({ icon: industry.icon, title: industry.name }))}
        columnsClassName="grid-cols-3 sm:grid-cols-4 lg:grid-cols-6"
        align="center"
        iconShape="circle"
        iconTone="blue"
        headerAlign="center"
        maxWidthClassName="max-w-5xl"
      />

      <SectionDivider />

      <ProcessTimeline
        eyebrow="Data Collection Workflow"
        heading="Five stages between planning and delivery"
        steps={dataWorkflowSteps}
        desktopColumnsClassName="grid-cols-5"
      />

      <SectionDivider />

      <div className="bg-slate-50/60">
        <IconGridSection
          eyebrow="Why Bigwigs"
          heading="Six reasons AI teams trust us with their data"
          items={whyDataReasons}
          columnsClassName="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          titleSize="md"
          headerAlign="center"
          maxWidthClassName="max-w-5xl"
        />

        <StatsBar
          stats={[
            { icon: Database, value: 100, suffix: "M+", label: "Data Points Collected" },
            { icon: Globe2, value: 50, suffix: "+", label: "Countries" },
            { icon: ShieldCheck, value: 99, suffix: ".5%", label: "Quality Validation" },
            { icon: Zap, value: 40, suffix: "%", label: "Faster AI Development" },
          ]}
        />
      </div>

      <SectionDivider />
      <DataCollectionCaseStudy />
      <SectionDivider />

      <div className="bg-slate-50/60">
        <FAQAccordion items={dataFaqItems} />
      </div>

      <ClosingCta
        heading="Power your AI with enterprise data"
        description="Whether you're building Computer Vision, Large Language Models, Speech AI, Document AI, or enterprise machine learning systems, Bigwigs Technologies delivers secure, scalable, and production-ready datasets to accelerate AI innovation."
        primary={{ label: "Start Your Data Collection Project", href: "#contact" }}
        secondary={{ label: "Talk To AI Data Specialists", href: "#contact" }}
      />
    </main>
  );
}
