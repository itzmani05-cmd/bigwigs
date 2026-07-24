import { Globe2 } from "lucide-react";
import IndustriesBackground from "@/components/industries/IndustriesBackground";
import IndustriesHero from "@/components/industries/IndustriesHero";
import IndustriesGrid from "@/components/industries/IndustriesGrid";
import AIExpertiseWheel from "@/components/industries/AIExpertiseWheel";
import SuccessStories from "@/components/industries/SuccessStories";
import WhyChooseIndustries from "@/components/industries/WhyChooseIndustries";
import IndustriesProcess from "@/components/industries/IndustriesProcess";
import IndustriesStats from "@/components/industries/IndustriesStats";
import IndustriesFAQ from "@/components/industries/IndustriesFAQ";
import SectionDivider from "@/components/careers/SectionDivider";
import CTASection from "@/components/ui/CTASection";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

export default function Industries() {
  useDocumentTitle("Industries | Bigwigs Technologies");

  return (
    <main className="relative w-full overflow-x-hidden">
      <IndustriesBackground />
      <IndustriesHero />
      <SectionDivider />
      <IndustriesGrid />
      <SectionDivider />
      <AIExpertiseWheel />
      <SectionDivider />
      <SuccessStories />
      <SectionDivider />
      <WhyChooseIndustries />
      <SectionDivider />
      <IndustriesProcess />
      <SectionDivider />
      <IndustriesStats />
      <SectionDivider />
      <IndustriesFAQ />
      <CTASection
        icon={Globe2}
        heading="Transform Your Industry With AI"
        description="Partner with Bigwigs Technologies to build intelligent, scalable, and secure AI solutions tailored for your business."
        primaryAction={{ label: "Get Started", href: "#contact" }}
        secondaryAction={{ label: "Talk To Experts", href: "#contact", showArrow: true }}
      />
    </main>
  );
}
