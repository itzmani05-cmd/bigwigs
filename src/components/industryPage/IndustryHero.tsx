import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Container from "@/components/ui/Container";
import MagneticButton from "@/components/ui/MagneticButton";
import SpotlightCard from "./SpotlightCard";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.7, ease: [0.215, 0.61, 0.355, 1] } },
} as const;

const ORBIT_NODES = [0, 72, 144, 216, 288];

export interface HeroVisualBadge {
  icon: LucideIcon;
  label: string;
  position: string;
  delay: number;
}

export interface CtaAction {
  label: string;
  href: string;
}

interface IndustryHeroProps {
  eyebrow: string;
  heading: ReactNode;
  description: string;
  primaryCta: CtaAction;
  secondaryCta: CtaAction;
  trustedByLabel?: string;
  trustedBy: string[];
  visualIcon: LucideIcon;
  badges: HeroVisualBadge[];
}

export default function IndustryHero({
  eyebrow,
  heading,
  description,
  primaryCta,
  secondaryCta,
  trustedByLabel = "Trusted Across",
  trustedBy,
  visualIcon: VisualIcon,
  badges,
}: IndustryHeroProps) {
  return (
    <section className="relative w-full overflow-hidden pt-16 pb-10 lg:pt-12 lg:pb-20">
      <Container className="relative z-10">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[55%_45%] lg:gap-2">
          <motion.div variants={containerVariants} initial="hidden" animate="visible">
            <motion.div variants={itemVariants} className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-500 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-orange-500" />
              </span>
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-orange-400 sm:text-sm">
                {eyebrow}
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="mt-4 text-3xl font-extrabold leading-[1.05] tracking-tight text-slate-900 sm:text-xl lg:text-[42px]"
            >
              {heading}
            </motion.h1>

            <motion.p variants={itemVariants} className="mt-5 text-base leading-relaxed text-slate-500 sm:text-lg">
              {description}
            </motion.p>

            <motion.div variants={itemVariants} className="mt-9 flex flex-wrap items-center gap-4">
              <MagneticButton
                href={primaryCta.href}
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-blue-400 px-6 py-3 text-sm font-semibold text-white  transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_50px_-4px_rgba(37,99,235,0.9)] select-none"
              >
                <span className="relative">{primaryCta.label}</span>
                <ArrowRight size={16} className="relative transition-transform duration-300 group-hover:translate-x-1" />
              </MagneticButton>
              <MagneticButton
                href={secondaryCta.href}
                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-blue-300 hover:bg-slate-50 select-none"
              >
                <span>{secondaryCta.label}</span>
                <ArrowRight size={16} />
              </MagneticButton>
            </motion.div>

            <motion.div variants={itemVariants} className="mt-7">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">{trustedByLabel}</p>
              <div className="mt-3 flex flex-wrap items-center gap-x-6 gap-y-3">
                {trustedBy.map((name) => (
                  <span
                    key={name}
                    className="text-sm font-bold tracking-tight text-slate-400 transition-colors duration-300 hover:text-brand-blue-600"
                  >
                    {name}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <div className="relative">
            <motion.div
              aria-hidden
              className="pointer-events-none absolute -inset-10 rounded-full bg-brand-blue-500/20 blur-[90px]"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              aria-hidden
              className="pointer-events-none absolute -inset-14 rounded-full border border-dashed border-brand-blue-400/25"
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.215, 0.61, 0.355, 1] }}
            >
              <SpotlightCard
                glowColor="rgba(56,189,248,0.4)"
                className="aspect-[4/3] !rounded-[32px] border-white/10 bg-[#03050D] shadow-[0_60px_120px_-30px_rgba(2,6,23,0.9)]"
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 opacity-[0.18]"
                  style={{
                    backgroundImage: "radial-gradient(#3b82f6 1.2px, transparent 1.2px)",
                    backgroundSize: "20px 20px",
                  }}
                />

                {/* orbiting AI core */}
                <div className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2">
                  <motion.div
                    className="absolute inset-0"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
                  >
                    {ORBIT_NODES.map((angle) => (
                      <span
                        key={angle}
                        className="absolute h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_12px_3px_rgba(56,189,248,0.8)]"
                        style={{
                          top: "50%",
                          left: "50%",
                          transform: `rotate(${angle}deg) translate(112px) rotate(-${angle}deg)`,
                        }}
                      />
                    ))}
                  </motion.div>

                  <div className="absolute inset-[26%] rounded-full border border-brand-blue-400/25" />

                  <motion.div
                    animate={{ opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-brand-blue-400/50 bg-brand-blue-500/15 text-brand-blue-200 backdrop-blur-sm"
                  >
                    <span aria-hidden className="pointer-events-none absolute inset-0 -m-4 rounded-full bg-brand-blue-400/30 blur-2xl" />
                    <VisualIcon size={32} strokeWidth={1.5} className="relative" />
                  </motion.div>
                </div>

                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#03050D] via-transparent to-transparent"
                />

                {badges.map((badge) => (
                  <motion.div
                    key={badge.label}
                    className={`absolute z-20 hidden items-center gap-2 rounded-2xl border border-white/15 bg-white/[0.06] px-3 py-2 shadow-[0_20px_40px_-16px_rgba(0,0,0,0.6)] backdrop-blur-xl sm:flex ${badge.position}`}
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: badge.delay }}
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-brand-blue-500/20 text-brand-blue-300">
                      <badge.icon size={14} strokeWidth={1.75} />
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wide text-white">{badge.label}</span>
                  </motion.div>
                ))}
              </SpotlightCard>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
