import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { ACCENT_STYLES, coreServices, type CoreService } from "./coreServices";

const GAP = 32;

/** Splits a capability label into a keyword line and a descriptive line
 *  (e.g. "LiDAR & Point Cloud Annotation" -> ["LiDAR & Point Cloud", "Annotation"])
 *  so every feature-list item renders as exactly two aligned rows. */
function splitCapabilityLines(label: string): [string, string] {
  const words = label.trim().split(" ");
  if (words.length <= 1) return [label, ""];
  return [words.slice(0, -1).join(" "), words[words.length - 1]];
}

function useVisibleCount() {
  const [count, setCount] = useState(() => {
    if (typeof window === "undefined") return 3;
    if (window.innerWidth < 640) return 1;
    if (window.innerWidth < 1024) return 2;
    return 3;
  });

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      setCount(w < 640 ? 1 : w < 1024 ? 2 : 3);
    };
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return count;
}

const slideVariants = {
  enter: (direction: number) => ({
    opacity: 0,
    x: direction === 0 ? 0 : direction > 0 ? 60 : -60,
  }),
  center: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.45, ease: "easeInOut" },
  },
  exit: (direction: number) => ({
    opacity: 0,
    x: direction === 0 ? 0 : direction > 0 ? -60 : 60,
    transition: { duration: 0.45, ease: "easeInOut" as const },
  }),
} as const;

const CARD_CLIP =
  "polygon(0 30px, 12px 0, calc(100% - 40px) 0, 100% 40px, 100% calc(100% - 12px), calc(100% - 12px) 100%, 12px 100%, 0 calc(100% - 12px))";

