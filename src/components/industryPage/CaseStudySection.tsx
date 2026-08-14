import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Activity, Users, Sparkles, TrendingUp } from "lucide-react";
import Container from "@/components/ui/Container";
import MagneticButton from "@/components/ui/MagneticButton";
import SpotlightCard from "./SpotlightCard";

const KPI_PROGRESS = 0.82;
const PATIENT_BARS = [55, 35, 70, 45, 65, 58];
const INSIGHT_POINTS = [8, 22, 16, 34, 28, 46, 40, 58];

export interface CaseStat {
  value: string;
  label: string;
}

interface ChartLabels {
  primary: string;
  secondary: string;
  trend: string;
}

const DEFAULT_CHART_LABELS: ChartLabels = {
  primary: "Hospital KPIs",
  secondary: "Patient Analytics",
  trend: "AI Insights",
};

interface CaseStudySectionProps {
  eyebrow?: string;
  heading: ReactNode;
  description: string;
  stats: CaseStat[];
  ctaHref: string;
  ctaLabel?: string;
  chartLabels?: ChartLabels;
}

function buildSparklinePath(points: number[], width: number, height: number) {
  const max = Math.max(...points);
  const min = Math.min(...points);
  const range = max - min || 1;
  const stepX = width / (points.length - 1);
  return points
    .map((p, i) => {
      const x = i * stepX;
      const y = height - ((p - min) / range) * height;
      return `${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`;
    })
    .join(" ");
}

function KpiRing({ label }: { label: string }) {
  const size = 96;
  const stroke = 8;
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;

  return (
    <div className="flex flex-col items-center gap-3">
      <span className="flex items-center gap-1.5 self-start text-[11px] font-bold uppercase tracking-wide text-slate-500">
        <Activity size={13} className="text-brand-blue-400" />
        {label}
      </span>
      <div className="relative flex h-24 w-24 items-center justify-center">
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="-rotate-90">
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="rgba(15,23,42,0.08)"
            strokeWidth={stroke}
          />
          <motion.circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="url(#kpiGradient)"
            strokeWidth={stroke}
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            whileInView={{ strokeDashoffset: circumference * (1 - KPI_PROGRESS) }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 1.2, ease: [0.215, 0.61, 0.355, 1] }}
          />
          <defs>
            <linearGradient id="kpiGradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#2563eb" />
              <stop offset="100%" stopColor="#22d3ee" />
            </linearGradient>
          </defs>
        </svg>
        <span className="absolute text-xl font-extrabold text-slate-900">82%</span>
      </div>
    </div>
  );
}

function PatientBars({ label }: { label: string }) {
  return (
    <div className="flex flex-col gap-3">
      <span className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wide text-slate-500">
        <Users size={13} className="text-violet-400" />
        {label}
      </span>
      <div className="flex h-24 items-end gap-1.5">
        {PATIENT_BARS.map((h, i) => (
          <motion.span
            key={i}
            className="w-full origin-bottom rounded-t-sm bg-gradient-to-t from-violet-500/80 to-fuchsia-300/50"
            style={{ height: `${h}%` }}
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6, delay: i * 0.07, ease: [0.215, 0.61, 0.355, 1] }}
          />
        ))}
      </div>
    </div>
  );
}

function InsightSparkline({ label }: { label: string }) {
  const width = 380;
  const height = 64;
  const path = buildSparklinePath(INSIGHT_POINTS, width, height);
  const lastX = width;
  const lastY = height - ((INSIGHT_POINTS[INSIGHT_POINTS.length - 1] - Math.min(...INSIGHT_POINTS)) / (Math.max(...INSIGHT_POINTS) - Math.min(...INSIGHT_POINTS) || 1)) * height;

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <span className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wide text-slate-500">
          <Sparkles size={13} className="text-emerald-400" />
          {label}
        </span>
        <span className="flex items-center gap-1 text-[11px] font-bold text-emerald-400">
          <TrendingUp size={13} />
          +64%
        </span>
      </div>
      <svg width="100%" height={height + 8} viewBox={`0 0 ${width} ${height + 8}`} preserveAspectRatio="none" className="overflow-visible">
        <defs>
          <linearGradient id="sparkFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(16,185,129,0.35)" />
            <stop offset="100%" stopColor="rgba(16,185,129,0)" />
          </linearGradient>
        </defs>
        <motion.path
          d={`${path} L${width},${height} L0,${height} Z`}
          fill="url(#sparkFill)"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        />
        <motion.path
          d={path}
          fill="none"
          stroke="#34d399"
          strokeWidth={2.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 1.1, ease: [0.215, 0.61, 0.355, 1] }}
        />
        <motion.circle
          cx={lastX}
          cy={lastY}
          r={4}
          fill="#34d399"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.4, delay: 1.1 }}
        >
          <animate attributeName="r" values="4;6;4" dur="1.8s" repeatCount="indefinite" />
        </motion.circle>
      </svg>
    </div>
  );
}

export default function CaseStudySection({
  eyebrow = "Case Study",
  heading,
  description,
  stats,
  ctaHref,
  ctaLabel = "View Case Study",
  chartLabels,
}: CaseStudySectionProps) {
  const labels = chartLabels ?? DEFAULT_CHART_LABELS;

  return (
    <section className="relative w-full overflow-hidden py-10 lg:py-12">
      <Container className="relative z-10">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[40%_60%] lg:gap-7">
          {/* LEFT — one cinematic dashboard panel, three distinct chart types */}
          <motion.div
            initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: [0.215, 0.61, 0.355, 1] }}
            className="mx-auto w-full max-w-[460px]"
          >
            <SpotlightCard glowColor="rgba(56,189,248,0.35)" className="p-7">
              <div className="grid grid-cols-2 gap-6">
                <KpiRing label={labels.primary} />
                <PatientBars label={labels.secondary} />
              </div>
              <div className="mt-7 border-t border-slate-200 pt-6">
                <InsightSparkline label={labels.trend} />
              </div>
            </SpotlightCard>
          </motion.div>

          {/* RIGHT */}
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-orange-400 sm:text-sm">
              {eyebrow}
            </span>
            <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
              {heading}
            </h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-slate-500">{description}</p>

            <div className="mt-8 grid grid-cols-3 gap-6 border-t border-slate-200 pt-6">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <span className="block bg-gradient-to-br from-slate-900 to-slate-500 bg-clip-text text-3xl font-extrabold tracking-tight text-transparent sm:text-4xl">
                    {stat.value}
                  </span>
                  <span className="mt-1 block text-xs leading-snug text-slate-500">{stat.label}</span>
                </div>
              ))}
            </div>

            <div className="mt-9">
              <MagneticButton
                href={ctaHref}
                magnetic={false}
                className="inline-flex items-center gap-2 rounded-xl bg-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_0_40px_-8px_rgba(37,99,235,0.8)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_50px_-4px_rgba(37,99,235,0.9)] select-none"
              >
                <span>{ctaLabel}</span>
                <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
              </MagneticButton>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
