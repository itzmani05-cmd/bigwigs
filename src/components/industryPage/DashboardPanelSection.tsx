import type { ReactNode } from "react";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import Container from "@/components/ui/Container";
import SpotlightCard from "./SpotlightCard";

export interface DashboardTile {
  icon: LucideIcon;
  label: string;
  hasSparkline?: boolean;
  hasLiveDot?: boolean;
  /** Optional bar-chart heights (percentages) rendered instead of a sparkline when set. */
  bars?: number[];
}

export interface DashboardPill {
  icon: LucideIcon;
  label: string;
}

interface DashboardPanelSectionProps {
  eyebrow?: string;
  heading: ReactNode;
  description?: string;
  panelLabel?: string;
  tiles: DashboardTile[];
  pills: DashboardPill[];
}

export default function DashboardPanelSection({
  eyebrow = "Software",
  heading,
  description,
  panelLabel = "Operations Suite",
  tiles,
  pills,
}: DashboardPanelSectionProps) {
  return (
    <section className="relative w-full overflow-hidden py-8 lg:py-12">
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-20 -left-16 h-[24rem] w-[24rem] rounded-full bg-brand-blue-500/15 blur-[130px]"
        animate={{ opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-16 -right-16 h-[22rem] w-[22rem] rounded-full bg-violet-500/10 blur-[120px]"
      />

      <Container className="relative z-10">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-orange-400 sm:text-sm">
            {eyebrow}
          </span>
          <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">{heading}</h2>
          {description && <p className="mt-4 text-base leading-relaxed text-slate-500">{description}</p>}
        </div>

        {/* hologram dashboard panel */}
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.215, 0.61, 0.355, 1] }}
          className="relative mx-auto mt-14 max-w-4xl"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute -inset-8 rounded-[44px] bg-brand-blue-500/20 blur-[80px]"
          />

          <SpotlightCard
            glowColor="rgba(56,189,248,0.35)"
            className="!rounded-[32px] border-white/10 bg-[#03050D] p-6 shadow-[0_60px_120px_-30px_rgba(2,6,23,0.9)] sm:p-8"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-[0.12]"
              style={{
                backgroundImage: "radial-gradient(#3b82f6 1.2px, transparent 1.2px)",
                backgroundSize: "22px 22px",
              }}
            />

            <div className="relative z-10 flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wide text-blue-500">{panelLabel}</span>
              <div className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-rose-400/70" />
                <span className="h-2 w-2 rounded-full bg-amber-400/70" />
                <span className="h-2 w-2 rounded-full bg-emerald-400/70" />
              </div>
            </div>

            <div className="relative z-10 mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {tiles.map((tile, i) => (
                <motion.div
                  key={tile.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.4, delay: i * 0.06, ease: [0.215, 0.61, 0.355, 1] }}
                  className="relative flex flex-col gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4"
                >
                  <div className="flex items-center justify-between">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-blue-500/15 text-orange-300 shadow-[0_0_16px_-4px_rgba(37,99,235,0.5)]">
                      <tile.icon size={20} strokeWidth={1.5} />
                    </span>
                   
                  </div>

                  <span className="text-xs font-bold leading-tight text-slate-800">{tile.label}</span>

                  {tile.hasSparkline ? (
                    <svg
                      viewBox="0 0 100 34"
                      className="mt-auto h-8 w-full overflow-visible"
                      fill="none"
                      preserveAspectRatio="none"
                    >
                      <motion.path
                        d="M0,26 L14,20 L28,24 L42,10 L56,16 L70,4 L84,12 L100,6"
                        stroke="url(#sparklineGradient)"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        viewport={{ once: true, amount: 0.6 }}
                        transition={{ duration: 1.4, delay: 0.3, ease: [0.215, 0.61, 0.355, 1] }}
                      />
                      <defs>
                        <linearGradient id="sparklineGradient" x1="0" y1="0" x2="100" y2="0">
                          <stop offset="0%" stopColor="#38bdf8" />
                          <stop offset="100%" stopColor="#a78bfa" />
                        </linearGradient>
                      </defs>
                    </svg>
                  ) : tile.bars ? (
                    <div className="mt-auto flex h-8 items-end gap-1">
                      {tile.bars.map((h, bi) => (
                        <span key={bi} className="w-full rounded-t bg-brand-blue-400/60" style={{ height: `${h}%` }} />
                      ))}
                    </div>
                  ) : null}
                </motion.div>
              ))}
            </div>
          </SpotlightCard>
        </motion.div>

        {/* capabilities strip */}
        <div className="mx-auto mt-14 flex max-w-3xl flex-wrap items-center justify-center gap-3">
          {pills.map((pill, i) => (
            <motion.span
              key={pill.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.4, delay: i * 0.06, ease: [0.215, 0.61, 0.355, 1] }}
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-medium text-slate-600 transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-blue-300 hover:text-slate-900"
            >
              <pill.icon size={14} strokeWidth={1.75} className="text-brand-blue-600" />
              {pill.label}
            </motion.span>
          ))}
        </div>
      </Container>
    </section>
  );
}
