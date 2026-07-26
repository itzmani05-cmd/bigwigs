import type { ReactNode } from "react";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
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
    <section className="relative w-full overflow-hidden py-16 lg:py-20">
      <SectionBackdrop />
      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: [0.215, 0.61, 0.355, 1] }}
          className="mx-auto max-w-xl text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.14em] text-blue-500">{eyebrow}</span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">{heading}</h2>
        </motion.div>

        {/* mobile / tablet: vertical stepper */}
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
                    className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-brand-blue-600 transition-all duration-300 hover:-translate-y-1 hover:border-brand-blue-200 hover:shadow-md animate-particle-float"
                    style={{ animationDelay: `${i * 0.4}s` }}
                  >
                    <Icon size={16} strokeWidth={1.75} />
                  </span>
                  {step.description ? (
                    <div className="min-w-0 flex-1 rounded-xl border border-slate-100 px-5 py-4">
                      <h3 className="text-sm font-semibold text-slate-900">{step.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-slate-500">{step.description}</p>
                    </div>
                  ) : (
                    <h3 className="pt-2 text-sm font-semibold text-slate-900">{step.title}</h3>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* desktop: horizontal timeline */}
        <div className="relative mt-16 hidden lg:block">
          <motion.div
            aria-hidden
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: [0.215, 0.61, 0.355, 1] }}
            style={{ transformOrigin: "left" }}
            className="absolute left-0 right-0 top-6 h-px -translate-y-1/2 bg-slate-200"
          />

          <div className={`grid gap-2 ${desktopColumnsClassName}`}>
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex flex-col items-center text-center"
                >
                  <span
                    className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-brand-blue-600 transition-all duration-300 hover:-translate-y-1 hover:border-brand-blue-200 hover:shadow-md animate-particle-float"
                    style={{ animationDelay: `${i * 0.4}s` }}
                  >
                    <Icon size={18} strokeWidth={1.75} />
                  </span>
                  <h3 className="mt-3.5 text-sm font-semibold leading-tight text-slate-900">{step.title}</h3>
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
