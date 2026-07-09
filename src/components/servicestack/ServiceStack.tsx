import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import BrandBackground from "@/components/brand/BrandBackground";
import ServiceStackCard from "./ServiceStackCard";
import { serviceStackItems } from "./serviceStackData";

const SPACING = 150;

function computeCardStyle(offset: number, isActive: boolean) {
  const absOffset = Math.abs(offset);
  return {
    x: offset * SPACING,
    y: Math.min(absOffset * 8, 40),
    z: -absOffset * 130,
    rotateY: Math.max(-40, Math.min(40, offset * -10)),
    rotateZ: Math.max(-18, Math.min(18, offset * 4)),
    scale: isActive ? 1.08 : Math.max(0.6, 1 - absOffset * 0.11),
    opacity: Math.max(0.15, 1 - absOffset * 0.22),
    blur: Math.min(absOffset * 1.1, 4),
    brightness: isActive ? 1.15 : Math.max(0.4, 1 - absOffset * 0.16),
    zIndex: 100 - absOffset,
  };
}

export default function ServiceStack() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const stackRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const hasEnteredRef = useRef(false);

  useEffect(() => {
    const section = sectionRef.current;
    const stack = stackRef.current;
    if (!section || !stack) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasEnteredRef.current) {
          hasEnteredRef.current = true;
          gsap.fromTo(
            stack,
            { opacity: 0, y: 60 },
            { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
          );
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const glow = glowRef.current;
    if (!glow) return;
    const tween = gsap.to(glow, {
      opacity: 0.75,
      scale: 1.15,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
    return () => {
      tween.kill();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative w-full overflow-hidden bg-[#050816] py-24 lg:py-32 scroll-mt-24"
    >
      <BrandBackground />

      <div className="relative z-10 max-w-2xl mx-auto text-center px-6 mb-16">
        <span className="inline-flex items-center gap-2 rounded-full border border-brand-green-500/25 bg-brand-green-500/10 px-4 py-1.5 text-xs sm:text-sm font-bold tracking-[0.2em] text-brand-green-400 uppercase">
          What we build
        </span>
        <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.1]">
          A full-stack service,{" "}
          <span className="bg-gradient-to-r from-brand-green-400 to-brand-blue-500 bg-clip-text text-transparent">
            engineered for scale.
          </span>
        </h2>
        <p className="mt-4 text-base sm:text-lg text-slate-400 leading-relaxed">
          Click a card to explore each capability.
        </p>
      </div>

      {/* ambient glow behind the active card, driven by GSAP */}
      <div
        ref={glowRef}
        aria-hidden
        className="pointer-events-none absolute top-[62%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[420px] max-w-[90vw] rounded-full opacity-40"
        style={{
          background:
            "radial-gradient(closest-side, rgba(16,185,129,0.28), rgba(37,99,235,0.16) 55%, transparent 75%)",
        }}
      />

      <div
        ref={stackRef}
        className="relative z-10 h-[460px] sm:h-[480px]"
        style={{ perspective: 1600 }}
      >
        {serviceStackItems.map((item, index) => {
          const offset = index - activeIndex;
          const isActive = offset === 0;
          const style = computeCardStyle(offset, isActive);
          return (
            <ServiceStackCard
              key={item.id}
              item={item}
              isActive={isActive}
              onClick={() => setActiveIndex(index)}
              {...style}
            />
          );
        })}
      </div>
    </section>
  );
}
