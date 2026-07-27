import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Container from "@/components/ui/Container";
import WorkflowTimeline, { type WorkflowStepItem } from "./WorkflowTimeline";

export interface ChecklistItem {
  icon: LucideIcon;
  label: string;
  /** One-line supporting copy shown under the label. */
  description: string;
}

interface ChecklistWorkflowSectionProps {
  eyebrow?: string;
  heading: ReactNode;
  description?: string;
  steps: WorkflowStepItem[];
  checklist: ChecklistItem[];
}

export default function ChecklistWorkflowSection({
  eyebrow = "Data Services",
  heading,
  description,
  steps,
  checklist,
}: ChecklistWorkflowSectionProps) {
  return (
    <section className="relative w-full overflow-hidden py-16 lg:py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 left-0 h-[22rem] w-[22rem] rounded-full bg-brand-blue-500/10 blur-[120px]"
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

        {/* itemized checklist, not a grid */}
        <div className="mx-auto mt-16 max-w-2xl">
          {checklist.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, x: -16, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: i * 0.07, ease: [0.215, 0.61, 0.355, 1] }}
              className={`group flex items-center gap-5 py-5 ${i !== 0 ? "border-t border-slate-200" : ""}`}
            >
              <span className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-brand-blue-200 bg-brand-blue-50 text-brand-blue-600 shadow-[0_0_20px_-4px_rgba(37,99,235,0.25)] transition-transform duration-300 group-hover:scale-110">
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 -m-2 rounded-full bg-brand-blue-400/20 opacity-0 blur-lg transition-opacity duration-300 group-hover:opacity-100"
                />
                <CheckCircle2 size={20} strokeWidth={1.75} className="relative" />
              </span>
              <div>
                <h3 className="text-base font-bold text-slate-900">{item.label}</h3>
                <p className="mt-1 text-sm leading-relaxed text-slate-500">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
