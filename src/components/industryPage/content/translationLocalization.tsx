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
  LayoutTemplate,
  Newspaper,
  CircleHelp,
  BookOpen,
  UserSquare2,
  Rocket,
  TrendingUp,
  CheckCircle2,
  Stethoscope,
  Factory,
  FlaskConical,
  Car,
  Radio,
  MapPin,
  Brain,
  Cpu,
  Landmark,
  Umbrella,
  ShoppingCart,
  GraduationCap,
  Building2,
  Scale,
  UserCheck,
  Award,
  Lock,
  Users2,
  Send,
} from "lucide-react";

export const translationHero = {
  eyebrow: "Translation & Localization",
  heading: (
    <>
      Speak Every Language
      <br />
      Connect Every{" "}
      <span className="text-blue-500">
        Market
      </span>
    </>
  ),
  description:
    "Expand globally with accurate translation, culturally relevant localization, and multilingual digital experiences. Bigwigs Technologies helps organizations communicate effectively across languages, regions, and industries.",
  primaryCta: { label: "Request a Translation Quote", href: "/demo" },
  secondaryCta: { label: "Speak With Language Experts", href: "/contact" },
  trustedBy: ["Healthcare", "Software", "Finance", "Government"],
  visualIcon: Languages,
  badges: [
    { icon: Globe2, label: "50+ Languages", position: "left-[2%] top-[6%]", delay: 0 },
    { icon: ShieldCheck, label: "Native Reviewers", position: "right-[2%] top-[14%]", delay: 0.6 },
    { icon: Sparkles, label: "AI-Assisted Translation", position: "left-[4%] bottom-[8%]", delay: 1.2 },
  ],
};

export const translationSolutions = {
  eyebrow: "Our Language Services",
  heading: "Eight Ways We Help You Go Multilingual",
  items: [
    {
      icon: FileText,
      title: "Document Translation",
      description: "Contracts, reports, and manuals translated with precision.",
      gradient: "from-brand-blue-500 to-cyan-500",
    },
    {
      icon: Globe2,
      title: "Website Translation",
      description: "Full sites localized — content, structure, and SEO intact.",
      gradient: "from-violet-500 to-purple-500",
    },
    {
      icon: Code2,
      title: "Software Localization",
      description: "UI strings, dates, and currencies adapted per market.",
      gradient: "from-brand-blue-500 to-indigo-500",
    },
    {
      icon: Megaphone,
      title: "Marketing Localization",
      description: "Campaigns that read native, not translated.",
      gradient: "from-brand-green-500 to-emerald-500",
    },
    {
      icon: FileCode2,
      title: "Technical Translation",
      description: "API docs and engineering content, translated by specialists.",
      gradient: "from-cyan-500 to-brand-blue-500",
    },
    {
      icon: Search,
      title: "Multilingual SEO",
      description: "Keyword research and metadata localized per region.",
      gradient: "from-orange-500 to-amber-500",
    },
    {
      icon: Sparkles,
      title: "AI Translation Support",
      description: "Machine translation, always reviewed by native linguists.",
      gradient: "from-rose-500 to-pink-500",
    },
    {
      icon: BookOpenText,
      title: "Terminology Management",
      description: "Consistent glossaries across every language and team.",
      gradient: "from-violet-500 to-fuchsia-500",
    },
  ],
};

export const documentAndSoftwareLocalization = {
  eyebrow: "Document & Software Localization",
  heading: "Precision From Documents to Software",
  description:
    "Every document is translated by a subject-matter linguist and reviewed against your terminology — the same rigor carries into every UI string, currency, and date format your software ships.",
  cards: [
    {
      icon: FileText,
      title: "Document Translation",
      description:
        "Every document is translated by a subject-matter linguist, then reviewed against your terminology and formatting requirements before delivery.",
      items: ["Technical Manuals", "Contracts", "Business Reports", "Research Papers", "Annual Reports", "Marketing Brochures", "SOPs", "User Guides"],
      glowColor: "rgba(37,99,235,0.3)",
      gradient: "from-brand-blue-500 to-cyan-500",
    },
    {
      icon: Code2,
      title: "Software Localization",
      description:
        "Language, currency, date formats, and regional UI conventions — localized consistently across every screen your product ships.",
      items: ["Web Applications", "Mobile Apps", "SaaS Platforms", "Enterprise Software", "ERP", "CRM", "AI Applications", "UI Translation", "Notifications", "Help Files"],
      glowColor: "rgba(249,115,22,0.3)",
      gradient: "from-orange-500 to-amber-500",
    },
  ],
};

