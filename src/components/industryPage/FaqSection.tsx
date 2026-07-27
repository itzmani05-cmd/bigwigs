import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import Container from "@/components/ui/Container";

export interface FaqItemData {
  question: string;
  answer: string;
}

interface FaqSectionProps {
  eyebrow?: string;
  heading?: string;
  items: FaqItemData[];
}

export default function FaqSection({
  eyebrow = "Frequently Asked Questions",
  heading,
  items,
}: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative w-full overflow-hidden py-4 lg:py-6">
      <Container className="relative z-10">
        <div className="max-w-xl text-left">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-orange-400 sm:text-sm">
            {eyebrow}
          </span>
          {heading && (
            <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
              {heading}
            </h2>
          )}
        </div>

        <div className="mt-10 flex flex-col gap-3">
          {items.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={item.question}
                initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: (i % 6) * 0.06, ease: [0.215, 0.61, 0.355, 1] }}
                className={`overflow-hidden rounded-2xl border border-slate-200 bg-white/80 shadow-[0_10px_30px_-14px_rgba(15,23,42,0.15)] backdrop-blur-xl transition-all duration-300 ${
                  isOpen
                    ? "border-l-2 border-l-brand-blue-400 shadow-[0_0_30px_-14px_rgba(37,99,235,0.3)]"
                    : ""
                }`}
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
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                      isOpen
                        ? "bg-brand-blue-50 text-brand-blue-600 shadow-[0_0_20px_-4px_rgba(37,99,235,0.25)]"
                        : "bg-slate-100 text-slate-400"
                    }`}
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
                      transition={{ duration: 0.3, ease: [0.215, 0.61, 0.355, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 text-sm leading-relaxed text-slate-500">{item.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
