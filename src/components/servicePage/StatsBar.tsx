import type { LucideIcon } from "lucide-react";
import Container from "@/components/ui/Container";
import StatCounter from "@/components/ui/StatCounter";
import SectionBackdrop from "./SectionBackdrop";
import { ScrollStagger, ScrollStaggerItem } from "@/components/scroll";

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
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-brand-blue-50/70 via-brand-blue-50/25 to-white py-14 lg:py-16">
      <SectionBackdrop />
      <Container className="relative z-10">
        <ScrollStagger staggerDelay={0.08} amount={0.4} className="grid grid-cols-2 gap-5 sm:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <ScrollStaggerItem
                key={stat.label}
                direction="up"
                distance={24}
                duration={0.5}
                className="flex flex-col items-center gap-3 rounded-[24px] border border-slate-200 bg-white px-4 py-8 text-center shadow-[0_16px_40px_-28px_rgba(15,23,42,0.18)]"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-blue-50 text-brand-blue-500">
                  <Icon size={22} strokeWidth={1.75} />
                </span>
                <span className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                  <StatCounter value={stat.value} suffix={stat.suffix} />
                </span>
                <span className="text-sm font-medium text-slate-500">{stat.label}</span>
              </ScrollStaggerItem>
            );
          })}
        </ScrollStagger>
      </Container>
    </section>
  );
}
