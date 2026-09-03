import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { ACCENT_STYLES, coreServices, type CoreService } from "./coreServices";

/** Splits a capability label into a keyword line and a descriptive line
 *  (e.g. "LiDAR & Point Cloud Annotation" -> ["LiDAR & Point Cloud", "Annotation"])
 *  so every feature-list item renders as exactly two aligned rows. */
function splitCapabilityLines(label: string): [string, string] {
  const words = label.trim().split(" ");
  if (words.length <= 1) return [label, ""];
  return [words.slice(0, -1).join(" "), words[words.length - 1]];
}

const CARD_CLIP =
  "polygon(0 30px, 12px 0, calc(100% - 40px) 0, 100% 40px, 100% calc(100% - 12px), calc(100% - 12px) 100%, 12px 100%, 0 calc(100% - 12px))";

function ShowcaseCard({ service, index }: { service: CoreService; index: number }) {
  const Icon = service.icon;
  const s = ACCENT_STYLES[service.accent];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: (index % 6) * 0.06, ease: [0.16, 1, 0.3, 1] }}
      className="h-full w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]"
    >
      <div
        className={`group flex h-full flex-col border-3 border-{iconGlow} bg-white p-5 shadow-[0_20px_45px_-28px_rgba(15,23,42,0.2)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_28px_60px_-24px_rgba(37,99,235,0.2)] sm:p-7 ${s.cardBorder} ${s.cardBorderHover}`}
        style={{ clipPath: CARD_CLIP }}
      >
        <div>
          <span className={`text-4xl font-extrabold tracking-tight sm:text-4xl ${s.numberText}`}>
            {service.number}
          </span>
          <span aria-hidden className={`mt-1 block h-1 w-8 rounded-full ${s.underline}`} />
        </div>

        <div className="relative mt-1 flex h-20 items-end justify-center">
          <span aria-hidden className="absolute bottom-0 h-3 w-20 rounded-full bg-slate-100" />
          {service.image ? (
            <motion.img
              src={service.image}
              alt=""
              aria-hidden="true"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative h-14 w-14 rounded-2xl object-cover"
              style={{ boxShadow: `0 14px 28px -10px ${s.iconGlow}` }}
            />
          ) : (
            <motion.span
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className={`relative flex h-14 w-14 items-center justify-center ${s.capabilityIcon}`}
            >
              <Icon size={34} strokeWidth={1.5} />
            </motion.span>
          )}
        </div>

        <h3 className="mt-5 text-xl font-bold leading-snug text-slate-900">{service.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-500">{service.description}</p>

        <span className="mt-5 h-px w-full bg-slate-200" aria-hidden="true" />

        <ul className="mt-4 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
          {service.capabilities.map((cap) => {
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

                <span className="flex min-h-[1.4em] flex-col justify-center break-words sm:min-h-[2.4em]">
                  <span className="block truncate sm:hidden">{cap}</span>
                  <span className="hidden sm:block">{line1}</span>
                  <span className="hidden sm:block">{line2 || " "}</span>
                </span>
              </li>
            );
          })}
      </ul>

        <a
          href={service.href ?? "#contact"}
          className={`mt-auto pt-8 inline-flex w-fit items-center gap-2 text-sm font-semibold ${s.ctaText}`}
        >
          {service.ctaLabel}
          <ArrowRight
            size={14}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </a>
      </div>
    </motion.div>
  );
}

export default function ServicesShowcase() {
  return (
    <div className="flex flex-wrap justify-center gap-6">
      {coreServices.map((service, i) => (
        <ShowcaseCard key={service.id} service={service} index={i} />
      ))}
    </div>
  );
}
