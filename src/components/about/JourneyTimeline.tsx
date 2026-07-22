import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import { journeyMilestones } from "./journey";

function MilestoneCard({
  milestone,
  align,
}: {
  milestone: (typeof journeyMilestones)[number];
  align: "top" | "bottom";
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: align === "top" ? -18 : 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5, ease: [0.215, 0.61, 0.355, 1] }}
      className="glass-card group w-full max-w-[11rem] overflow-hidden rounded-2xl text-center"
    >
      <span className={`block h-1 w-full ${milestone.bar}`} aria-hidden />
      <div className="px-4 py-4">
        <span className="text-lg font-extrabold tracking-tight text-slate-900">{milestone.year}</span>
        <p className="mt-1 text-xs leading-relaxed text-slate-500">{milestone.title}</p>
      </div>
    </motion.div>
  );
}

export default function JourneyTimeline() {
  return (
    <section className="relative w-full overflow-hidden py-10 lg:py-12">
      <Container className="relative z-10">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Our Journey
          </h2>
          <p className="mt-3 text-base leading-relaxed text-slate-500 sm:text-lg">
            From a bold idea to a trusted global AI partner — a timeline of
            milestones that shaped who we are today.
          </p>
        </div>

        {/* mobile / tablet: vertical timeline */}
        <div className="relative mt-10 lg:hidden">
          <div
            aria-hidden
            className="absolute left-5 top-2 bottom-2 w-px bg-gradient-to-b from-brand-blue-200 via-brand-blue-400 to-brand-blue-200 sm:left-6"
          />
          <div className="flex flex-col gap-6 sm:gap-8">
            {journeyMilestones.map((milestone, i) => {
              const Icon = milestone.icon;
              return (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5, delay: i * 0.06, ease: [0.215, 0.61, 0.355, 1] }}
                  className="group relative flex items-start gap-5 pl-0 sm:gap-6"
                >
                  <span className="relative z-10 shrink-0">
                    <span
                      aria-hidden
                      className={`absolute inset-0 -m-1.5 rounded-full ${milestone.bg} opacity-60 blur-sm`}
                    />
                    <motion.span
                      className={`relative flex h-10 w-10 items-center justify-center rounded-full border-4 border-white ${milestone.bg} ${milestone.color} shadow-[0_10px_20px_-8px_rgba(15,23,42,0.3)] transition-transform duration-300 group-hover:-translate-y-1 sm:h-12 sm:w-12`}
                      animate={{ scale: [1, 1.08, 1] }}
                      transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
                    >
                      <Icon size={18} strokeWidth={1.75} className="sm:h-5 sm:w-5" />
                    </motion.span>
                  </span>

                  <div className="glass-card min-w-0 flex-1 rounded-2xl px-5 py-4">
                    <span className="text-lg font-extrabold tracking-tight text-slate-900">
                      {milestone.year}
                    </span>
                    <p className="mt-1 text-sm leading-relaxed text-slate-500">{milestone.title}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* desktop: alternating horizontal timeline */}
        <div className="relative mt-16 hidden lg:block">
          <div className="relative">
            {/* glow beneath the connector line */}
            <div
              aria-hidden
              className="absolute left-0 right-0 top-1/2 h-2 -translate-y-1/2 rounded-full bg-brand-blue-400/30 blur-md"
            />
            <div aria-hidden className="absolute left-0 right-0 top-1/2 h-px -translate-y-1/2 bg-slate-200" />
            <motion.div
              aria-hidden
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.4, ease: [0.215, 0.61, 0.355, 1] }}
              style={{ transformOrigin: "left" }}
              className="absolute left-0 right-0 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-brand-blue-400 via-cyan-400 to-brand-blue-400"
            />
            <motion.span
              aria-hidden
              className="absolute top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-brand-blue-500 shadow-[0_0_12px_3px_rgba(37,99,235,0.6)]"
              animate={{ left: ["2%", "98%", "2%"] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />

            <div className="grid grid-cols-5">
              {journeyMilestones.map((milestone, i) => {
                const Icon = milestone.icon;
                const isUp = i % 2 === 0;
                return (
                  <div key={milestone.year} className="relative flex flex-col items-center">
                    <div className="flex h-36 w-full items-end justify-center pb-3">
                      {isUp && <MilestoneCard milestone={milestone} align="top" />}
                    </div>

                    <motion.span
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true, amount: 0.6 }}
                      transition={{ duration: 0.4, delay: i * 0.08, ease: [0.215, 0.61, 0.355, 1] }}
                      className="group relative z-10"
                    >
                      <span
                        aria-hidden
                        className={`absolute inset-0 -m-2 rounded-full ${milestone.bg} opacity-70 blur-[6px] transition-opacity duration-300 group-hover:opacity-100`}
                      />
                      <motion.span
                        className={`relative flex h-14 w-14 items-center justify-center rounded-full border-4 border-white ${milestone.bg} ${milestone.color} shadow-[0_10px_24px_-8px_rgba(15,23,42,0.35)] transition-transform duration-300 hover:-translate-y-1.5 hover:scale-105`}
                        animate={{ scale: [1, 1.07, 1] }}
                        transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
                      >
                        <Icon size={22} strokeWidth={1.75} />
                      </motion.span>
                    </motion.span>

                    <div className="flex h-36 w-full items-start justify-center pt-3">
                      {!isUp && <MilestoneCard milestone={milestone} align="bottom" />}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
