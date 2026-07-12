import { Fragment, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Container from "@/components/ui/Container";

gsap.registerPlugin(ScrollTrigger);

const STATEMENT = "Precision AI for the decisions that matter most.";

const MUTED_COLOR = "rgba(148, 163, 184, 0.35)"; 
const REVEALED_COLOR = "#10b981"; 

export default function MissionStatement() {
  const sectionRef = useRef<HTMLElement>(null);
  const charRefs = useRef<Array<HTMLSpanElement | null>>([]);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const chars = charRefs.current.filter((el): el is HTMLSpanElement => el !== null);

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.set(chars, { color: MUTED_COLOR });

        const trigger = ScrollTrigger.create({
          trigger: section,
          start: "top top",
          end: () => "+=" + window.innerHeight,
          pin: true,
          scrub: true,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const revealCount = Math.round(self.progress * chars.length);
            chars.forEach((el, i) => {
              el.style.color = i < revealCount ? REVEALED_COLOR : MUTED_COLOR;
            });
          },
        });

        return () => trigger.kill();
      });

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(chars, { color: REVEALED_COLOR });
      });
    }, section);

    return () => ctx.revert();
  }, []);

  const words = STATEMENT.split(" ");
  let charIndex = -1;

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-[100svh] w-full items-center justify-center overflow-hidden bg-[#050816] py-20"
    >
      <Container className="relative z-10 flex flex-col items-center text-center">
        <span className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-slate-500 uppercase">
          Our Purpose
        </span>

        <h2
          aria-label={STATEMENT}
          className="mt-6 max-w-4xl text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold tracking-tight leading-[1.1]"
        >
          <span aria-hidden="true">
            {words.map((word, wi) => (
              <Fragment key={wi}>
                <span className="inline-block whitespace-nowrap">
                  {word.split("").map((char) => {
                    charIndex += 1;
                    const idx = charIndex;
                    return (
                      <span
                        key={idx}
                        ref={(el) => {
                          charRefs.current[idx] = el;
                        }}
                        className="inline-block"
                      >
                        {char}
                      </span>
                    );
                  })}
                </span>
                {wi < words.length - 1 && " "}
              </Fragment>
            ))}
          </span>
        </h2>
      </Container>
    </section>
  );
}
