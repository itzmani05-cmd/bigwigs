import { Users, Layers, UsersRound, Award } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import StatCounter from "./StatCounter";

interface Stat {
  icon: LucideIcon;
  value: number;
  suffix: string;
  label: string;
}

const stats: Stat[] = [
  { icon: Users, value: 50, suffix: "+", label: "Clients served" },
  { icon: Layers, value: 120, suffix: "+", label: "Projects delivered" },
  { icon: UsersRound, value: 30, suffix: "+", label: "Team members" },
  { icon: Award, value: 5, suffix: "+", label: "Years of experience" },
];

export default function AboutStats() {
  return (
    <dl className="mt-12 sm:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mx-auto max-w-4xl">
      {stats.map((stat) => {
        const Icon = stat.icon;
        return (
          <div
            key={stat.label}
            className="group flex flex-col items-center text-center gap-2 rounded-2xl border border-white/60 bg-white/75 backdrop-blur-sm px-4 py-6 sm:py-8 shadow-[0_8px_30px_-12px_rgba(15,23,42,0.12)] transition-all duration-300 ease-out hover:-translate-y-1 hover:border-brand-green-500/30 hover:shadow-[0_16px_40px_-14px_rgba(16,185,129,0.25)]"
          >
            <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-brand-green-50 text-brand-green-600">
              <Icon size={20} strokeWidth={1.75} />
            </span>
            <dd className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
              <StatCounter value={stat.value} suffix={stat.suffix} />
            </dd>
            <dt className="text-xs sm:text-sm font-medium text-slate-500">{stat.label}</dt>
          </div>
        );
      })}
    </dl>
  );
}
