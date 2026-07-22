import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import applyImage from "@/assests/aboutRightSide.png";

const FEATURES = [
  "Global Projects",
  "Career Growth",
  "Flexible Work Culture",
  "Learning & Certification Support",
  "AI & Emerging Technologies",
];

export default function ApplyIntro() {
  return (
    <div className="lg:sticky lg:top-18">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5, delay: 0.15, ease: [0.215, 0.61, 0.355, 1] }}
      >
        <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
          Join Bigwigs Technologies
        </h2>
        <p className="mt-4 text-base leading-relaxed text-slate-500">
          Become part of an innovative team building intelligent AI solutions
          for global enterprises. We believe in continuous learning,
          collaboration, and creating technology that makes an impact.
        </p>

        <ul className="mt-6 flex flex-col gap-3">
          {FEATURES.map((feature, i) => (
            <motion.li
              key={feature}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.4, delay: i * 0.06, ease: [0.215, 0.61, 0.355, 1] }}
              className="flex items-center gap-1"
            >
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-blue-50 text-brand-blue-500">
                <CheckCircle2 size={15} strokeWidth={2} />
              </span>
              <span className="text-sm font-medium text-slate-700">{feature}</span>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}
