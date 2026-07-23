import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import Container from "@/components/ui/Container";
import type { CaseStudy } from "../caseStudiesData";

export default function QualityMetrics({ study }: { study: CaseStudy }) {
  return (
    <section className="relative w-full overflow-hidden py-10 lg:py-12">
      <Container className="relative z-10">
        <div className="flex items-center gap-2">
          <ShieldCheck size={16} className="text-brand-blue-600" />
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-blue-600 sm:text-sm">
            Quality Metrics
          </span>
        </div>
        <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
          Precision At Every Step
        </h2>

        <div className="mt-10 grid grid-cols-2 gap-6 lg:grid-cols-4">
          {study.qualityMetrics.map((metric, i) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: [0.215, 0.61, 0.355, 1] }}
              className="glass-card rounded-[24px] p-6 text-center"
            >
              <span className="block text-3xl font-extrabold tracking-tight text-brand-blue-500 sm:text-4xl">
                {metric.value}
              </span>
              <span className="mt-2 block text-xs font-semibold text-slate-500 sm:text-sm">{metric.label}</span>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
