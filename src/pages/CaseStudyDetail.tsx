import { useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";
import { Rocket } from "lucide-react";
import CaseStudiesBackground from "@/components/caseStudies/CaseStudiesBackground";
import CaseStudyHero from "@/components/caseStudies/detail/CaseStudyHero";
import ProjectOverview from "@/components/caseStudies/detail/ProjectOverview";
import ProjectWorkflow from "@/components/caseStudies/detail/ProjectWorkflow";
import ServicesAndTools from "@/components/caseStudies/detail/ServicesAndTools";
import ProjectTeam from "@/components/caseStudies/detail/ProjectTeam";
import QualityMetrics from "@/components/caseStudies/detail/QualityMetrics";
import BusinessResults from "@/components/caseStudies/detail/BusinessResults";
import CaseStudyGallery from "@/components/caseStudies/detail/CaseStudyGallery";
import RelatedCaseStudies from "@/components/caseStudies/detail/RelatedCaseStudies";
import SectionDivider from "@/components/careers/SectionDivider";
import CTASection from "@/components/ui/CTASection";
import { getCaseStudyBySlug } from "@/components/caseStudies/caseStudiesData";

export default function CaseStudyDetail() {
  const { slug } = useParams<{ slug: string }>();
  const study = slug ? getCaseStudyBySlug(slug) : undefined;

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
      <ProjectWorkflow study={study} />
      <SectionDivider />
      <ServicesAndTools study={study} />
      <SectionDivider />
      <ProjectTeam study={study} />
      <SectionDivider />
      <QualityMetrics study={study} />
      <SectionDivider />
      <BusinessResults study={study} />
      <SectionDivider />
      <CaseStudyGallery study={study} />
      <SectionDivider />
      <RelatedCaseStudies study={study} />
      <SectionDivider />
      <CTASection
        icon={Rocket}
        heading="Ready To Build Your Own Success Story?"
        description="Partner with Bigwigs Technologies to build intelligent, scalable, and secure AI solutions tailored for your business."
        primaryAction={{ label: "Talk To Experts", href: "#contact" }}
        secondaryAction={{ label: "Request A Quote", href: "#contact", showArrow: true }}
      />
    </main>
  );
}
