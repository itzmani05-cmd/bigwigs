import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import { ScrollReveal, ScrollStagger, ScrollStaggerItem } from "@/components/scroll";
import { whyBigwigsFeatures } from "./whyBigwigsData";

/** Splits a feature title into a leading line and a final keyword line
 *  (e.g. "Quality-Driven Delivery" -> ["Quality-Driven", "Delivery"])
 *  so every feature card title renders as exactly two rows. */
function splitTitleLines(title: string): [string, string] {
  const words = title.trim().split(" ");
  if (words.length <= 1) return [title, ""];
  return [words.slice(0, -1).join(" "), words[words.length - 1]];
}

export default function WhyBigwigs() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-orange-50/60 via-orange-50/20 to-white py-10 lg:py-12">
      <Container className="relative z-10">
        <ScrollReveal direction="down" distance={24} className="mx-auto max-w-2xl text-center">
          <div className="flex items-center justify-center gap-3">
            <span aria-hidden className="h-px w-8 bg-orange-500/50" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange-500 sm:text-sm">
              The Bigwigs Difference
            </span>
            <span aria-hidden className="h-px w-8 bg-orange-500/50" />
          </div>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Why Bigwigs Technologies?
          </h2>
        </ScrollReveal>

        <ScrollStagger as="div" staggerDelay={0.07} amount={0.2} className="mt-10 flex flex-wrap justify-center gap-5">
          {whyBigwigsFeatures.map((feature, i) => {
            const Icon = feature.icon;
            const [line1, line2] = splitTitleLines(feature.title);
            return (
              <ScrollStaggerItem
                key={feature.title}
                as="div"
                direction="up"
                distance={28}
                className="group flex w-full flex-col items-center rounded-[24px] border border-slate-200 bg-white p-7 text-center shadow-[0_16px_40px_-28px_rgba(15,23,42,0.18)] sm:w-[calc(50%-0.625rem)] lg:w-[calc(33.333%-0.834rem)] xl:w-[calc(20%-1rem)]"
              >
                <motion.span
                  className="flex h-16 w-16 items-center justify-center rounded-full border border-brand-blue-500/20 bg-brand-blue-50 text-brand-blue-500"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 3.5 + i * 0.3, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
                >
                  <Icon size={26} strokeWidth={1.75} />
                </motion.span>
                <h3 className="mt-5 flex flex-col text-base font-bold leading-snug text-slate-900">
                  <span>{line1}</span>
                  <span>{line2 || " "}</span>
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">{feature.description}</p>
              </ScrollStaggerItem>
            );
          })}
        </ScrollStagger>
      </Container>
    </section>
  );
}
