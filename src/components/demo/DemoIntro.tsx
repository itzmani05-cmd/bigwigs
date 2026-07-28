import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const REASONS = [
  "Industry Experts",
  "Enterprise-Ready Solutions",
  "AI & Automation Specialists",
  "Secure & Scalable Technology",
  "Personalized Consultation",
];

export default function DemoIntro() {
  return (
    <div className="lg:sticky lg:top-18">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5, delay: 0.15, ease: [0.215, 0.61, 0.355, 1] }}
      >
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-blue-600 sm:text-sm">
          Book Your Demo
        </span>
        <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
          See Bigwigs Technologies in Action
        </h2>
        <p className="mt-4 text-base leading-relaxed text-slate-500">
          Tell us about your project and we'll walk you through how our AI, data, and
          automation solutions can fit your business — tailored to your industry and goals.
        </p>

        <h3 className="mt-8 text-sm font-bold uppercase tracking-[0.14em] text-slate-400">
          Why Choose Bigwigs?
        </h3>
        <ul className="mt-4 flex flex-col gap-3">
          {REASONS.map((reason, i) => (
            <motion.li
              key={reason}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.4, delay: i * 0.06, ease: [0.215, 0.61, 0.355, 1] }}
              className="flex items-center gap-3"
            >
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-blue-50 text-brand-blue-500">
                <CheckCircle2 size={15} strokeWidth={2} />
              </span>
              <span className="text-sm font-medium text-slate-700">{reason}</span>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}
