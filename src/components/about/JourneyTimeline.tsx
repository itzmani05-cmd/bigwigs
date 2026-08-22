import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import { journeyMilestones } from "./journey";

function MilestoneCard({
  milestone,
  align,
}: {
  milestone: (typeof journeyMilestones)[number];
  align: "left" | "right";
}) {
  return (
    <div
      className={`rounded-xl border border-slate-200 bg-white px-5 py-4 shadow-sm transition-colors duration-200 hover:border-slate-300 ${
        align === "left" ? "text-right" : "text-left"
      }`}
    >
      <span className="text-lg font-extrabold tracking-tight text-slate-900">{milestone.year}</span>
      <p className={`mt-1 text-sm font-semibold ${milestone.color}`}>{milestone.title}</p>
      <p className="mt-1.5 text-sm leading-relaxed text-slate-500">{milestone.description}</p>
    </div>
  );
}

export default function JourneyTimeline() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-16 lg:py-20">
      <Container className="relative z-10">
        <div className="mx-auto text-center">
          <div className="flex items-center justify-center gap-3">
            <span aria-hidden className="h-px w-8 bg-orange-500/50" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange-500 sm:text-sm">
              How Far We've Come
            </span>
            <span aria-hidden className="h-px w-8 bg-orange-500/50" />
          </div>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Our Journey
          </h2>
          <p className="mt-3 text-base leading-relaxed text-slate-500 sm:text-lg">
            From a bold idea to a trusted global AI partner — a timeline of
            milestones that shaped who we are today.
          </p>
        </div>

        {/* mobile / tablet: left-aligned vertical timeline */}
        <div className="relative mt-12 lg:hidden">
          <div
            aria-hidden
            className="absolute left-5 top-2 bottom-2 w-px bg-slate-200 sm:left-6"
          />
          <div className="flex flex-col gap-6 sm:gap-8">
            {journeyMilestones.map((milestone, i) => {
              const Icon = milestone.icon;
              return (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.4, delay: i * 0.05, ease: [0.215, 0.61, 0.355, 1] }}
                  className="relative flex items-start gap-5 sm:gap-6"
                >
                  <span
                    className={`relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-white text-white shadow-sm sm:h-12 sm:w-12 ${milestone.bar}`}
                  >
                    <Icon size={18} strokeWidth={1.75} className="sm:h-5 sm:w-5" />
                  </span>

                  <div className="min-w-0 flex-1 rounded-xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
                    <span className="text-lg font-extrabold tracking-tight text-slate-900">
                      {milestone.year}
                    </span>
                    <p className={`mt-1 text-sm font-semibold ${milestone.color}`}>{milestone.title}</p>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate-500">{milestone.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* desktop: centered alternating timeline */}
        <div className="relative mt-16 hidden lg:block">
          <div className="relative mx-auto max-w-5xl">
            <div aria-hidden className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-slate-200" />

            <div className="flex flex-col gap-10">
              {journeyMilestones.map((milestone, i) => {
                const Icon = milestone.icon;
                const isLeft = i % 2 === 0;
                return (
                  <motion.div
                    key={milestone.year}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.45, delay: i * 0.05, ease: [0.215, 0.61, 0.355, 1] }}
                    className="relative grid grid-cols-[1fr_auto_1fr] items-center gap-6"
                  >
                    <div>{isLeft && <MilestoneCard milestone={milestone} align="left" />}</div>

                    <span
                      className={`relative z-10 flex h-11 w-11 items-center justify-center rounded-full border-2 border-white text-white shadow-sm ${milestone.bar}`}
                    >
                      <Icon size={20} strokeWidth={1.75} />
                    </span>

                    <div>{!isLeft && <MilestoneCard milestone={milestone} align="right" />}</div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
