import type { ReactNode } from "react";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import Container from "@/components/ui/Container";
import WorkflowTimeline, { type WorkflowStepItem } from "./WorkflowTimeline";

export interface NumberedListItem {
  icon: LucideIcon;
  title: string;
  /** The current file's editorial rows have a one-line description under the title — kept optional since not all industries may need it. */
  description?: string;
}

interface NumberedListWorkflowSectionProps {
  eyebrow?: string;
  heading: ReactNode;
  description?: string;
  steps: WorkflowStepItem[];
  items: NumberedListItem[];
}

export default function NumberedListWorkflowSection({
  eyebrow = "Workflow",
  heading,
  description,
  steps,
  items,
}: NumberedListWorkflowSectionProps) {
  return (
    <section className="relative w-full overflow-hidden py-8 lg:py-12">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 right-0 h-[22rem] w-[22rem] rounded-full bg-brand-blue-500/10 blur-[120px]"
      />

      <Container className="relative z-10">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-orange-400 sm:text-sm">
            {eyebrow}
          </span>
          <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">{heading}</h2>
          {description && <p className="mt-4 text-base leading-relaxed text-slate-500">{description}</p>}
        </div>

        <div className="mt-12">
          <WorkflowTimeline steps={steps} />
        </div>

        {/* numbered editorial spec list */}
        <div className="mx-auto mt-20 max-w-3xl border-y border-slate-200">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.45, delay: (i % 7) * 0.06, ease: [0.215, 0.61, 0.355, 1] }}
              className={`group relative flex items-center gap-5 overflow-hidden py-6 sm:gap-7 ${
                i !== 0 ? "border-t border-slate-200" : ""
              }`}
            >
              <span
                aria-hidden
                className="pointer-events-none absolute -left-1 select-none text-6xl font-extrabold leading-none text-slate-900/[0.05] transition-colors duration-300 group-hover:text-slate-900/[0.09] sm:text-7xl"
              >
                {String(i + 1).padStart(2, "0")}
              </span>

              <span className="relative z-10 ml-16 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-blue-50 text-brand-blue-600 shadow-[0_0_20px_-4px_rgba(37,99,235,0.25)] sm:ml-24">
                <item.icon size={20} strokeWidth={1.75} />
              </span>

              <div className="relative z-10 flex-1">
                <h3 className="text-base font-bold leading-snug text-slate-900 sm:text-lg">{item.title}</h3>
                {item.description && (
                  <p className="mt-1 text-sm leading-relaxed text-slate-500">{item.description}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
