import { Layers, ShieldCheck, Clock, Globe2, Award, HeartHandshake, Search, ClipboardList, Rocket, LifeBuoy, Users2 } from "lucide-react";
import IndustriesBackground from "@/components/industries/IndustriesBackground";
import SectionDivider from "@/components/careers/SectionDivider";
import CTASection from "@/components/ui/CTASection";
import ServicesHero from "@/components/services/ServicesHero";
import ServicesGrid from "@/components/services/ServicesGrid";
import IconGridSection from "@/components/servicePage/IconGridSection";
import StatsBar from "@/components/servicePage/StatsBar";
import ProcessTimeline from "@/components/servicePage/ProcessTimeline";
import FAQAccordion from "@/components/servicePage/FAQAccordion";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

const whyChooseItems = [
  { icon: Award, title: "Senior Delivery Teams", description: "Experienced engineers and specialists on every engagement, not junior teams learning on your budget." },
  { icon: Layers, title: "One Partner, Every Domain", description: "Software, data, and AI services delivered by teams who already work from the same roadmap." },
  { icon: ShieldCheck, title: "Security & Compliance First", description: "Every service reviewed for security and compliance at each stage, not bolted on before launch." },
  { icon: Globe2, title: "Proven Across Industries", description: "Healthcare, finance, retail, manufacturing, and government engagements delivered at scale." },
  { icon: HeartHandshake, title: "Long-Term Partnership", description: "We stay on after delivery — monitoring, iterating, and supporting what we build." },
  { icon: Clock, title: "Predictable Timelines", description: "Clear scope and delivery milestones from discovery, not open-ended engagements." },
];

const servicesStats = [
  { icon: Rocket, value: 100, suffix: "+", label: "Projects Delivered" },
  { icon: ShieldCheck, value: 99.5, suffix: "%", label: "Quality Benchmark" },
  { icon: Globe2, value: 10, suffix: "+", label: "Industries Served" },
  { icon: Users2, value: 40, suffix: "%", label: "Faster Delivery" },
];

const servicesProcessSteps = [
  { icon: Search, title: "Discover", description: "Understand goals, workflows, and constraints before scoping anything." },
  { icon: ClipboardList, title: "Scope", description: "Define timeline, team, and architecture decisions upfront." },
  { icon: Layers, title: "Deliver", description: "Sprint-based execution across engineering, data, and AI teams." },
  { icon: ShieldCheck, title: "Validate", description: "Quality and security reviewed at every stage of delivery." },
  { icon: LifeBuoy, title: "Support", description: "Ongoing monitoring, iteration, and support long after launch." },
];

const servicesFaq = [
  {
    question: "Can I combine multiple services in one engagement?",
    answer: "Yes. Most enterprise engagements blend two or more services — for example, data annotation feeding a Generative AI pipeline, or software development alongside ongoing QA. Our teams work from a shared roadmap.",
  },
  {
    question: "Do you work with startups as well as large enterprises?",
    answer: "Both. We scope engagements to match team size and budget, from a focused module for an early-stage startup to a multi-year platform for an enterprise.",
  },
  {
    question: "How is pricing structured?",
    answer: "Pricing depends on scope, team composition, and timeline. We provide a concrete estimate after a discovery call rather than a generic rate card.",
  },
  {
    question: "How quickly can a new engagement start?",
    answer: "Most engagements kick off within one to two weeks of scoping, depending on team availability and the complexity of onboarding.",
  },
];

export default function Services() {
  useDocumentTitle("Services | Bigwigs Technologies");

  return (
    <main className="relative w-full overflow-x-hidden">
      <IndustriesBackground />
      <ServicesHero />
      <SectionDivider />
      <ServicesGrid />
      <SectionDivider />
      <IconGridSection
        eyebrow="Why Bigwigs"
        heading="Six Reasons Enterprises Choose Us"
        description="What makes engagements with Bigwigs Technologies different from a typical vendor relationship."
        items={whyChooseItems}
        columnsClassName="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        titleSize="md"
      />
      <SectionDivider />
      <StatsBar stats={servicesStats} />
      <SectionDivider />
      <ProcessTimeline
        eyebrow="How We Work"
        heading="Five Stages. Every Engagement."
        steps={servicesProcessSteps}
      />
      <SectionDivider />
      <FAQAccordion items={servicesFaq} />

      <CTASection
        icon={Globe2}
        heading="Ready to Build With Bigwigs?"
        description="Partner with Bigwigs Technologies to build intelligent, scalable, and secure AI solutions across software, data, and Generative AI."
        primaryAction={{ label: "Book a Demo", href: "/demo" }}
        secondaryAction={{ label: "Talk To Experts", href: "/contact", showArrow: true }}
      />
    </main>
  );
}
