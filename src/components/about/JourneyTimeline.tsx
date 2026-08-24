import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Container from "@/components/ui/Container";
import { ScrollReveal } from "@/components/scroll";
import { journeyMilestones } from "./journey";

type Milestone = (typeof journeyMilestones)[number];

/**
 * Drives the "walking through history" feel: each milestone tracks its own
 * scroll progress through the viewport (not the neighbors' state), so the
 * card that's currently centered reads fully, the one just passed settles to
 * a slightly de-emphasized rest state, and the one still below stays subtle
 * until it scrolls into range.
 */
function useMilestoneProgress() {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  const cardOpacity = useTransform(scrollYProgress, [0, 0.35, 0.65, 1], [0.35, 1, 1, 0.55]);
  const cardScale = useTransform(scrollYProgress, [0, 0.35, 0.65, 1], [0.94, 1, 1, 0.97]);
  const nodeScale = useTransform(scrollYProgress, [0, 0.35, 0.65, 1], [0.85, 1.15, 1.15, 0.95]);
  const glowOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return { ref, prefersReducedMotion, cardOpacity, cardScale, nodeScale, glowOpacity };
}

function MilestoneCard({ milestone, align }: { milestone: Milestone; align: "left" | "right" }) {
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

function MobileMilestone({ milestone }: { milestone: Milestone }) {
  const { ref, prefersReducedMotion, cardOpacity, cardScale, nodeScale, glowOpacity } = useMilestoneProgress();
  const Icon = milestone.icon;

  return (
    <motion.div
      ref={ref}
      style={prefersReducedMotion ? undefined : { opacity: cardOpacity, scale: cardScale }}
      className="relative flex items-start gap-5 sm:gap-6"
    >
      <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center sm:h-12 sm:w-12">
        <motion.span
          aria-hidden
          className="absolute inset-[-6px] rounded-full bg-brand-blue-400/40 blur-md"
          style={prefersReducedMotion ? { opacity: 0 } : { opacity: glowOpacity }}
        />
        <motion.span
          style={prefersReducedMotion ? undefined : { scale: nodeScale }}
          className={`relative z-10 flex h-10 w-10 items-center justify-center rounded-full border-2 border-white text-white shadow-sm sm:h-12 sm:w-12 ${milestone.bar}`}
        >
          <Icon size={18} strokeWidth={1.75} className="sm:h-5 sm:w-5" />
        </motion.span>
      </span>

      <div className="min-w-0 flex-1 rounded-xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
        <span className="text-lg font-extrabold tracking-tight text-slate-900">{milestone.year}</span>
        <p className={`mt-1 text-sm font-semibold ${milestone.color}`}>{milestone.title}</p>
        <p className="mt-1.5 text-sm leading-relaxed text-slate-500">{milestone.description}</p>
      </div>
    </motion.div>
  );
}

function DesktopMilestone({ milestone, isLeft }: { milestone: Milestone; isLeft: boolean }) {
  const { ref, prefersReducedMotion, cardOpacity, cardScale, nodeScale, glowOpacity } = useMilestoneProgress();
  const Icon = milestone.icon;

  return (
    <motion.div
      ref={ref}
      style={prefersReducedMotion ? undefined : { opacity: cardOpacity, scale: cardScale }}
      className="relative grid grid-cols-[1fr_auto_1fr] items-center gap-6"
    >
      <div>{isLeft && <MilestoneCard milestone={milestone} align="left" />}</div>

      <span className="relative z-10 flex h-11 w-11 items-center justify-center">
        <motion.span
          aria-hidden
          className="absolute inset-[-8px] rounded-full bg-brand-blue-400/40 blur-md"
          style={prefersReducedMotion ? { opacity: 0 } : { opacity: glowOpacity }}
        />
        <motion.span
          style={prefersReducedMotion ? undefined : { scale: nodeScale }}
          className={`relative z-10 flex h-11 w-11 items-center justify-center rounded-full border-2 border-white text-white shadow-sm ${milestone.bar}`}
        >
          <Icon size={20} strokeWidth={1.75} />
        </motion.span>
      </span>

      <div>{!isLeft && <MilestoneCard milestone={milestone} align="right" />}</div>
    </motion.div>
  );
}

export default function JourneyTimeline() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-16 lg:py-20">
      <Container className="relative z-10">
        <ScrollReveal direction="up" distance={24} className="mx-auto text-center">
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
        </ScrollReveal>

        {/* mobile / tablet: left-aligned vertical timeline */}
        <div className="relative mt-12 lg:hidden">
          <div
            aria-hidden
            className="absolute left-5 top-2 bottom-2 w-px bg-slate-200 sm:left-6"
          />
          <div className="flex flex-col gap-6 sm:gap-8">
            {journeyMilestones.map((milestone) => (
              <MobileMilestone key={milestone.year} milestone={milestone} />
            ))}
          </div>
        </div>

        {/* desktop: centered alternating timeline */}
        <div className="relative mt-16 hidden lg:block">
          <div className="relative mx-auto max-w-5xl">
            <div aria-hidden className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-slate-200" />

            <div className="flex flex-col gap-10">
              {journeyMilestones.map((milestone, i) => (
                <DesktopMilestone key={milestone.year} milestone={milestone} isLeft={i % 2 === 0} />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
