import { motion } from "framer-motion";
import { Users, ListChecks, Globe2, Target, type LucideIcon } from "lucide-react";
import Container from "@/components/ui/Container";
import StatCounter from "@/components/ui/StatCounter";
import { ScrollReveal, ScrollStagger, ScrollStaggerItem } from "@/components/scroll";

interface Stat {
  icon: LucideIcon;
  value: number;
  decimals?: number;
  suffix: string;
  label: string;
}

const stats: Stat[] = [
  { icon: Users, value: 75, suffix: "+", label: "Experts" },
  { icon: ListChecks, value: 10, suffix: "M+", label: "Tasks Completed" },
  { icon: Globe2, value: 50, suffix: "+", label: "Global Clients" },
  { icon: Target, value: 99.5, decimals: 1, suffix: "%", label: "Quality Accuracy" },
];

export default function GlobalImpact() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-brand-blue-50/80 via-brand-blue-50/30 to-white py-14 lg:py-20">
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 left-1/2 h-80 w-[34rem] -translate-x-1/2 rounded-full bg-brand-blue-500/[0.1] blur-[120px]"
        animate={{ opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />

      <Container className="relative z-10">
        <ScrollReveal direction="up" distance={24} className="mx-auto max-w-2xl text-center">
          <div className="flex items-center justify-center gap-3">
            <span aria-hidden className="h-px w-8 bg-orange-500/50" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange-500 sm:text-sm">
              By The Numbers
            </span>
            <span aria-hidden className="h-px w-8 bg-orange-500/50" />
          </div>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Our Global Impact
          </h2>
        </ScrollReveal>

        <ScrollStagger as="div" staggerDelay={0.08} amount={0.3} className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <ScrollStaggerItem
                key={stat.label}
                as="div"
                direction="up"
                distance={28}
                scale
                className="flex flex-col items-center rounded-[24px] border border-slate-200 bg-white p-6 text-center shadow-[0_16px_40px_-28px_rgba(15,23,42,0.18)] sm:p-8"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-blue-50 text-brand-blue-500">
                  <Icon size={22} strokeWidth={1.75} />
                </span>
                <span
                  className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl"
                  style={{ textShadow: "0 0 26px rgba(37,99,235,0.22)" }}
                >
                  <StatCounter value={stat.value} decimals={stat.decimals} suffix={stat.suffix} />
                </span>
                <span className="mt-1 text-sm font-medium text-slate-500">{stat.label}</span>
              </ScrollStaggerItem>
            );
          })}
        </ScrollStagger>
      </Container>
    </section>
  );
}
