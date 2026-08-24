import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import Container from "@/components/ui/Container";
import { ScrollReveal, PREMIUM_EASE } from "@/components/scroll";
import { useParallax } from "@/hooks/useParallax";
import type { CaseStudy } from "../caseStudiesData";

const FLOATING_TAGS = ["Data Pipeline", "QA Layer", "Model Handoff"];

export default function ProjectOverview({ study }: { study: CaseStudy }) {
  const { ref: illustrationRef, y: illustrationY } = useParallax(16);

  return (
    <section className="relative w-full overflow-hidden py-10 lg:py-12">
      <Container className="relative z-10">
        <div className="mx-auto grid max-w-[1300px] grid-cols-1 items-center gap-12 lg:grid-cols-[42%_58%] lg:gap-14">
          {/* LEFT — abstract project illustration */}
          <motion.div
            ref={illustrationRef}
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: PREMIUM_EASE }}
            style={{ y: illustrationY }}
            className="relative mx-auto aspect-square w-full max-w-[380px]"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 rounded-full bg-brand-blue-500/10 blur-[70px]"
            />
            <div className="relative flex h-full w-full items-center justify-center rounded-[28px] border border-slate-200 bg-white shadow-[0_16px_40px_-28px_rgba(15,23,42,0.18)]">
              <span
                aria-hidden
                className="absolute inset-[14%] rounded-full border border-dashed border-brand-blue-200/60"
              />
              <motion.span
                aria-hidden
                className="absolute inset-[26%] rounded-full border border-slate-200/70"
                animate={{ rotate: 360 }}
                transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
              />

              <span
                className={`relative flex h-24 w-24 items-center justify-center rounded-2xl bg-gradient-to-br text-white ${study.iconGradient}`}
                style={{ boxShadow: "0 20px 45px -14px rgba(37,99,235,0.4)" }}
              >
                <study.industryIcon size={40} strokeWidth={1.5} />
              </span>

              {FLOATING_TAGS.map((tag, i) => {
                const positions = ["left-[6%] top-[16%]", "right-[2%] top-[46%]", "left-[10%] bottom-[10%]"];
                return (
                  <motion.span
                    key={tag}
                    className={`absolute z-10 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-[10px] font-bold text-slate-700 shadow-[0_10px_24px_-12px_rgba(15,23,42,0.3)] ${positions[i]}`}
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 5 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.6 }}
                  >
                    {tag}
                  </motion.span>
                );
              })}
            </div>
          </motion.div>

          {/* RIGHT */}
          <div>
            <ScrollReveal direction="right" amount={0.4}>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-blue-600 sm:text-sm">
                Project Overview
              </span>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                The Brief
              </h2>
            </ScrollReveal>

            <ScrollReveal
              delay={0.1}
              duration={0.5}
              amount={0.4}
              className="relative mt-7 overflow-hidden rounded-[28px] border border-slate-200 bg-white p-8 shadow-[0_16px_40px_-28px_rgba(15,23,42,0.18)] sm:p-9"
            >
              <Quote size={36} className="text-brand-blue-500/15" strokeWidth={1.5} />
              <p className="mt-3 text-lg leading-relaxed text-slate-700 sm:text-xl">{study.overview}</p>
            </ScrollReveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
