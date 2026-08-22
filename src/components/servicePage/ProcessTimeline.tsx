import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { ChevronRight, type LucideIcon } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionBackdrop from "./SectionBackdrop";

export interface ProcessStep {
  icon: LucideIcon;
  title: string;
  description?: string;
}

interface ProcessTimelineProps {
  eyebrow: string;
  heading: ReactNode;
  steps: ProcessStep[];
  /** Tailwind grid-cols class for the desktop horizontal layout, e.g. "grid-cols-5" */
  desktopColumnsClassName?: string;
}

export default function ProcessTimeline({
  eyebrow,
  heading,
  steps,
  desktopColumnsClassName = "grid-cols-5",
}: ProcessTimelineProps) {
  return (
    <section className="relative w-full overflow-hidden bg-slate-50/70 py-16 lg:py-20">
      <SectionBackdrop />
      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: [0.215, 0.61, 0.355, 1] }}
          className="mx-auto max-w-xl text-center"
        >
          <div className="flex items-center justify-center gap-3">
            <span aria-hidden className="h-px w-8 bg-orange-500/50" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange-500 sm:text-sm">
              {eyebrow}
            </span>
            <span aria-hidden className="h-px w-8 bg-orange-500/50" />
          </div>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">{heading}</h2>
        </motion.div>
        <div className="relative mt-10 lg:hidden">
          <motion.div
            aria-hidden
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
            style={{ transformOrigin: "top" }}
            className="absolute left-5 top-2 bottom-2 w-px bg-slate-200"
          />
          <div className="flex flex-col gap-6">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="relative flex items-start gap-5"
                >
                  <span
                    className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-4 border-white bg-brand-blue-50 text-brand-blue-600 shadow-[0_10px_20px_-8px_rgba(15,23,42,0.3)] animate-particle-float"
                    style={{ animationDelay: `${i * 0.4}s` }}
                  >
                    <Icon size={18} strokeWidth={1.75} />
                  </span>
                  {step.description ? (
                    <div className="min-w-0 flex-1 rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-[0_16px_40px_-28px_rgba(15,23,42,0.18)]">
                      <span className="text-[11px] font-bold uppercase tracking-wide text-brand-blue-500/70">
                        Step {i + 1}
                      </span>
                      <h3 className="mt-0.5 text-sm font-bold text-slate-900">{step.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-slate-500">{step.description}</p>
                    </div>
                  ) : (
                    <div className="min-w-0 flex-1 pt-2">
                      <span className="text-[11px] font-bold uppercase tracking-wide text-brand-blue-500/70">
                        Step {i + 1}
                      </span>
                      <h3 className="mt-0.5 text-sm font-bold text-slate-900">{step.title}</h3>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* desktop: connected step cards */}
        <div className="relative mt-16 hidden lg:block">
          <div className={`grid gap-6 ${desktopColumnsClassName}`}>
            {steps.map((step, i) => {
              const Icon = step.icon;
              const isLast = i === steps.length - 1;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="group relative flex flex-col items-center rounded-2xl border border-slate-200 bg-white px-4 py-7 text-center shadow-[0_16px_40px_-28px_rgba(15,23,42,0.18)] transition-all duration-300 hover:-translate-y-1 hover:border-brand-blue-200/70 hover:shadow-[0_20px_45px_-24px_rgba(15,23,42,0.2)]"
                >
                  {!isLast && (
                    <span
                      aria-hidden
                      className="absolute -right-3.5 top-1/2 z-20 hidden h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-300 shadow-sm xl:flex"
                    >
                      <ChevronRight size={14} strokeWidth={2} />
                    </span>
                  )}
                  <span
                    className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-blue-50 text-brand-blue-600 transition-transform duration-300 group-hover:scale-105 animate-particle-float"
                    style={{ animationDelay: `${i * 0.4}s` }}
                  >
                    <Icon size={20} strokeWidth={1.75} />
                  </span>
                  <span className="mt-4 text-[11px] font-bold uppercase tracking-wide text-brand-blue-500/70">
                    Step {i + 1}
                  </span>
                  <h3 className="mt-1 text-sm font-bold leading-tight text-slate-900">{step.title}</h3>
                  {step.description && (
                    <p className="mt-1.5 text-xs leading-relaxed text-slate-500">{step.description}</p>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
