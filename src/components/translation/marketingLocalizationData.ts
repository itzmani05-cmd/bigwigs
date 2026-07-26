import { Megaphone, Rocket, Mail, Presentation, Image, type LucideIcon } from "lucide-react";

export interface MarketingItem {
  icon: LucideIcon;
  title: string;
}

export const marketingItems: MarketingItem[] = [
  { icon: Megaphone, title: "Advertising" },
  { icon: Rocket, title: "Campaigns" },
  { icon: Mail, title: "Newsletters" },
  { icon: Presentation, title: "Sales Presentations" },
  { icon: Image, title: "Promotional Materials" },
];
