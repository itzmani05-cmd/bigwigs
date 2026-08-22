import { motion } from "framer-motion";
import { Gauge } from "lucide-react";
import Container from "@/components/ui/Container";
import MagneticButton from "@/components/ui/MagneticButton";
import SectionBackdrop from "./SectionBackdrop";
import { qualityDashboard } from "./content/quality";

export default function QualityDashboardPreview() {
  return (
    <section className="relative w-full overflow-hidden bg-slate-50/70 py-16 lg:py-20">
      <SectionBackdrop />
      <Container className="relative z-10">
        <div className="mx-auto max-w-xl text-center">
          <div className="flex items-center justify-center gap-3">
            <span aria-hidden className="h-px w-8 bg-orange-500/50" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange-500 sm:text-sm">
              {qualityDashboard.eyebrow}
            </span>
            <span aria-hidden className="h-px w-8 bg-orange-500/50" />
          </div>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            {qualityDashboard.heading}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-500 sm:text-lg">{qualityDashboard.description}</p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: [0.215, 0.61, 0.355, 1] }}
          className="mx-auto mt-12 max-w-xl overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_24px_60px_-28px_rgba(15,23,42,0.2)]"
        >
          <div className="flex items-center justify-between border-b border-slate-100 bg-slate-50/60 px-6 py-4">
            <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-slate-500">
              <Gauge size={15} strokeWidth={1.75} />
              Project Quality
            </span>
            <span className="rounded-full border border-amber-200 bg-amber-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-amber-700">
              Illustrative Example
            </span>
          </div>

          <div className="flex flex-col gap-5 px-6 py-6">
            {qualityDashboard.metrics.map((metric, i) => (
              <div key={metric.label}>
                <div className="flex items-baseline justify-between">
                  <span className="text-sm font-semibold text-slate-700">{metric.label}</span>
                  <span className="text-sm font-bold text-slate-900">{metric.value}%</span>
                </div>
                <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-slate-100">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${metric.value}%` }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.8, delay: 0.1 + i * 0.1, ease: [0.215, 0.61, 0.355, 1] }}
                    className="h-full rounded-full bg-gradient-to-r from-brand-blue-400 to-brand-blue-600"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-slate-100 bg-slate-50/60 px-6 py-4 text-center">
            <MagneticButton
              href={qualityDashboard.cta.href}
              magnetic={false}
              className="inline-flex items-center justify-center rounded-lg bg-brand-blue-500 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-blue-600 select-none"
            >
              {qualityDashboard.cta.label}
            </MagneticButton>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
