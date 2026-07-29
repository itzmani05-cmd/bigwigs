import { ShieldCheck } from "lucide-react";
import IndustriesBackground from "@/components/industries/IndustriesBackground";
import SectionDivider from "@/components/careers/SectionDivider";
import CertificationsHero from "@/components/certifications/CertificationsHero";
import CertificationsGrid from "@/components/certifications/CertificationsGrid";
import CTASection from "@/components/ui/CTASection";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

export default function Certifications() {
  useDocumentTitle("Certifications | Bigwigs Technologies");

  return (
    <main className="relative w-full overflow-x-hidden">
      <IndustriesBackground />
      <CertificationsHero />
      <SectionDivider />
      <CertificationsGrid />

      <CTASection
        icon={ShieldCheck}
        heading="Partner With A Certified AI Data Provider"
        description="Our ISO-certified processes mean your data and delivery timelines are handled to a globally recognized standard, every time."
        primaryAction={{ label: "Contact Us", href: "#contact" }}
        secondaryAction={{ label: "Explore Services", href: "/services", showArrow: true }}
      />
    </main>
  );
}
