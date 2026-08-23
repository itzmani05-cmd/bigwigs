import { motion } from "framer-motion";
import { ShieldCheck, Target, Gauge, Clock, type LucideIcon } from "lucide-react";
import Container from "@/components/ui/Container";
import type { CaseStudy } from "../caseStudiesData";

const METRIC_ICONS: LucideIcon[] = [Target, Gauge, ShieldCheck, Clock];

export default function QualityMetrics({ study }: { study: CaseStudy }) {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-brand-green-50/50 via-brand-green-50/10 to-white py-10 lg:py-12">
      <Container className="relative z-10">
        <div className="flex items-center gap-2">
          <ShieldCheck size={16} className="text-brand-blue-600" />
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-blue-600 sm:text-sm">
            Results
          </span>
        </div>
        <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
          Precision At Every Step
        </h2>

        <div className="mt-10 grid grid-cols-2 gap-6 lg:grid-cols-4">
          {study.qualityMetrics.map((metric, i) => {
            const Icon = METRIC_ICONS[i % METRIC_ICONS.length];
            return (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.06, ease: [0.215, 0.61, 0.355, 1] }}
                className="group flex flex-col items-center rounded-[24px] border border-slate-200 bg-white p-6 text-center shadow-[0_16px_40px_-28px_rgba(15,23,42,0.18)] transition-all duration-300 hover:-translate-y-1.5 hover:border-slate-300"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-blue-50 text-brand-blue-500 transition-transform duration-300 group-hover:-rotate-6">
                  <Icon size={19} strokeWidth={1.75} />
                </span>
                <span className="mt-3 block text-3xl font-extrabold tracking-tight text-brand-blue-500 sm:text-4xl">
                  {metric.value}
                </span>
                <span className="mt-2 block text-xs font-semibold text-slate-500 sm:text-sm">{metric.label}</span>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
