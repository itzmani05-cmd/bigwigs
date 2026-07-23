import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import type { CaseStudy } from "./caseStudiesData";

export default function CaseStudyCard({ study, index = 0 }: { study: CaseStudy; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: (index % 6) * 0.06, ease: [0.215, 0.61, 0.355, 1] }}
      className="group relative flex h-full flex-col overflow-hidden rounded-[28px] border border-white/60 bg-white/70 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_32px_70px_-20px_rgba(37,99,235,0.28)]"
    >
      <span
        aria-hidden
        className="pointer-events-none absolute -inset-px z-20 rounded-[28px] opacity-0 shadow-[0_0_0_1px_rgba(37,99,235,0.3),0_0_40px_4px_rgba(37,99,235,0.18)] transition-opacity duration-300 group-hover:opacity-100"
      />

      <div className="relative h-44 w-full overflow-hidden">
        <img
          src={study.coverImage}
          alt={study.title}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
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

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-bold leading-snug text-slate-900">{study.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500">{study.shortDescription}</p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {study.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-brand-blue-50 px-2.5 py-1 text-[11px] font-semibold text-brand-blue-600"
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
      </div>
    </motion.div>
  );
}
