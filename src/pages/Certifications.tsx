import { useEffect } from "react";
import { BadgeCheck } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import CertificationsGrid from "@/components/certifications/CertificationsGrid";

const TITLE = "Certifications | BigWigs Technologies";
const DESCRIPTION = "Compliance and quality credentials held by BigWigs Technologies.";

export default function Certifications() {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = TITLE;

    const metaDescription = document.querySelector('meta[name="description"]');
    const previousDescription = metaDescription?.getAttribute("content") ?? null;
    metaDescription?.setAttribute("content", DESCRIPTION);

    return () => {
      document.title = previousTitle;
      if (previousDescription !== null) {
        metaDescription?.setAttribute("content", previousDescription);
      }
    };
  }, []);

  return (
    <div className="bg-white">
      <PageHero
        icon={BadgeCheck}
        eyebrow="Certifications"
        title={
          <>
            Trusted with{" "}
            <span className="bg-gradient-to-r from-brand-green-500 via-brand-green-400 to-brand-blue-500 bg-clip-text text-transparent">
              the hardest problems.
            </span>
          </>
        }
        description="Compliance and quality credentials that back the systems we build for enterprises."
      />
      <CertificationsGrid />
    </div>
  );
}
