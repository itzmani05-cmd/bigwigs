import { motion } from "framer-motion";
import { Download, ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import { researchItems } from "./blogResearchData";

export default function LatestResearch() {
  return (
    <section className="relative w-full overflow-hidden py-14 lg:py-16">
      <Container className="relative z-10">
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-blue-600 sm:text-sm">
          Latest Research
        </span>
        <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
          Papers &amp; Benchmarks
        </h2>

        <div className="relative mx-auto mt-10 max-w-3xl">
          <div
            aria-hidden
            className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-brand-blue-300 via-brand-blue-400 to-transparent sm:left-[7px]"
          />
          <div className="flex flex-col gap-8">
            {researchItems.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.215, 0.61, 0.355, 1] }}
                className="relative flex items-start gap-6 pl-8"
              >
                <span className="absolute left-0 top-1.5 h-4 w-4 rounded-full border-4 border-white bg-brand-blue-500 shadow-[0_0_10px_3px_rgba(37,99,235,0.4)]" />

                <div className="glass-card min-w-0 flex-1 rounded-2xl p-5 sm:p-6">
                  <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wide text-brand-blue-500">
                    <span>{item.date}</span>
                    <span className="text-slate-300">&middot;</span>
                    <span className="text-slate-500">{item.topic}</span>
                  </div>
                  <h3 className="mt-2 text-lg font-bold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">{item.preview}</p>

                  <div className="mt-4 flex flex-wrap items-center gap-5">
                    <button
                      type="button"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-600 transition-colors duration-300 hover:text-brand-blue-600"
                    >
                      <Download size={15} />
                      Download PDF
                    </button>
                    <span className="group/link inline-flex cursor-pointer items-center gap-1.5 text-sm font-semibold text-brand-blue-600 transition-colors duration-300 hover:text-brand-blue-700">
                      Read Article
                      <ArrowRight size={14} className="transition-transform duration-300 group-hover/link:translate-x-1" />
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
