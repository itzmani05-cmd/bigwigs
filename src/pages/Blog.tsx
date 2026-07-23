import { Sparkles } from "lucide-react";
import BlogBackground from "@/components/blog/BlogBackground";
import BlogHero from "@/components/blog/BlogHero";
import FeaturedArticle from "@/components/blog/FeaturedArticle";
import LatestArticles from "@/components/blog/LatestArticles";
import BlogNewsletter from "@/components/blog/BlogNewsletter";
import LatestResearch from "@/components/blog/LatestResearch";
import SectionDivider from "@/components/careers/SectionDivider";
import CTASection from "@/components/ui/CTASection";

export default function Blog() {
  return (
    <main className="relative w-full overflow-x-hidden">
      <BlogBackground />
      <BlogHero />
      <SectionDivider />
      <FeaturedArticle />
      <SectionDivider />
      <LatestArticles />
      <SectionDivider />
      <BlogNewsletter />
      <SectionDivider />
      <LatestResearch />
      <SectionDivider />
      <CTASection
        icon={Sparkles}
        heading="Ready To Build AI That Matters?"
        description="Partner with Bigwigs Technologies to build intelligent, scalable, and secure AI solutions tailored for your business."
        primaryAction={{ label: "Talk To Experts", href: "#contact" }}
        secondaryAction={{ label: "Explore Services", href: "#services", showArrow: true }}
      />
    </main>
  );
}
