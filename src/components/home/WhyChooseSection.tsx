import { motion } from "framer-motion";
import {
  ShieldCheck,
  Award,
  Layers,
  Users,
  Clock,
  MessageSquare,
  Globe2,
  Database,
  Star,
  Target,
  type LucideIcon,
} from "lucide-react";
import Container from "@/components/ui/Container";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

function splitTitleLines(title: string): [string, string] {
  const words = title.trim().split(" ");
  if (words.length <= 1) return [title, ""];
  return [words.slice(0, -1).join(" "), words[words.length - 1]];
}

const features: Feature[] = [
  {
    icon: ShieldCheck,
    title: "Enterprise-Grade Security",
    description: "ISO 27001 certified with robust data security and compliance standards.",
  },
  {
    icon: Award,
    title: "High Quality & Accuracy",
    description: "Rigorous QA processes ensuring 99.5% accuracy in every deliverable.",
  },
  {
    icon: Layers,
    title: "Scalable & Flexible",
    description: "Engagement models and teams that scale to match your business needs.",
  },
  {
    icon: Users,
    title: "Expert & Dedicated Teams",
    description: "Skilled professionals with deep domain knowledge and yoe.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "Agile processes to meet your deadlines.",
  },
  {
    icon: MessageSquare,
    title: "Transparent Communication",
    description: "Clear, consistent, and proactive communication at the project.",
  },
];

interface Stat {
  icon: LucideIcon;
  value: string;
  label: string;
}

const stats: Stat[] = [
  { icon: Users, value: "12+", label: "Years in Business" },
  { icon: Database, value: "100M+", label: "Images Annotated" },
  { icon: Star, value: "500+", label: "Successful Projects" },
];

export default function WhyChooseSection() {
  return (
    <section id="why-choose-us" className="relative w-full scroll-mt-24 overflow-hidden bg-white py-16 lg:py-20">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-brand-blue-50/60 via-white to-white"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[40rem] w-[56rem] -translate-x-1/2 opacity-40"
        style={{
          backgroundImage: "radial-gradient(#2563EB 1.4px, transparent 1.4px)",
          backgroundSize: "15px 15px",
          WebkitMaskImage: "radial-gradient(ellipse 60% 55% at 50% 0%, black 40%, transparent 75%)",
          maskImage: "radial-gradient(ellipse 60% 55% at 50% 0%, black 40%, transparent 75%)",
        }}
      />

      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-24 -left-24 h-[26rem] w-[26rem] rounded-full bg-brand-blue-500/10 blur-[120px]"
        animate={{ opacity: [0.5, 0.9, 0.5], y: [0, -16, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -right-20 h-[28rem] w-[28rem] rounded-full bg-brand-blue-500/10 blur-[130px]"
        animate={{ opacity: [0.4, 0.8, 0.4], y: [0, 18, 0] }}
        transition={{ duration: 19, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      <Container className="relative z-10">
        <div className="mx-auto grid max-w-[1500px] grid-cols-1 gap-10 lg:grid-cols-[2.3fr_1.3fr] lg:gap-8">
          <div>
            <div className="flex items-center gap-3" aria-hidden="true">
              <span className="text-xs font-bold tracking-[0.2em] text-orange-500 uppercase sm:text-sm">
                Why Choose Bigwigs
              </span>
              <span className="h-px w-8 bg-orange-500/50" />
            </div>
            <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Delivering Excellence. Building Trust.{" "}
              <span className="text-brand-blue-500">Driving Impact.</span>
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-500 sm:text-lg">
              We combine deep domain expertise, advanced technology, and a client-first approach to deliver solutions that create business value.
            </p>

            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {features.map((feature, i) => {
                const Icon = feature.icon;
                const [line1, line2] = splitTitleLines(feature.title);
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.5, delay: i * 0.06, ease: [0.215, 0.61, 0.355, 1] }}
                    className="rounded-xl border border-slate-100 border-b-[2px] border-b-brand-blue-500 bg-white p-4 shadow-[0_16px_40px_-30px_rgba(15,23,42,0.25)] transition-transform duration-300 hover:-translate-y-1"
                  >
                    <div className="flex items-center gap-3"> 
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-blue-50">
                        <Icon size={18} strokeWidth={1.5} />
                      </span>
                      <h2 className="flex flex-col text-[15px] font-bold leading-snug text-slate-900">
                        <span>{line1}</span>
                        <span>{line2 || " "}</span>
                      </h2>
                    </div>
                    
                    <p className="mt-2 text-xs leading-relaxed text-slate-500">
                      {feature.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* middle: stats */}
          <div className="flex flex-col border-t border-slate-100 mt-12 pt-8 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-8">
            <div className="rounded-xl bg-gray-600 p-1 shadow-[0_16px_40px_-30px_rgba(15,23,42,0.35)]">
              <video
                src="/bigwigs-technologies.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="aspect-[16/10] w-full rounded-lg bg-gray-600 object-contain"
              />
            </div>
            <div className="mt-8 flex w-full flex-col divide-y divide-slate-100">
              {stats.map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.5, delay: i * 0.07, ease: [0.215, 0.61, 0.355, 1] }}
                    className="flex items-center gap-3 py-4 first:pt-0 last:pb-0"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-blue-50 text-brand-blue-600">
                      <Icon size={18} strokeWidth={1.75} />
                    </span>
                    <div>
                      <div className="text-xl font-extrabold tracking-tight text-brand-blue-600">
                        {stat.value}
                      </div>
                      <div className="text-sm text-slate-500">{stat.label}</div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
