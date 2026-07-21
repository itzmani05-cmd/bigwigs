import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import Container from "@/components/ui/Container";
import { testimonials, type Testimonial } from "./testimonials";

const AUTOPLAY_DELAY = 7000;
const CARDS_PER_GROUP = 3;

const groupVariants = {
  enter: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? 32 : -32,
  }),
  center: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: [0.215, 0.61, 0.355, 1] as const },
  },
  exit: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? -32 : 32,
    transition: { duration: 0.35, ease: [0.215, 0.61, 0.355, 1] as const },
  }),
};

function TestimonialCard({ item }: { item: Testimonial }) {
  const CompanyIcon = item.companyIcon;

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3, ease: [0.215, 0.61, 0.355, 1] }}
      className="relative flex h-full flex-col rounded-[24px] border border-slate-200/70 bg-white/80 py-8 px-4 shadow-[0_20px_50px_-28px_rgba(15,23,42,0.18)] backdrop-blur-xl transition-shadow duration-300 hover:border-brand-blue-500/30 hover:shadow-[0_32px_64px_-24px_rgba(37,99,235,0.2)]"
    >
      <div className="flex items-start justify-between">
        <Quote
          size={28}
          strokeWidth={0}
          className="fill-brand-blue-500/90"
          aria-hidden="true"
        />
      </div>

      <p className="mt-5 flex-1 text-[15px] leading-relaxed text-slate-600">
        &ldquo;{item.quote}&rdquo;
      </p>

      <div className="mt-7 border-t border-slate-100 pt-5">
        <div className="flex items-center justify-between gap-3">
          <div className="flex min-w-0 items-center gap-2">
            <img
              src={item.avatar}
              alt={item.name}
              className="h-11 w-11 shrink-0 rounded-full object-cover shadow-md ring-4 ring-white"
            />
            <div className="min-w-0">
              <p className="truncate text-sm font-bold text-slate-900">{item.name}</p>
              <p className="truncate text-xs text-slate-500">{item.position}</p>
            </div>
          </div>
          <div className="hidden shrink-0 items-center gap-1.5 text-slate-400 sm:flex">
            <CompanyIcon size={16} strokeWidth={2} aria-hidden="true" />
            <span className="text-xs font-bold tracking-tight whitespace-nowrap">
              {item.company}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function TestimonialsSection() {
  const groups = useMemo(() => {
    const chunks: Testimonial[][] = [];
    for (let i = 0; i < testimonials.length; i += CARDS_PER_GROUP) {
      chunks.push(testimonials.slice(i, i + CARDS_PER_GROUP));
    }
    return chunks;
  }, []);

  const [[groupIndex, direction], setGroupIndex] = useState<[number, number]>([0, 0]);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goNext = useCallback(() => {
    setGroupIndex(([current]) => [(current + 1) % groups.length, 1]);
  }, [groups.length]);

  const goPrev = useCallback(() => {
    setGroupIndex(([current]) => [(current - 1 + groups.length) % groups.length, -1]);
  }, [groups.length]);

  const goTo = useCallback(
    (index: number) => {
      setGroupIndex(([current]) => [index, index > current ? 1 : -1]);
    },
    []
  );

  useEffect(() => {
    if (isPaused) return;
    timerRef.current = setInterval(goNext, AUTOPLAY_DELAY);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, groupIndex, goNext]);

  const handleManualNav = (fn: () => void) => {
    fn();
    setIsPaused(true);
    window.setTimeout(() => setIsPaused(false), AUTOPLAY_DELAY);
  };

  return (
    <section
      id="testimonials"
      className="relative scroll-mt-24 overflow-hidden bg-white pt-12 lg:py-18"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-brand-blue-50/60 via-white to-white"
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-24 -left-24 h-[26rem] w-[26rem] rounded-full bg-brand-blue-500/10 blur-[120px]"
        animate={{ opacity: [0.5, 0.9, 0.5], y: [0, -16, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -right-20 h-[28rem] w-[28rem] rounded-full bg-brand-blue-500/10 blur-[130px]"
        animate={{ opacity: [0.4, 0.8, 0.4], y: [0, 18, 0] }}
        transition={{ duration: 19, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute top-1/3 right-1/4 h-56 w-56 rounded-full bg-orange-400/[0.06] blur-[100px]"
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      <Container className="relative z-10">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-orange-500/25 bg-orange-50 px-4 py-1 text-xs font-bold tracking-[0.2em] text-orange-500 uppercase sm:text-sm">
            Testimonials
          </span> 
          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Trusted by <span className="text-brand-blue-500">Innovators Worldwide</span> 
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-500 sm:text-lg">
            See why global enterprises trust Bigwigs Technologies for high-quality AI
            data solutions.
          </p>
        </div>

        <div className="relative mt-8 lg:px-16 xl:px-20">
          <button
            type="button"
            onClick={() => handleManualNav(goPrev)}
            aria-label="Previous testimonials"
            className="absolute top-1/2 left-0 z-20 hidden h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-[0_12px_30px_-14px_rgba(15,23,42,0.25)] transition-all duration-300 hover:-translate-x-1 hover:border-brand-blue-500 hover:bg-brand-blue-500 hover:text-white lg:flex"
          >
            <ArrowLeft size={20} />
          </button>
          <button
            type="button"
            onClick={() => handleManualNav(goNext)}
            aria-label="Next testimonials"
            className="absolute top-1/2 right-0 z-20 hidden h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-[0_12px_30px_-14px_rgba(15,23,42,0.25)] transition-all duration-300 hover:translate-x-1 hover:border-brand-blue-500 hover:bg-brand-blue-500 hover:text-white lg:flex"
          >
            <ArrowRight size={20} />
          </button>

          <div className="overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={groupIndex}
                custom={direction}
                variants={groupVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8"
              >
                {groups[groupIndex].map((item) => (
                  <TestimonialCard key={item.id} item={item} />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* mobile nav */}
          <div className="mt-8 flex items-center justify-center gap-4 lg:hidden">
            <button
              type="button"
              onClick={() => handleManualNav(goPrev)}
              aria-label="Previous testimonials"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition-colors duration-300 hover:border-brand-blue-500 hover:text-brand-blue-600"
            >
              <ArrowLeft size={18} />
            </button>
            <button
              type="button"
              onClick={() => handleManualNav(goNext)}
              aria-label="Next testimonials"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition-colors duration-300 hover:border-brand-blue-500 hover:text-brand-blue-600"
            >
              <ArrowRight size={18} />
            </button>
          </div>
          <div className="mt-10 flex items-center justify-center gap-2">
            {groups.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => handleManualNav(() => goTo(i))}
                aria-label={`Go to testimonial group ${i + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  i === groupIndex
                    ? "w-8 bg-brand-blue-500"
                    : "w-2.5 bg-slate-300 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
