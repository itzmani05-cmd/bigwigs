import { motion } from "framer-motion";
import { Users, Clock, UserCog } from "lucide-react";
import Container from "@/components/ui/Container";
import type { CaseStudy } from "../caseStudiesData";

export default function ProjectTeam({ study }: { study: CaseStudy }) {
  return (
    <section className="relative w-full overflow-hidden py-10 lg:py-12">
      <Container className="relative z-10">
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-blue-600 sm:text-sm">
          Team Information
        </span>
        <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
          The People Behind The Project
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: [0.215, 0.61, 0.355, 1] }}
          className="glass-card mt-8 grid grid-cols-1 gap-8 rounded-[28px] p-7 sm:grid-cols-[auto_auto_1fr] sm:p-8"
        >
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-blue-50 text-brand-blue-500">
              <Users size={20} strokeWidth={1.75} />
            </span>
            <div className="leading-tight">
              <span className="block text-[11px] font-bold uppercase tracking-wide text-slate-400">Team Size</span>
              <span className="block text-base font-bold text-slate-900">{study.team.size}</span>
            </div>
          </div>

          <div className="flex items-center gap-3 border-t border-slate-200 pt-6 sm:border-l sm:border-t-0 sm:pl-8 sm:pt-0">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-green-50 text-brand-green-600">
              <Clock size={20} strokeWidth={1.75} />
            </span>
            <div className="leading-tight">
              <span className="block text-[11px] font-bold uppercase tracking-wide text-slate-400">Engagement</span>
              <span className="block text-base font-bold text-slate-900">{study.team.duration}</span>
            </div>
          </div>

          <div className="border-t border-slate-200 pt-6 sm:border-l sm:border-t-0 sm:pl-8 sm:pt-0">
            <div className="flex items-center gap-2 text-slate-400">
              <UserCog size={16} />
              <span className="text-[11px] font-bold uppercase tracking-wide">Roles Involved</span>
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {study.team.roles.map((role) => (
                <span
                  key={role}
                  className="rounded-full border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-600 sm:text-sm"
                >
                  {role}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
