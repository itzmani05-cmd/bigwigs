import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Container from "@/components/ui/Container";
import { ScrollReveal, ScrollStagger, ScrollStaggerItem } from "@/components/scroll";
import { useParallax } from "@/hooks/useParallax";
import { lifeFeatures } from "./lifeAtBigwigsData";
import pic1 from "@/assests/lifeatbigwigs/pic1.jpg";
import pic2 from "@/assests/lifeatbigwigs/pic2.jpg";
import pic3 from "@/assests/lifeatbigwigs/pic3.jpg";
import pic4 from "@/assests/lifeatbigwigs/pic4.jpg";
import pic5 from "@/assests/lifeatbigwigs/pic5.jpeg";
import pic6 from "@/assests/lifeatbigwigs/pic6.jpeg";
import pic7 from "@/assests/lifeatbigwigs/pic7.jpeg";
import pic8 from "@/assests/lifeatbigwigs/pic8.jpeg";
import pic9 from "@/assests/lifeatbigwigs/pic9.jpeg";
import pic10 from "@/assests/lifeatbigwigs/pic10.jpg";
import pic11 from "@/assests/lifeatbigwigs/pic11.jpeg";

const lifeAtBigwigsImages = [pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic9, pic10, pic11];

const SLIDE_INTERVAL_MS = 3000;

export default function LifeAtBigwigs() {
  const [activeSlide, setActiveSlide] = useState(0);
  const { ref: photoRef, y: photoY } = useParallax(20);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % lifeAtBigwigsImages.length);
    }, SLIDE_INTERVAL_MS);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="life-at-bigwigs" className="relative w-full scroll-mt-24 overflow-hidden py-14 lg:py-20">
      <Container className="relative z-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-14">
          <ScrollReveal
            ref={photoRef}
            direction="left"
            duration={0.7}
            style={{ y: photoY }}
            className="group relative aspect-[4/3] overflow-hidden rounded-[28px] shadow-[0_15px_50px_rgba(15,23,42,0.1)]"
          >
            <AnimatePresence mode="sync">
              <motion.img
                key={activeSlide}
                src={lifeAtBigwigsImages[activeSlide]}
                alt="Life at Bigwigs Technologies — team collaborating"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </AnimatePresence>
            <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
          </ScrollReveal>

          <div>
            <ScrollReveal direction="right" duration={0.6}>
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-blue-600 sm:text-sm">
                  Life At Bigwigs
                </span>
                <span aria-hidden className="h-px w-8 bg-brand-blue-500/40" />
              </div>
              <h2 className="mt-4 text-[clamp(1.375rem,6.5vw,1.875rem)] font-extrabold leading-[1.2] tracking-tight text-slate-900 sm:text-4xl sm:leading-[1.15]">
                A Place Where You Belong
                <br />
                And Make An Impact
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-500 sm:text-lg">
                We believe great ideas come from collaboration, diverse
                perspectives, and a culture that empowers you to do your best work.
              </p>
            </ScrollReveal>

            <ScrollStagger as="div" staggerDelay={0.08} className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
              {lifeFeatures.map((feature) => {
                const Icon = feature.icon;
                return (
                  <ScrollStaggerItem key={feature.title} direction="up" distance={20} className="flex items-start gap-3">
                    <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${feature.bg} ${feature.color}`}>
                      <Icon size={20} strokeWidth={1.75} />
                    </span>
                    <div>
                      <h3 className="text-sm font-bold text-slate-900">{feature.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-slate-500">{feature.description}</p>
                    </div>
                  </ScrollStaggerItem>
                );
              })}
            </ScrollStagger>
          </div>
        </div>
      </Container>
    </section>
  );
}
