import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import { hiringSteps } from "./hiringProcessData";

export default function HiringProcess() {
  return (
    <section className="relative w-full overflow-hidden py-14 lg:py-20">
      <Container className="relative z-10">
        <div className="mx-auto max-w-xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-blue-600 sm:text-sm">
            Our Hiring Process
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Our Hiring Process
          </h2>
        </div>

        {/* mobile / tablet: vertical stepper */}
        <div className="relative mt-10 lg:hidden">
          <div
            aria-hidden
            className="absolute left-6 top-2 bottom-2 w-px bg-gradient-to-b from-brand-blue-200 via-brand-blue-400 to-brand-blue-200"
          />
          <div className="flex flex-col gap-6">
            {hiringSteps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5, delay: i * 0.06, ease: [0.215, 0.61, 0.355, 1] }}
                  className="group relative flex items-start gap-5"
                >
                  <span
                    className={`relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-4 border-white ${step.bg} ${step.color} shadow-[0_10px_20px_-8px_rgba(15,23,42,0.3)] transition-transform duration-300 group-hover:-translate-y-1`}
                  >
                    <Icon size={20} strokeWidth={1.75} />
                  </span>
                  <div className="glass-card min-w-0 flex-1 rounded-2xl px-5 py-4">
                    <h3 className="text-sm font-bold text-slate-900">{step.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-500">{step.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* desktop: horizontal timeline */}
        <div className="relative mt-16 hidden lg:block">
          <div
            aria-hidden
            className="absolute left-0 right-0 top-7 h-2 -translate-y-1/2 rounded-full bg-brand-blue-400/25 blur-md"
          />
          <div aria-hidden className="absolute left-0 right-0 top-7 h-px -translate-y-1/2 bg-slate-200" />
          <motion.div
            aria-hidden
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.4, ease: [0.215, 0.61, 0.355, 1] }}
            style={{ transformOrigin: "left" }}
            className="absolute left-0 right-0 top-7 h-px -translate-y-1/2 bg-gradient-to-r from-brand-blue-400 via-cyan-400 to-brand-blue-400"
          />
          <motion.span
            aria-hidden
            className="absolute top-7 h-2 w-2 -translate-y-1/2 rounded-full bg-brand-blue-500 shadow-[0_0_10px_3px_rgba(37,99,235,0.6)]"
            animate={{ left: ["1%", "97%", "1%"] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className="grid grid-cols-6 gap-3">
            {hiringSteps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5, delay: i * 0.08, ease: [0.215, 0.61, 0.355, 1] }}
                  className="group flex flex-col items-center text-center"
                >
                  <span
                    className={`relative z-10 flex h-14 w-14 items-center justify-center rounded-full border-4 border-white ${step.bg} ${step.color} shadow-[0_10px_24px_-8px_rgba(15,23,42,0.35)] transition-transform duration-300 group-hover:-translate-y-1.5 group-hover:scale-105`}
                  >
                    <Icon size={22} strokeWidth={1.75} />
                  </span>
                  <h3 className="mt-4 text-sm font-bold text-slate-900">{step.title}</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-slate-500">{step.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
