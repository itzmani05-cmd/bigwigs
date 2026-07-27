import type { ReactNode } from "react";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import Container from "@/components/ui/Container";
import SpotlightCard from "./SpotlightCard";

const ORBIT_SIZE = 560;
const ORBIT_CENTER = ORBIT_SIZE / 2;
const ORBIT_RADIUS = 225;

export interface OrbitItem {
  icon: LucideIcon;
  label: string;
}

interface WhoWeServeSectionProps {
  eyebrow?: string;
  heading: ReactNode;
  description?: string;
  centerLabel: ReactNode;
  items: OrbitItem[];
}

export default function WhoWeServeSection({
  eyebrow = "Who We Serve",
  heading,
  description,
  centerLabel,
  items,
}: WhoWeServeSectionProps) {
  return (
    <section className="relative w-full overflow-hidden py-10 lg:py-12">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-blue-500/10 blur-[140px]"
      />

      <Container className="relative z-10">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-orange-400 sm:text-sm">
            {eyebrow}
          </span>
          <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            {heading}
          </h2>
          {description && (
            <p className="mt-4 text-base leading-relaxed text-slate-500">{description}</p>
          )}
        </div>

        {/* desktop: static orbit ring around a central node */}
        <div
          className="relative mx-auto mt-16 hidden lg:block"
          style={{ height: ORBIT_SIZE, width: ORBIT_SIZE }}
        >
          <svg
            aria-hidden
            className="absolute inset-0 h-full w-full"
            viewBox={`0 0 ${ORBIT_SIZE} ${ORBIT_SIZE}`}
          >
            {items.map((item, i) => {
              const angle = (i / items.length) * 2 * Math.PI - Math.PI / 2;
              const x = ORBIT_CENTER + ORBIT_RADIUS * Math.cos(angle);
              const y = ORBIT_CENTER + ORBIT_RADIUS * Math.sin(angle);
              return (
                <line
                  key={item.label}
                  x1={ORBIT_CENTER}
                  y1={ORBIT_CENTER}
                  x2={x}
                  y2={y}
                  stroke="rgba(15,23,42,0.12)"
                  strokeWidth={1}
                />
              );
            })}
            <circle
              cx={ORBIT_CENTER}
              cy={ORBIT_CENTER}
              r={ORBIT_RADIUS}
              fill="none"
              stroke="rgba(37,99,235,0.18)"
              strokeDasharray="2 6"
            />
          </svg>

          {/* central node */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease: [0.215, 0.61, 0.355, 1] }}
            className="absolute left-1/2 top-1/2 z-10 flex h-32 w-32 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-brand-blue-200 bg-white text-center shadow-[0_0_50px_-10px_rgba(37,99,235,0.3)]"
          >
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0 -m-6 rounded-full bg-brand-blue-400/15 blur-2xl"
            />
            <span className="relative text-sm font-extrabold leading-tight text-slate-900">
              {centerLabel}
            </span>
          </motion.div>

          {/* orbiting nodes */}
          {items.map((item, i) => {
            const angle = (i / items.length) * 2 * Math.PI - Math.PI / 2;
            const x = ORBIT_RADIUS * Math.cos(angle);
            const y = ORBIT_RADIUS * Math.sin(angle);
            return (
              <div
                key={item.label}
                className="absolute left-1/2 top-1/2 w-28"
                style={{ transform: `translate(-50%, -50%) translate(${x}px, ${y}px)` }}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.6 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5, delay: i * 0.05, ease: [0.215, 0.61, 0.355, 1] }}
                  className="group flex flex-col items-center gap-2 text-center"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-brand-blue-600 shadow-[0_10px_24px_-8px_rgba(37,99,235,0.25)] backdrop-blur-xl transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-110 group-hover:border-brand-blue-300">
                    <item.icon size={18} strokeWidth={1.75} />
                  </span>
                  <span className="text-xs font-semibold leading-tight text-slate-700">{item.label}</span>
                </motion.div>
              </div>
            );
          })}
        </div>

        {/* mobile / tablet fallback: icon-tile grid */}
        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:hidden">
          {items.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.4, delay: (i % 6) * 0.06, ease: [0.215, 0.61, 0.355, 1] }}
            >
              <SpotlightCard className="flex h-full flex-col items-center gap-3 px-4 py-7 text-center" tilt={false}>
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-blue-50 text-brand-blue-600">
                  <item.icon size={19} strokeWidth={1.75} />
                </span>
                <span className="text-sm font-semibold leading-snug text-slate-800">{item.label}</span>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
