import { FileCheck2 } from "lucide-react";
import CaseStudiesBackground from "@/components/caseStudies/CaseStudiesBackground";
import CaseStudiesHero from "@/components/caseStudies/CaseStudiesHero";
import FeaturedCaseStudies from "@/components/caseStudies/FeaturedCaseStudies";
import SectionDivider from "@/components/careers/SectionDivider";
import CTASection from "@/components/ui/CTASection";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

export default function CaseStudies() {
  useDocumentTitle("Case Studies | Bigwigs Technologies");

  return (
    <main className="relative w-full overflow-x-hidden">
      <CaseStudiesBackground />
      <CaseStudiesHero />
      <SectionDivider />
      <FeaturedCaseStudies />
      <SectionDivider />
      <CTASection
        icon={FileCheck2}
        heading="Ready To Build Your Own Success Story?"
        description="Partner with Bigwigs Technologies to build intelligent, scalable, and secure AI solutions tailored for your business."
        primaryAction={{ label: "Talk To Experts", href: "#contact" }}
        secondaryAction={{ label: "Request A Quote", href: "#contact", showArrow: true }}
      />
    </main>
  );
}
