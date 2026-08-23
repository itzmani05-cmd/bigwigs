import { motion } from "framer-motion";
import { Building2, Users, Clock } from "lucide-react";
import Container from "@/components/ui/Container";
import type { CaseStudy } from "../caseStudiesData";

export default function ClientProfile({ study }: { study: CaseStudy }) {
  const facts = [
    { icon: study.industryIcon, label: "Industry", value: study.industry },
    { icon: Users, label: "Engagement Size", value: study.team.size },
    { icon: Clock, label: "Project Scope", value: study.duration },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-slate-50/70 py-10 lg:py-12">
      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: [0.215, 0.61, 0.355, 1] }}
          className="flex flex-col gap-8 rounded-[28px] border border-slate-200 bg-white p-8 shadow-[0_16px_40px_-28px_rgba(15,23,42,0.18)] sm:p-10 lg:flex-row lg:items-center lg:justify-between"
        >
          <div className="flex items-center gap-5">
            <span
              className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br text-white ${study.iconGradient}`}
              style={{ boxShadow: "0 16px 36px -12px rgba(37,99,235,0.4)" }}
            >
              <Building2 size={28} strokeWidth={1.5} />
            </span>
            <div>
              <span className="text-xs font-bold uppercase tracking-wide text-slate-400">Client</span>
              <h3 className="mt-0.5 text-xl font-extrabold tracking-tight text-slate-900 sm:text-2xl">
                {study.client}
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 lg:gap-8">
            {facts.map((fact) => {
              const Icon = fact.icon;
              return (
                <div key={fact.label} className="flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-blue-50 text-brand-blue-500">
                    <Icon size={17} strokeWidth={1.75} />
                  </span>
                  <div className="leading-tight">
                    <span className="block text-[11px] font-bold uppercase tracking-wide text-slate-400">
                      {fact.label}
                    </span>
                    <span className="block text-sm font-bold text-slate-900">{fact.value}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
