import { useEffect } from "react";
import { Users } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import TeamGrid from "@/components/team/TeamGrid";

const TITLE = "Our Team | BigWigs Technologies";
const DESCRIPTION =
  "Meet the engineers, researchers, and leaders building enterprise AI systems at BigWigs Technologies.";

export default function Team() {
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
        icon={Users}
        eyebrow="Our Team"
        title={
          <>
            The people building{" "}
            <span className="bg-gradient-to-r from-brand-green-500 via-brand-green-400 to-brand-blue-500 bg-clip-text text-transparent">
              the AI backbone.
            </span>
          </>
        }
        description="A cross-disciplinary team of engineers, researchers, and operators shipping production-grade AI across six enterprise domains."
      />
      <TeamGrid />
    </div>
  );
}
