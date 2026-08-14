import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import googleLogo from "@/assests/google.png";

const CLIENT_LOGOS = [{ name: "Google", src: googleLogo }];

export default function DemoIntro() {
  const [logoIndex, setLogoIndex] = useState(0);

  useEffect(() => {
    if (CLIENT_LOGOS.length < 2) return;
    const id = setInterval(() => {
      setLogoIndex((i) => (i + 1) % CLIENT_LOGOS.length);
    }, 1000);
    return () => clearInterval(id);
  }, []);

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
          Trusted By Over 100 Clients
        </h3>
        <div className="mt-4 flex h-16 w-full max-w-[220px] items-center justify-center rounded-2xl border border-slate-100 bg-white/60 px-6">
          <AnimatePresence mode="wait">
            <motion.img
              key={CLIENT_LOGOS[logoIndex].name}
              src={CLIENT_LOGOS[logoIndex].src}
              alt={CLIENT_LOGOS[logoIndex].name}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.4, ease: [0.215, 0.61, 0.355, 1] }}
              className="h-8 w-auto object-contain"
            />
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}
