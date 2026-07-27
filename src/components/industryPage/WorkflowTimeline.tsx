import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface WorkflowStepItem {
  icon: LucideIcon;
  label: string;
}

interface WorkflowTimelineProps {
  steps: WorkflowStepItem[];
  /** Kept for API compatibility; both variants now render the same cinematic glow treatment. */
  variant?: "light" | "dark";
}

export default function WorkflowTimeline({ steps }: WorkflowTimelineProps) {
  return (
    <div className="relative">
      {/* mobile / tablet: vertical stack with glowing arrow connectors */}
      <div className="flex flex-col items-center gap-3 lg:hidden">
        {steps.map((step, i) => (
          <div key={step.label} className="flex flex-col items-center gap-3">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex items-center gap-3 rounded-full border border-slate-200 bg-white/80 py-2 pl-2 pr-5 shadow-[0_10px_30px_-10px_rgba(37,99,235,0.25)] backdrop-blur-xl"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-blue-50 text-brand-blue-600 shadow-[0_0_16px_2px_rgba(37,99,235,0.18)]">
                <step.icon size={18} strokeWidth={1.75} />
              </span>
              <span className="text-sm font-bold text-slate-900">{step.label}</span>
            </motion.div>
            {i < steps.length - 1 && <ArrowDown size={16} className="text-brand-blue-300" />}
          </div>
        ))}
      </div>

      {/* desktop: horizontal beam with traveling glow-pulse */}
      <div className="relative mt-2 hidden lg:block">
        <div aria-hidden className="absolute left-0 right-0 top-8 h-px -translate-y-1/2 bg-slate-200" />
        <motion.div
          aria-hidden
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1.2, ease: [0.215, 0.61, 0.355, 1] }}
          style={{ transformOrigin: "left" }}
          className="absolute left-0 right-0 top-8 h-px -translate-y-1/2 bg-gradient-to-r from-brand-blue-400 via-cyan-300 to-violet-400"
        />
        <motion.div
          aria-hidden
          className="absolute top-8 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-cyan-300 shadow-[0_0_20px_5px_rgba(56,189,248,0.8)]"
          animate={{ left: ["1%", "97%", "1%"] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="grid gap-3" style={{ gridTemplateColumns: `repeat(${steps.length}, minmax(0, 1fr))` }}>
          {steps.map((step, i) => (
            <motion.div
              key={step.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45, delay: i * 0.08, ease: [0.215, 0.61, 0.355, 1] }}
              className="group flex flex-col items-center text-center"
            >
              <span
                aria-hidden
                className="pointer-events-none absolute h-16 w-16 rounded-full bg-brand-blue-400/15 blur-xl transition-opacity duration-300 group-hover:opacity-100"
              />
              <span className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full border border-slate-200 bg-white text-brand-blue-600 shadow-[0_10px_30px_-8px_rgba(37,99,235,0.35)] transition-transform duration-300 group-hover:-translate-y-1.5 group-hover:scale-105">
                <step.icon size={24} strokeWidth={1.5} />
              </span>
              <span className="mt-4 text-sm font-bold leading-tight text-slate-900">{step.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
