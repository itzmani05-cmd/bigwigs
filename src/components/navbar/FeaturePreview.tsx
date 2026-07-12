import { AnimatePresence, motion } from "framer-motion";
import type { MegaFeature } from "./navConfig";

interface FeaturePreviewProps {
  feature: MegaFeature;
  index: number;
}

export default function FeaturePreview({ feature, index }: FeaturePreviewProps) {
  const Icon = feature.icon;

  return (
    <div className="relative h-full min-h-[320px] rounded-[28px] overflow-hidden border border-slate-100 bg-gradient-to-br from-slate-50 via-white to-brand-green-50/60">
      {!feature.image && (
        <>
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(15,23,42,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,0.05) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />
          <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full bg-brand-green-500/10 blur-3xl" aria-hidden="true" />
          <div className="absolute -left-10 -bottom-10 w-52 h-52 rounded-full bg-brand-blue-500/10 blur-3xl" aria-hidden="true" />
        </>
      )}

      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 12, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -8, scale: 0.98 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="relative h-full flex flex-col justify-end p-8"
        >
          {feature.image && (
            <>
              <img
                src={feature.image}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/25 to-transparent"
                aria-hidden="true"
              />
            </>
          )}

          <span
            className={`relative z-10 flex items-center justify-center w-14 h-14 rounded-2xl shadow-[0_8px_24px_-8px_rgba(15,23,42,0.15)] mb-5 ${
              feature.image ? "bg-white/90 backdrop-blur-sm text-brand-green-600" : "bg-white text-brand-green-600"
            }`}
          >
            <Icon size={26} strokeWidth={1.75} />
          </span>
          <h4
            className={`relative z-10 text-2xl font-bold tracking-tight ${
              feature.image ? "text-white" : "text-slate-900"
            }`}
          >
            {feature.title}
          </h4>
          <p
            className={`relative z-10 mt-2 text-sm leading-relaxed max-w-sm ${
              feature.image ? "text-white/85" : "text-slate-600"
            }`}
          >
            {feature.description}
          </p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
