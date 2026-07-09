import { useRef } from "react";
import { motion, useMotionValue, useSpring, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";

export const centerCardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  },
} as const;

export default function CenterShowcaseCard() {
  const tiltRef = useRef<HTMLDivElement>(null);

  const rotateXRaw = useMotionValue(0);
  const rotateYRaw = useMotionValue(0);
  const rotateX = useSpring(rotateXRaw, { stiffness: 150, damping: 20 });
  const rotateY = useSpring(rotateYRaw, { stiffness: 150, damping: 20 });

  const { scrollYProgress } = useScroll({ target: tiltRef, offset: ["start end", "end start"] });
  const parallaxY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = tiltRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = (e.clientX - rect.left) / rect.width - 0.5;
    const relY = (e.clientY - rect.top) / rect.height - 0.5;
    rotateYRaw.set(relX * 10);
    rotateXRaw.set(-relY * 10);
  };

  const handleMouseLeave = () => {
    rotateXRaw.set(0);
    rotateYRaw.set(0);
  };

  return (
    <motion.div
      variants={centerCardVariants}
      style={{ y: parallaxY }}
      className="relative z-10 mx-auto w-full max-w-[900px]"
    >
      <div style={{ perspective: 1200 }}>
        <motion.div
          ref={tiltRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          className="relative rounded-[30px] p-[2px] overflow-hidden shadow-[0_40px_100px_-30px_rgba(0,0,0,0.75)]"
        >
          {/* animated gradient border */}
          <div
            aria-hidden
            className="absolute -inset-[60%] animate-spin-slow"
            style={{
              background:
                "conic-gradient(from 0deg, #10b981, #2563eb, #22c55e, #10b981)",
            }}
          />

          <div className="relative z-10 rounded-[28px] overflow-hidden bg-[#0b1020]/85 backdrop-blur-2xl w-full h-auto lg:h-[450px] flex flex-col lg:flex-row">
            <video
              className="absolute inset-0 w-full h-full object-cover opacity-30"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src="/assets/ai-background.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-[#050816]/90 via-[#050816]/60 to-[#050816]/30" />

            {/* floating glow */}
            <motion.div
              aria-hidden
              className="pointer-events-none absolute -top-16 -right-16 w-72 h-72 rounded-full bg-brand-green-500/25 blur-[100px]"
              animate={{ opacity: [0.4, 0.8, 0.4] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />

            <div className="relative z-10 flex flex-col justify-center gap-5 px-8 sm:px-12 lg:px-14 py-12 lg:py-0">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.1]">
                Powering AI with{" "}
                <span className="bg-gradient-to-r from-brand-green-400 to-brand-blue-500 bg-clip-text text-transparent">
                  Precision
                </span>
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-md">
                We engineer enterprise-grade AI across GIS, LiDAR, healthcare
                imaging, computer vision, and automation — built for accuracy,
                security, and scale.
              </p>
              <div className="flex flex-wrap items-center gap-4 mt-2">
                <MagneticButton
                  href="#solutions"
                  className="flex items-center gap-2 px-6 py-3 rounded-full text-white font-semibold bg-gradient-to-r from-brand-green-500 to-brand-blue-500 shadow-md shadow-brand-green-500/20 hover:shadow-lg hover:shadow-brand-green-500/30 transition-all duration-300 hover:-translate-y-0.5 select-none"
                >
                  Explore More
                  <ArrowRight size={16} />
                </MagneticButton>
                <MagneticButton
                  href="#contact"
                  className="px-6 py-3 rounded-full font-semibold border-2 border-white/30 text-white backdrop-blur-sm hover:bg-white/10 hover:border-white/60 transition-colors duration-300 select-none"
                >
                  Contact Us
                </MagneticButton>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
