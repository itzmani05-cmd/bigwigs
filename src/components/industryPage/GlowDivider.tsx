import { motion } from "framer-motion";
import { viewportOnce } from "@/lib/motion";

export default function GlowDivider() {
  return (
    <div aria-hidden className="relative z-10 w-full py-2">
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={viewportOnce}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative mx-auto h-px w-full max-w-5xl"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-blue-400/40 to-transparent" />
        <div className="absolute inset-0 blur-sm bg-gradient-to-r from-transparent via-brand-blue-400/60 to-transparent" />
      </motion.div>
    </div>
  );
}
