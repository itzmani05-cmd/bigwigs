import { useCallback, useEffect, useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Container from "@/components/ui/Container";
import SpotlightCard from "./SpotlightCard";

const GAP = 24;

const GLOW_COLORS = [
  "rgba(56,189,248,0.35)",
  "rgba(249,115,22,0.3)",
  "rgba(167,139,250,0.32)",
  "rgba(16,185,129,0.32)",
  "rgba(37,99,235,0.35)",
];

export interface UseCaseItem {
  id: string | number;
  icon: LucideIcon;
  title: string;
  description: string;
  outcome: string;
  href: string;
}

interface UseCasesCarouselProps {
  eyebrow?: string;
  heading: ReactNode;
  description?: string;
  items: UseCaseItem[];
}

function useVisibleCount() {
  const [count, setCount] = useState(() => {
    if (typeof window === "undefined") return 3;
    if (window.innerWidth < 640) return 1;
    if (window.innerWidth < 1024) return 2;
    return 3;
  });

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      setCount(w < 640 ? 1 : w < 1024 ? 2 : 3);
    };
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return count;
}

const slideVariants = {
  enter: (direction: number) => ({
    opacity: 0,
    x: direction === 0 ? 0 : direction > 0 ? 60 : -60,
  }),
  center: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.45, ease: "easeInOut" },
  },
  exit: (direction: number) => ({
    opacity: 0,
    x: direction === 0 ? 0 : direction > 0 ? -60 : 60,
    transition: { duration: 0.45, ease: "easeInOut" as const },
  }),
} as const;

function UseCaseCard({ useCase, glowColor }: { useCase: UseCaseItem; glowColor: string }) {
  const Icon = useCase.icon;
  return (
    <SpotlightCard glowColor={glowColor} className="group flex h-full flex-col p-7">
      <span className="relative flex h-15 w-15 items-center justify-center rounded-full bg-gradient-to-br from-brand-blue-500 to-cyan-400 text-white shadow-[0_0_36px_-8px_rgba(37,99,235,0.3)]">
        <span aria-hidden className="pointer-events-none absolute inset-0 -m-3 rounded-full bg-brand-blue-400/25 blur-xl" />
        <Icon size={25} strokeWidth={1.5} className="relative" />
      </span>

      <h3 className="mt-6 text-lg font-bold leading-snug text-slate-900">{useCase.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-slate-500">{useCase.description}</p>

      <p className="mt-4 text-sm font-bold text-slate-700">{useCase.outcome}</p>

      <a
        href={useCase.href}
        className="mt-auto inline-flex w-fit items-center gap-1.5 pt-6 text-sm font-semibold text-blue-500 transition-colors duration-300 hover:text-brand-blue-700"
      >
        Learn More
        <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
      </a>
    </SpotlightCard>
  );
}

export default function UseCasesCarousel({
  eyebrow = "Use Cases",
  heading,
  description,
  items,
}: UseCasesCarouselProps) {
  const visibleCount = useVisibleCount();
  const maxIndex = Math.max(0, items.length - visibleCount);
  const [[currentIndex, direction], setState] = useState<[number, number]>([0, 0]);

  useEffect(() => {
    setState(([idx]) => (idx > maxIndex ? [maxIndex, 0] : [idx, 0]));
  }, [maxIndex]);

  const goLeft = useCallback(() => {
    setState(([idx]) => [Math.max(idx - 1, 0), -1]);
  }, []);

  const goRight = useCallback(() => {
    setState(([idx]) => [Math.min(idx + 1, maxIndex), 1]);
  }, [maxIndex]);

  const isFirst = currentIndex <= 0;
  const isLast = currentIndex >= maxIndex;
  const visibleUseCases = items.slice(currentIndex, currentIndex + visibleCount);
  const cardBasis = `calc((100% - ${(visibleCount - 1) * GAP}px) / ${visibleCount})`;

  return (
    <section className="relative w-full overflow-hidden py-16 lg:py-24">
      <Container className="relative z-10">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-orange-400 sm:text-sm">
            {eyebrow}
          </span>
          <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            {heading}
          </h2>
          {description && (
            <p className="mt-4 text-base leading-relaxed text-slate-500 sm:text-lg">{description}</p>
          )}
        </div>

        <div className="relative mt-14 px-12 sm:px-16">
          <button
            type="button"
            onClick={goLeft}
            disabled={isFirst}
            aria-label="Previous use cases"
            className="absolute left-0 top-1/2 z-20 flex h-[52px] w-[52px] -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white/85 shadow-[0_10px_30px_-12px_rgba(15,23,42,0.25)] backdrop-blur-xl transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-40 enabled:hover:scale-105 enabled:hover:border-brand-blue-300 enabled:hover:shadow-[0_0_0_6px_rgba(37,99,235,0.12)]"
          >
            <ArrowLeft
              size={20}
              className={`transition-colors duration-300 ${isFirst ? "text-slate-300" : "text-slate-600 hover:text-brand-blue-600"}`}
            />
          </button>

          <button
            type="button"
            onClick={goRight}
            disabled={isLast}
            aria-label="Next use cases"
            className="absolute right-0 top-1/2 z-20 flex h-[52px] w-[52px] -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white/85 shadow-[0_10px_30px_-12px_rgba(15,23,42,0.25)] backdrop-blur-xl transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-40 enabled:hover:scale-105 enabled:hover:border-brand-blue-300 enabled:hover:shadow-[0_0_0_6px_rgba(37,99,235,0.12)]"
          >
            <ArrowRight
              size={20}
              className={`transition-colors duration-300 ${isLast ? "text-slate-300" : "text-slate-600 hover:text-brand-blue-600"}`}
            />
          </button>

          <div className="overflow-hidden">
            <AnimatePresence mode="wait" custom={direction} initial={false}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="flex items-stretch"
                style={{ gap: GAP }}
              >
                {visibleUseCases.map((useCase, i) => (
                  <div
                    key={useCase.id}
                    style={{ flex: `0 0 ${cardBasis}`, maxWidth: cardBasis }}
                  >
                    <UseCaseCard useCase={useCase} glowColor={GLOW_COLORS[i % GLOW_COLORS.length]} />
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </section>
  );
}
