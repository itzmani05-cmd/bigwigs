import type { ReactNode } from "react";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import Container from "@/components/ui/Container";
import SpotlightCard from "./SpotlightCard";

export interface FeatureCard {
  icon: LucideIcon;
  title: string;
  description: string;
  items: string[];
  glowColor: string;
  /** Gradient classes (e.g. "from-brand-blue-500 to-cyan-500") for the icon badge background. */
  gradient: string;
}

interface TwoFeatureCardsSectionProps {
  eyebrow?: string;
  heading: ReactNode;
  description: string;
  cards: FeatureCard[];
}

export default function TwoFeatureCardsSection({
  eyebrow = "Accessibility & Language",
  heading,
  description,
  cards,
}: TwoFeatureCardsSectionProps) {
  return (
    <section className="relative w-full overflow-hidden py-16 lg:py-24">
      <Container className="relative z-10">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-orange-400 sm:text-sm">
            {eyebrow}
          </span>
          <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">{heading}</h2>
          <p className="mt-3 text-base leading-relaxed text-slate-500 sm:text-lg">{description}</p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {cards.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.215, 0.61, 0.355, 1] }}
            >
              <SpotlightCard glowColor={item.glowColor} className="flex h-full flex-col gap-5 p-7">
                <span
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br text-white shadow-[0_20px_40px_-16px_rgba(15,23,42,0.25)] ${item.gradient}`}
                >
                  <item.icon size={24} strokeWidth={1.75} />
                </span>

                <div>
                  <h3 className="text-xl font-extrabold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">{item.description}</p>
                </div>

                <div className="mt-auto flex flex-wrap gap-2 pt-2">
                  {item.items.map((chip) => (
                    <span
                      key={chip}
                      className="rounded-full border border-slate-200 bg-slate-50 px-3.5 py-1.5 text-xs font-medium text-slate-600 transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-blue-300 hover:text-slate-900"
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
