import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import Container from "@/components/ui/Container";
import logo from "@/assests/logo.png";
import { testimonials } from "./testimonialsData";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const total = testimonials.length;
  const active = testimonials[index];

  useEffect(() => {
    if (isPaused) return;
    const id = setInterval(() => setIndex((prev) => (prev + 1) % total), 6000);
    return () => clearInterval(id);
  }, [isPaused, total]);

  const goTo = (i: number) => setIndex((i + total) % total);

  return (
    <section className="relative w-full overflow-hidden py-14 lg:py-20">
      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-72 w-[36rem] -translate-x-1/2 rounded-full bg-brand-blue-500/[0.07] blur-[120px]"
        animate={{ opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />

      <Container className="relative z-10">
        <div className="mx-auto max-w-xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-blue-600 sm:text-sm">
            Our Team
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Hear From Our Team
          </h2>
        </div>

        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="relative mx-auto mt-12 flex max-w-3xl items-center gap-3 sm:gap-6"
        >
          <button
            type="button"
            onClick={() => goTo(index - 1)}
            aria-label="Previous testimonial"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white/70 text-slate-500 backdrop-blur-sm transition-colors duration-200 hover:border-brand-blue-500 hover:text-brand-blue-600"
          >
            <ChevronLeft size={18} />
          </button>

          <div className="relative min-h-[280px] flex-1 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.4, ease: [0.215, 0.61, 0.355, 1] }}
                className="glass-card flex flex-col items-center gap-5 rounded-[28px] p-8 text-center sm:p-10"
              >
                <Quote size={32} strokeWidth={1.5} className="text-brand-blue-200" />
                <p className="max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
                  &ldquo;{active.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <img
                    src={active.photo}
                    alt={active.name}
                    className="h-12 w-12 rounded-full object-cover ring-2 ring-white"
                  />
                  <div className="text-left">
                    <p className="text-sm font-bold text-slate-900">{active.name}</p>
                    <p className="text-xs text-slate-500">
                      {active.role} &middot; {active.department}
                    </p>
                  </div>
                </div>
                <div className="mt-1 flex items-center gap-1.5 opacity-70">
                  <img src={logo} alt="Bigwigs Technologies" className="h-4 w-auto object-contain" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.1em] text-slate-500">
                    Bigwigs Technologies
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            type="button"
            onClick={() => goTo(index + 1)}
            aria-label="Next testimonial"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white/70 text-slate-500 backdrop-blur-sm transition-colors duration-200 hover:border-brand-blue-500 hover:text-brand-blue-600"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        <div className="mt-6 flex items-center justify-center gap-2">
          {testimonials.map((t, i) => (
            <button
              key={t.name}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === index ? "w-6 bg-brand-blue-500" : "w-1.5 bg-slate-300 hover:bg-slate-400"
              }`}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
