import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Quote, Star } from "lucide-react";
import Container from "@/components/ui/Container";
import CursorGlow from "@/components/ui/CursorGlow";
import MagneticButton from "@/components/ui/MagneticButton";
import { reviews } from "./reviews";

const AUTOPLAY_DELAY = 6000;

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
      {/* floating blobs */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-20 -left-16 w-96 h-96 rounded-full bg-brand-green-400/15 blur-[110px]"
        animate={{ opacity: [0.5, 0.9, 0.5], y: [0, -20, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -right-16 w-[26rem] h-[26rem] rounded-full bg-brand-blue-500/12 blur-[130px]"
        animate={{ opacity: [0.4, 0.85, 0.4], y: [0, 20, 0] }}
        transition={{ duration: 19, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      <CursorGlow color="16,185,129" size={360} />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* left column*/}
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

            <h3 className="mt-5 text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 leading-tight">
              What our clients say.
            </h3>

            <div className="mt-8 flex items-center gap-4">
              <MagneticButton
                as="button"
                type="button"
                onClick={() => handleManualNav(goPrev)}
                className="flex items-center justify-center w-12 h-12 rounded-full border border-slate-200 bg-white text-slate-700 shadow-[0_8px_20px_-12px_rgba(15,23,42,0.2)] transition-all duration-300 hover:border-brand-green-500 hover:text-brand-green-600 hover:-translate-y-0.5"
              >
                <ArrowLeft size={18} />
              </MagneticButton>
              <MagneticButton
                as="button"
                type="button"
                onClick={() => handleManualNav(goNext)}
                className="flex items-center justify-center w-12 h-12 rounded-full border border-slate-200 bg-white text-slate-700 shadow-[0_8px_20px_-12px_rgba(15,23,42,0.2)] transition-all duration-300 hover:border-brand-green-500 hover:text-brand-green-600 hover:-translate-y-0.5"
              >
                <ArrowRight size={18} />
              </MagneticButton>
            </div>
          </motion.div>

          {/* right column*/}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease: [0.215, 0.61, 0.355, 1], delay: 0.1 }}
            className="lg:col-span-8"
          >
            <div className="relative rounded-[2rem] p-[1px] bg-gradient-to-br from-brand-green-500/30 via-slate-200 to-brand-blue-500/30 shadow-[0_24px_60px_-24px_rgba(15,23,42,0.18)]">
              <div className="relative rounded-[calc(2rem-1px)] bg-white p-8 sm:p-10 lg:p-12 min-h-[340px] overflow-hidden">
                <Quote
                  size={160}
                  strokeWidth={1.5}
                  className="absolute -top-6 -right-6 text-brand-green-500/[0.06] rotate-6 pointer-events-none"
                  aria-hidden="true"
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
                    <div className="flex items-center gap-1" aria-hidden="true">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} size={16} className="text-brand-green-500" fill="currentColor" />
                      ))}
                    </div>

                    <p className="mt-5 text-lg sm:text-xl lg:text-2xl font-medium text-slate-800 leading-relaxed">
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

                {/* autoplay progress*/}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-slate-100" aria-hidden="true">
                  <div
                    key={active.id}
                    className="h-full bg-gradient-to-r from-brand-green-500 to-brand-blue-500"
                    style={{
                      animationName: "testimonial-progress",
                      animationDuration: `${AUTOPLAY_DELAY}ms`,
                      animationTimingFunction: "linear",
                      animationFillMode: "forwards",
                      animationPlayState: isPaused ? "paused" : "running",
                    }}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
