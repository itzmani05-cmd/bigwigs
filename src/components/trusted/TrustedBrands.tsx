import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { trustedBrands } from "./brands";
import type { TrustedBrand } from "./brands";

gsap.registerPlugin(ScrollTrigger);

const RIGHT_FADE_MASK =
  "linear-gradient(to right, black 0%, black 85%, transparent 100%)";
const LEFT_FADE_MASK =
  "linear-gradient(to right, transparent 0%, black 15%, black 100%)";

function BrandItem({ brand }: { brand: TrustedBrand }) {
  const content = (
    <span className="group flex shrink-0 items-center gap-3 sm:gap-3.5">
      <img
        src={brand.logo}
        alt=""
        aria-hidden="true"
        draggable={false}
        className="h-6 sm:h-7 w-auto max-w-[90px] sm:max-w-[110px] object-contain grayscale opacity-50 transition-all duration-300 group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-100"
      />
      <span className="text-sm sm:text-base font-medium text-slate-500 opacity-70 transition-colors duration-300 group-hover:text-slate-800 group-hover:opacity-100 whitespace-nowrap">
        {brand.name}
      </span>
    </span>
  );

  return brand.href ? (
    <a href={brand.href} target="_blank" rel="noopener noreferrer" className="shrink-0">
      {content}
    </a>
  ) : (
    content
  );
}

function BrandMarqueeRow({
  animationClass,
  mask,
}: {
  animationClass: string;
  mask: string;
}) {
  const track = [...trustedBrands, ...trustedBrands];

  return (
    <div
      className="relative h-full w-full overflow-hidden"
      style={{ maskImage: mask, WebkitMaskImage: mask }}
    >
      <div
        className={`flex h-full w-max items-center gap-10 sm:gap-14 hover:[animation-play-state:paused] ${animationClass}`}
      >
        {track.map((brand, i) => (
          <BrandItem key={`${brand.name}-${i}`} brand={brand} />
        ))}
      </div>
    </div>
  );
}

function BrandMarqueeStatic() {
  return (
    <div className="flex h-full w-full flex-wrap items-center justify-center gap-x-8 gap-y-3 px-6">
      {trustedBrands.map((brand) => (
        <BrandItem key={brand.name} brand={brand} />
      ))}
    </div>
  );
}

export default function TrustedBrands() {
  const [reducedMotion, setReducedMotion] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const eyebrowRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(query.matches);
    const handleChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    query.addEventListener("change", handleChange);
    return () => query.removeEventListener("change", handleChange);
  }, []);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top 65%",
            toggleActions: "play none none reverse",
          },
        });

        tl.fromTo(
          eyebrowRef.current,
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" }
        )
          .fromTo(
            headlineRef.current,
            { opacity: 0, y: 26 },
            { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" },
            0.15
          )
          .fromTo(
            subRef.current,
            { opacity: 0, y: 18 },
            { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
            0.35
          );

        return () => {
          tl.scrollTrigger?.kill();
          tl.kill();
        };
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="
        relative
        left-0
        flex
        flex-col
        min-h-[100svh]
        w-full
        max-w-none
        overflow-hidden
        bg-white
      "
    >
      {/* Row 1 — marquee, fades on the right (exit edge) */}
      <div className="flex flex-1 items-center border-b border-slate-100">
        {reducedMotion ? (
          <BrandMarqueeStatic />
        ) : (
          <BrandMarqueeRow animationClass="animate-marquee-right" mask={RIGHT_FADE_MASK} />
        )}
      </div>

      {/* Row 2 — main content */}
      <div className="flex flex-[2_2_0%] flex-col items-center justify-center px-6 text-center">
        <div ref={eyebrowRef} className="flex flex-col items-center gap-3">
          <span aria-hidden className="h-px w-8 bg-brand-green-500" />
          <span className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-slate-400 uppercase">
            Trusted by leading brands
          </span>
        </div>

        <h2
          ref={headlineRef}
          className="mt-6 max-w-3xl text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1]"
        >
          Built for teams that demand precision.
        </h2>

        <p
          ref={subRef}
          className="mt-6 max-w-xl text-base sm:text-lg text-slate-600 leading-relaxed"
        >
          From ambitious startups to established enterprises, organizations trust us to turn
          complex challenges into intelligent, scalable solutions.
        </p>
      </div>

      {/* Row 3 — marquee, fades on the left (exit edge), opposite direction */}
      <div className="flex flex-1 items-center border-t border-slate-100">
        {reducedMotion ? (
          <BrandMarqueeStatic />
        ) : (
          <BrandMarqueeRow
            animationClass="animate-marquee-left-slow"
            mask={LEFT_FADE_MASK}
          />
        )}
      </div>
    </section>
  );
}