export const websiteLocalizationSteps = [
  { icon: Search, label: "Analyze" },
  { icon: Languages, label: "Translate" },
  { icon: Globe2, label: "Adapt" },
  { icon: Rocket, label: "Publish" },
];

export const websiteLocalization = {
  eyebrow: "Website Localization",
  heading: "One Site, Every Market",
  description: "Language, currency, date formats, and right-to-left layouts — handled without a second codebase.",
  steps: websiteLocalizationSteps,
  checklist: [
    { icon: LayoutTemplate, label: "Landing Pages", description: "Localized landing pages built to convert in every target market." },
    { icon: Newspaper, label: "Blogs", description: "Blog content translated and adapted for regional readers." },
    { icon: CircleHelp, label: "FAQs", description: "Support FAQs translated to reduce friction for local users." },
    { icon: BookOpen, label: "Knowledge Base", description: "Full knowledge base articles localized end-to-end." },
    { icon: Search, label: "SEO Localization", description: "Keyword research and metadata localized per region." },
    { icon: UserSquare2, label: "Customer Portals", description: "Customer account portals localized for every market." },
  ],
};

export const marketingLocalizationSteps = [
  { icon: Search, label: "Research" },
  { icon: Megaphone, label: "Adapt" },
  { icon: Rocket, label: "Launch" },
  { icon: TrendingUp, label: "Measure" },
];

export const marketingLocalization = {
  eyebrow: "Marketing Localization",
  heading: "Campaigns That Feel Local, Everywhere",
  description:
    "Transcreation, not just translation — brand messaging adapted for tone, culture, and what actually resonates in each market.",
  steps: marketingLocalizationSteps,
  marqueeItems: [
    { icon: Megaphone, title: "Advertising" },
    { icon: Rocket, title: "Campaigns" },
    { icon: Send, title: "Newsletters" },
    { icon: FileText, title: "Sales Presentations" },
    { icon: Sparkles, title: "Promotional Materials" },
  ],
};

export const technicalTranslationSteps = [
  { icon: Search, label: "Analyze" },
  { icon: FileCode2, label: "Translate" },
  { icon: ShieldCheck, label: "Validate" },
  { icon: CheckCircle2, label: "Deliver" },
];

export const technicalTranslation = {
  eyebrow: "Technical Translation",
  heading: "Precision Where Mistakes Aren't an Option",
  description: "Engineering and scientific content translated by linguists who understand the subject matter.",
  steps: technicalTranslationSteps,
  items: [
    { icon: FileCode2, title: "API Docs" },
    { icon: Stethoscope, title: "Medical Manuals" },
    { icon: Factory, title: "Manufacturing" },
    { icon: FlaskConical, title: "Scientific Papers" },
    { icon: Car, title: "Automotive" },
    { icon: Radio, title: "Telecommunications" },
  ],
};

export const languagesSupported = {
  eyebrow: "Languages We Support",
  heading: "One Team, Fifty-Plus Languages",
  description:
    "Fifty-plus languages covered by native linguists — from major international markets to India's regional languages.",
  cards: [
    {
      icon: Globe2,
      title: "International Languages",
      description: "Major global languages covered by native linguists.",
      items: ["English", "French", "German", "Spanish", "Portuguese", "Italian", "Dutch", "Arabic", "Chinese", "Japanese", "Korean"],
      glowColor: "rgba(37,99,235,0.3)",
      gradient: "from-brand-blue-500 to-indigo-500",
    },
    {
      icon: MapPin,
      title: "Indian Languages",
      description: "Regional Indian languages supported for domestic audiences.",
      items: ["Hindi", "Tamil", "Telugu", "Kannada", "Malayalam", "Marathi", "Bengali", "Gujarati", "Punjabi", "Odia"],
      glowColor: "rgba(249,115,22,0.3)",
      gradient: "from-orange-500 to-amber-500",
    },
  ],
};

