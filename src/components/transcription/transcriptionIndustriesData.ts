import {
  Stethoscope,
  Scale,
  Landmark,
  Umbrella,
  GraduationCap,
  Newspaper,
  Building2,
  Cpu,
  Microscope,
  Users2,
  Factory,
  Radio,
  type LucideIcon,
} from "lucide-react";

export interface TranscriptionIndustry {
  icon: LucideIcon;
  name: string;
}

export const transcriptionIndustries: TranscriptionIndustry[] = [
  { icon: Stethoscope, name: "Healthcare" },
  { icon: Scale, name: "Legal" },
  { icon: Landmark, name: "Finance" },
  { icon: Umbrella, name: "Insurance" },
  { icon: GraduationCap, name: "Education" },
  { icon: Newspaper, name: "Media" },
  { icon: Building2, name: "Government" },
  { icon: Cpu, name: "Artificial Intelligence" },
  { icon: Microscope, name: "Research" },
  { icon: Users2, name: "Human Resources" },
  { icon: Factory, name: "Manufacturing" },
  { icon: Radio, name: "Telecommunications" },
];
