import CTASection from "@/components/ui/CTASection";

export default function AboutCTA() {
  return (
    <CTASection
      heading="Let’s Build What’s Next Together"
      description="Discover how Bigwigs Technologies combines data, AI, and engineering to turn complex challenges into intelligent solutions."
      primaryAction={{ label: "Talk to Us", href: "/demo" }}
      secondaryAction={{ label: "Explore Our Services", href: "/services", showArrow: false }}
    />
  );
}
