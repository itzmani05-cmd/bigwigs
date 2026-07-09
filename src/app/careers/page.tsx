import type { Metadata } from "next";
import CareersPage from "@/components/careers/CareersPage";

export const metadata: Metadata = {
  title: "Careers | BigWigs Technologies",
  description:
    "Join BigWigs Technologies and help build enterprise AI across GIS, LiDAR, Medical AI, Computer Vision, Enterprise Automation, and Data Analytics.",
};

export default function Page() {
  return <CareersPage />;
}
