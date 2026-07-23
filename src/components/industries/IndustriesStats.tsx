import { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { Users, ListChecks, Globe2, ShieldCheck, type LucideIcon } from "lucide-react";
import Container from "@/components/ui/Container";

interface Stat {
  icon: LucideIcon;
  value: number;
  decimals?: number;
  prefix?: string;
  suffix: string;
  label: string;
  color: string;
  bg: string;
}

const STATS: Stat[] = [
  { icon: Users, value: 75, suffix: "+", label: "AI Experts", color: "text-brand-blue-500", bg: "bg-brand-blue-50" },
  { icon: ListChecks, value: 10, suffix: "M+", label: "Tasks Completed", color: "text-brand-green-600", bg: "bg-brand-green-50" },
  { icon: Globe2, value: 50, suffix: "+", label: "Global Clients", color: "text-violet-500", bg: "bg-violet-50" },
  { icon: ShieldCheck, value: 99.5, decimals: 1, suffix: "%", label: "Quality Accuracy", color: "text-orange-500", bg: "bg-orange-50" },
];

function StatValue({ value, decimals = 0, prefix = "", suffix }: { value: number; decimals?: number; prefix?: string; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 1600, bounce: 0 });

  useEffect(() => {
    if (isInView) motionValue.set(value);
  }, [isInView, value, motionValue]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      if (ref.current) ref.current.textContent = `${prefix}${latest.toFixed(decimals)}${suffix}`;
    });
    return unsubscribe;
  }, [springValue, decimals, prefix, suffix]);

  return (
    <span ref={ref}>
      {prefix}
      {(0).toFixed(decimals)}
      {suffix}
    </span>
  );
}

export default function IndustriesStats() {
  return (
    <section className="relative w-full overflow-hidden py-10 lg:py-12">
      <Container className="relative z-10">
        <div className="mx-auto max-w-xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-blue-600 sm:text-sm">
            Our Impact In Numbers
          </span>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-5 lg:grid-cols-4">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.215, 0.61, 0.355, 1] }}
              className="glass-card flex flex-col items-center gap-3 rounded-[24px] px-4 py-8 text-center"
            >
              <span className={`flex h-12 w-12 items-center justify-center rounded-xl ${stat.bg} ${stat.color}`}>
                <stat.icon size={22} strokeWidth={1.75} />
              </span>
              <span className={`text-3xl font-extrabold tracking-tight sm:text-4xl ${stat.color}`}>
                <StatValue value={stat.value} decimals={stat.decimals} suffix={stat.suffix} />
              </span>
              <span className="text-sm font-medium text-slate-500">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
