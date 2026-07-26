import { GraduationCap, FlaskConical, Briefcase, type LucideIcon } from "lucide-react";

export interface PublishingPillar {
  icon: LucideIcon;
  title: string;
  items: string[];
}

export const specializedPublishingPillars: PublishingPillar[] = [
  {
    icon: GraduationCap,
    title: "Educational Publishing",
    items: ["Textbooks", "Courseware", "Question Banks", "Student Workbooks"],
  },
  {
    icon: FlaskConical,
    title: "Scientific & Medical",
    items: ["Research Journals", "Clinical Publications", "Medical Books", "Conference Proceedings"],
  },
  {
    icon: Briefcase,
    title: "Corporate Publishing",
    items: ["Annual Reports", "Policy Manuals", "Training Materials", "Marketing Collateral"],
  },
];
