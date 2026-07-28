import IndustriesBackground from "@/components/industries/IndustriesBackground";
import GlowDivider from "@/components/industryPage/GlowDivider";
import CTASection from "@/components/ui/CTASection";
import IndustryHero from "@/components/industryPage/IndustryHero";
import ChallengesSection from "@/components/industryPage/ChallengesSection";
import SolutionsSection from "@/components/industryPage/SolutionsSection";
import NumberedListWorkflowSection from "@/components/industryPage/NumberedListWorkflowSection";
import SplitFeatureListSection from "@/components/industryPage/SplitFeatureListSection";
import ChecklistWorkflowSection from "@/components/industryPage/ChecklistWorkflowSection";
import TwoFeatureCardsSection from "@/components/industryPage/TwoFeatureCardsSection";
import MarqueeWorkflowSection from "@/components/industryPage/MarqueeWorkflowSection";
import WhoWeServeSection from "@/components/industryPage/WhoWeServeSection";
import BusinessBenefitsSection from "@/components/industryPage/BusinessBenefitsSection";
import WhyUsSection from "@/components/industryPage/WhyUsSection";
import UseCasesCarousel from "@/components/industryPage/UseCasesCarousel";
import CaseStudySection from "@/components/industryPage/CaseStudySection";
import ProcessSection from "@/components/industryPage/ProcessSection";
import FaqSection from "@/components/industryPage/FaqSection";
import {
  softwareHero,
  softwareChallenges,
  softwareSolutions,
  enterpriseSystems,
  webAndDesign,
  mobileDevelopment,
  integrationAndCloud,
  qualityAssurance,
  softwareWhoWeServe,
  softwareBusinessBenefits,
  softwareWhyUs,
  softwareUseCases,
  softwareCaseStudy,
  softwareProcess,
  softwareFaq,
  softwareBottomCta,
} from "@/components/industryPage/content/softwareDevelopment";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

export default function SoftwareDevelopment() {
  useDocumentTitle("Software Development | Bigwigs Technologies");

  return (
    <main className="relative w-full overflow-x-hidden">
      <IndustriesBackground />
      <IndustryHero {...softwareHero} />
      <GlowDivider />
      <ChallengesSection {...softwareChallenges} />
      <GlowDivider />
      <SolutionsSection {...softwareSolutions} />
      <GlowDivider />
      <NumberedListWorkflowSection eyebrow="Enterprise Systems" {...enterpriseSystems} />
      <GlowDivider />
      <SplitFeatureListSection eyebrow="Web Development & UI/UX" {...webAndDesign} />
      <GlowDivider />
      <ChecklistWorkflowSection eyebrow="Mobile Development" {...mobileDevelopment} />
      <GlowDivider />
      <TwoFeatureCardsSection eyebrow="API Integration & Cloud DevOps" {...integrationAndCloud} />
      <GlowDivider />
      <MarqueeWorkflowSection eyebrow="Quality Assurance" {...qualityAssurance} />
      <GlowDivider />
      <WhoWeServeSection eyebrow="Industries We Serve" {...softwareWhoWeServe} />
      <GlowDivider />
      <BusinessBenefitsSection eyebrow="Business Benefits" {...softwareBusinessBenefits} />
      <GlowDivider />
      <WhyUsSection eyebrow="Why Choose Bigwigs?" {...softwareWhyUs} />
      <GlowDivider />
      <UseCasesCarousel eyebrow="Sample Use Cases" {...softwareUseCases} />
      <GlowDivider />
      <CaseStudySection eyebrow="Case Study" {...softwareCaseStudy} />
      <GlowDivider />
      <ProcessSection eyebrow="Software Development Life Cycle" {...softwareProcess} />
      <GlowDivider />
      <FaqSection eyebrow="Frequently Asked Questions" {...softwareFaq} />

      <CTASection {...softwareBottomCta} />
    </main>
  );
}
