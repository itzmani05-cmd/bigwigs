import { motion } from "framer-motion";
import {Users2, Globe2, Award } from "lucide-react";
import Container from "@/components/ui/Container";
import { ScrollReveal } from "@/components/scroll";
import { industriesProcessSteps } from "./industriesProcessData";

function solidFrom(color: string): string {
  return color.replace("text-", "bg-");
}

export default function IndustriesProcessTimeline() {
  return (
    <section className="relative w-full overflow-hidden bg-slate-50/70 py-16 lg:py-20">
      <Container className="relative z-10">
        <ScrollReveal direction="up" distance={24} duration={0.6} amount={0.5} className="mx-auto max-w-2xl text-center">
          <div className="flex items-center justify-center gap-3">
            <span aria-hidden className="h-px w-8 bg-orange-500/50" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange-500 sm:text-sm">
              How We Work
            </span>
            <span aria-hidden className="h-px w-8 bg-orange-500/50" />
          </div>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Six Stages. <span className="text-brand-blue-500">Every Industry.</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-slate-500 sm:text-lg">
            A streamlined process that turns complex challenges into intelligent solutions
            with measurable impact.
          </p>
        </ScrollReveal>

        {/* mobile: vertical stepper */}
        <div className="relative mt-10 lg:hidden">
          <motion.div
            aria-hidden
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{ transformOrigin: "top" }}
            className="absolute left-6 top-2 bottom-2 w-px border-l-2 border-dashed border-slate-300"
          />
          <div className="flex flex-col gap-5">
            {industriesProcessSteps.map((step, i) => {
              const Icon = step.icon;
              const pillBg = solidFrom(step.color);
              return (
                <ScrollReveal
                  as="div"
                  key={step.title}
                  direction="up"
                  distance={24}
                  duration={0.45}
                  delay={i * 0.08}
                  amount={0.5}
                  className="relative flex items-start gap-5"
                >
                  <span
                    className={`relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-4 border-slate-50 shadow-[0_10px_20px_-8px_rgba(15,23,42,0.25)] ${step.bg} ${step.color}`}
                  >
                    <Icon size={18} strokeWidth={1.75} />
                  </span>
                  <div className="min-w-0 flex-1 rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-[0_16px_40px_-28px_rgba(15,23,42,0.18)]">
                    <span
                      className={`inline-flex rounded-full px-2.5 py-0.5 text-[11px] font-bold text-white ${pillBg}`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-2 text-2xl font-bold text-slate-900">{step.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-500">{step.description}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>

        {/* desktop: horizontal timeline */}
        <div className="relative mt-16 hidden lg:block">
          <motion.div
            aria-hidden
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            style={{ transformOrigin: "left" }}
            className="absolute left-0 right-0 top-7 h-px border-t-2 border-dashed border-slate-300"
          />
          {[1, 2, 3, 4, 5].map((n) => (
            <span
              key={n}
              aria-hidden
              className="absolute top-7 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-slate-300 bg-slate-50"
              style={{ left: `${(n / 6) * 100}%` }}
            />
          ))}

          <div className="grid grid-cols-6 gap-4">
            {industriesProcessSteps.map((step, i) => {
              const Icon = step.icon;
              const pillBg = solidFrom(step.color);
              const underline = solidFrom(step.color);
              return (
                <ScrollReveal
                  as="div"
                  key={step.title}
                  direction="up"
                  distance={24}
                  duration={0.45}
                  delay={i * 0.08}
                  amount={0.4}
                  className="relative flex flex-col items-center rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-[0_16px_40px_-28px_rgba(15,23,42,0.18)] transition-transform duration-300 hover:-translate-y-1"
                >
                  <span
                    className={`relative z-10 flex h-14 w-14 items-center justify-center rounded-full border-4 border-slate-50 shadow-[0_10px_24px_-8px_rgba(15,23,42,0.3)] ${step.bg} ${step.color}`}
                  >
                    <Icon size={20} strokeWidth={1.75} />
                  </span>
                  <span
                    className={`mt-3 inline-flex rounded-full px-2.5 py-0.5 text-[11px] font-bold text-white ${pillBg}`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 text-sm font-bold leading-tight text-slate-900">{step.title}</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-slate-500">{step.description}</p>
                  <span aria-hidden className={`mt-3 h-0.5 w-8 rounded-full ${underline}`} />
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
