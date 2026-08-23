import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";
import Container from "@/components/ui/Container";
import type { CaseStudy } from "../caseStudiesData";

export default function ChallengesSection({ study }: { study: CaseStudy }) {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-orange-50/60 via-orange-50/15 to-white py-10 lg:py-12">
      <Container className="relative z-10">
        <div className="flex items-center gap-2">
          <AlertTriangle size={16} className="text-orange-500" />
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange-500 sm:text-sm">
            The Challenge
          </span>
        </div>
        <h2 className="mt-3 max-w-xl text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
          What {study.client} Was Up Against
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {study.challenges.map((challenge, i) => {
            const step = String(i + 1).padStart(2, "0");
            return (
              <motion.div
                key={challenge}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.215, 0.61, 0.355, 1] }}
                className="group relative flex items-start gap-4 overflow-hidden rounded-[24px] border border-slate-200 bg-white p-6 shadow-[0_16px_40px_-28px_rgba(15,23,42,0.18)] transition-all duration-300 hover:-translate-y-1 hover:border-slate-300"
              >
                <span
                  aria-hidden
                  className="absolute right-4 top-2 text-4xl font-extrabold text-orange-500/10 transition-colors duration-300 group-hover:text-orange-500/20"
                >
                  {step}
                </span>
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-orange-500 transition-transform duration-300 group-hover:-rotate-6">
                  <AlertTriangle size={19} strokeWidth={1.75} />
                </span>
                <p className="relative z-10 pt-1.5 text-sm font-semibold leading-relaxed text-slate-700 sm:text-base">
                  {challenge}
                </p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
