import { useEffect } from "react";
import CareersPage from "@/components/careers/CareersPage";

const TITLE = "Careers | BigWigs Technologies";
const DESCRIPTION =
  "Join BigWigs Technologies and help build enterprise AI across GIS, LiDAR, Medical AI, Computer Vision, Enterprise Automation, and Data Analytics.";

export default function Careers() {
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

  return <CareersPage />;
}
