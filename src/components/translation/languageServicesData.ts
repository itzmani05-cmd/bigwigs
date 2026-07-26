import {
  FileText,
  Globe2,
  Code2,
  Megaphone,
  FileCode2,
  Search,
  Sparkles,
  BookOpenText,
  type LucideIcon,
} from "lucide-react";

export interface LanguageService {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const languageServices: LanguageService[] = [
  {
    icon: FileText,
    title: "Document Translation",
    description: "Contracts, reports, and manuals translated with precision.",
  },
  {
    icon: Globe2,
    title: "Website Translation",
    description: "Full sites localized — content, structure, and SEO intact.",
  },
  {
    icon: Code2,
    title: "Software Localization",
    description: "UI strings, dates, and currencies adapted per market.",
  },
  {
    icon: Megaphone,
    title: "Marketing Localization",
    description: "Campaigns that read native, not translated.",
  },
  {
    icon: FileCode2,
    title: "Technical Translation",
    description: "API docs and engineering content, translated by specialists.",
  },
  {
    icon: Search,
    title: "Multilingual SEO",
    description: "Keyword research and metadata localized per region.",
  },
  {
    icon: Sparkles,
    title: "AI Translation Support",
    description: "Machine translation, always reviewed by native linguists.",
  },
  {
    icon: BookOpenText,
    title: "Terminology Management",
    description: "Consistent glossaries across every language and team.",
  },
];
