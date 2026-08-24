import { motion, type Variants } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { PREMIUM_EASE, DURATION, STAGGER } from "@/components/scroll";
import type { CaseStudy } from "./caseStudiesData";

// Featured-case-study cinematic entrance (spec: scale 0.94 -> 1, opacity 0 -> 1,
// leaning toward the slow/cinematic end of the duration range). Dynamic so each
// card in a grid can stagger off its own index via the `custom` prop.
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24, scale: 0.94 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: DURATION.cinematic, delay, ease: PREMIUM_EASE },
  }),
};

// Image gets its own subtle zoom, offset slightly later than the card so the
// two read as a single cinematic beat rather than one flat fade.
const imageVariants: Variants = {
  hidden: { opacity: 0, scale: 1.06 },
  visible: (delay: number) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: DURATION.slow, delay: delay + 0.05, ease: PREMIUM_EASE },
  }),
};

// Text fades/slides in last.
const textVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.base, delay: delay + 0.12, ease: PREMIUM_EASE },
  }),
};

export default function CaseStudyCard({ study, index = 0 }: { study: CaseStudy; index?: number }) {
  const delay = (index % 8) * STAGGER.base;

  return (
    <motion.div
      custom={delay}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={cardVariants}
      className="group relative flex h-full flex-col overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_16px_40px_-28px_rgba(15,23,42,0.18)] transition-all duration-300 hover:-translate-y-1.5 hover:border-slate-300 hover:shadow-[0_20px_45px_-24px_rgba(15,23,42,0.2)]"
    >
      <div className="relative h-44 w-full overflow-hidden">
        {/* Wrapper carries the scroll-reveal zoom; the <img> keeps its own
            independent hover-zoom transform so the two never fight over
            the transform property. */}
        <motion.div custom={delay} variants={imageVariants} className="h-full w-full">
          <img
            src={study.coverImage}
            alt={study.title}
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />
        </motion.div>
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#03132f]/80 via-[#03132f]/10 to-transparent"
        />
        <span
          className={`absolute bottom-3 left-4 flex items-center gap-1.5 rounded-full bg-gradient-to-br px-3 py-1.5 text-[11px] font-bold uppercase tracking-wide text-white shadow-[0_10px_20px_-8px_rgba(15,23,42,0.4)] ${study.iconGradient}`}
        >
          <study.industryIcon size={13} strokeWidth={1.75} />
          {study.industry}
        </span>
      </div>

      <motion.div custom={delay} variants={textVariants} className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-bold leading-snug text-slate-900">{study.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500">{study.shortDescription}</p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {study.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-orange-200 bg-orange-50 px-2.5 py-1 text-[11px] font-semibold text-orange-600"
            >
              {tech}
            </span>
          ))}
        </div>

        <Link
          to={`/case-studies/${study.slug}`}
          className="group/link mt-5 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-brand-blue-600 transition-colors duration-300 hover:text-brand-blue-700"
        >
          Read More
          <ArrowRight size={14} className="transition-transform duration-300 group-hover/link:translate-x-1" />
        </Link>
      </motion.div>
    </motion.div>
  );
}
