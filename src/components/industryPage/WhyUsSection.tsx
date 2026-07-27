import type { ReactNode } from "react";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import Container from "@/components/ui/Container";
import SpotlightCard from "./SpotlightCard";

const GLOW_COLORS = [
  "rgba(37,99,235,0.35)",
  "rgba(167,139,250,0.32)",
  "rgba(16,185,129,0.32)",
  "rgba(249,115,22,0.32)",
  "rgba(244,63,94,0.32)",
  "rgba(56,189,248,0.35)",
];

const RING_SHADOWS = [
  "0 0 30px -4px rgba(37,99,235,0.3)",
  "0 0 30px -4px rgba(167,139,250,0.3)",
  "0 0 30px -4px rgba(16,185,129,0.3)",
  "0 0 30px -4px rgba(249,115,22,0.3)",
  "0 0 30px -4px rgba(244,63,94,0.3)",
  "0 0 30px -4px rgba(56,189,248,0.3)",
];

export interface WhyUsItem {
  icon: LucideIcon;
  title: string;
  description: string;
  gradient: string;
}

interface WhyUsSectionProps {
  eyebrow?: string;
  heading: ReactNode;
  items: WhyUsItem[];
}

export default function WhyUsSection({ eyebrow = "Why Choose Us", heading, items }: WhyUsSectionProps) {
  return (
    <section className="relative w-full overflow-hidden py-4 lg:py-5">
      <Container className="relative z-10">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-orange-400 sm:text-sm">
            {eyebrow}
          </span>
          <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            {heading}
          </h2>
        </div>

        {/* Desktop: zigzag vertical timeline */}
        <div className="relative mt-20 hidden lg:block">
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-brand-blue-200 via-brand-blue-400 to-brand-blue-200 opacity-70" />
            <div className="absolute inset-0 bg-gradient-to-b from-brand-blue-200 via-brand-blue-400 to-brand-blue-200 opacity-40 blur-sm" />
          </div>

          <div className="flex flex-col gap-6">
            {items.map((item, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 28, filter: "blur(6px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.6, delay: (i % 6) * 0.08, ease: [0.215, 0.61, 0.355, 1] }}
                  className="relative grid grid-cols-[1fr_96px_1fr] items-center"
                >
                  <div className={isLeft ? "flex justify-end pr-10" : ""}>
                    {isLeft && (
                      <SpotlightCard
                        glowColor={GLOW_COLORS[i % GLOW_COLORS.length]}
                        className="w-full max-w-md p-6 text-right"
                      >
                        <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-slate-500">{item.description}</p>
                      </SpotlightCard>
                    )}
                  </div>

                  <div className="relative z-10 flex justify-center">
                    <motion.span
                      className={`flex h-16 w-16 items-center justify-center rounded-full border border-white/40 bg-gradient-to-br text-white ${item.gradient}`}
                      style={{ boxShadow: RING_SHADOWS[i % RING_SHADOWS.length] }}
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 3.2 + i * 0.25, repeat: Infinity, ease: "easeInOut", delay: i * 0.15 }}
                    >
                      <item.icon size={24} strokeWidth={1.75} />
                    </motion.span>
                  </div>

                  <div className={!isLeft ? "flex justify-start pl-10" : ""}>
                    {!isLeft && (
                      <SpotlightCard
                        glowColor={GLOW_COLORS[i % GLOW_COLORS.length]}
                        className="w-full max-w-md p-6 text-left"
                      >
                        <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-slate-500">{item.description}</p>
                      </SpotlightCard>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile / tablet fallback: stacked column, no zigzag offset */}
        <div className="mt-14 flex flex-col gap-5 lg:hidden">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: (i % 6) * 0.06, ease: [0.215, 0.61, 0.355, 1] }}
              className="flex items-start gap-4"
            >
              <span
                className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-white/40 bg-gradient-to-br text-white shadow-[0_0_24px_-6px_rgba(37,99,235,0.3)] ${item.gradient}`}
              >
                <item.icon size={22} strokeWidth={1.75} />
              </span>
              <SpotlightCard glowColor={GLOW_COLORS[i % GLOW_COLORS.length]} className="w-full p-5" tilt={false}>
                <h3 className="text-base font-bold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">{item.description}</p>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
