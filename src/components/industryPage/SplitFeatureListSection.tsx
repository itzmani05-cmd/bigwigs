import type { ReactNode } from "react";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import Container from "@/components/ui/Container";
import SpotlightCard from "./SpotlightCard";

export interface FloatingBadge {
  icon: LucideIcon;
  label: string;
  position: string;
  delay: number;
}

export interface FeatureRow {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface SplitFeatureListSectionProps {
  eyebrow?: string;
  heading: ReactNode;
  description?: string;
  centerIcon: LucideIcon;
  badges: FloatingBadge[];
  features: FeatureRow[];
}

export default function SplitFeatureListSection({
  eyebrow = "AI Solutions",
  heading,
  description,
  centerIcon: CenterIcon,
  badges,
  features,
}: SplitFeatureListSectionProps) {
  return (
    <section className="relative w-full overflow-hidden py-16 lg:py-24">
      <Container className="relative z-10">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[45%_55%] lg:gap-10">
          {/* LEFT — abstract AI illustration */}
          <div className="relative mx-auto w-full max-w-md lg:mx-0">
            <motion.div
              aria-hidden
              className="pointer-events-none absolute -inset-8 rounded-[36px] bg-brand-blue-500/20 blur-[70px]"
              animate={{ opacity: [0.5, 0.9, 0.5] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, ease: [0.215, 0.61, 0.355, 1] }}
            >
              <SpotlightCard
                glowColor="rgba(56,189,248,0.3)"
                className="aspect-[4/3] !rounded-[28px] shadow-[0_40px_90px_-30px_rgba(15,23,42,0.15)]"
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 opacity-[0.06]"
                  style={{
                    backgroundImage: "radial-gradient(#3b82f6 1.2px, transparent 1.2px)",
                    backgroundSize: "18px 18px",
                  }}
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

                {/* central AI assistant medallion */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-brand-blue-200 bg-brand-blue-50 text-brand-blue-600"
                >
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-0 -m-3 rounded-full bg-brand-blue-300/25 blur-2xl"
                  />
                  <motion.span
                    animate={{ opacity: [0.6, 1, 0.6] }}
                    transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                    className="relative"
                  >
                    <CenterIcon size={30} strokeWidth={1.5} />
                  </motion.span>
                </motion.div>

                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-white/10"
                />

                {badges.map((badge) => (
                  <motion.div
                    key={badge.label}
                    className={`absolute z-20 hidden items-center gap-2 rounded-2xl border border-slate-200 bg-white px-3 py-2 shadow-[0_16px_30px_-16px_rgba(15,23,42,0.2)] backdrop-blur-xl sm:flex ${badge.position}`}
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: badge.delay }}
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-brand-blue-50 text-brand-blue-600">
                      <badge.icon size={14} strokeWidth={1.75} />
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wide text-slate-900">{badge.label}</span>
                  </motion.div>
                ))}
              </SpotlightCard>
            </motion.div>
          </div>

          {/* RIGHT — heading + feature row list */}
          <motion.div
            initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: [0.215, 0.61, 0.355, 1] }}
          >
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-orange-400 sm:text-sm">
              {eyebrow}
            </span>
            <h2 className="mt-4 max-w-xl text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
              {heading}
            </h2>
            {description && (
              <p className="mt-5 max-w-lg text-base leading-relaxed text-slate-500 sm:text-lg">{description}</p>
            )}

            <div className="mt-9 flex flex-col">
              {features.map((feature, i) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.45, delay: (i % 6) * 0.07, ease: [0.215, 0.61, 0.355, 1] }}
                  className={`flex items-start gap-4 py-5 ${i !== 0 ? "border-t border-slate-200" : ""}`}
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-blue-50 text-brand-blue-600 shadow-[0_0_20px_-4px_rgba(37,99,235,0.25)]">
                    <feature.icon size={19} strokeWidth={1.75} />
                  </span>
                  <div>
                    <h3 className="text-base font-bold leading-snug text-slate-900">{feature.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-500">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
