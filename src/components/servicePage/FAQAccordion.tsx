import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionBackdrop from "./SectionBackdrop";
import FaqJsonLd from "@/components/seo/FaqJsonLd";
import { ScrollReveal, ScrollStagger, ScrollStaggerItem } from "@/components/scroll";

export interface FaqItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FaqItem[];
  eyebrow?: string;
  heading?: string;
}

export default function FAQAccordion({
  items,
  eyebrow = "Frequently Asked Questions",
  heading = "Questions worth answering upfront",
}: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-brand-blue-50/70 via-brand-blue-50/25 to-white py-16 lg:py-20">
      <FaqJsonLd items={items.map(({ question, answer }) => ({ question, answer }))} />
      <SectionBackdrop />
      <Container className="relative z-10">
        <ScrollReveal direction="up" distance={24} duration={0.6} className="mx-auto max-w-xl text-center">
          <div className="flex items-center justify-center gap-3">
            <span aria-hidden className="h-px w-8 bg-orange-500/50" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange-500 sm:text-sm">
              Frequently Asked Questions
            </span>
            <span aria-hidden className="h-px w-8 bg-orange-500/50" />
          </div>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-black sm:text-4xl lg:text-5xl">{heading}</h2>
        </ScrollReveal>

        <ScrollStagger staggerDelay={0.06} amount={0.2} className="mx-auto mt-10 flex max-w-2xl flex-col gap-3">
          {items.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <ScrollStaggerItem
                key={item.question}
                direction="up"
                distance={20}
                duration={0.45}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_16px_40px_-28px_rgba(15,23,42,0.18)]"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left"
                >
                  <span className="text-sm font-bold text-slate-900 sm:text-base">{item.question}</span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-blue-50 text-brand-blue-500"
                  >
                    <Plus size={15} strokeWidth={2} />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 text-sm leading-relaxed text-slate-500">{item.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </ScrollStaggerItem>
            );
          })}
        </ScrollStagger>
      </Container>
    </section>
  );
}
