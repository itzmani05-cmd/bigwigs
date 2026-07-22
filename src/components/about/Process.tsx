import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Container from "@/components/ui/Container";
import { processSteps } from "./processData";

export default function Process() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const total = processSteps.length;
  const activeStep = processSteps[activeIndex];
  const ActiveIcon = activeStep.icon;

  const goTo = (i: number) => setActiveIndex(i);
  const handleComplete = () => setActiveIndex((prev) => (prev + 1) % total);

  return (
    <section className="relative w-full overflow-hidden py-14 lg:py-20">
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -bottom-28 -left-20 h-80 w-80 rounded-full bg-brand-blue-500/[0.08] blur-[110px]"
        animate={{ opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 17, repeat: Infinity, ease: "easeInOut" }}
      />

      <Container className="relative z-10">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Our Process
          </h2>
          <p className="mt-3 text-base leading-relaxed text-slate-500 sm:text-lg">
            A proven six-step delivery framework that takes every engagement
            from discovery to ongoing support.
          </p>
        </div>

        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="mt-10 grid grid-cols-1 gap-4 lg:grid-cols-[360px_1fr] lg:gap-8"
        >
          {/* detail panel */}
          <div className="glass-card relative order-1 min-h-[280px] overflow-hidden rounded-[28px] p-8 sm:p-10 lg:order-2 lg:min-h-[360px] lg:p-12">
            <span
              aria-hidden
              className="pointer-events-none absolute -right-6 -top-10 select-none text-[9rem] font-extrabold leading-none text-slate-50 sm:text-[11rem]"
            >
              {String(activeIndex + 1).padStart(2, "0")}
            </span>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: [0.215, 0.61, 0.355, 1] }}
                className="relative"
              >
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-blue-500">
                  Step {activeIndex + 1} of {total}
                </span>
                <span
                  className={`mt-5 flex h-16 w-16 items-center justify-center rounded-2xl ${activeStep.bg} ${activeStep.color} shadow-[0_14px_30px_-12px_rgba(15,23,42,0.3)]`}
                >
                  <ActiveIcon size={18} strokeWidth={1.5} />
                </span>
                <h3 className="mt-6 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
                  {activeStep.title}
                </h3>
                <p className="mt-3 max-w-md text-base leading-relaxed text-slate-500">
                  {activeStep.description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* step tabs */}
          <div className="glass-card relative order-2 flex flex-col gap-1.5 rounded-[24px] p-3 lg:order-1">
            {/* animated curved connector */}
            <div
              aria-hidden
              className="pointer-events-none absolute left-[34px] top-4 bottom-4 w-px bg-gradient-to-b from-brand-blue-400/50 via-brand-blue-300/30 to-transparent"
            />
            <motion.span
              aria-hidden
              className="pointer-events-none absolute left-[34px] h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-brand-blue-400 shadow-[0_0_10px_3px_rgba(37,99,235,0.5)]"
              animate={{ top: ["4%", "96%", "4%"] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />

            {processSteps.map((step, i) => {
              const Icon = step.icon;
              const isActive = i === activeIndex;
              return (
                <button
                  key={step.title}
                  type="button"
                  onClick={() => goTo(i)}
                  className={`group relative flex items-center gap-2 overflow-hidden rounded-xl px-4 py-2 text-left transition-colors duration-300 ${
                    isActive ? "bg-slate-900 text-white" : "text-slate-600 hover:bg-white/70"
                  }`}
                >
                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-colors duration-300 ${
                      isActive ? "bg-white/15 text-white" : `${step.bg} ${step.color}`
                    }`}
                  >
                    <Icon size={16} strokeWidth={1.75} />
                  </span>
                  <span className="min-w-0 flex-1 text-sm font-bold">{step.title}</span>
                  <span className={`text-xs font-bold ${isActive ? "text-white/50" : "text-slate-300"}`}>
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  {isActive && (
                    <span className="absolute bottom-0 left-4 right-4 h-0.5 overflow-hidden rounded-full bg-white/15">
                      <span
                        key={activeIndex}
                        onAnimationEnd={handleComplete}
                        style={{ animationPlayState: isPaused ? "paused" : "running" }}
                        className="animate-process-fill block h-full rounded-full bg-brand-blue-400"
                      />
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
