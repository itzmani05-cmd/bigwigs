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
    { icon: Languages, title: "Inaccurate Machine Translation", description: "Raw MT output reads awkward, or worse, changes meaning — high-stakes content can't risk that." },
    { icon: Globe2, title: "Inconsistent Terminology", description: "The same term translated differently across documents erodes trust and clarity." },
    { icon: Code2, title: "Software Localization Bugs", description: "Hardcoded strings and broken layouts slip through without dedicated localization QA." },
    { icon: Megaphone, title: "Messaging That Reads Translated", description: "Word-for-word translation rarely lands the way native marketing copy does." },
    { icon: Search, title: "Lost Multilingual SEO", description: "Direct translation without keyword research means localized pages rank for the wrong terms." },
    { icon: Lock, title: "Confidential Document Handling", description: "Legal and financial documents need translators bound by real confidentiality processes." },
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
  { question: "Which languages do you support?", answer: "We work across 50+ languages with native-speaking linguists, including right-to-left scripts and low-resource languages." },
  { question: "Can you handle ongoing, high-volume localization?", answer: "Yes. Many clients run continuous localization pipelines tied to their release cycles rather than one-off projects." },
];

export const translationDifferentiators = {
  eyebrow: "Why Bigwigs",
  heading: "Why Teams Choose Us for Localization",
  items: [
    { icon: UserCheck, title: "Native-Speaker Linguists", description: "Every translation done and reviewed by a native speaker, not machine output alone." },
    { icon: BookOpenText, title: "Consistent Terminology", description: "Managed glossaries keep every document and market speaking the same language." },
    { icon: Globe2, title: "50+ Languages, One Team", description: "A single point of contact across every market you localize into." },
    { icon: Code2, title: "Localization-Ready Engineering", description: "Software localized without breaking layouts, dates, or currency formats." },
    { icon: Lock, title: "Confidential by Default", description: "Legal and financial documents handled under signed NDAs, every time." },
    { icon: ShieldCheck, title: "Style-Guide Enforced QA", description: "Independent review against your terminology and brand voice before delivery." },
  ],
};

export const translationBottomCta = {
  icon: Languages,
  heading: "Expand Beyond Borders With Confidence",
  description:
    "Whether you're launching multilingual software or localizing enterprise documentation, we help you communicate with audiences worldwide.",
  primaryAction: { label: "Request a Quote", href: "/demo" },
  secondaryAction: { label: "Talk to Our Team", href: "/contact", showArrow: true },
};
