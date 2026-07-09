import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import type { MegaContent } from "./navConfig";

const panelVariants = {
  hidden: { opacity: 0, y: -12, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 300, damping: 28, mass: 0.9 },
  },
  exit: {
    opacity: 0,
    y: -8,
    scale: 0.98,
    transition: { duration: 0.15, ease: "easeIn" },
  },
} as const;

const featureContainerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05, delayChildren: 0.05 } },
} as const;

const featureVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: [0.215, 0.61, 0.355, 1] },
  },
} as const;

export default function MegaMenu({ content }: { content: MegaContent }) {
  return (
    <motion.div
      variants={panelVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="absolute left-1/2 top-full mt-3 w-[60vw] max-w-[880px] min-w-[640px] -translate-x-1/2 rounded-[28px] border border-white/60 bg-white/80 shadow-[0_30px_80px_-20px_rgba(15,23,42,0.25)] backdrop-blur-2xl overflow-hidden"
    >
      <div className="grid grid-cols-5">
        {/* left 40% */}
        <div className="col-span-2 p-8 border-r border-slate-100 flex flex-col">
          <h3 className="text-lg font-bold text-slate-900 tracking-tight">{content.title}</h3>
          <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">{content.description}</p>

          <ul className="mt-6 flex flex-col gap-1">
            {content.links.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="group flex items-center justify-between rounded-lg px-2.5 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors duration-150"
                >
                  {link.name}
                  <ArrowRight
                    size={13}
                    className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 text-brand-green-500"
                  />
                </a>
              </li>
            ))}
          </ul>

          <a
            href={content.cta.href}
            className="mt-auto pt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-green-600 hover:text-brand-green-700 transition-colors"
          >
            {content.cta.label}
            <ArrowUpRight size={15} />
          </a>
        </div>

        {/* right 60% */}
        <motion.div
          variants={featureContainerVariants}
          className="col-span-3 p-6 grid grid-cols-2 gap-3"
        >
          {content.features.map((feature) => {
            const Icon = feature.icon;
            return (
              <motion.a
                key={feature.title}
                href={content.cta.href}
                variants={featureVariants}
                whileHover={{ y: -3 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group rounded-2xl border border-slate-100 bg-white p-4 flex flex-col gap-3 hover:border-brand-green-200 hover:shadow-[0_12px_30px_-14px_rgba(15,23,42,0.2)] transition-shadow duration-200"
              >
                <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-gradient-to-br from-brand-green-50 to-brand-blue-50 text-brand-green-600 group-hover:scale-105 transition-transform duration-200">
                  <Icon size={17} strokeWidth={1.75} />
                </span>
                <div>
                  <h4 className="text-sm font-semibold text-slate-900">{feature.title}</h4>
                  <p className="mt-1 text-xs text-slate-500 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </motion.div>
  );
}
