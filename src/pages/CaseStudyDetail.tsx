import { useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";
import { Rocket } from "lucide-react";
import CaseStudiesBackground from "@/components/caseStudies/CaseStudiesBackground";
import CaseStudyHero from "@/components/caseStudies/detail/CaseStudyHero";
import ProjectOverview from "@/components/caseStudies/detail/ProjectOverview";
import ClientProfile from "@/components/caseStudies/detail/ClientProfile";
import ChallengesSection from "@/components/caseStudies/detail/ChallengesSection";
import SolutionSection from "@/components/caseStudies/detail/SolutionSection";
import ProjectWorkflow from "@/components/caseStudies/detail/ProjectWorkflow";
import BusinessResults from "@/components/caseStudies/detail/BusinessResults";
import QualityMetrics from "@/components/caseStudies/detail/QualityMetrics";
import TechnologiesUsed from "@/components/caseStudies/detail/TechnologiesUsed";
import RelatedCaseStudies from "@/components/caseStudies/detail/RelatedCaseStudies";
import SectionDivider from "@/components/careers/SectionDivider";
import CTASection from "@/components/ui/CTASection";
import { getCaseStudyBySlug } from "@/components/caseStudies/caseStudiesData";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

export default function CaseStudyDetail() {
  const { slug } = useParams<{ slug: string }>();
  const study = slug ? getCaseStudyBySlug(slug) : undefined;

  useDocumentTitle(
    study ? `${study.title} | Bigwigs Technologies` : "Case Studies | Bigwigs Technologies"
  );

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [slug]);

  if (!study) {
    return <Navigate to="/case-studies" replace />;
  }

  return (
    <main className="relative w-full overflow-x-hidden">
      <CaseStudiesBackground />
      <CaseStudyHero study={study} />
      <SectionDivider />
      <ProjectOverview study={study} />
      <SectionDivider />
      <ClientProfile study={study} />
      <SectionDivider />
      <ChallengesSection study={study} />
      <SectionDivider />
      <SolutionSection study={study} />
      <SectionDivider />
      <ProjectWorkflow study={study} />
      <SectionDivider />
      <BusinessResults study={study} />
      <SectionDivider />
      <QualityMetrics study={study} />
      <SectionDivider />
      <TechnologiesUsed study={study} />
      <SectionDivider />
      <RelatedCaseStudies study={study} />
      <SectionDivider />
      <CTASection
        icon={Rocket}
        heading="Ready To Build Your Success Story?"
        description="Partner with Bigwigs Technologies to develop scalable, intelligent, and future-ready digital solutions tailored to your business."
        primaryAction={{ label: "Start Your Project", href: "#contact" }}
        secondaryAction={{ label: "Talk To Our Experts", href: "#contact", showArrow: true }}
      />
    </main>
  );
}
