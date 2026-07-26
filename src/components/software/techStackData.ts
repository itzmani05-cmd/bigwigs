import { LayoutGrid, Server, Database, CloudCog, type LucideIcon } from "lucide-react";

export interface TechCategory {
  icon: LucideIcon;
  label: string;
  items: string[];
}

export const techStack: TechCategory[] = [
  { icon: LayoutGrid, label: "Frontend", items: ["React", "Next.js", "Angular", "Vue"] },
  { icon: Server, label: "Backend", items: ["Node.js", "Python", "Java", ".NET", "Go"] },
  { icon: Database, label: "Database", items: ["MongoDB", "PostgreSQL", "Redis", "MySQL"] },
  { icon: CloudCog, label: "Cloud", items: ["AWS", "Azure", "Google Cloud"] },
];
