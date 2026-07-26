import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionBackdrop from "./SectionBackdrop";

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
    <section className="relative w-full overflow-hidden py-16 lg:py-20">
      <SectionBackdrop />
      <Container className="relative z-10">
        <div className="mx-auto max-w-xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">{eyebrow}</span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">{heading}</h2>
        </div>

        <div className="mx-auto mt-10 flex max-w-2xl flex-col border-t border-slate-200">
          {items.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={item.question} className="border-b border-slate-200">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 py-4 text-left"
                >
                  <span className="text-sm font-semibold text-slate-900 sm:text-base">{item.question}</span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-slate-200 text-slate-500"
                  >
                    <Plus size={13} strokeWidth={2} />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: [0.215, 0.61, 0.355, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-5 text-sm leading-relaxed text-slate-500">{item.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
