import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { User } from "lucide-react";
import Container from "@/components/ui/Container";
import logo from "@/assests/logo.png";
import { testimonials } from "./testimonialsData";

const DOT_GRID = Array.from({ length: 24 });

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
        <div className="relative">
          <div className="mx-auto max-w-xl text-center">
            <div className="flex items-center justify-center gap-3">
              <span aria-hidden className="h-px w-8 bg-brand-blue-200" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-blue-600 sm:text-sm">
                Our Team
              </span>
              <span aria-hidden className="h-px w-8 bg-brand-blue-200" />
            </div>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Hear From <span className="text-brand-blue-500">Our Team</span>
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-500 sm:text-base">
              Real stories from real people who are building, growing, and making an
              impact at Bigwigs Technologies.
            </p>
          </div>
        </div>

        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="relative mx-auto mt-10 max-w-4xl"
        >
          <div className="relative min-h-[420px] overflow-hidden sm:min-h-[300px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.4, ease: [0.215, 0.61, 0.355, 1] }}
                className="relative overflow-hidden rounded-[28px] border border-slate-300 bg-white p-6 shadow-[0_16px_40px_-28px_rgba(15,23,42,0.18)] sm:p-10 lg:p-12"
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute left-6 top-6 grid grid-cols-4 gap-1.5 opacity-50 sm:left-9 sm:top-9"
                >
                  {DOT_GRID.map((_, i) => (
                    <span key={i} className="h-1 w-1 rounded-full bg-slate-300" />
                  ))}
                </div>
                <span
                  aria-hidden
                  className="pointer-events-none absolute -right-0 -top-0 select-none font-serif text-[120px] leading-none text-slate-100"
                >
                  &rdquo;
                </span>

                <div className="relative pl-8 sm:pl-16">
                  <span aria-hidden className="font-serif text-5xl leading-none text-brand-blue-500 sm:text-6xl">
                    &ldquo;
                  </span>
                  <p className="mt-1 max-w-xl text-xl font-medium leading-snug text-slate-900 sm:text-xl">
                    {active.quote}
                  </p>

                  <div className="mt-4 h-px w-16 bg-slate-200" />

                  <div className="mt-4 flex items-center gap-4">
                    <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-brand-blue-50 text-brand-blue-500">
                      <User size={26} strokeWidth={1.75} />
                    </span>
                    <div>
                      <p className="text-base font-bold text-slate-900">{active.name}</p>
                      <p className="text-sm text-slate-500">
                        {active.role} &middot; {active.department}
                      </p>
                      <div className="mt-2 flex items-center gap-1.5 opacity-70">
                        <img src={logo} alt="Bigwigs Technologies" className="h-4 w-auto object-contain" />
                        <span className="text-[10px] font-bold uppercase tracking-[0.1em] text-slate-500">
                          Bigwigs Technologies
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
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
