import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import { viewportOnce } from "@/lib/motion";

export default function SectionDivider() {
  return (
    <div aria-hidden className="w-full py-1">
      <Container>
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={viewportOnce}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent"
        />
      </Container>
    </div>
  );
}
