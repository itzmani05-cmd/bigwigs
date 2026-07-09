"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import Container from "@/components/ui/Container";
import { reviews } from "./reviews";

const AUTOPLAY_DELAY = 1000;

const slideVariants = {
  enter: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? 40 : -40,
  }),
  center: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: [0.215, 0.61, 0.355, 1] },
  },
  exit: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? -40 : 40,
    transition: { duration: 0.35, ease: [0.215, 0.61, 0.355, 1] as const },
  }),
} as const;

export default function ReviewsSection() {
  const [[index, direction], setIndexDirection] = useState<[number, number]>([0, 0]);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const active = reviews[index];

  const goTo = useCallback((newIndex: number, dir: number) => {
    setIndexDirection([(newIndex + reviews.length) % reviews.length, dir]);
  }, []);

  const goNext = useCallback(() => {
    setIndexDirection(([current]) => [(current + 1) % reviews.length, 1]);
  }, []);

  const goPrev = useCallback(() => {
    setIndexDirection(([current]) => [(current - 1 + reviews.length) % reviews.length, -1]);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    timerRef.current = setInterval(goNext, AUTOPLAY_DELAY);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, index, goNext]);

  const handleManualNav = (fn: () => void) => {
    fn();
    setIsPaused(true);
    window.setTimeout(() => setIsPaused(false), AUTOPLAY_DELAY);
  };

  const avatarTint =
    active.tint === "green"
      ? "from-brand-green-400 to-brand-blue-500"
      : "from-brand-blue-500 to-brand-green-400";

  return (
    <section
      id="reviews"
      className="relative bg-slate-50 py-24 lg:py-32 overflow-hidden scroll-mt-24"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* left column: heading + controls */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease: [0.215, 0.61, 0.355, 1] }}
            className="lg:col-span-4"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-green-500/25 bg-brand-green-50 px-4 py-1.5 text-xs sm:text-sm font-bold tracking-[0.2em] text-brand-green-600 uppercase">
              Testimonials
            </span>
            <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
              Trusted by clients{" "}
              <span className="bg-gradient-to-r from-brand-green-500 via-brand-green-400 to-brand-blue-500 bg-clip-text text-transparent">
                and founders.
              </span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              Real feedback from the teams and builders we&apos;ve partnered with.
            </p>

            <div className="mt-10 flex items-center gap-4">
              <button
                type="button"
                aria-label="Previous review"
                onClick={() => handleManualNav(goPrev)}
                className="flex items-center justify-center w-12 h-12 rounded-full border border-slate-200 bg-white text-slate-700 shadow-[0_8px_20px_-12px_rgba(15,23,42,0.2)] transition-all duration-300 hover:border-brand-green-500 hover:text-brand-green-600 hover:-translate-y-0.5"
              >
                <ArrowLeft size={18} />
              </button>
              <button
                type="button"
                aria-label="Next review"
                onClick={() => handleManualNav(goNext)}
                className="flex items-center justify-center w-12 h-12 rounded-full border border-slate-200 bg-white text-slate-700 shadow-[0_8px_20px_-12px_rgba(15,23,42,0.2)] transition-all duration-300 hover:border-brand-green-500 hover:text-brand-green-600 hover:-translate-y-0.5"
              >
                <ArrowRight size={18} />
              </button>

              <span className="ml-2 text-sm font-semibold text-slate-400 tabular-nums">
                {String(index + 1).padStart(2, "0")}{" "}
                <span className="text-slate-300">/</span>{" "}
                {String(reviews.length).padStart(2, "0")}
              </span>
            </div>

            {/* progress dots */}
            <div className="mt-6 flex items-center gap-2">
              {reviews.map((r, i) => (
                <button
                  key={r.id}
                  type="button"
                  aria-label={`Go to review ${i + 1}`}
                  onClick={() => handleManualNav(() => goTo(i, i > index ? 1 : -1))}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === index
                      ? "w-8 bg-gradient-to-r from-brand-green-500 to-brand-blue-500"
                      : "w-1.5 bg-slate-300 hover:bg-slate-400"
                  }`}
                />
              ))}
            </div>
          </motion.div>

          {/* right column: review content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease: [0.215, 0.61, 0.355, 1], delay: 0.1 }}
            className="lg:col-span-8"
          >
            <div className="relative rounded-3xl bg-white border border-slate-100 shadow-[0_24px_60px_-24px_rgba(15,23,42,0.18)] p-8 sm:p-10 lg:p-12 min-h-[320px] overflow-hidden">
              <Quote
                size={64}
                strokeWidth={1.2}
                className="absolute top-8 right-8 text-brand-green-500/10"
              />

              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={active.id}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="relative z-10 flex flex-col h-full"
                >
                  <p className="text-lg sm:text-xl lg:text-2xl font-medium text-slate-800 leading-relaxed">
                    &ldquo;{active.content}&rdquo;
                  </p>

                  <div className="mt-8 flex items-center gap-4">
                    <span
                      className={`flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br ${avatarTint} text-white font-bold text-base shrink-0 shadow-md`}
                    >
                      {active.initials}
                    </span>
                    <div>
                      <p className="text-base font-bold text-slate-900">{active.name}</p>
                      <p className="text-sm text-slate-500">{active.position}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
