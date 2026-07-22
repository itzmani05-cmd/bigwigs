import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Rocket, type LucideIcon } from "lucide-react";
import Container from "@/components/ui/Container";
import MagneticButton from "@/components/ui/MagneticButton";

const CUBES = [
  { top: "18%", left: "8%", size: 18, duration: 14, delay: 0 },
  { top: "68%", left: "14%", size: 12, duration: 18, delay: 2 },
  { top: "30%", left: "92%", size: 14, duration: 16, delay: 1 },
  { top: "72%", left: "88%", size: 10, duration: 20, delay: 3 },
];

interface CTAAction {
  label: string;
  href: string;
  showArrow?: boolean;
}

interface CTASectionProps {
  icon?: LucideIcon;
  heading: ReactNode;
  description: string;
  primaryAction: CTAAction;
  secondaryAction?: CTAAction;
  /** Wrap the card in its own <section><Container>. Set false to embed the raw card inside an existing section/container. */
  withContainer?: boolean;
  className?: string;
}

export default function CTASection({
  icon: Icon = Rocket,
  heading,
  description,
  primaryAction,
  secondaryAction,
  withContainer = true,
  className = "",
}: CTASectionProps) {
  const card = (
    <div
      className={`relative overflow-hidden rounded-[28px] bg-gradient-to-br from-[#03132f] via-[#0b1f45] to-[#0F172A] p-8 sm:p-12 lg:p-14 ${className}`}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-25"
        style={{
          backgroundImage: "radial-gradient(#3b82f6 1.4px, transparent 1.4px)",
          backgroundSize: "16px 16px",
          WebkitMaskImage: "radial-gradient(ellipse 70% 70% at 60% 40%, black 0%, transparent 70%)",
          maskImage: "radial-gradient(ellipse 70% 70% at 60% 40%, black 0%, transparent 70%)",
        }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-brand-blue-500/25 blur-[110px]"
        animate={{ opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      {CUBES.map((cube, i) => (
        <motion.span
          key={i}
          aria-hidden
          className="pointer-events-none absolute rounded-sm border border-brand-blue-300/25"
          style={{ top: cube.top, left: cube.left, width: cube.size, height: cube.size }}
          animate={{ y: [0, -14, 0], rotate: [0, 90, 0], opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: cube.duration, repeat: Infinity, ease: "easeInOut", delay: cube.delay }}
        />
      ))}

      <svg
        aria-hidden
        className="pointer-events-none absolute inset-0 h-full w-full opacity-30"
        viewBox="0 0 800 300"
        preserveAspectRatio="none"
        fill="none"
      >
        <defs>
          <linearGradient id="cta-signal-gradient" x1="0" y1="260" x2="800" y2="20" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="100%" stopColor="#2563eb" />
          </linearGradient>
        </defs>
        <motion.path
          d="M -20 220 C 180 180, 320 260, 480 160 S 700 60, 820 90"
          stroke="url(#cta-signal-gradient)"
          strokeWidth="1"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
        <motion.path
          d="M -20 270 C 200 240, 340 300, 520 210 S 720 110, 820 150"
          stroke="url(#cta-signal-gradient)"
          strokeWidth="0.75"
          strokeLinecap="round"
          opacity="0.6"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 0.6 }}
          viewport={{ once: true }}
          transition={{ duration: 2.4, delay: 0.3, ease: "easeInOut" }}
        />
      </svg>

      <motion.span
        aria-hidden
        className="pointer-events-none absolute left-[15%] top-[20%] h-1.5 w-1.5 rounded-full bg-brand-blue-300"
        animate={{ opacity: [0.2, 1, 0.2], y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.span
        aria-hidden
        className="pointer-events-none absolute left-[40%] top-[75%] h-1 w-1 rounded-full bg-brand-blue-300"
        animate={{ opacity: [0.2, 1, 0.2], y: [0, -8, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      <div className="relative z-10 flex flex-col items-center gap-8 text-center lg:flex-row lg:items-center lg:justify-between lg:text-left">
        <div className="relative hidden shrink-0 lg:block">
          <motion.div
            aria-hidden
            className="pointer-events-none absolute inset-0 -m-6 rounded-full bg-brand-blue-400/30 blur-[40px]"
            animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.15, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="relative flex h-24 w-24 items-center justify-center rounded-full bg-gray-200 text-brand-blue-300"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <Icon size={40} strokeWidth={1.5} />
          </motion.div>
        </div>

        <div className="max-w-xl">
          <h3 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl lg:text-[32px]">{heading}</h3>
          <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">{description}</p>
        </div>

        <div className="flex w-full shrink-0 flex-wrap items-center justify-center gap-3 lg:w-auto lg:justify-end">
          <MagneticButton
            href={primaryAction.href}
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_15px_-8px_rgba(249,115,22,0.6)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-orange-600 select-none sm:w-auto"
          >
            <span>{primaryAction.label}</span>
            {primaryAction.showArrow !== false && <ArrowRight size={16} />}
          </MagneticButton>
          {secondaryAction && (
            <MagneticButton
              href={secondaryAction.href}
              className="flex w-full items-center justify-center gap-2 rounded-lg border border-white/30 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-white/60 hover:bg-white/10 select-none sm:w-auto"
            >
              <span>{secondaryAction.label}</span>
              {secondaryAction.showArrow && <ArrowRight size={16} />}
            </MagneticButton>
          )}
        </div>
      </div>
    </div>
  );

  if (!withContainer) return card;

  return (
    <section className="relative w-full overflow-hidden py-14 lg:py-20">
      <Container>{card}</Container>
    </section>
  );
}
