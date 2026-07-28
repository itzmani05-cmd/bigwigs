import IndustriesBackground from "@/components/industries/IndustriesBackground";
import GlowDivider from "@/components/industryPage/GlowDivider";
import CTASection from "@/components/ui/CTASection";
import IndustryHero from "@/components/industryPage/IndustryHero";
import ChallengesSection from "@/components/industryPage/ChallengesSection";
import SolutionsSection from "@/components/industryPage/SolutionsSection";
import NumberedListWorkflowSection from "@/components/industryPage/NumberedListWorkflowSection";
import SplitFeatureListSection from "@/components/industryPage/SplitFeatureListSection";
import DashboardPanelSection from "@/components/industryPage/DashboardPanelSection";
import ChecklistWorkflowSection from "@/components/industryPage/ChecklistWorkflowSection";
import WhoWeServeSection from "@/components/industryPage/WhoWeServeSection";
import BusinessBenefitsSection from "@/components/industryPage/BusinessBenefitsSection";
import WhyUsSection from "@/components/industryPage/WhyUsSection";
import UseCasesCarousel from "@/components/industryPage/UseCasesCarousel";
import CaseStudySection from "@/components/industryPage/CaseStudySection";
import ProcessSection from "@/components/industryPage/ProcessSection";
import FaqSection from "@/components/industryPage/FaqSection";
import {
  healthcareAiHero,
  healthcareAiChallenges,
  healthcareAiSolutions,
  medicalImageAnnotation,
  clinicalNlp,
  healthcareApplications,
  healthcareSoftware,
  complianceSecurity,
  healthcareAiWhoWeServe,
  healthcareAiBusinessBenefits,
  healthcareAiWhyUs,
  healthcareAiUseCases,
  healthcareAiCaseStudy,
  healthcareAiProcess,
  healthcareAiFaq,
  healthcareAiBottomCta,
} from "@/components/industryPage/content/healthcareAi";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

export default function HealthcareAI() {
  useDocumentTitle("Healthcare AI | Bigwigs Technologies");

  return (
    <main className="relative w-full overflow-x-hidden">
      <IndustriesBackground />
      <IndustryHero {...healthcareAiHero} />
      <GlowDivider />
      <ChallengesSection {...healthcareAiChallenges} />
      <GlowDivider />
      <SolutionsSection {...healthcareAiSolutions} />
      <GlowDivider />
      <NumberedListWorkflowSection eyebrow="Medical Image Annotation" {...medicalImageAnnotation} />
      <GlowDivider />
      <SplitFeatureListSection eyebrow="Clinical NLP" {...clinicalNlp} />
      <GlowDivider />
      <SplitFeatureListSection eyebrow="Healthcare AI Applications" {...healthcareApplications} />
      <GlowDivider />
      <DashboardPanelSection eyebrow="Healthcare Software" {...healthcareSoftware} />
      <GlowDivider />
      <ChecklistWorkflowSection eyebrow="Compliance & Security" {...complianceSecurity} />
      <GlowDivider />
      <WhoWeServeSection eyebrow="Industries" {...healthcareAiWhoWeServe} />
      <GlowDivider />
      <BusinessBenefitsSection eyebrow="Business Benefits" {...healthcareAiBusinessBenefits} />
      <GlowDivider />
      <WhyUsSection eyebrow="Why Bigwigs" {...healthcareAiWhyUs} />
      <GlowDivider />
      <UseCasesCarousel eyebrow="Sample Use Cases" {...healthcareAiUseCases} />
      <GlowDivider />
      <CaseStudySection eyebrow="Success Story" {...healthcareAiCaseStudy} />
      <GlowDivider />
      <ProcessSection eyebrow="Healthcare AI Workflow" {...healthcareAiProcess} />
      <GlowDivider />
      <FaqSection eyebrow="Frequently Asked Questions" {...healthcareAiFaq} />

      <CTASection {...healthcareAiBottomCta} />
    </main>
  );
}
