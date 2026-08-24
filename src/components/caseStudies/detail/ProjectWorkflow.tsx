import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import { ScrollReveal, ScrollStagger, ScrollStaggerItem, STAGGER } from "@/components/scroll";
import type { CaseStudy } from "../caseStudiesData";

// Tailwind needs literal class names to detect at build time — no dynamic interpolation.
const COLUMNS_BY_COUNT: Record<number, string> = {
  3: "lg:grid-cols-3",
  4: "lg:grid-cols-4",
  5: "lg:grid-cols-5",
  6: "lg:grid-cols-6",
  7: "lg:grid-cols-7",
};

export default function ProjectWorkflow({ study }: { study: CaseStudy }) {
  const columns = COLUMNS_BY_COUNT[study.workflow.length] ?? "lg:grid-cols-5";

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-violet-50/60 via-violet-50/15 to-white py-10 lg:py-12">
      <Container className="relative z-10">
        <ScrollReveal direction="down" as="div" className="mx-auto max-w-xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-blue-600 sm:text-sm">
            Implementation Process
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            How We Delivered It
          </h2>
        </ScrollReveal>

        {/* mobile / tablet: vertical stepper */}
        <div className="relative mt-10 lg:hidden">
          <div
            aria-hidden
            className="absolute left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-brand-blue-300 via-brand-blue-400 to-transparent"
          />
          <ScrollStagger staggerDelay={STAGGER.base} amount={0.5} className="flex flex-col gap-6">
            {study.workflow.map((step, i) => (
              <ScrollStaggerItem
                key={step.title}
                direction="left"
                distance={16}
                duration={0.5}
                className="relative flex items-start gap-5"
              >
                <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-4 border-white bg-brand-blue-500 text-sm font-bold text-white shadow-[0_10px_20px_-8px_rgba(37,99,235,0.5)]">
                  {i + 1}
                </span>
                <div className="min-w-0 flex-1 rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-[0_16px_40px_-28px_rgba(15,23,42,0.18)]">
                  <h3 className="text-sm font-bold text-slate-900">{step.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-500">{step.description}</p>
                </div>
              </ScrollStaggerItem>
            ))}
          </ScrollStagger>
        </div>

        {/* desktop: horizontal timeline */}
        <div className="relative mt-16 hidden lg:block">
          <div
            aria-hidden
            className="absolute left-0 right-0 top-6 h-2 -translate-y-1/2 rounded-full bg-brand-blue-400/25 blur-md"
          />
          <div aria-hidden className="absolute left-0 right-0 top-6 h-px -translate-y-1/2 bg-slate-200" />
          <motion.div
            aria-hidden
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            style={{ transformOrigin: "left" }}
            className="absolute left-0 right-0 top-6 h-px -translate-y-1/2 bg-gradient-to-r from-brand-blue-400 via-cyan-400 to-brand-blue-400"
          />

          <ScrollStagger staggerDelay={STAGGER.base} amount={0.4} className={`grid gap-4 ${columns}`}>
            {study.workflow.map((step, i) => (
              <ScrollStaggerItem
                key={step.title}
                distance={24}
                duration={0.5}
                className="flex flex-col items-center text-center"
              >
                <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border-4 border-white bg-brand-blue-500 text-sm font-bold text-white shadow-[0_10px_24px_-8px_rgba(37,99,235,0.45)]">
                  {i + 1}
                </span>
                <div className="mt-4 w-full rounded-2xl border border-slate-200 bg-white p-4 shadow-[0_16px_40px_-28px_rgba(15,23,42,0.18)]">
                  <h3 className="text-sm font-bold text-slate-900">{step.title}</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-slate-500">{step.description}</p>
                </div>
              </ScrollStaggerItem>
            ))}
          </ScrollStagger>
        </div>
      </Container>
    </section>
  );
}
