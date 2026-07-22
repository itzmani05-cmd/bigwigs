import CTASection from "@/components/ui/CTASection";

export default function AboutCTA() {
  return (
    <CTASection
      heading="Let’s Build the Future of AI Together"
      description="Partner with Bigwigs Technologies to build intelligent, scalable, and secure AI-powered solutions."
      primaryAction={{ label: "Start Your Project", href: "#contact" }}
      secondaryAction={{ label: "Talk to Our Experts", href: "#contact", showArrow: false }}
    />
  );
}
