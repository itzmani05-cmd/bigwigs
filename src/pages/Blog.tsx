import { useEffect } from "react";
import { Newspaper } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import BlogGrid from "@/components/blog/BlogGrid";

const TITLE = "Blog | BigWigs Technologies";
const DESCRIPTION =
  "Engineering notes and insights from the BigWigs Technologies team on enterprise AI, GIS, LiDAR, medical imaging, and more.";

export default function Blog() {
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
        icon={Newspaper}
        eyebrow="Blog"
        title={
          <>
            Insights from{" "}
            <span className="bg-gradient-to-r from-brand-green-500 via-brand-green-400 to-brand-blue-500 bg-clip-text text-transparent">
              the engineering team.
            </span>
          </>
        }
        description="Notes on shipping production-grade AI — what worked, what didn't, and what we learned along the way."
      />
      <BlogGrid />
    </div>
  );
}
