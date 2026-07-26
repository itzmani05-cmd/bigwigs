import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import { nlpTasks } from "./clinicalNlpData";

export default function ClinicalNlpSection() {
  return (
    <section className="relative w-full bg-[#071B46] py-16 lg:py-20">
      <Container className="relative z-10">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[46%_54%] lg:gap-12">
          {/* LEFT — mock annotated clinical note */}
          <div className="mx-auto w-full max-w-[440px] overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <span className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
              Clinical Note — Excerpt
            </span>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">
              Patient presents with{" "}
              <span className="rounded bg-white/10 px-1 text-slate-200">Type 2 Diabetes</span>. Prescribed{" "}
              <span className="rounded bg-brand-blue-500/20 px-1 text-brand-blue-300">Metformin 500mg</span>. Scheduled
              for <span className="rounded bg-orange-500/15 px-1 text-orange-300">follow-up bloodwork</span> in 3 months.
            </p>
            <div className="mt-4 flex flex-wrap gap-2 text-[10px] font-medium">
              <span className="rounded bg-white/10 px-2 py-1 text-slate-200">Diagnosis</span>
              <span className="rounded bg-brand-blue-500/20 px-2 py-1 text-brand-blue-300">Medication</span>
              <span className="rounded bg-orange-500/15 px-2 py-1 text-orange-300">Procedure</span>
            </div>
          </div>

          {/* RIGHT */}
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
              Clinical NLP
            </span>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Structure hiding inside every clinical note
            </h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-slate-400">
              We turn free-text reports, prescriptions, and coded terminology — ICD, SNOMED —
              into structured data your systems can actually query.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-px border border-white/10 bg-white/10 sm:grid-cols-3">
              {nlpTasks.map((task, i) => {
                const Icon = task.icon;
                return (
                  <motion.div
                    key={task.label}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className="bg-[#071B46] p-4"
                  >
                    <Icon size={16} className="text-slate-400" strokeWidth={1.75} />
                    <span className="mt-2 block text-xs font-medium leading-snug text-slate-200">{task.label}</span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
