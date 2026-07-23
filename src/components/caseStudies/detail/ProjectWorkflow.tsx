import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import type { CaseStudy } from "../caseStudiesData";

export default function ProjectWorkflow({ study }: { study: CaseStudy }) {
  return (
    <section className="relative w-full overflow-hidden py-10 lg:py-12">
      <Container className="relative z-10">
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-blue-600 sm:text-sm">
          Project Workflow
        </span>
        <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
          How We Delivered It
        </h2>

        <div className="relative mx-auto mt-10 max-w-3xl">
          <div
            aria-hidden
            className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-brand-blue-300 via-brand-blue-400 to-transparent"
          />
          <div className="flex flex-col gap-8">
            {study.workflow.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.215, 0.61, 0.355, 1] }}
                className="relative flex items-start gap-6 pl-8"
              >
                <span className="absolute left-0 top-1.5 h-4 w-4 rounded-full border-4 border-white bg-brand-blue-500 shadow-[0_0_10px_3px_rgba(37,99,235,0.4)]" />
                <div className="glass-card min-w-0 flex-1 rounded-2xl p-5 sm:p-6">
                  <span className="text-xs font-bold uppercase tracking-wide text-brand-blue-500">
                    Step {i + 1}
                  </span>
                  <h3 className="mt-1.5 text-lg font-bold text-slate-900">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
