import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Container from "@/components/ui/Container";
import { teamMembers, departments, type Department } from "./teamMembers";

const gridVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
} as const;

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.215, 0.61, 0.355, 1] },
  },
} as const;

export default function TeamGrid() {
  const [filter, setFilter] = useState<Department | "All">("All");

  const visible = useMemo(
    () => (filter === "All" ? teamMembers : teamMembers.filter((m) => m.department === filter)),
    [filter]
  );

  return (
    <section className="w-full bg-white py-20 sm:py-28">
      <Container>
        <div className="flex flex-wrap items-center justify-center gap-2">
          {(["All", ...departments] as const).map((d) => {
            const isActive = filter === d;
            return (
              <button
                key={d}
                type="button"
                onClick={() => setFilter(d)}
                className={`relative px-5 py-2 rounded-full text-sm font-semibold transition-colors duration-200 ${
                  isActive ? "text-white" : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="team-filter-pill"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-brand-green-500 to-brand-blue-500"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="relative z-10">{d}</span>
              </button>
            );
          })}
        </div>

        <motion.div
          key={filter}
          variants={gridVariants}
          initial="hidden"
          animate="visible"
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {visible.map((member) => {
              const tint =
                member.tint === "green"
                  ? "from-brand-green-400 to-brand-blue-500"
                  : "from-brand-blue-500 to-brand-green-400";
              return (
                <motion.div
                  key={member.name}
                  layout
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="group rounded-3xl border border-slate-100 bg-white p-6 shadow-[0_16px_40px_-28px_rgba(15,23,42,0.2)] transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-green-500/25 hover:shadow-[0_24px_50px_-20px_rgba(16,185,129,0.22)]"
                >
                  <div className="flex items-start justify-between">
                    <span
                      className={`flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${tint} text-white text-lg font-bold shadow-md transition-transform duration-300 group-hover:scale-105`}
                    >
                      {member.initials}
                    </span>
                    <a
                      href="#"
                      aria-label={`${member.name}'s profile`}
                      className="flex items-center justify-center w-9 h-9 rounded-full text-slate-300 hover:text-brand-blue-500 hover:bg-brand-blue-50 transition-colors duration-200"
                    >
                      <ExternalLink size={16} />
                    </a>
                  </div>
                  <h3 className="mt-5 text-base font-bold text-slate-900">{member.name}</h3>
                  <p className="mt-1 text-sm text-slate-500">{member.role}</p>
                  <span className="mt-4 inline-block text-xs font-semibold text-brand-green-600 uppercase tracking-wide">
                    {member.department}
                  </span>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </Container>
    </section>
  );
}
