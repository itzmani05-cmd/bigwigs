import { LayoutTemplate, Newspaper, CircleHelp, BookOpen, Search, UserSquare2, type LucideIcon } from "lucide-react";

export interface WebsiteFeature {
  icon: LucideIcon;
  title: string;
}

export const websiteFeatures: WebsiteFeature[] = [
  { icon: LayoutTemplate, title: "Landing Pages" },
  { icon: Newspaper, title: "Blogs" },
  { icon: CircleHelp, title: "FAQs" },
  { icon: BookOpen, title: "Knowledge Base" },
  { icon: Search, title: "SEO Localization" },
  { icon: UserSquare2, title: "Customer Portals" },
];
