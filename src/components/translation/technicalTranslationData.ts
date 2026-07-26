import { FileCode2, Stethoscope, Factory, FlaskConical, Car, Radio, type LucideIcon } from "lucide-react";

export interface TechnicalDomain {
  icon: LucideIcon;
  title: string;
}

export const technicalDomains: TechnicalDomain[] = [
  { icon: FileCode2, title: "API Docs" },
  { icon: Stethoscope, title: "Medical Manuals" },
  { icon: Factory, title: "Manufacturing" },
  { icon: FlaskConical, title: "Scientific Papers" },
  { icon: Car, title: "Automotive" },
  { icon: Radio, title: "Telecommunications" },
];
