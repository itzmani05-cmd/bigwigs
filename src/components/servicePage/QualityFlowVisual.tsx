import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { qualityFlowStages, qualityFlowBadges } from "./content/quality";

export default function QualityFlowVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[380px]">
      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: [0.215, 0.61, 0.355, 1] }}
        className="relative flex flex-col items-center gap-1.5 rounded-[28px] border border-slate-200 bg-white px-6 py-8 shadow-[0_24px_60px_-28px_rgba(15,23,42,0.25)]"
      >
        {qualityFlowStages.map((stage, i) => {
          const Icon = stage.icon;
          const isLast = i === qualityFlowStages.length - 1;
          return (
            <motion.div
              key={stage.label}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15 + i * 0.1, ease: [0.215, 0.61, 0.355, 1] }}
              className="flex w-full flex-col items-center gap-1.5"
            >
              <div
                className={`flex w-full items-center gap-3 rounded-2xl border px-4 py-3 ${
                  isLast
                    ? "border-brand-blue-200 bg-brand-blue-50"
                    : "border-slate-200 bg-slate-50"
                }`}
              >
                <span
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${
                    isLast ? "bg-brand-blue-500 text-white" : "bg-white text-brand-blue-500"
                  }`}
                >
                  <Icon size={17} strokeWidth={1.75} />
                </span>
                <span className={`text-sm font-bold ${isLast ? "text-brand-blue-700" : "text-slate-800"}`}>
                  {stage.label}
                </span>
              </div>
              {!isLast && <ArrowDown aria-hidden size={14} className="text-slate-300" />}
            </motion.div>
          );
        })}
      </motion.div>

      {qualityFlowBadges.map((badge, i) => {
        const Icon = badge.icon;
        return (
          <motion.div
            key={badge.label}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.6 + i * 0.12, ease: [0.215, 0.61, 0.355, 1] }}
            className={`absolute z-10 hidden max-w-[9.5rem] items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 shadow-[0_16px_30px_-16px_rgba(15,23,42,0.3)] sm:flex ${badge.position}`}
          >
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-brand-blue-50 text-brand-blue-600">
              <Icon size={14} strokeWidth={1.75} />
            </span>
            <span className="text-[11px] font-bold leading-tight text-slate-700">{badge.label}</span>
          </motion.div>
        );
      })}
    </div>
  );
}
