import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import Container from "@/components/ui/Container";
import SpotlightCard from "./SpotlightCard";

const TABS = ["CT Scan", "MRI", "X-Ray"];

const BOUNDING_BOXES = [
  { top: "16%", left: "20%", width: "26%", height: "30%", border: "border-brand-blue-400/90", badge: "bg-brand-blue-500/90", label: "Tumor 98%" },
  { top: "52%", left: "58%", width: "22%", height: "24%", border: "border-rose-400/90", badge: "bg-rose-500/90", label: "Lesion" },
  { top: "36%", left: "8%", width: "15%", height: "18%", border: "border-cyan-400/90", badge: "bg-cyan-500/90", label: "Nodule 91%" },
];

const MODALITIES = [
  "X-Ray",
  "CT Scan",
  "MRI",
  "Ultrasound",
  "PET",
  "Mammography",
  "Retinal Imaging",
  "Histopathology",
];

const TECHNIQUES = ["Tumor Segmentation", "Lesion Detection", "Semantic Segmentation"];

function Pill({ label }: { label: string }) {
  return (
    <span className="rounded-full border border-slate-200 bg-slate-50 px-3.5 py-1.5 text-xs font-medium text-slate-600 transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-blue-300 hover:text-slate-900">
      {label}
    </span>
  );
}

export default function MedicalImagingSection() {
  return (
    <section className="relative w-full overflow-hidden py-16 lg:py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-1/3 h-[26rem] w-[26rem] rounded-full bg-brand-blue-500/10 blur-[120px]"
      />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[45%_55%] lg:gap-10">
          {/* LEFT: imaging viewer mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: [0.215, 0.61, 0.355, 1] }}
            className="relative"
          >
            <motion.div
              aria-hidden
              className="pointer-events-none absolute -inset-10 rounded-[40px] bg-brand-blue-500/25 blur-[90px]"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-6 rounded-[36px] bg-cyan-400/10 blur-[70px]"
            />

            <SpotlightCard
              glowColor="rgba(56,189,248,0.4)"
              className="!rounded-[28px] border-white/10 bg-[#03132f] shadow-[0_60px_120px_-30px_rgba(2,6,23,0.9)]"
            >
              {/* tab strip */}
              <div className="relative z-20 flex items-center gap-2 border-b border-white/10 px-5 py-3.5">
                {TABS.map((tab, i) => (
                  <span
                    key={tab}
                    className={`rounded-full px-3.5 py-1.5 text-xs font-semibold ${
                      i === 0
                        ? "bg-brand-blue-500 text-white shadow-[0_6px_16px_-6px_rgba(37,99,235,0.7)]"
                        : "bg-white/5 text-slate-400"
                    }`}
                  >
                    {tab}
                  </span>
                ))}
              </div>

              {/* scan viewport */}
              <div
                className="relative h-72 w-full overflow-hidden sm:h-80"
                style={{
                  background:
                    "radial-gradient(ellipse at center, rgba(56,189,248,0.18), rgba(3,19,47,0) 65%)",
                }}
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 opacity-[0.18]"
                  style={{
                    backgroundImage: "radial-gradient(#3b82f6 1.2px, transparent 1.2px)",
                    backgroundSize: "18px 18px",
                  }}
                />

                {BOUNDING_BOXES.map((box) => (
                  <div
                    key={box.label}
                    className={`absolute rounded-md border-2 ${box.border}`}
                    style={{ top: box.top, left: box.left, width: box.width, height: box.height }}
                  >
                    <span
                      className={`absolute -top-6 left-0 whitespace-nowrap rounded-md px-1.5 py-0.5 text-[9px] font-bold text-white shadow-[0_4px_10px_-2px_rgba(0,0,0,0.5)] ${box.badge}`}
                    >
                      {box.label}
                    </span>
                  </div>
                ))}

                {/* animated AI detection scan line */}
                <motion.div
                  aria-hidden
                  className="pointer-events-none absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300 to-transparent shadow-[0_0_14px_3px_rgba(56,189,248,0.65)]"
                  animate={{ y: [4, 268, 4] }}
                  transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
                />

                <span className="absolute bottom-3 right-4 rounded-full bg-white/5 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-brand-blue-300">
                  AI Detection
                </span>
              </div>
            </SpotlightCard>

            {/* floating AI confidence badge */}
            <motion.div
              className="absolute -right-4 -top-5 z-20 hidden items-center gap-2 rounded-2xl border border-white/15 bg-white/[0.06] px-3.5 py-2.5 shadow-[0_20px_40px_-16px_rgba(0,0,0,0.6)] backdrop-blur-xl sm:flex"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-500/20 text-emerald-300">
                <ShieldCheck size={16} strokeWidth={1.75} />
              </span>
              <div>
                <span className="block text-[9px] font-bold uppercase tracking-wide text-slate-400">AI Confidence</span>
                <span className="block text-sm font-extrabold text-white">98.4%</span>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: [0.215, 0.61, 0.355, 1] }}
          >
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-orange-400 sm:text-sm">
              Medical Image Annotation
            </span>

            <h2 className="mt-4 text-4xl font-extrabold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl">
              Power Medical AI With Accurate Annotation
            </h2>

            <p className="mt-5 max-w-lg text-base leading-relaxed text-slate-500 sm:text-lg">
              Our clinical annotation teams label radiology, pathology, and diagnostic
              imaging with the precision required for FDA and CE-grade medical AI models.
            </p>

            <div className="mt-9">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
                Imaging Modalities
              </p>
              <div className="mt-3.5 flex flex-wrap gap-2">
                {MODALITIES.map((item) => (
                  <Pill key={item} label={item} />
                ))}
              </div>
            </div>

            <div className="mt-7">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
                Annotation Techniques
              </p>
              <div className="mt-3.5 flex flex-wrap gap-2">
                {TECHNIQUES.map((item) => (
                  <Pill key={item} label={item} />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
