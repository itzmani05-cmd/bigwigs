/**
 * Single source of truth for every indexable route's SEO metadata.
 * Consumed by page components (via `getRouteMeta`) and by
 * scripts/generate-sitemap.mjs, so the sitemap always matches App.tsx.
 *
 * Dynamic routes (currently only /case-studies/:slug) are NOT listed here —
 * their metadata is derived at render time from real content (see
 * CaseStudyDetail.tsx) and added to the sitemap separately from
 * caseStudiesData.ts.
 */
export interface RouteMeta {
  path: string;
  title: string;
  description: string;
  /** 0–1, used only in sitemap.xml <priority>. Home defaults highest. */
  priority?: number;
}

export const ROUTES: RouteMeta[] = [
  {
    path: "/",
    title: "Bigwigs Technologies | Enterprise AI, Data & Software Engineering",
    description:
      "Partner with Bigwigs Technologies to unlock the power of your data, automate operations, and deliver measurable business outcomes at scale.",
    priority: 1.0,
  },
  {
    path: "/about",
    title: "About Us | Bigwigs Technologies",
    description:
      "We combine data, AI, and engineering excellence to create intelligent solutions that solve real-world problems and drive meaningful impact.",
    priority: 0.8,
  },
  {
    path: "/services",
    title: "Services | Bigwigs Technologies",
    description:
      "From software engineering and Generative AI to data annotation, transcription, and autonomous agents — the full stack of AI-native services behind every enterprise transformation.",
    priority: 0.9,
  },
  {
    path: "/industries",
    title: "Industries | Bigwigs Technologies",
    description:
      "Enterprise AI data services, software engineering, Generative AI, and digital transformation solutions across healthcare, automotive, finance, manufacturing, agriculture, retail, logistics, and smart cities.",
    priority: 0.9,
  },
  {
    path: "/case-studies",
    title: "Case Studies | Bigwigs Technologies",
    description:
      "Explore how Bigwigs Technologies delivers high-quality AI data solutions across industries through scalable annotation, data collection, and digital transformation projects.",
    priority: 0.8,
  },
  {
    path: "/careers",
    title: "Careers | Bigwigs Technologies",
    description:
      "Join a team of passionate engineers, AI experts, designers, and innovators building intelligent products that empower businesses globally.",
    priority: 0.7,
  },
  {
    path: "/apply",
    title: "Apply Now | Bigwigs Technologies",
    description:
      "Become part of an innovative team building intelligent AI solutions for global enterprises. Apply now to join Bigwigs Technologies.",
    priority: 0.5,
  },
  {
    path: "/demo",
    title: "Book a Demo | Bigwigs Technologies",
    description:
      "Tell us about your project and we'll walk you through how our AI, data, and automation solutions can fit your business — tailored to your industry and goals.",
    priority: 0.6,
  },
  {
    path: "/privacy-policy",
    title: "Privacy Policy | Bigwigs Technologies",
    description: "Read how Bigwigs Technologies collects, uses, and protects your personal data.",
    priority: 0.2,
  },
  {
    path: "/terms-of-service",
    title: "Terms of Service | Bigwigs Technologies",
    description:
      "Review the terms and conditions governing your use of the Bigwigs Technologies website and services.",
    priority: 0.2,
  },
  {
    path: "/cookie-policy",
    title: "Cookie Policy | Bigwigs Technologies",
    description: "Learn how Bigwigs Technologies uses cookies to improve your browsing experience.",
    priority: 0.2,
  },

  // Industries
  {
    path: "/industries/healthcare-life-sciences",
    title: "Healthcare & Life Sciences | Bigwigs Technologies",
    description:
      "Enterprise AI, intelligent automation, and healthcare data solutions for hospitals, pharma companies, and research institutions.",
    priority: 0.7,
  },
  {
    path: "/industries/automotive-mobility",
    title: "Automotive & Mobility Solutions | Bigwigs Technologies",
    description:
      "AI data services, software engineering, and automation for automotive OEMs, Tier-1 suppliers, and mobility providers.",
    priority: 0.7,
  },
  {
    path: "/industries/retail-ecommerce",
    title: "Retail & E-Commerce Solutions | Bigwigs Technologies",
    description:
      "AI, automation, and modern software for retailers, marketplaces, and consumer brands — built to accelerate growth and delight customers.",
    priority: 0.7,
  },
  {
    path: "/industries/bfsi-solutions",
    title: "Banking, Financial Services & Insurance | Bigwigs Technologies",
    description:
      "AI-powered solutions and secure data services that accelerate digital transformation for banks, insurers, and fintechs.",
    priority: 0.7,
  },
  {
    path: "/industries/manufacturing-industrial-solutions",
    title: "Manufacturing & Industrial Solutions | Bigwigs Technologies",
    description:
      "AI-driven quality inspection, predictive maintenance, and factory software that keep production running smarter and safer.",
    priority: 0.7,
  },
  {
    path: "/industries/education-elearning-solutions",
    title: "Education & eLearning Solutions | Bigwigs Technologies",
    description:
      "AI-driven learning platforms, digital publishing, and accessibility solutions built for institutions, EdTech companies, and publishers.",
    priority: 0.7,
  },
  {
    path: "/industries/government-public-sector-solutions",
    title: "Government & Public Sector Solutions | Bigwigs Technologies",
    description:
      "Secure, citizen-centric platforms that modernize legacy systems, automate administrative processes, and strengthen public sector cybersecurity.",
    priority: 0.7,
  },
  {
    path: "/industries/publishing-media-solutions",
    title: "Publishing & Media Solutions | Bigwigs Technologies",
    description:
      "Modernize legacy content, streamline editorial workflows, and deliver accessible, multilingual digital publications at scale.",
    priority: 0.7,
  },

  // Services
  {
    path: "/service/software-development",
    title: "Software Development | Bigwigs Technologies",
    description:
      "Secure, scalable, cloud-native software — from custom enterprise applications to AI-powered platforms, engineered for long-term growth.",
    priority: 0.8,
  },
  {
    path: "/service/healthcare-ai",
    title: "Healthcare AI | Bigwigs Technologies",
    description:
      "AI-driven solutions for hospitals, healthcare providers, and medical innovators that improve diagnosis, automate workflows, and enhance patient care.",
    priority: 0.8,
  },
  {
    path: "/service/translation-localization",
    title: "Translation & Localization | Bigwigs Technologies",
    description:
      "Accurate translation, culturally relevant localization, and multilingual digital experiences across languages, regions, and industries.",
    priority: 0.8,
  },
  {
    path: "/service/transcription-services",
    title: "Transcription Services | Bigwigs Technologies",
    description:
      "Accurate, searchable, multilingual transcription with AI-assisted drafting and expert human review — built for compliance, accessibility, and analytics.",
    priority: 0.8,
  },
  {
    path: "/service/voice-data-collection",
    title: "Voice & Speech Data Collection | Bigwigs Technologies",
    description:
      "Enterprise-grade speech datasets — collection, annotation, and validation for speech recognition, conversational AI, and voice assistants.",
    priority: 0.8,
  },
  {
    path: "/service/data-collection",
    title: "Data Collection & AI Datasets | Bigwigs Technologies",
    description:
      "Collect, validate, and prepare high-quality datasets for computer vision, NLP, speech AI, and LLMs — at enterprise scale.",
    priority: 0.8,
  },
  {
    path: "/service/data-quality-assurance",
    title: "Data Validation & Quality Assurance | Bigwigs Technologies",
    description:
      "Multi-level validation and quality assurance for Computer Vision, NLP, Speech AI, and LLM datasets — before they ever reach your model.",
    priority: 0.8,
  },
  {
    path: "/service/digital-publishing",
    title: "Digital Publishing Services | Bigwigs Technologies",
    description:
      "AI-enabled publishing solutions to convert, structure, and distribute content across every digital platform.",
    priority: 0.8,
  },
  {
    path: "/service/ai-data-annotation",
    title: "AI Data Annotation Services | Bigwigs Technologies",
    description:
      "Enterprise-grade data annotation for Computer Vision, NLP, Speech AI, and Autonomous Driving — accurate, scalable, and built to train reliable models.",
    priority: 0.8,
  },
  {
    path: "/service/generative-ai",
    title: "Generative AI Services | Bigwigs Technologies",
    description:
      "LLMs, AI agents, RAG, and intelligent automation — deployed to accelerate operations and deliver better customer experiences.",
    priority: 0.8,
  },
  {
    path: "/service/ai-agents-automation",
    title: "AI Agents & Intelligent Automation | Bigwigs Technologies",
    description:
      "AI agents that understand, reason, retrieve enterprise knowledge, and execute business operations with minimal human intervention.",
    priority: 0.8,
  },
];

const ROUTE_BY_PATH = new Map(ROUTES.map((r) => [r.path, r]));

export function getRouteMeta(path: string): RouteMeta {
  const meta = ROUTE_BY_PATH.get(path);
  if (!meta) {
    throw new Error(`No SEO metadata registered for route "${path}" in src/lib/seo/routes.ts`);
  }
  return meta;
}
