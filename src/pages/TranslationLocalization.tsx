import IndustriesBackground from "@/components/industries/IndustriesBackground";
import GlowDivider from "@/components/industryPage/GlowDivider";
import CTASection from "@/components/ui/CTASection";
import IndustryHero from "@/components/industryPage/IndustryHero";
import SolutionsSection from "@/components/industryPage/SolutionsSection";
import TwoFeatureCardsSection from "@/components/industryPage/TwoFeatureCardsSection";
import ChecklistWorkflowSection from "@/components/industryPage/ChecklistWorkflowSection";
import MarqueeWorkflowSection from "@/components/industryPage/MarqueeWorkflowSection";
import NumberedListWorkflowSection from "@/components/industryPage/NumberedListWorkflowSection";
import WhoWeServeSection from "@/components/industryPage/WhoWeServeSection";
import ProcessSection from "@/components/industryPage/ProcessSection";
import BusinessBenefitsSection from "@/components/industryPage/BusinessBenefitsSection";
import CaseStudySection from "@/components/industryPage/CaseStudySection";
import FaqSection from "@/components/industryPage/FaqSection";
import {
  translationHero,
  translationSolutions,
  documentAndSoftwareLocalization,
  websiteLocalization,
  marketingLocalization,
  technicalTranslation,
  languagesSupported,
  translationWhoWeServe,
  translationProcess,
  translationBusinessBenefits,
  translationCaseStudy,
  translationFaq,
  translationBottomCta,
} from "@/components/industryPage/content/translationLocalization";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

export default function TranslationLocalization() {
  useDocumentTitle("Translation & Localization | Bigwigs Technologies");

  return (
    <main className="relative w-full overflow-x-hidden">
      <IndustriesBackground />
      <IndustryHero {...translationHero} />
      <GlowDivider />
      <SolutionsSection {...translationSolutions} />
      <GlowDivider />
      <TwoFeatureCardsSection {...documentAndSoftwareLocalization} />
      <GlowDivider />
      <ChecklistWorkflowSection {...websiteLocalization} />
      <GlowDivider />
      <MarqueeWorkflowSection {...marketingLocalization} />
      <GlowDivider />
      <NumberedListWorkflowSection {...technicalTranslation} />
      <GlowDivider />
      <TwoFeatureCardsSection {...languagesSupported} />
      <GlowDivider />
      <WhoWeServeSection {...translationWhoWeServe} />
      <GlowDivider />
      <ProcessSection {...translationProcess} />
      <GlowDivider />
      <BusinessBenefitsSection {...translationBusinessBenefits} />
      <GlowDivider />
      <CaseStudySection eyebrow="Case Study" {...translationCaseStudy} />
      <GlowDivider />
      <FaqSection eyebrow="Frequently Asked Questions" {...translationFaq} />

      <CTASection {...translationBottomCta} />
    </main>
  );
}
