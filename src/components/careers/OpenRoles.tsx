"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Clock, ChevronDown, ArrowRight } from "lucide-react";
import { roles } from "./roles";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
} as const;

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.215, 0.61, 0.355, 1] },
  },
} as const;

export default function OpenRoles({ onApply }: { onApply: (roleTitle: string) => void }) {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <section id="open-roles" className="relative bg-slate-50 py-20 lg:py-24 scroll-mt-24">
      <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Open roles
          </h2>
          <p className="mt-3 text-slate-600 text-base sm:text-lg leading-relaxed">
            Don&apos;t see a fit?{" "}
            <a
              href="#apply"
              onClick={() => onApply("General Application")}
              className="font-semibold text-brand-green-600 hover:text-brand-green-700 underline underline-offset-2"
            >
              Send a general application
            </a>{" "}
            — we still want to hear from you.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="flex flex-col gap-4"
        >
          {roles.map((role) => {
            const isExpanded = expandedId === role.id;
            const Icon = role.icon;
            return (
              <motion.div
                key={role.id}
                variants={cardVariants}
                className="rounded-2xl border border-slate-200 bg-white shadow-[0_8px_30px_-16px_rgba(15,23,42,0.15)] overflow-hidden"
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 p-6">
                  <span className="flex items-center justify-center w-12 h-12 shrink-0 rounded-xl bg-gradient-to-br from-brand-green-50 to-brand-blue-50 text-brand-green-600">
                    <Icon size={22} strokeWidth={1.75} />
                  </span>

                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                      <h3 className="font-bold text-slate-900 text-lg">{role.title}</h3>
                      <span className="text-xs font-semibold text-brand-blue-600 bg-brand-blue-50 px-2.5 py-0.5 rounded-full">
                        {role.department}
                      </span>
                    </div>
                    <div className="mt-1.5 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-slate-500">
                      <span className="flex items-center gap-1.5">
                        <MapPin size={14} /> {role.location}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock size={14} /> {role.type}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 sm:ml-auto shrink-0">
                    <button
                      type="button"
                      onClick={() => setExpandedId(isExpanded ? null : role.id)}
                      aria-expanded={isExpanded}
                      className="flex items-center gap-1.5 px-4 py-2 text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors duration-200"
                    >
                      Details
                      <motion.span
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                      >
                        <ChevronDown size={16} />
                      </motion.span>
                    </button>
                    <a
                      href="#apply"
                      onClick={() => onApply(role.title)}
                      className="flex items-center gap-1.5 px-5 py-2.5 rounded-full text-white text-sm font-semibold bg-gradient-to-r from-brand-green-500 to-brand-blue-500 shadow-sm shadow-brand-green-500/20 hover:shadow-md hover:shadow-brand-green-500/30 transition-all duration-300 hover:-translate-y-0.5 select-none"
                    >
                      Apply
                      <ArrowRight size={14} />
                    </a>
                  </div>
                </div>

                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.215, 0.61, 0.355, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-0 sm:pl-[5.5rem] border-t border-slate-100 mt-0">
                        <p className="pt-5 text-sm text-slate-600 leading-relaxed">
                          {role.summary}
                        </p>
                        <ul className="mt-3 flex flex-col gap-2">
                          {role.responsibilities.map((item) => (
                            <li
                              key={item}
                              className="flex items-start gap-2.5 text-sm text-slate-600"
                            >
                              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-green-500 shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
