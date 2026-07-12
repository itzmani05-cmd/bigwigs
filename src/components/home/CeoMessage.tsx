import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Container from "@/components/ui/Container";

gsap.registerPlugin(ScrollTrigger);

export default function CeoMessage() {
  const sectionRef = useRef<HTMLElement>(null);
  const portraitRef = useRef<HTMLDivElement>(null);
  const shapeLeftRef = useRef<HTMLDivElement>(null);
  const shapeRightRef = useRef<HTMLDivElement>(null);
  const shapeBottomRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLSpanElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const revealRefs = useRef<Array<HTMLElement | null>>([]);
  const [imgError, setImgError] = useState(false);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top 72%",
            toggleActions: "play none none reverse",
          },
        });

        tl.fromTo(
          portraitRef.current,
          { opacity: 0, scale: 0.96 },
          { opacity: 1, scale: 1, duration: 0.8, ease: "power3.out" },
          0
        )
          .fromTo(
            shapeLeftRef.current,
            { opacity: 0, x: -24, y: 8 },
            { opacity: 1, x: 0, y: 0, duration: 0.7, ease: "power2.out" },
            0.15
          )
          .fromTo(
            shapeRightRef.current,
            { opacity: 0, x: 20, y: -14 },
            { opacity: 1, x: 0, y: 0, duration: 0.7, ease: "power2.out" },
            0.25
          )
          .fromTo(
            shapeBottomRef.current,
            { opacity: 0, x: 16, y: 20 },
            { opacity: 1, x: 0, y: 0, duration: 0.7, ease: "power2.out" },
            0.35
          )
          .fromTo(
            badgeRef.current,
            { opacity: 0, y: 16 },
            { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" },
            0.1
          )
          .fromTo(
            headlineRef.current,
            { opacity: 0, y: 24 },
            { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" },
            0.25
          )
          .fromTo(
            revealRefs.current.filter(Boolean),
            { opacity: 0, y: 18 },
            { opacity: 1, y: 0, duration: 0.6, ease: "power3.out", stagger: 0.12 },
            0.4
          );

        return () => {
          tl.scrollTrigger?.kill();
          tl.kill();
        };
      });
    }, section);

    return () => ctx.revert();
  }, []);

  const addRevealRef = (el: HTMLElement | null, index: number) => {
    revealRefs.current[index] = el;
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-slate-50 py-20 sm:py-24 lg:py-28 px-0 sm:px-8 lg:px-22 scroll-mt-24"
    >
      <Container className="relative z-10">
        <div className="grid grid-cols-1 items-center gap-14 md:grid-cols-[45%_55%] md:gap-10 lg:gap-16">
          {/* Left — portrait */}
          <div className="flex justify-center md:justify-start ">
            <div
              ref={portraitRef}
              className="relative w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] lg:w-[380px] lg:h-[380px]"
            >
              <div className="absolute -inset-4 sm:-inset-6 rounded-full bg-gradient-to-br from-brand-green-100 to-brand-blue-100" />
              <div
                ref={shapeLeftRef}
                aria-hidden
                className="absolute left-[-14px] top-10 sm:left-[-20px] sm:top-14 h-8 w-8 sm:h-10 sm:w-10 bg-brand-green-500"
                style={{ clipPath: "polygon(0% 50%, 100% 0%, 100% 100%)" }}
              />
              <div
                ref={shapeRightRef}
                aria-hidden
                className="absolute -right-2 top-6 sm:-right-3 sm:top-8 h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-brand-blue-500"
              />
              <div
                ref={shapeBottomRef}
                aria-hidden
                className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 h-14 w-14 sm:h-16 sm:w-16 bg-brand-green-400/80"
                style={{ borderRadius: "0 0 100% 0" }}
              />

              <div className="absolute inset-3 sm:inset-4 rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-brand-green-500 to-brand-blue-500 shadow-[0_30px_70px_-25px_rgba(15,23,42,0.35)]">
                {!imgError ? (
                  <img
                    src="/assets/ceo-portrait.jpg"
                    alt="Vignesh, Founder and CEO of BigWigs Technologies"
                    onError={() => setImgError(true)}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center">
                    <span className="text-6xl sm:text-7xl font-bold text-white">V</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="text-center md:text-left">
            <span
              ref={badgeRef}
              className="inline-flex items-center gap-2 rounded-full border border-brand-green-500/25 bg-brand-green-50 px-4 py-1.5 text-xs sm:text-sm font-bold tracking-[0.2em] text-brand-green-600 uppercase"
            >
              Message from the CEO
            </span>

            <h2
              ref={headlineRef}
              className="mt-6 max-w-xl mx-auto md:mx-0 text-3xl sm:text-4xl md:text-4xl lg:text-[44px] font-extrabold tracking-tight text-slate-900 leading-[1.15]"
            >
              Enterprises don&apos;t need more AI demos.
            </h2>

            <p
              ref={(el) => addRevealRef(el, 0)}
              className="mt-6 max-w-lg mx-auto md:mx-0 text-base sm:text-lg text-slate-600 leading-relaxed"
            >
              They need systems that hold up under real production weight engineered for
              accuracy, security, and scale from day one, not bolted on after launch.
            </p>

            <p
              ref={(el) => addRevealRef(el, 1)}
              className="mt-5 max-w-lg mx-auto md:mx-0 text-base sm:text-lg font-bold text-slate-900"
            >
              That&apos;s the bar every team at BigWigs builds to on every engagement, every
              time.
            </p>

            <div ref={(el) => addRevealRef(el, 2)} className="mt-8">
              <p className="text-base font-bold text-slate-900">Vignesh</p>
              <p className="text-sm text-slate-500">Founder &amp; CEO, BigWigs Technologies</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