export const translationWhoWeServe = {
  eyebrow: "Industries We Serve",
  heading: "Language Expertise Across Every Sector",
  centerLabel: (
    <>
      Bigwigs
      <br />
      Translation
    </>
  ),
  items: [
    { icon: Stethoscope, label: "Healthcare" },
    { icon: Brain, label: "Artificial Intelligence" },
    { icon: Cpu, label: "IT" },
    { icon: Factory, label: "Manufacturing" },
    { icon: Car, label: "Automotive" },
    { icon: Landmark, label: "Banking" },
    { icon: Umbrella, label: "Insurance" },
    { icon: ShoppingCart, label: "Retail" },
    { icon: GraduationCap, label: "Education" },
    { icon: Building2, label: "Government" },
    { icon: Scale, label: "Legal" },
    { icon: Radio, label: "Telecommunications" },
  ],
};

export const translationProcess = {
  eyebrow: "Localization Process",
  heading: "Five Stages. Every Language, Every Time.",
  steps: [
    { icon: Search, title: "Content Analysis", description: "Scope, terminology, and target markets defined upfront." },
    { icon: Languages, title: "Professional Translation", description: "Native linguists translate with full context, not fragments." },
    { icon: Globe2, title: "Localization", description: "Formats, tone, and layout adapted per region." },
    { icon: ShieldCheck, title: "Quality Assurance", description: "Independent review against your terminology and style guide." },
    { icon: Send, title: "Delivery", description: "Final content delivered in your format, on your timeline." },
  ],
  desktopColumnsClassName: "grid-cols-5",
};

export const translationBusinessBenefits = {
  eyebrow: "Why Bigwigs",
  heading: "Six Reasons Global Teams Trust Us",
  kpis: [
    { value: 50, suffix: "+", label: "Languages" },
    { value: 100, suffix: "+", label: "Global Projects" },
    { value: 99, suffix: ".5%", label: "Translation Accuracy" },
    { value: 40, suffix: "%", label: "Faster Localization" },
  ],
  benefits: [
    { icon: Languages, title: "Professional Linguists", description: "Subject-matter translators, not generalist freelancers." },
    { icon: UserCheck, title: "Native Reviewers", description: "Every translation reviewed by a native speaker before delivery." },
    { icon: Award, title: "Industry Expertise", description: "Linguists matched to your domain — legal, medical, technical." },
    { icon: Sparkles, title: "AI-Assisted Workflows", description: "Machine translation for speed, human review for accuracy." },
    { icon: Lock, title: "Secure Data Handling", description: "Confidential documents handled under strict access controls." },
    { icon: Users2, title: "Scalable Teams", description: "From a single document to a hundred-language rollout." },
  ],
};

export const translationCaseStudy = {
  heading: "Helping Businesses Reach Global Customers",
  description:
    "A global company partnered with Bigwigs to localize its website and product across 25 countries — without slowing down its release cycle.",
  stats: [
    { value: "25", label: "Countries" },
    { value: "50+", label: "Languages" },
    { value: "3x", label: "Faster Market Expansion" },
  ],
  ctaHref: "/case-studies",
  chartLabels: { primary: "Localization KPIs", secondary: "Market Analytics", trend: "Expansion Velocity" },
};

export const translationFaq = {
  items: [
    {
      question: "Do you translate technical documents?",
      answer:
        "Yes — API documentation, engineering manuals, and scientific papers are translated by linguists with subject-matter background, not generalists.",
    },
    {
      question: "Can you localize websites?",
      answer:
        "Yes. We handle content, layout, currencies, date formats, and right-to-left languages — without you maintaining a separate codebase per market.",
    },
    {
      question: "Do you support multilingual SEO?",
      answer: "Yes — keyword research, metadata, and on-page content are localized per region, not just translated word-for-word.",
    },
    {
      question: "How do you ensure translation quality?",
      answer: "Every translation passes through a native-speaker review against your terminology and style guide before it's delivered.",
    },
  ],
};

export const translationBottomCta = {
  icon: Languages,
  heading: <>Expand Beyond Borders With Confidence</>,
  description:
    "Whether you're launching multilingual software, translating enterprise documentation, or localizing your digital products, Bigwigs Technologies helps you communicate with audiences worldwide.",
  primaryAction: { label: "Request Translation Quote", href: "#contact" },
  secondaryAction: { label: "Speak With Language Experts", href: "#contact", showArrow: true },
};
