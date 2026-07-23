import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";
import Container from "@/components/ui/Container";
import type { CaseStudy } from "../caseStudiesData";

export default function BusinessResults({ study }: { study: CaseStudy }) {
  return (
    <section className="relative w-full overflow-hidden py-10 lg:py-12">
      <Container className="relative z-10">
        <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-[#03132f] via-[#0b1f45] to-[#0F172A] p-8 sm:p-10 lg:p-12">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                "linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
          <motion.div
            aria-hidden
            className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-brand-blue-500/25 blur-[110px]"
            animate={{ opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className="relative z-10">
            <div className="flex items-center gap-2">
              <TrendingUp size={16} className="text-brand-blue-300" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-blue-300 sm:text-sm">
                Business Results
              </span>
            </div>
            <h2 className="mt-3 max-w-lg text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
              The Measurable Impact
            </h2>

            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
              {study.businessResults.map((result, i) => (
                <motion.div
                  key={result.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: i * 0.08, ease: [0.215, 0.61, 0.355, 1] }}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5"
                >
                  <span className="block text-3xl font-extrabold tracking-tight text-white">{result.value}</span>
                  <span className="mt-1.5 block text-sm font-semibold text-brand-blue-300">{result.label}</span>
                  {result.description && (
                    <p className="mt-2 text-xs leading-relaxed text-slate-400">{result.description}</p>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
