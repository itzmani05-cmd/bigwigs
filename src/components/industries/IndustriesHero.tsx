import { motion } from "framer-motion";
import {
  ArrowRight,
  HeartPulse,
  Car,
  Factory,
  Landmark,
  Building2,
  ShieldCheck,
  Cpu,
  Globe2,
  BarChart3,
  type LucideIcon,
} from "lucide-react";
import Container from "@/components/ui/Container";
import MagneticButton from "@/components/ui/MagneticButton";

const logoMark = "/apple-touch-icon.png";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
} as const;

interface FloatingBadge {
  icon: LucideIcon;
  label: string;
  position: string;
  delay: number;
  iconBg: string;
  iconText: string;
  underline: string;
}

const FLOATING_BADGES: FloatingBadge[] = [
  {
    icon: Building2,
    label: "Smart Cities",
    position: "left-[2%] top-[8%]",
    delay: 0,
    iconBg: "bg-violet-100",
    iconText: "text-violet-600",
    underline: "bg-violet-500",
  },
  {
    icon: Car,
    label: "Automotive",
    position: "right-[12%] top-[10%]",
    delay: 0.5,
    iconBg: "bg-brand-blue-100",
    iconText: "text-brand-blue-600",
    underline: "bg-brand-blue-500",
  },
  {
    icon: HeartPulse,
    label: "Healthcare",
    position: "-left-[2%] top-[42%]",
    delay: 1,
    iconBg: "bg-emerald-100",
    iconText: "text-emerald-600",
    underline: "bg-emerald-500",
  },
  {
    icon: Factory,
    label: "Manufacturing",
    position: "right-0 top-[54%]",
    delay: 1.5,
    iconBg: "bg-orange-100",
    iconText: "text-orange-600",
    underline: "bg-orange-500",
  },
  {
    icon: Landmark,
    label: "Financial Services",
    position: "left-[16%] top-[73%]",
    delay: 2,
    iconBg: "bg-amber-100",
    iconText: "text-amber-600",
    underline: "bg-amber-500",
  },
];

interface TrustItem {
  icon: LucideIcon;
  title: string;
  description: string;
  iconBg: string;
  iconText: string;
}

const TRUST_ITEMS: TrustItem[] = [
  {
    icon: ShieldCheck,
    title: "Enterprise Grade Security",
    description: "Your data is always protected with top-tier security.",
    iconBg: "bg-violet-100",
    iconText: "text-violet-600",
  },
  {
    icon: Cpu,
    title: "Scalable AI Solutions",
    description: "Built to scale with your business needs.",
    iconBg: "bg-emerald-100",
    iconText: "text-emerald-600",
  },
  {
    icon: Globe2,
    title: "Industry Expertise",
    description: "Deep domain knowledge across multiple industries.",
    iconBg: "bg-brand-blue-100",
    iconText: "text-brand-blue-600",
  },
  {
    icon: BarChart3,
    title: "Measurable Impact",
    description: "Delivering real business outcomes with AI.",
    iconBg: "bg-orange-100",
    iconText: "text-orange-600",
  },
];

export default function IndustriesHero() {
  return (
    <section className="relative flex w-full flex-col justify-center overflow-hidden min-h-[calc(100svh-4.75rem)] pt-2 pb-10 lg:flex-none lg:block lg:min-h-0 lg:pt-3 lg:pb-12">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-brand-blue-50/50 via-white/40 to-transparent"
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-24 -left-24 h-[28rem] w-[28rem] rounded-full bg-brand-blue-500/10 blur-[130px]"
        animate={{ opacity: [0.5, 0.9, 0.5] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -right-20 h-[24rem] w-[24rem] rounded-full bg-violet-400/[0.08] blur-[120px]"
        animate={{ opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[50%_50%] lg:gap-7">
          <motion.div variants={containerVariants} initial="hidden" animate="visible">
            <motion.div variants={itemVariants} className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange-500 sm:text-sm">
                Industries
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="mt-4 text-4xl font-extrabold leading-[1.12] tracking-tight text-slate-900 sm:text-5xl lg:text-[44px] xl:text-5xl"
            >
              Building Intelligence For{" "}
              <br className="hidden sm:block" />
              <span className="text-blue-500">Tomorrow&rsquo;s Industries</span>
            </motion.h1>

            <motion.p variants={itemVariants} className="mt-4 max-w-lg text-base leading-relaxed text-slate-500 sm:text-lg">
              We deliver enterprise AI data services, software engineering,
              Generative AI, and digital transformation solutions across
              healthcare, automotive, finance, manufacturing, agriculture,
              retail, logistics, and smart cities.
            </motion.p>

            <motion.div variants={itemVariants} className="mt-7 flex flex-wrap items-center gap-4">
              <MagneticButton
                href="/demo"
                magnetic={false}
                className="inline-flex items-center gap-2 rounded-lg bg-blue-500 hover:bg-blue-700 px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_24px_-8px_rgba(37,99,235,0.5)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_30px_-8px_rgba(124,58,237,0.5)] select-none"
              >
                <span>Book a Demo</span>
                <ArrowRight size={16} />
              </MagneticButton>
            </motion.div>
          </motion.div>

          <div className="relative hidden aspect-[4/3] lg:block">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-60"
              style={{
                backgroundImage: "radial-gradient(#2563EB 1.4px, transparent 1.4px)",
                backgroundSize: "16px 16px",
                WebkitMaskImage:
                  "radial-gradient(ellipse 55% 55% at 50% 50%, black 35%, transparent 75%)",
                maskImage: "radial-gradient(ellipse 55% 55% at 50% 50%, black 35%, transparent 75%)",
              }}
            />
            <motion.div
              aria-hidden
              className="pointer-events-none absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-brand-blue-300/50 xl:h-64 xl:w-64"
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              aria-hidden
              className="pointer-events-none absolute left-1/2 top-1/2 h-36 w-36 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-violet-300/50 xl:h-44 xl:w-44"
              animate={{ rotate: -360 }}
              transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white p-4 shadow-[0_20px_50px_-20px_rgba(37,99,235,0.4)] xl:h-28 xl:w-28 xl:p-6"
            >
              <img src={logoMark} alt="" aria-hidden className="h-full w-full object-contain" />
            </motion.div>

            {FLOATING_BADGES.map((badge) => (
              <motion.div
                key={badge.label}
                className={`absolute z-20 w-[170px] rounded-2xl border border-slate-100 bg-white p-3 shadow-[0_20px_40px_-20px_rgba(15,23,42,0.25)] xl:w-[210px] xl:p-3.5 ${badge.position}`}
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: badge.delay }}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${badge.iconBg} ${badge.iconText}`}
                  >
                    <badge.icon size={18} strokeWidth={1.75} />
                  </span>

                  <p className="text-sm font-bold text-slate-900">
                    {badge.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-2 hidden gap-6 rounded-2xl border border-slate-200 bg-white p-2 shadow-[0_20px_45px_-28px_rgba(15,23,42,0.2)] sm:grid sm:grid-cols-2 sm:gap-8 lg:grid-cols-4 lg:p-8"
        >
          {TRUST_ITEMS.map((item) => (
            <div key={item.title} className="flex items-start gap-3">
              <span
                className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${item.iconBg} ${item.iconText}`}
              >
                <item.icon size={18} strokeWidth={1.75} />
              </span>
              <div className="min-w-0">
                <h3 className="text-sm font-bold text-slate-900">{item.title}</h3>
                <p className="mt-1 text-xs leading-relaxed text-slate-500">{item.description}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
