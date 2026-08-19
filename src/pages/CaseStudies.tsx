import { FileCheck2 } from "lucide-react";
import CaseStudiesHero from "@/components/caseStudies/CaseStudiesHero";
import FeaturedCaseStudies from "@/components/caseStudies/FeaturedCaseStudies";
import SectionDivider from "@/components/careers/SectionDivider";
import CTASection from "@/components/ui/CTASection";
import SEO from "@/components/seo/SEO";
import { getRouteMeta } from "@/lib/seo/routes";

export default function CaseStudies() {
  const meta = getRouteMeta("/case-studies");

  return (
    <main className="relative w-full overflow-x-hidden">
      <SEO title={meta.title} description={meta.description} canonical={meta.path} />
      <CaseStudiesHero />
      <FeaturedCaseStudies />
      <SectionDivider />
      <CTASection
        icon={FileCheck2}
        heading="Ready To Build Your Own Success Story?"
        description="Partner with Bigwigs Technologies to build intelligent, scalable, and secure AI solutions tailored for your business."
        primaryAction={{ label: "Talk To Experts", href: "/demo" }}
        secondaryAction={{ label: "Request A Quote", href: "/demo", showArrow: true }}
      />
    </main>
  );
}
