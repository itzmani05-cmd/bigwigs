import { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { Users, ListChecks, Globe2, Target, type LucideIcon } from "lucide-react";
import Container from "@/components/ui/Container";

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

function ImpactCounter({ value, decimals = 0, suffix }: { value: number; decimals?: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 1600, bounce: 0 });

  useEffect(() => {
    if (isInView) motionValue.set(value);
  }, [isInView, value, motionValue]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      if (ref.current) ref.current.textContent = `${latest.toFixed(decimals)}${suffix}`;
    });
    return unsubscribe;
  }, [springValue, suffix, decimals]);

  return <span ref={ref}>{(0).toFixed(decimals)}{suffix}</span>;
}

export default function GlobalImpact() {
  return (
    <section className="relative w-full overflow-hidden py-14 lg:py-20">
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 left-1/2 h-80 w-[34rem] -translate-x-1/2 rounded-full bg-brand-blue-500/[0.1] blur-[120px]"
        animate={{ opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />

      <Container className="relative z-10">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Our Global Impact
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.215, 0.61, 0.355, 1] }}
                className="glass-card flex flex-col items-center rounded-[24px] p-6 text-center sm:p-8"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-blue-50 text-brand-blue-500">
                  <Icon size={22} strokeWidth={1.75} />
                </span>
                <span
                  className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl"
                  style={{ textShadow: "0 0 26px rgba(37,99,235,0.22)" }}
                >
                  <ImpactCounter value={stat.value} decimals={stat.decimals} suffix={stat.suffix} />
                </span>
                <span className="mt-1 text-sm font-medium text-slate-500">{stat.label}</span>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