function ConnectorArrow({ accent }: { accent: CoreService["accent"] }) {
  const s = ACCENT_STYLES[accent];
  return (
    <motion.span
      aria-hidden
      animate={{ scale: [1, 1.08, 1] }}
      transition={{
        duration: 2.4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="
        absolute
        -right-5
        top-54
        -translate-y-1/2
        z-20
        hidden
        h-8
        w-8
        items-center
        justify-center
        text-white
        shadow-xl
        sm:flex
      "
      style={{
        clipPath:
          "polygon(0% 0%, 78% 0%, 100% 50%, 78% 100%, 0% 100%, 18% 50%)",
        background: `linear-gradient(to bottom right, ${s.iconGlow}, ${s.iconGlow} )`,
      }}
    >
      <ArrowRight size={16} strokeWidth={2.5} />
    </motion.span>
  );
}

function ShowcaseCard({ service, showConnector }: { service: CoreService; showConnector: boolean }) {
  const Icon = service.icon;
  const s = ACCENT_STYLES[service.accent];

  return (
    <div className="relative h-full">
      <div
        className={`group flex h-full flex-col border bg-white p-7 shadow-[0_20px_45px_-28px_rgba(15,23,42,0.2)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_28px_60px_-24px_rgba(37,99,235,0.2)] ${s.cardBorder} ${s.cardBorderHover}`}
        style={{ clipPath: CARD_CLIP }}
      >
        <div>
          <span className={`text-4xl font-extrabold tracking-tight sm:text-4xl ${s.numberText}`}>
            {service.number}
          </span>
          <span aria-hidden className={`mt-1 block h-1 w-8 rounded-full ${s.underline}`} />
        </div>

        <div className="relative mt-3 flex h-20 items-end justify-center">
          <span
            aria-hidden
            className={`absolute top-0 h-16 w-16 rounded-full border border-dashed opacity-40 ${s.cardBorder}`}
          />
          <span aria-hidden className="absolute bottom-0 h-3 w-20 rounded-full bg-slate-100" />
          <motion.span
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className={`relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br text-white ${s.iconGradient}`}
            style={{ boxShadow: `0 14px 28px -10px ${s.iconGlow}` }}
          >
            <Icon size={26} strokeWidth={1.75} />
          </motion.span>
        </div>

        <h3 className="mt-5 text-xl font-bold leading-snug text-slate-900">{service.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-500">{service.description}</p>

        <span className="mt-5 h-px w-full bg-slate-200" aria-hidden="true" />

        <ul className="mt-4 grid grid-cols-2 gap-x-6">
        {[0, 1].map((col) => (
          <div key={col} className="space-y-3">
            {service.capabilities
              .filter((_, i) => i % 2 === col)
              .map((cap) => {
                const [line1, line2] = splitCapabilityLines(cap);
                return (
                  <li
                    key={cap}
                    className="flex items-start gap-1.5 text-[11.5px] leading-[1.35] text-slate-700"
                  >
                    <span
                      className={`
                        mt-0.5
                        flex h-5 w-5 shrink-0 items-center justify-center
                        rounded-full
                        ${s.capabilityIcon}
                        bg-white
                      `}
                    >
                      <CheckCircle2
                        size={15}
                        strokeWidth={1.75}
                        className={`shrink-0 ${s.capabilityIcon}`}
                        aria-hidden="true"
                      />
                    </span>

                    <span className="flex min-h-[2.4em] flex-col justify-center break-words">
                      <span className="block">{line1}</span>
                      <span className="block">{line2 || " "}</span>
                    </span>
                  </li>
                );
              })}
          </div>
        ))}
      </ul>

        <a
          href="#contact"
          className={`mt-auto pt-8 inline-flex w-fit items-center gap-2 text-sm font-semibold ${s.ctaText}`}
        >
          {service.ctaLabel}
          <ArrowRight
            size={14}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </a>
      </div>

      {showConnector && <ConnectorArrow accent={service.accent} />}
    </div>
  );
}

const arrowButtonBaseStyle = {
  background: "rgba(255,255,255,0.85)",
  borderColor: "rgba(37,99,235,0.15)",
  boxShadow: "0 20px 50px rgba(15,23,42,0.12)",
};

export default function ServicesShowcase() {
  const visibleCount = useVisibleCount();
  const maxIndex = Math.max(0, coreServices.length - visibleCount);
  const [[currentIndex, direction], setState] = useState<[number, number]>([0, 0]);

  useEffect(() => {
    setState(([idx]) => (idx > maxIndex ? [maxIndex, 0] : [idx, 0]));
  }, [maxIndex]);

  const goLeft = useCallback(() => {
    setState(([idx]) => [Math.max(idx - 1, 0), -1]);
  }, []);

  const goRight = useCallback(() => {
    setState(([idx]) => [Math.min(idx + 1, maxIndex), 1]);
  }, [maxIndex]);

  const isFirst = currentIndex <= 0;
  const isLast = currentIndex >= maxIndex;
  const visibleServices = coreServices.slice(currentIndex, currentIndex + visibleCount);
  const cardBasis = `calc((100% - ${(visibleCount - 1) * GAP}px) / ${visibleCount})`;

  return (
    <div className="relative px-14 sm:px-16">
      <button
        type="button"
        onClick={goLeft}
        disabled={isFirst}
        aria-label="Previous services"
        className="absolute left-0 top-1/2 z-20 flex h-[52px] w-[52px] -translate-y-1/2 items-center justify-center rounded-full border backdrop-blur-[20px] transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-40 enabled:hover:scale-105 enabled:hover:border-brand-blue-500 enabled:hover:shadow-[0_0_0_6px_rgba(37,99,235,0.12)]"
        style={arrowButtonBaseStyle}
      >
        <ArrowLeft
          size={20}
          className={`transition-colors duration-300 ${isFirst ? "text-slate-400" : "text-slate-600 hover:text-brand-blue-600"}`}
        />
      </button>

      <button
        type="button"
        onClick={goRight}
        disabled={isLast}
        aria-label="Next services"
        className="absolute right-0 top-1/2 z-20 flex h-[52px] w-[52px] -translate-y-1/2 items-center justify-center rounded-full border backdrop-blur-[20px] transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-40 enabled:hover:scale-105 enabled:hover:border-brand-blue-500 enabled:hover:shadow-[0_0_0_6px_rgba(37,99,235,0.12)]"
        style={arrowButtonBaseStyle}
      >
        <ArrowRight
          size={20}
          className={`transition-colors duration-300 ${isLast ? "text-slate-400" : "text-slate-600 hover:text-brand-blue-600"}`}
        />
      </button>

      <div className="overflow-hidden">
        <AnimatePresence mode="wait" custom={direction} initial={false}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="flex"
            style={{ gap: GAP }}
          >
            {visibleServices.map((service, i) => (
              <div
                key={service.id}
                style={{ flex: `0 0 ${cardBasis}`, maxWidth: cardBasis }}
              >
                <ShowcaseCard service={service} showConnector={i < visibleServices.length - 1} />
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
