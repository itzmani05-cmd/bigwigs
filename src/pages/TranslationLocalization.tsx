import { Languages, Globe2, ShieldCheck, Zap } from "lucide-react";
import PageBackground from "@/components/servicePage/PageBackground";
import SectionDivider from "@/components/servicePage/SectionDivider";
import IconGridSection from "@/components/servicePage/IconGridSection";
import ProcessTimeline from "@/components/servicePage/ProcessTimeline";
import StatsBar from "@/components/servicePage/StatsBar";
import FAQAccordion from "@/components/servicePage/FAQAccordion";
import ClosingCta from "@/components/servicePage/ClosingCta";
import TranslationHero from "@/components/translation/TranslationHero";
import DocumentTranslationSection from "@/components/translation/DocumentTranslationSection";
import WebsiteLocalizationSection from "@/components/translation/WebsiteLocalizationSection";
import SoftwareLocalizationSection from "@/components/translation/SoftwareLocalizationSection";
import MarketingLocalizationSection from "@/components/translation/MarketingLocalizationSection";
import LanguagesSupportedSection from "@/components/translation/LanguagesSupportedSection";
import TranslationCaseStudy from "@/components/translation/TranslationCaseStudy";
import { languageServices } from "@/components/translation/languageServicesData";
import { technicalDomains } from "@/components/translation/technicalTranslationData";
import { translationIndustries } from "@/components/translation/industriesTranslationData";
import { processSteps } from "@/components/translation/localizationProcessData";
import { whyTranslationReasons } from "@/components/translation/whyBigwigsTranslationData";
import { translationFaqItems } from "@/components/translation/translationFaqData";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

export default function TranslationLocalization() {
  useDocumentTitle("Translation & Localization | Bigwigs Technologies");

  return (
    <main className="relative w-full overflow-x-hidden">
      <PageBackground />
      <TranslationHero />
      <SectionDivider />

      <div className="bg-slate-50/60">
        <IconGridSection
          id="language-services"
          eyebrow="Our Language Services"
          heading="Eight ways we help you go multilingual"
          description="One team across content, software, and marketing — not eight separate vendors."
          items={languageServices}
          columnsClassName="grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
          iconTone="blue"
          hoverable
        />
      </div>

      <SectionDivider />
      <DocumentTranslationSection />
      <SectionDivider />

      <div className="bg-slate-50/60">
        <WebsiteLocalizationSection />
      </div>

      <SectionDivider />
      <SoftwareLocalizationSection />
      <SectionDivider />

      <div className="bg-slate-50/60">
        <MarketingLocalizationSection />
      </div>

      <SectionDivider />

      <IconGridSection
        eyebrow="Technical Translation"
        heading="Precision where mistakes aren't an option"
        description="Engineering and scientific content translated by linguists who understand the subject matter."
        items={technicalDomains}
        columnsClassName="grid-cols-2 sm:grid-cols-3 lg:grid-cols-6"
        align="center"
        iconShape="circle"
        headerAlign="center"
        maxWidthClassName="max-w-4xl"
      />

      <SectionDivider />

      <div className="bg-slate-50/60">
        <LanguagesSupportedSection />
      </div>

      <SectionDivider />

      <IconGridSection
        eyebrow="Industries We Serve"
        heading="Language expertise across every sector"
        items={translationIndustries.map((industry) => ({ icon: industry.icon, title: industry.name }))}
        columnsClassName="grid-cols-3 sm:grid-cols-4 lg:grid-cols-6"
        align="center"
        iconShape="circle"
        iconTone="blue"
        headerAlign="center"
        maxWidthClassName="max-w-5xl"
      />

      <SectionDivider />

      <ProcessTimeline
        eyebrow="Localization Process"
        heading="Five stages. Every language, every time."
        steps={processSteps}
        desktopColumnsClassName="grid-cols-5"
      />

      <SectionDivider />

      <div className="bg-slate-50/60">
        <IconGridSection
          eyebrow="Why Bigwigs"
          heading="Six reasons global teams trust us"
          items={whyTranslationReasons}
          columnsClassName="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          titleSize="md"
          headerAlign="center"
          maxWidthClassName="max-w-5xl"
        />

        <StatsBar
          stats={[
            { icon: Languages, value: 50, suffix: "+", label: "Languages" },
            { icon: Globe2, value: 100, suffix: "+", label: "Global Projects" },
            { icon: ShieldCheck, value: 99, suffix: ".5%", label: "Translation Accuracy" },
            { icon: Zap, value: 40, suffix: "%", label: "Faster Localization" },
          ]}
        />
      </div>

      <SectionDivider />
      <TranslationCaseStudy />
      <SectionDivider />

      <div className="bg-slate-50/60">
        <FAQAccordion items={translationFaqItems} />
      </div>

      <ClosingCta
        heading="Expand beyond borders with confidence"
        description="Whether you're launching multilingual software, translating enterprise documentation, or localizing your digital products, Bigwigs Technologies helps you communicate with audiences worldwide."
        primary={{ label: "Request Translation Quote", href: "#contact" }}
        secondary={{ label: "Speak With Language Experts", href: "#contact" }}
      />
    </main>
  );
}
