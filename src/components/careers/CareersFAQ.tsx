import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionBackdrop from "@/components/servicePage/SectionBackdrop";
import FaqJsonLd from "@/components/seo/FaqJsonLd";
import { ScrollReveal, ScrollStagger, ScrollStaggerItem } from "@/components/scroll";
import { faqItems } from "./faqData";

export default function CareersFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-brand-blue-50/70 via-brand-blue-50/25 to-white py-10 lg:py-12">
      <FaqJsonLd items={faqItems} />
      <SectionBackdrop />
      <Container className="relative z-10">
        <ScrollReveal direction="up" className="mx-auto max-w-xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-blue-600 sm:text-sm">
            FAQ
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Frequently Asked Questions
          </h2>
        </ScrollReveal>

        <ScrollStagger as="div" staggerDelay={0.06} className="mx-auto mt-10 flex max-w-2xl flex-col gap-3">
          {faqItems.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <ScrollStaggerItem
                key={item.question}
                as="div"
                direction="up"
                distance={20}
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
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
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
