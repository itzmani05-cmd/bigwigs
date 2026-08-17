import { motion } from "framer-motion";
import {
  ArrowRight,
  Users,
  Globe2,
  ListChecks,
  ShieldCheck,
  BoxSelect,
  Brain,
  Stethoscope,
  Code2,
  MessagesSquare,
  Target,
  Eye,
  Gem,
  type LucideIcon,
} from "lucide-react";
import Container from "@/components/ui/Container";
import aboutRightImage from "@/assests/aboutRightSide.png";

import mountainFlagIllustration from "@/assests/about/mountainFlag.png";
import telescopeIllustration from "@/assests/about/telescope.png";
import shieldBadgeIllustration from "@/assests/about/shieldBadge.png";


const STATS = [
  { icon: Users, value: "75+", label: "Experts" },
  { icon: Globe2, value: "50+", label: "Global Clients" },
  { icon: ListChecks, value: "10M+", label: "Tasks Completed" },
  { icon: ShieldCheck, value: "99.5%", label: "Quality Accuracy" },
];

interface Pillar {
  icon: LucideIcon;
  title: string;
  description: string;
  iconBg: string;
  iconText: string;
  underline: string;
  illustration: string;
}

const PILLARS: Pillar[] = [
  {
    icon: Target,
    title: "Our Mission",
    description: "Deliver AI-powered solutions that create measurable business impact.",
    iconBg: "bg-brand-blue-50",
    iconText: "text-brand-blue-600",
    underline: "bg-brand-blue-500",
    illustration: mountainFlagIllustration,
  },
  {
    icon: Eye,
    title: "Our Vision",
    description: "Be the most trusted AI data partner for global enterprises.",
    iconBg: "bg-purple-50",
    iconText: "text-purple-600",
    underline: "bg-purple-500",
    illustration: telescopeIllustration,
  },
  {
    icon: Gem,
    title: "Our Values",
    description: "Innovation, integrity, and excellence in everything we deliver.",
    iconBg: "bg-orange-50",
    iconText: "text-orange-600",
    underline: "bg-orange-500",
    illustration: shieldBadgeIllustration,
  },
];

const SERVICE_CHIPS = [
  {
    icon: BoxSelect,
    label: "AI Data Annotation",
    color: "text-brand-blue-600",
    position: "left-8 top-5 sm:left-20 sm:top-30",
    delay: 1,
  },
  {
    icon: Brain,
    label: "Generative AI",
    color: "text-purple-600",
    position: "right-4 top-8 sm:right-5 sm:top-25",
    delay: 0.4,
  },
  {
    icon: Stethoscope,
    label: "Healthcare AI",
    color: "text-cyan-600",
    position: "left-4 top-[32%] sm:left-5",
    delay: 0.8,
  },
  {
    icon: Code2,
    label: "Software Development",
    color: "text-brand-green-600",
    position: "right-9 top-[48%] sm:right-18",
    delay: 1.2,
  },
  {
    icon: MessagesSquare,
    label: "Language Services",
    color: "text-orange-600",
    position: "bottom-55 left-1/3 -translate-x-1/2",
    delay: 1.6,
  },
];


