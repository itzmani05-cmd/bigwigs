import CTASection from "@/components/ui/CTASection";

export default function CareersCTA() {
  return (
    <CTASection
      heading={
        <>
          Ready To Shape{" "}
          <span className="bg-gradient-to-r from-brand-blue-400 to-cyan-300 bg-clip-text text-transparent">
            The Future?
          </span>
        </>
      }
      description="Become part of Bigwigs Technologies and help build intelligent AI solutions that impact millions worldwide."
      primaryAction={{ label: "Apply Now", href: "/apply" }}
      secondaryAction={{ label: "Contact HR", href: "#contact", showArrow: false }}
    />
  );
}
