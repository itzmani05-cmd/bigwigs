import { Languages, Mic, ShieldCheck, Zap } from "lucide-react";
import PageBackground from "@/components/servicePage/PageBackground";
import SectionDivider from "@/components/servicePage/SectionDivider";
import IconGridSection from "@/components/servicePage/IconGridSection";
import ProcessTimeline from "@/components/servicePage/ProcessTimeline";
import StatsBar from "@/components/servicePage/StatsBar";
import FAQAccordion from "@/components/servicePage/FAQAccordion";
import ClosingCta from "@/components/servicePage/ClosingCta";
import VoiceDataHero from "@/components/voicedata/VoiceDataHero";
import SpeechDataCollectionSection from "@/components/voicedata/SpeechDataCollectionSection";
import WakeWordSection from "@/components/voicedata/WakeWordSection";
import AccentsLanguagesSection from "@/components/voicedata/AccentsLanguagesSection";
import SpeechAnnotationSection from "@/components/voicedata/SpeechAnnotationSection";
import EmotionRecognitionSection from "@/components/voicedata/EmotionRecognitionSection";
import QualityAssuranceSection from "@/components/voicedata/QualityAssuranceSection";
import VoiceApplicationsSection from "@/components/voicedata/VoiceApplicationsSection";
import VoiceCaseStudy from "@/components/voicedata/VoiceCaseStudy";
import { voiceServices } from "@/components/voicedata/voiceServicesData";
import { voiceWorkflowSteps } from "@/components/voicedata/voiceWorkflowData";
import { voiceIndustries } from "@/components/voicedata/voiceIndustriesData";
import { whyVoiceReasons } from "@/components/voicedata/whyBigwigsVoiceData";
import { voiceFaqItems } from "@/components/voicedata/voiceFaqData";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

export default function VoiceDataCollection() {
  useDocumentTitle("Voice & Speech Data Collection | Bigwigs Technologies");

  return (
    <main className="relative w-full overflow-x-hidden">
      <PageBackground />
      <VoiceDataHero />
      <SectionDivider />

      <div className="bg-slate-50/60">
        <IconGridSection
          id="voice-ai-services"
          eyebrow="Our Voice AI Services"
          heading="Nine ways we help you build voice AI"
          description="Collection, annotation, and validation — one team across the full speech data pipeline."
          items={voiceServices}
          columnsClassName="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          iconTone="blue"
          hoverable
        />
      </div>

      <SectionDivider />
      <SpeechDataCollectionSection />
      <SectionDivider />

      <div className="bg-slate-50/60">
        <WakeWordSection />
      </div>

      <SectionDivider />
      <AccentsLanguagesSection />
      <SectionDivider />

      <div className="bg-slate-50/60">
        <SpeechAnnotationSection />
      </div>

      <SectionDivider />
      <EmotionRecognitionSection />
      <SectionDivider />

      <div className="bg-slate-50/60">
        <QualityAssuranceSection />
      </div>

      <SectionDivider />
      <VoiceApplicationsSection />
      <SectionDivider />

      <div className="bg-slate-50/60">
        <IconGridSection
          eyebrow="Industries We Serve"
          heading="Voice data expertise across every sector"
          items={voiceIndustries.map((industry) => ({ icon: industry.icon, title: industry.name }))}
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
        eyebrow="Voice Data Collection Process"
        heading="Five stages between requirement and delivery"
        steps={voiceWorkflowSteps}
        desktopColumnsClassName="grid-cols-5"
      />

      <SectionDivider />

      <IconGridSection
        eyebrow="Why Bigwigs"
        heading="Six reasons voice AI teams trust us"
        items={whyVoiceReasons}
        columnsClassName="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        titleSize="md"
        headerAlign="center"
        maxWidthClassName="max-w-5xl"
      />

      <StatsBar
        stats={[
          { icon: Languages, value: 50, suffix: "+", label: "Languages" },
          { icon: Mic, value: 10, suffix: "M+", label: "Voice Samples" },
          { icon: ShieldCheck, value: 99, suffix: ".5%", label: "Validation Accuracy" },
          { icon: Zap, value: 40, suffix: "%", label: "Faster AI Training" },
        ]}
      />

      <SectionDivider />
      <VoiceCaseStudy />
      <SectionDivider />

      <div className="bg-slate-50/60">
        <FAQAccordion items={voiceFaqItems} />
      </div>

      <ClosingCta
        heading="Build intelligent voice AI with enterprise speech data"
        description="Whether you're developing voice assistants, speech recognition platforms, multilingual conversational AI, or automotive voice systems, Bigwigs Technologies delivers secure, scalable, and high-quality speech datasets for enterprise AI innovation."
        primary={{ label: "Start Your Speech AI Project", href: "#contact" }}
        secondary={{ label: "Contact Our Voice Data Specialists", href: "#contact" }}
      />
    </main>
  );
}