export default function AboutSection() {
  return (
    <section
      id="about-bigwigs"
      className="relative scroll-mt-6 overflow-hidden bg-white py-8 lg:py-10"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-brand-blue-50/50 via-white to-white"
      />

      {/* dotted world map, top-right */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 -top-10 h-64 w-80 opacity-60"
        style={{
          backgroundImage: "radial-gradient(#2563EB 1.3px, transparent 1.3px)",
          backgroundSize: "13px 13px",
          WebkitMaskImage: "linear-gradient(to bottom left, black 25%, transparent 75%)",
          maskImage: "linear-gradient(to bottom left, black 25%, transparent 75%)",
        }}
      />

      {/* soft radial glow */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-24 -left-24 h-[26rem] w-[26rem] rounded-full bg-brand-blue-500/10 blur-[120px]"
        animate={{ opacity: [0.5, 0.9, 0.5], x: [0, 16, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -right-20 h-[28rem] w-[28rem] rounded-full bg-orange-400/[0.06] blur-[130px]"
        animate={{ opacity: [0.4, 0.8, 0.4], x: [0, -16, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      {/* floating particles */}
      <motion.span
        aria-hidden
        className="pointer-events-none absolute left-[6%] top-[22%] h-2 w-2 rounded-full bg-brand-blue-400/60"
        animate={{ opacity: [0.3, 1, 0.3], y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.span
        aria-hidden
        className="pointer-events-none absolute right-[10%] top-[12%] h-1.5 w-1.5 rounded-full bg-orange-400/60"
        animate={{ opacity: [0.3, 1, 0.3], y: [0, -8, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center lg:gap-12">
          <div>
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold uppercase tracking-[0.2em]  text-orange-500 sm:text-sm">
                About Bigwigs Technologies
              </span>
              <span aria-hidden className="h-px w-8 bg-orange-500/50" />
            </div>

            <h2 className="mt-5 text-2xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-3xl">
              Empowering Enterprises
              <br />
              with AI & Technology
            </h2>

            <p className="mt-6 text-sm leading-relaxed text-slate-500 sm:text-lg">
              Bigwigs Technologies is a trusted AI Data Services and Technology partner
              helping global enterprises build intelligent products through AI data
              annotation, Generative AI, enterprise software development, healthcare AI,
              and multilingual data solutions.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {PILLARS.map((pillar, i) => (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5, delay: i * 0.08, ease: [0.215, 0.61, 0.355, 1] }}
                  className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_12px_30px_-24px_rgba(15,23,42,0.25)]"
                >
                  <img
                    src={pillar.illustration}
                    alt=""
                    aria-hidden
                    className="pointer-events-none absolute -bottom-3 -right-3 h-20 w-20 object-contain opacity-20"
                  />

                  <div className="relative z-10 ">
                    <span className={`flex h-12 w-12 items-center justify-center  rounded-full ${pillar.iconBg} ${pillar.iconText}`}>
                      <pillar.icon size={20} strokeWidth={1.75} />
                    </span>
                    <h3 className="mt-4 text-sm font-bold text-slate-900">{pillar.title}</h3>
                    <span aria-hidden className={`mt-2 block h-0.5 w-6 rounded-full ${pillar.underline}`} />
                    <p className="mt-3 text-xs leading-relaxed text-slate-500">
                      {pillar.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="relative pb-8  lg:pb-10 lg:pl-6">
            {SERVICE_CHIPS.map((chip) => (
              <motion.div
                key={chip.label}
                className={`absolute z-20 hidden items-center gap-2 rounded-2xl border border-white/60 bg-white/90 px-3 py-2 shadow-[0_16px_30px_-16px_rgba(15,23,42,0.3)] backdrop-blur-xl sm:flex ${chip.position}`}
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: chip.delay }}
              >
                <chip.icon size={15} strokeWidth={1.75} className={chip.color} />
                <span className="text-[11px] font-bold whitespace-nowrap text-slate-700">
                  {chip.label}
                </span>
              </motion.div>
            ))}
            <div className="relative mt-15 aspect-[4/3] overflow-hidden rounded-[28px] border border-white/10 bg-[#03132f] shadow-[0_40px_90px_-30px_rgba(7,27,70,0.5)]">
              <img
                src={aboutRightImage}
                alt="Bigwigs Technologies AI operations center with holographic data visualization"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#03132f]/70 via-transparent to-[#03132f]/30"
              />

              <motion.div
                aria-hidden
                className="pointer-events-none absolute -top-10 left-1/4 h-56 w-56 rounded-full bg-brand-blue-400/20 blur-[90px]"
                animate={{ opacity: [0.4, 0.8, 0.4] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                aria-hidden
                className="pointer-events-none absolute -bottom-10 right-1/4 h-56 w-56 rounded-full bg-orange-400/10 blur-[90px]"
                animate={{ opacity: [0.3, 0.7, 0.3] }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              />
            </div>

            <div className="relative z-20 mx-4 -mt-10 grid grid-cols-2 gap-y-6 rounded-[24px] border border-slate-100 bg-white p-6 shadow-[0_30px_60px_-24px_rgba(15,23,42,0.25)] sm:grid-cols-4 sm:divide-x sm:divide-slate-100 sm:gap-y-0 lg:-mt-12">
              {STATS.map((stat) => (
                <div key={stat.label} className="flex flex-col items-center text-center sm:px-2">
                  <stat.icon size={20} strokeWidth={1.75} className="text-brand-blue-500" />
                  <span className="mt-1.5 text-xl font-extrabold tracking-tight text-slate-900">
                    {stat.value}
                  </span>
                  <span className="text-xs text-slate-500">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
