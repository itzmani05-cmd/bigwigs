import { motion } from "framer-motion";
import Container from "@/components/ui/Container";

export default function SectionDivider() {
  return (
    <div aria-hidden className="relative z-10 w-full py-1">
      <Container>
        <div className="relative mx-auto h-px w-full max-w-4xl">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
          <motion.span
            className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-blue-400 shadow-[0_0_10px_3px_rgba(37,99,235,0.5)]"
            animate={{ opacity: [0.4, 1, 0.4], scale: [1, 1.4, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </Container>
    </div>
  );
}
