import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import Container from "@/components/ui/Container";
import StatCounter from "@/components/home/StatCounter";
import SectionBackdrop from "./SectionBackdrop";

export interface Stat {
  icon: LucideIcon;
  value: number;
  suffix: string;
  label: string;
}

interface StatsBarProps {
  stats: Stat[];
}

export default function StatsBar({ stats }: StatsBarProps) {
  return (
    <section className="relative w-full overflow-hidden py-14 lg:py-16">
      <SectionBackdrop />
      <Container className="relative z-10">
        <div className="grid grid-cols-2 gap-px border border-slate-200 bg-slate-200 sm:grid-cols-4">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.215, 0.61, 0.355, 1] }}
                className="relative flex flex-col items-center gap-2 bg-white px-4 py-8 text-center transition-all duration-300 hover:z-10 hover:-translate-y-1 hover:shadow-lg"
              >
                <Icon size={17} className="text-brand-blue-500" strokeWidth={1.75} />
                <span className="mt-1 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                  <StatCounter value={stat.value} suffix={stat.suffix} />
                </span>
                <span className="text-xs font-medium text-slate-500">{stat.label}</span>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
