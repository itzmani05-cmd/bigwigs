import { ShieldCheck, Languages, Clock, Building2 } from "lucide-react";
import PageBackground from "@/components/servicePage/PageBackground";
import SectionDivider from "@/components/servicePage/SectionDivider";
import IconGridSection from "@/components/servicePage/IconGridSection";
import ProcessTimeline from "@/components/servicePage/ProcessTimeline";
import StatsBar from "@/components/servicePage/StatsBar";
import FAQAccordion from "@/components/servicePage/FAQAccordion";
import ClosingCta from "@/components/servicePage/ClosingCta";
import TranscriptionHero from "@/components/transcription/TranscriptionHero";
import AudioTranscriptionSection from "@/components/transcription/AudioTranscriptionSection";
import VideoTranscriptionSection from "@/components/transcription/VideoTranscriptionSection";
import MedicalLegalSection from "@/components/transcription/MedicalLegalSection";
import BusinessResearchSection from "@/components/transcription/BusinessResearchSection";
import CaptioningSection from "@/components/transcription/CaptioningSection";
import LanguagesSupportedSection from "@/components/transcription/LanguagesSupportedSection";
import TranscriptionCaseStudy from "@/components/transcription/TranscriptionCaseStudy";
import { transcriptionServices } from "@/components/transcription/transcriptionServicesData";
import { aiAssistedSteps } from "@/components/transcription/aiAssistedData";
import { transcriptionWorkflowSteps } from "@/components/transcription/transcriptionWorkflowData";
import { transcriptionIndustries } from "@/components/transcription/transcriptionIndustriesData";
import { whyTranscriptionReasons } from "@/components/transcription/whyBigwigsTranscriptionData";
import { transcriptionFaqItems } from "@/components/transcription/transcriptionFaqData";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

export default function TranscriptionServices() {
  useDocumentTitle("Transcription Services | Bigwigs Technologies");

  return (
    <main className="relative w-full overflow-x-hidden">
      <PageBackground />
      <TranscriptionHero />
      <SectionDivider />

      <div className="bg-slate-50/60">
        <IconGridSection
          id="transcription-services"
          eyebrow="Our Transcription Services"
          heading="Nine ways we turn speech into text"
          description="One team across audio, video, medical, legal, and multilingual transcription — not nine separate vendors."
          items={transcriptionServices}
          columnsClassName="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          iconTone="blue"
          hoverable
        />
      </div>

      <SectionDivider />
      <AudioTranscriptionSection />
      <SectionDivider />

      <div className="bg-slate-50/60">
        <VideoTranscriptionSection />
      </div>

      <SectionDivider />
      <MedicalLegalSection />
      <SectionDivider />

      <div className="bg-slate-50/60">
        <BusinessResearchSection />
      </div>

      <SectionDivider />
      <CaptioningSection />
      <SectionDivider />

      <ProcessTimeline
        eyebrow="AI-Assisted Transcription"
        heading="Speech recognition, plus a human who checks the work"
        steps={aiAssistedSteps}
        desktopColumnsClassName="grid-cols-5"
      />

      <SectionDivider />

      <div className="bg-slate-50/60">
        <LanguagesSupportedSection />
      </div>

      <SectionDivider />

      <IconGridSection
        eyebrow="Industries We Serve"
        heading="Transcription expertise across every sector"
        items={transcriptionIndustries.map((industry) => ({ icon: industry.icon, title: industry.name }))}
        columnsClassName="grid-cols-3 sm:grid-cols-4 lg:grid-cols-6"
        align="center"
        iconShape="circle"
        iconTone="blue"
        headerAlign="center"
        maxWidthClassName="max-w-5xl"
      />

      <SectionDivider />

      <ProcessTimeline
        eyebrow="Transcription Workflow"
        heading="Four stages between raw audio and final delivery"
        steps={transcriptionWorkflowSteps}
        desktopColumnsClassName="grid-cols-4"
      />

      <SectionDivider />

      <div className="bg-slate-50/60">
        <IconGridSection
          eyebrow="Why Bigwigs"
          heading="Six reasons enterprises trust us with every recording"
          items={whyTranscriptionReasons}
          columnsClassName="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          titleSize="md"
          headerAlign="center"
          maxWidthClassName="max-w-5xl"
        />

        <StatsBar
          stats={[
            { icon: ShieldCheck, value: 99, suffix: ".5%", label: "Accuracy" },
            { icon: Languages, value: 50, suffix: "+", label: "Languages" },
            { icon: Clock, value: 24, suffix: " Hour", label: "Fast Turnaround" },
            { icon: Building2, value: 100, suffix: "+", label: "Enterprise Clients" },
          ]}
        />
      </div>

      <SectionDivider />
      <TranscriptionCaseStudy />
      <SectionDivider />

      <div className="bg-slate-50/60">
        <FAQAccordion items={transcriptionFaqItems} />
      </div>

      <ClosingCta
        heading="Turn voice into business intelligence"
        description="Whether you need multilingual transcription, medical documentation, legal transcripts, AI training datasets, or video captions, Bigwigs Technologies delivers secure, scalable, and enterprise-ready transcription solutions."
        primary={{ label: "Request a Transcription Quote", href: "#contact" }}
        secondary={{ label: "Talk To Our Language Experts", href: "#contact" }}
      />
    </main>
  );
}
