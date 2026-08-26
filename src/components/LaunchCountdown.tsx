import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { PartyPopper, ArrowRight, Flower2 } from "lucide-react";
import logo from "@/assests/logo.png";

interface FlowerConfig {
  side: "left" | "right";
  bottom: string;
  offset: string;
  sizeClass: string;
  colorClass: string;
  delay: number;
  duration: number;
}

const FLOWERS: FlowerConfig[] = [
  { side: "left", bottom: "4%", offset: "2%", sizeClass: "h-6 w-6 sm:h-9 sm:w-9", colorClass: "text-brand-blue-400", delay: 0, duration: 6 },
  { side: "left", bottom: "14%", offset: "10%", sizeClass: "h-4 w-4 sm:h-6 sm:w-6", colorClass: "text-orange-400", delay: 0.8, duration: 7 },
  { side: "left", bottom: "1%", offset: "16%", sizeClass: "h-5 w-5 sm:h-7 sm:w-7", colorClass: "text-rose-400", delay: 1.5, duration: 6.5 },
  { side: "left", bottom: "22%", offset: "3%", sizeClass: "h-3 w-3 sm:h-5 sm:w-5", colorClass: "text-violet-400", delay: 2.2, duration: 7.5 },
  { side: "right", bottom: "5%", offset: "3%", sizeClass: "h-7 w-7 sm:h-10 sm:w-10", colorClass: "text-brand-blue-400", delay: 0.4, duration: 6.5 },
  { side: "right", bottom: "16%", offset: "12%", sizeClass: "h-4 w-4 sm:h-6 sm:w-6", colorClass: "text-rose-400", delay: 1.1, duration: 6 },
  { side: "right", bottom: "2%", offset: "18%", sizeClass: "h-5 w-5 sm:h-7 sm:w-7", colorClass: "text-orange-400", delay: 1.8, duration: 7 },
  { side: "right", bottom: "24%", offset: "4%", sizeClass: "h-3 w-3 sm:h-5 sm:w-5", colorClass: "text-violet-400", delay: 2.5, duration: 7.2 },
];

function CelebrationFlowers() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {FLOWERS.map((flower, i) => (
        <motion.span
          key={i}
          className={`absolute ${flower.colorClass}`}
          style={{
            bottom: flower.bottom,
            [flower.side]: flower.offset,
          }}
          animate={{ y: [0, -18, 0], rotate: [0, 12, -12, 0], opacity: [0.65, 1, 0.65] }}
          transition={{ duration: flower.duration, delay: flower.delay, repeat: Infinity, ease: "easeInOut" }}
        >
          <Flower2 className={flower.sizeClass} strokeWidth={1.5} />
        </motion.span>
      ))}
    </div>
  );
}

function getRemaining(target: number) {
  const diff = Math.max(0, target - Date.now());
  return {
    days: Math.floor(diff / 86_400_000),
    hours: Math.floor((diff / 3_600_000) % 24),
    minutes: Math.floor((diff / 60_000) % 60),
    seconds: Math.floor((diff / 1_000) % 60),
  };
}

const AUTO_ENTER_DELAY_MS = 6000;

interface LaunchCountdownProps {
  target: number;
  onComplete: () => void;
}

/** Full-screen "coming soon" gate shown on a plain white background until
 *  VITE_LAUNCH_AT (see LaunchGate.tsx). Ticks every second; once the target
 *  time passes it shows a brief anniversary celebration before handing
 *  control back to LaunchGate to reveal the actual site. */
export default function LaunchCountdown({ target, onComplete }: LaunchCountdownProps) {
  const [remaining, setRemaining] = useState(() => getRemaining(target));
  const [hasLaunched, setHasLaunched] = useState(() => Date.now() >= target);

  useEffect(() => {
    if (hasLaunched) return;
    const id = setInterval(() => {
      setRemaining(getRemaining(target));
      if (Date.now() >= target) {
        clearInterval(id);
        setHasLaunched(true);
      }
    }, 1000);
    return () => clearInterval(id);
  }, [target, hasLaunched]);

  useEffect(() => {
    if (!hasLaunched) return;
    const id = setTimeout(onComplete, AUTO_ENTER_DELAY_MS);
    return () => clearTimeout(id);
  }, [hasLaunched, onComplete]);

  if (hasLaunched) {
    return (
      <div className="relative flex min-h-dvh w-full flex-col items-center justify-center overflow-hidden bg-white px-4 text-center sm:px-6">
        <CelebrationFlowers />

        <motion.span
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative flex h-16 w-16 items-center justify-center rounded-full bg-brand-blue-50 text-brand-blue-600 sm:h-20 sm:w-20"
        >
          <motion.span
            aria-hidden
            className="absolute inset-0 -m-3 rounded-full bg-brand-blue-400/25 blur-xl"
            animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.15, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          <PartyPopper size={28} strokeWidth={1.5} className="relative sm:hidden" />
          <PartyPopper size={34} strokeWidth={1.5} className="relative hidden sm:block" />
        </motion.span>

        <img src={logo} alt="Bigwigs Technologies" className="mt-6 h-8 w-auto object-contain sm:mt-8 sm:h-9" />

        <h1 className="relative mt-5 max-w-sm text-2xl font-extrabold leading-tight tracking-tight text-slate-900 sm:mt-6 sm:max-w-none sm:text-4xl">
          Happy 14th Anniversary, <span className="text-brand-blue-600">Team!</span>
        </h1>
        <p className="relative mt-3 max-w-xs text-sm leading-relaxed text-slate-500 sm:max-w-md sm:text-base">
          Fourteen years of building intelligent solutions together. Thank you for being part of
          the journey — here&rsquo;s to what we build next.
        </p>

        <button
          type="button"
          onClick={onComplete}
          className="relative mt-7 inline-flex items-center gap-2 rounded-lg bg-brand-blue-500 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_10px_24px_-8px_rgba(37,99,235,0.5)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-blue-600 select-none sm:mt-8 sm:px-6 sm:py-3"
        >
          <span>Enter the New Site</span>
          <ArrowRight size={16} />
        </button>
      </div>
    );
  }

  const units = [
    { label: "Days", value: remaining.days },
    { label: "Hours", value: remaining.hours },
    { label: "Minutes", value: remaining.minutes },
    { label: "Seconds", value: remaining.seconds },
  ];

  return (
    <div className="flex min-h-dvh w-full flex-col items-center justify-center bg-white px-4 text-center sm:px-6">
      <img src={logo} alt="Bigwigs Technologies" className="h-8 w-auto object-contain sm:h-10" />

      <div className="mt-6 flex items-center gap-3 sm:mt-8">
        <span aria-hidden className="h-px w-8 bg-orange-500/50" />
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange-500 sm:text-sm">
          Something Big Is Coming
        </span>
        <span aria-hidden className="h-px w-8 bg-orange-500/50" />
      </div>

      <h1 className="mt-3 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
        We&rsquo;re Launching Soon
      </h1>
      <div className="mt-8 flex items-center gap-2 sm:mt-10 sm:gap-5">
        {units.map((unit) => (
          <div key={unit.label} className="flex flex-col items-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 text-xl font-extrabold tabular-nums text-brand-blue-600 sm:h-20 sm:w-20 sm:text-3xl">
              {String(unit.value).padStart(2, "0")}
            </div>
            <span className="mt-2 text-[10px] font-semibold uppercase tracking-wide text-slate-400 sm:text-xs">
              {unit.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
