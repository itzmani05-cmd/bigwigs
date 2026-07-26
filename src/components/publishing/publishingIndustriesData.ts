import {
  BookOpen,
  School,
  GraduationCap,
  FlaskConical,
  Stethoscope,
  Building2,
  Landmark,
  Cpu,
  Briefcase,
  HeartHandshake,
  type LucideIcon,
} from "lucide-react";

export interface PublishingIndustry {
  icon: LucideIcon;
  name: string;
}

export const publishingIndustries: PublishingIndustry[] = [
  { icon: BookOpen, name: "Book Publishers" },
  { icon: School, name: "Educational Institutions" },
  { icon: GraduationCap, name: "Universities" },
  { icon: FlaskConical, name: "Scientific Publishers" },
  { icon: Stethoscope, name: "Healthcare" },
  { icon: Building2, name: "Government" },
  { icon: Landmark, name: "Financial Institutions" },
  { icon: Cpu, name: "Technology Companies" },
  { icon: Briefcase, name: "Corporate Enterprises" },
  { icon: HeartHandshake, name: "Non-Profit Organizations" },
];
