import { useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Container from "@/components/ui/Container";
import SpotlightCard from "./SpotlightCard";

export interface SolutionItem {
  icon: LucideIcon;
  title: string;
  description: string;
  gradient: string;
}

interface SolutionsSectionProps {
  eyebrow?: string;
  heading: ReactNode;
  items: SolutionItem[];
}

export default function SolutionsSection({ eyebrow = "Our Solutions", heading, items }: SolutionsSectionProps) {
  const [active, setActive] = useState(0);
  const activeSolution = items[active];

  return (
    <section className="relative w-full overflow-hidden py-8 lg:py-12">
      <Container className="relative z-10">
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-orange-400 sm:text-sm">{eyebrow}</span>
          <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">{heading}</h2>
        </div>

        {/* desktop: interactive list + live detail panel */}
        <div className="mt-14 hidden gap-8 lg:grid lg:grid-cols-[38%_62%]">
          <div className="flex flex-col gap-1.5">
            {items.map((solution, i) => {
              const isActive = i === active;
              return (
                <button
                  key={solution.title}
                  type="button"
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  className={`group relative flex items-center gap-4 rounded-2xl px-5 py-4 text-left transition-all duration-300 ${
                    isActive ? "border border-slate-200 bg-white shadow-[0_10px_30px_-16px_rgba(15,23,42,0.15)]" : "border border-transparent hover:bg-slate-50"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="solution-active-bar"
                      className="absolute left-0 top-1/2 h-8 w-[3px] -translate-y-1/2 rounded-full bg-gradient-to-b from-brand-blue-400 to-cyan-300 shadow-[0_0_12px_2px_rgba(56,189,248,0.7)]"
                    />
                  )}
                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br text-white transition-transform duration-300 ${solution.gradient} ${isActive ? "scale-110" : ""}`}
                  >
                    <solution.icon size={18} strokeWidth={1.75} />
                  </span>
                  <span className={`text-sm font-semibold transition-colors duration-300 ${isActive ? "text-slate-900" : "text-slate-500"}`}>
                    {solution.title}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSolution.title}
                initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -16, filter: "blur(6px)" }}
                transition={{ duration: 0.4, ease: [0.215, 0.61, 0.355, 1] }}
                className="h-full"
              >
                <SpotlightCard className="flex h-full flex-col justify-center p-10" glowColor="rgba(56,189,248,0.35)">
                  <span
                    className={`flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br text-white shadow-[0_20px_40px_-16px_rgba(37,99,235,0.6)] ${activeSolution.gradient}`}
                  >
                    <activeSolution.icon size={36} strokeWidth={1.5} />
                  </span>
                  <h3 className="mt-7 text-2xl font-extrabold text-slate-900">{activeSolution.title}</h3>
                  <p className="mt-3 max-w-md text-base leading-relaxed text-slate-500">{activeSolution.description}</p>
                  <a
                    href="#contact"
                    className="group mt-6 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-brand-blue-600 transition-colors duration-300 hover:text-brand-blue-700"
                  >
                    Explore this solution
                    <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                </SpotlightCard>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* mobile / tablet fallback: stacked cards */}
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:hidden">
          {items.map((solution, i) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: (i % 4) * 0.06 }}
            >
              <SpotlightCard className="flex h-full flex-col gap-3 p-6" tilt={false}>
                <span className={`flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br text-white ${solution.gradient}`}>
                  <solution.icon size={18} strokeWidth={1.75} />
                </span>
                <h3 className="text-base font-bold text-slate-900">{solution.title}</h3>
                <p className="text-sm leading-relaxed text-slate-500">{solution.description}</p>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
