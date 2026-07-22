import { motion } from "framer-motion";
import { Target, Eye } from "lucide-react";
import Container from "@/components/ui/Container";

export default function MissionVision() {
  return (
    <section className="relative w-full overflow-hidden py-14 lg:py-20">
      <Container className="relative z-10">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Mission */}
          <div className="relative">
            <motion.div
              aria-hidden
              className="pointer-events-none absolute -inset-6 rounded-[36px] bg-brand-blue-500/[0.09] blur-[70px]"
              animate={{ opacity: [0.4, 0.85, 0.4] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, ease: [0.215, 0.61, 0.355, 1] }}
              className="glass-card relative overflow-hidden rounded-[28px] p-8 sm:p-10"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand-blue-50/60 via-transparent to-transparent"
              />
              <svg
                aria-hidden
                className="pointer-events-none absolute -bottom-10 -right-10 h-48 w-48 opacity-30"
                viewBox="0 0 200 200"
                fill="none"
              >
                <path d="M0 140 C 50 100, 90 180, 140 130 S 220 60, 260 110" stroke="#2563EB" strokeWidth="1.5" />
                <path d="M0 170 C 50 130, 90 210, 140 160 S 220 90, 260 140" stroke="#2563EB" strokeWidth="1" opacity="0.6" />
              </svg>

              <motion.span
                className="relative flex h-16 w-16 items-center justify-center rounded-full bg-white text-brand-blue-500 shadow-[0_10px_30px_-12px_rgba(37,99,235,0.35)]"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <Target size={28} strokeWidth={1.75} />
              </motion.span>
              <h3 className="relative mt-6 text-2xl font-extrabold tracking-tight text-slate-900">
                Our Mission
              </h3>
              <p className="relative mt-3 max-w-md text-base leading-relaxed text-slate-500">
                Our mission is to empower businesses with reliable AI data, cutting-edge software solutions, and domain expertise through exceptional quality, operational excellence, and customer-centric innovation.
              </p>
            </motion.div>
          </div>

          {/* Vision */}
          <div className="relative">
            <motion.div
              aria-hidden
              className="pointer-events-none absolute -inset-6 rounded-[36px] bg-orange-500/[0.09] blur-[70px]"
              animate={{ opacity: [0.4, 0.85, 0.4] }}
              transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.215, 0.61, 0.355, 1] }}
              className="glass-card relative overflow-hidden rounded-[28px] p-8 sm:p-10"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-gradient-to-br from-orange-50/60 via-transparent to-transparent"
              />
              <svg
                aria-hidden
                className="pointer-events-none absolute -bottom-10 -right-10 h-48 w-48 opacity-30"
                viewBox="0 0 200 200"
                fill="none"
              >
                <path d="M0 140 C 50 100, 90 180, 140 130 S 220 60, 260 110" stroke="#F97316" strokeWidth="1.5" />
                <path d="M0 170 C 50 130, 90 210, 140 160 S 220 90, 260 140" stroke="#F97316" strokeWidth="1" opacity="0.6" />
              </svg>

              <motion.span
                className="relative flex h-16 w-16 items-center justify-center rounded-full bg-white text-orange-500 shadow-[0_10px_30px_-12px_rgba(249,115,22,0.35)]"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <Eye size={28} strokeWidth={1.75} />
              </motion.span>
              <h3 className="relative mt-6 text-2xl font-extrabold tracking-tight text-slate-900">
                Our Vision
              </h3>
              <p className="relative mt-3 max-w-md text-base leading-relaxed text-slate-500">
                To become one of the world's most trusted AI data services and digital engineering companies by delivering innovative, secure, and scalable technology solutions that enable organizations to build intelligent products and transform their businesses.
              </p>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
