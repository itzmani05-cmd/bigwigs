import type { ReactNode } from "react";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import Container from "@/components/ui/Container";
import WorkflowTimeline, { type WorkflowStepItem } from "./WorkflowTimeline";

export interface MarqueeItem {
  icon: LucideIcon;
  title: string;
}

interface MarqueeWorkflowSectionProps {
  eyebrow?: string;
  heading: ReactNode;
  description?: string;
  steps: WorkflowStepItem[];
  marqueeItems: MarqueeItem[];
}

export default function MarqueeWorkflowSection({
  eyebrow = "Workflow",
  heading,
  description,
  steps,
  marqueeItems,
}: MarqueeWorkflowSectionProps) {
  const beltItems = [...marqueeItems, ...marqueeItems];

  return (
    <section className="relative w-full overflow-hidden py-16 lg:py-24">
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-20 right-1/4 h-[24rem] w-[24rem] rounded-full bg-brand-blue-500/15 blur-[120px]"
        animate={{ opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />

      <Container className="relative z-10">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-orange-400 sm:text-sm">
            {eyebrow}
          </span>
          <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">{heading}</h2>
          {description && <p className="mt-4 text-base leading-relaxed text-slate-500">{description}</p>}
        </div>

        <div className="mt-16">
          <WorkflowTimeline steps={steps} />
        </div>
      </Container>

      {/* seamless infinite marquee belt of document/record types */}
      <div className="relative z-10 mt-16 w-full overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#FCFDFF] to-transparent sm:w-32"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#FCFDFF] to-transparent sm:w-32"
        />
        <motion.div
          className="flex w-max items-center gap-4"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        >
          {beltItems.map((card, i) => (
            <div
              key={`${card.title}-${i}`}
              className="flex shrink-0 items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-5 py-3 shadow-[0_10px_30px_-14px_rgba(15,23,42,0.15)] backdrop-blur-sm transition-colors duration-300 hover:border-brand-blue-300 hover:bg-white"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-blue-50 text-brand-blue-600 shadow-[0_0_16px_-4px_rgba(37,99,235,0.25)]">
                <card.icon size={16} strokeWidth={1.75} />
              </span>
              <span className="whitespace-nowrap text-sm font-semibold text-slate-700">{card.title}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
