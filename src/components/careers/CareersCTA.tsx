import CTASection from "@/components/ui/CTASection";

export default function CareersCTA() {
  return (
    <CTASection
      heading={
        <>
          Ready To Shape{" "}
          <span className="text-blue-800">
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
