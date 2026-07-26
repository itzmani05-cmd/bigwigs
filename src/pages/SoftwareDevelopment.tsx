import { Zap, ShieldCheck, Globe2, Rocket } from "lucide-react";
import PageBackground from "@/components/servicePage/PageBackground";
import SectionDivider from "@/components/servicePage/SectionDivider";
import IconGridSection from "@/components/servicePage/IconGridSection";
import ProcessTimeline from "@/components/servicePage/ProcessTimeline";
import StatsBar from "@/components/servicePage/StatsBar";
import FAQAccordion from "@/components/servicePage/FAQAccordion";
import ClosingCta from "@/components/servicePage/ClosingCta";
import SoftwareHero from "@/components/software/SoftwareHero";
import CustomSoftwareSection from "@/components/software/CustomSoftwareSection";
import TechStackSection from "@/components/software/TechStackSection";
import WebDevelopmentSection from "@/components/software/WebDevelopmentSection";
import MobileDevelopmentSection from "@/components/software/MobileDevelopmentSection";
import EnterpriseSolutionsSection from "@/components/software/EnterpriseSolutionsSection";
import ApiIntegrationSection from "@/components/software/ApiIntegrationSection";
import CloudDevOpsSection from "@/components/software/CloudDevOpsSection";
import UiUxSection from "@/components/software/UiUxSection";
import QualityAssuranceSection from "@/components/software/QualityAssuranceSection";
import { capabilities } from "@/components/software/capabilitiesData";
import { sdlcSteps } from "@/components/software/sdlcData";
import { softwareIndustries } from "@/components/software/softwareIndustriesData";
import { whyReasons } from "@/components/software/whySoftwareData";
import { softwareFaqItems } from "@/components/software/softwareFaqData";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

export default function SoftwareDevelopment() {
  useDocumentTitle("Software Development | Bigwigs Technologies");

  return (
    <main className="relative w-full overflow-x-hidden">
      <PageBackground />
      <SoftwareHero />
      <SectionDivider />

      <div className="bg-slate-50/60">
        <IconGridSection
          id="capabilities"
          eyebrow="Our Capabilities"
          heading="Ten disciplines. One engineering practice."
          description="Every capability below ships from the same team — no handoffs between vendors, no gaps between disciplines."
          items={capabilities}
          columnsClassName="grid-cols-1 sm:grid-cols-2 lg:grid-cols-5"
        />
      </div>

      <SectionDivider />
      <CustomSoftwareSection />
      <SectionDivider />

      <div className="bg-slate-50/60">
        <TechStackSection />
      </div>

      <SectionDivider />
      <WebDevelopmentSection />
      <SectionDivider />

      <div className="bg-slate-50/60">
        <MobileDevelopmentSection />
      </div>

      <SectionDivider />
      <EnterpriseSolutionsSection />
      <SectionDivider />

      <div className="bg-slate-50/60">
        <ApiIntegrationSection />
        <CloudDevOpsSection />
      </div>

      <SectionDivider />
      <UiUxSection />
      <SectionDivider />

      <div className="bg-slate-50/60">
        <QualityAssuranceSection />
      </div>

      <SectionDivider />

      <ProcessTimeline
        eyebrow="Software Development Life Cycle"
        heading="Seven stages. No guesswork."
        steps={sdlcSteps}
        desktopColumnsClassName="grid-cols-7"
      />

      <SectionDivider />

      <div className="bg-slate-50/60">
        <IconGridSection
          eyebrow="Industries"
          heading="Software that speaks your industry's language"
          items={softwareIndustries.map((industry) => ({ icon: industry.icon, title: industry.name }))}
          columnsClassName="grid-cols-3 lg:grid-cols-9"
          align="center"
          iconShape="circle"
          headerAlign="center"
          maxWidthClassName="max-w-4xl"
        />
      </div>

      <SectionDivider />

      <IconGridSection
        eyebrow="Why Bigwigs"
        heading="Six reasons enterprises keep coming back"
        items={whyReasons}
        columnsClassName="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        titleSize="md"
        headerAlign="center"
        maxWidthClassName="max-w-5xl"
      />

      <StatsBar
        stats={[
          { icon: Zap, value: 40, suffix: "%", label: "Faster Development" },
          { icon: ShieldCheck, value: 99, suffix: ".5%", label: "Quality" },
          { icon: Globe2, value: 10, suffix: "+", label: "Industries" },
          { icon: Rocket, value: 100, suffix: "+", label: "Projects" },
        ]}
      />

      <SectionDivider />

      <div className="bg-slate-50/60">
        <FAQAccordion items={softwareFaqItems} />
      </div>

      <ClosingCta
        heading={
          <>
            Let&apos;s build software that powers the future
          </>
        }
        description="Whether you're launching a startup, modernizing enterprise applications, or integrating AI into your business, Bigwigs Technologies delivers secure, scalable, and intelligent software solutions."
        primary={{ label: "Start Your Software Project", href: "#contact" }}
        secondary={{ label: "Speak With Our Engineering Team", href: "#contact" }}
      />
    </main>
  );
}
