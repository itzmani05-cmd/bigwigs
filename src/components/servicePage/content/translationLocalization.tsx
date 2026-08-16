import {
  Languages,
  Globe2,
  ShieldCheck,
  Sparkles,
  FileText,
  Code2,
  Megaphone,
  FileCode2,
  Search,
  BookOpenText,
  UserCheck,
  Lock,
} from "lucide-react";

export const translationHero = {
  eyebrow: "Translation & Localization",
  heading: (
    <>
      Speak Every Language,{" "}
      <span className="text-blue-500">Reach Every Market</span>
    </>
  ),
  description:
    "Accurate translation, culturally relevant localization, and multilingual digital experiences across languages, regions, and industries.",
  primaryCta: { label: "Request a Quote", href: "/demo" },
  secondaryCta: { label: "Talk to Our Team", href: "/contact" },
};

export const translationChallenges = {
  eyebrow: "What We Solve",
  heading: "The Realities of Going Multilingual",
  items: [
    { icon: Languages, title: "Inaccurate Machine Translation" },
    { icon: Globe2, title: "Inconsistent Terminology" },
    { icon: Code2, title: "Software Localization Bugs" },
    { icon: Megaphone, title: "Messaging That Reads Translated" },
    { icon: Search, title: "Lost Multilingual SEO" },
    { icon: Lock, title: "Confidential Document Handling" },
  ],
};

export const translationCapabilities = {
  eyebrow: "What's Included",
  heading: "Eight Ways We Help You Go Multilingual",
  items: [
    { icon: FileText, title: "Document Translation", description: "Contracts, reports, and manuals, precisely translated." },
    { icon: Globe2, title: "Website Translation", description: "Full sites localized, content and SEO intact." },
    { icon: Code2, title: "Software Localization", description: "UI strings, dates, and currencies per market." },
    { icon: Megaphone, title: "Marketing Localization", description: "Campaigns that read native, not translated." },
    { icon: FileCode2, title: "Technical Translation", description: "API docs and engineering content, by specialists." },
    { icon: Search, title: "Multilingual SEO", description: "Keywords and metadata localized per region." },
    { icon: Sparkles, title: "AI Translation Support", description: "Machine translation, reviewed by native linguists." },
    { icon: BookOpenText, title: "Terminology Management", description: "Consistent glossaries across every language." },
  ],
};

export const translationProcessSteps = [
  { icon: Search, title: "Analyze", description: "Scope, terminology, and target markets defined." },
  { icon: Languages, title: "Translate", description: "Native linguists translate with full context." },
  { icon: Globe2, title: "Localize", description: "Formats, tone, and layout adapted per region." },
  { icon: ShieldCheck, title: "Validate", description: "Independent review against your style guide." },
  { icon: UserCheck, title: "Deliver", description: "Final content delivered on your timeline." },
];

export const translationFaq = [
  { question: "Do you translate technical documents?", answer: "Yes — API documentation, engineering manuals, and scientific papers are translated by linguists with subject-matter background." },
  { question: "Can you localize websites?", answer: "Yes. We handle content, layout, currencies, date formats, and right-to-left languages without a separate codebase per market." },
  { question: "Do you support multilingual SEO?", answer: "Yes — keyword research, metadata, and on-page content are localized per region, not just translated word-for-word." },
  { question: "How do you ensure translation quality?", answer: "Every translation passes through a native-speaker review against your terminology and style guide before delivery." },
];

export const translationBottomCta = {
  icon: Languages,
  heading: "Expand Beyond Borders With Confidence",
  description:
    "Whether you're launching multilingual software or localizing enterprise documentation, we help you communicate with audiences worldwide.",
  primaryAction: { label: "Request a Quote", href: "/demo" },
  secondaryAction: { label: "Talk to Our Team", href: "/contact", showArrow: true },
};
