import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight, Building2, Clock, Users } from "lucide-react";
import Container from "@/components/ui/Container";
import type { CaseStudy } from "../caseStudiesData";

export default function CaseStudyHero({ study }: { study: CaseStudy }) {
  return (
    <section className="relative w-full overflow-hidden pt-10 pb-10 lg:pt-10 lg:pb-12">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-brand-blue-50/50 via-white/40 to-transparent"
      />

      <Container className="relative z-10">
        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 sm:text-sm">
          <Link to="/case-studies" className="transition-colors duration-300 hover:text-brand-blue-600">
            Case Studies
          </Link>
          <ChevronRight size={14} className="text-slate-300" />
          <span className="text-slate-400">{study.industry}</span>
        </nav>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.215, 0.61, 0.355, 1] }}
          className="mt-5"
        >
          <span
            className={`inline-flex items-center gap-1.5 rounded-full bg-gradient-to-br px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-white ${study.iconGradient}`}
          >
            <study.industryIcon size={13} strokeWidth={1.75} />
            {study.industry}
          </span>

          <h1 className="mt-4 max-w-3xl text-3xl font-extrabold leading-[1.15] tracking-tight text-slate-900 sm:text-4xl lg:text-[44px]">
            {study.title}
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-500 sm:text-lg">
            {study.shortDescription}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.215, 0.61, 0.355, 1] }}
          className="relative mt-8 aspect-[16/7] w-full overflow-hidden rounded-[28px] bg-[#03132f] shadow-[0_40px_90px_-30px_rgba(7,27,70,0.5)]"
        >
          <img src={study.coverImage} alt={study.title} className="absolute inset-0 h-full w-full object-cover" />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#03132f]/70 via-transparent to-transparent"
          />
        </motion.div>

        <div className="mt-6 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-slate-200 pt-6">
          <div className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-blue-50 text-brand-blue-500">
              <Building2 size={16} />
            </span>
            <div className="leading-tight">
              <span className="block text-[11px] font-bold uppercase tracking-wide text-slate-400">Client</span>
              <span className="block text-sm font-semibold text-slate-900">{study.client}</span>
            </div>
          </div>
          <div className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-blue-50 text-brand-blue-500">
              <Clock size={16} />
            </span>
            <div className="leading-tight">
              <span className="block text-[11px] font-bold uppercase tracking-wide text-slate-400">Duration</span>
              <span className="block text-sm font-semibold text-slate-900">{study.duration}</span>
            </div>
          </div>
          <div className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-blue-50 text-brand-blue-500">
              <Users size={16} />
            </span>
            <div className="leading-tight">
              <span className="block text-[11px] font-bold uppercase tracking-wide text-slate-400">Team Size</span>
              <span className="block text-sm font-semibold text-slate-900">{study.team.size}</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
