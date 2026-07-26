import { Building2, Cpu, Pill, Dna, Sparkles, Microscope, Umbrella, Users2, type LucideIcon } from "lucide-react";

export interface HealthcareIndustry {
  icon: LucideIcon;
  name: string;
}

export const healthcareIndustries: HealthcareIndustry[] = [
  { icon: Building2, name: "Hospitals" },
  { icon: Cpu, name: "Medical Devices" },
  { icon: Pill, name: "Pharmaceutical" },
  { icon: Dna, name: "Biotechnology" },
  { icon: Sparkles, name: "HealthTech" },
  { icon: Microscope, name: "Research" },
  { icon: Umbrella, name: "Insurance" },
  { icon: Users2, name: "Public Health" },
];
