import type { ReactNode } from "react";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import Container from "@/components/ui/Container";
import SpotlightCard from "./SpotlightCard";
import StatCounter from "@/components/ui/StatCounter";

export interface KpiItem {
  value: number;
  suffix?: string;
  label: string;
  isStatic?: boolean;
  staticText?: string;
}

export interface BenefitItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface BusinessBenefitsSectionProps {
  eyebrow?: string;
  heading: ReactNode;
  kpis: KpiItem[];
  benefits: BenefitItem[];
}

export default function BusinessBenefitsSection({
  eyebrow = "Business Benefits",
  heading,
  kpis,
  benefits,
}: BusinessBenefitsSectionProps) {
  return (
    <section className="relative w-full overflow-hidden py-10 lg:py-12">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-20 left-1/3 h-[26rem] w-[26rem] rounded-full bg-violet-500/10 blur-[130px]"
      />

      <Container className="relative z-10">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-orange-400 sm:text-sm">
            {eyebrow}
          </span>
          <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            {heading}
          </h2>
        </div>

        {/* oversized gradient KPI numbers, no card chrome */}
        <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-4 lg:gap-x-8">
          {kpis.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.215, 0.61, 0.355, 1] }}
              className="flex flex-col items-center text-center"
            >
              <span className="bg-blue-400 text-blue-300 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-5xl">
                {stat.isStatic ? (
                  stat.staticText
                ) : (
                  <StatCounter value={stat.value} suffix={stat.suffix} />
                )}
              </span>
              <span className="mt-3 text-sm font-medium uppercase tracking-wide text-slate-500">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>

        {/* horizontal scroll-snap strip of qualitative benefits */}
        <div className="mt-10 -mx-6 flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-4 sm:-mx-10 sm:px-10 lg:mx-0 lg:px-0 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {benefits.map((benefit, i) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: (i % 6) * 0.06, ease: [0.215, 0.61, 0.355, 1] }}
              className="w-72 shrink-0 snap-center"
            >
              <SpotlightCard className="flex h-full flex-col items-start gap-4 p-6" glowColor="rgba(139,92,246,0.2)">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-violet-50 text-violet-600 shadow-[0_0_20px_-6px_rgba(139,92,246,0.3)]">
                  <benefit.icon size={24} strokeWidth={1.75} />
                </span>
                <h3 className="text-lg font-bold text-slate-900">{benefit.title}</h3>
                <p className="text-sm leading-relaxed text-slate-500">{benefit.description}</p>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
