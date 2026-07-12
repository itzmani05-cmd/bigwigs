import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";

const STORAGE_KEY = "bigwigs-cookie-consent";

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export default function CookieConsent() {
  const [status, setStatus] = useState<"checking" | "hidden" | "visible">("checking");
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (localStorage.getItem(STORAGE_KEY)) {
      setStatus("hidden");
      return;
    }
    const timer = window.setTimeout(() => setStatus("visible"), 800);
    return () => window.clearTimeout(timer);
  }, []);

  useLayoutEffect(() => {
    if (status !== "visible") return;
    const el = barRef.current;
    if (!el || prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { yPercent: 100 },
        { yPercent: 0, duration: 0.6, ease: "power3.out" }
      );
    });
    return () => ctx.revert();
  }, [status]);

  const acceptCookies = () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ accepted: true, timestamp: Date.now() }));
    const el = barRef.current;
    if (el && !prefersReducedMotion()) {
      gsap.to(el, {
        yPercent: 100,
        duration: 0.45,
        ease: "power2.in",
        onComplete: () => setStatus("hidden"),
      });
    } else {
      setStatus("hidden");
    }
  };

  if (status !== "visible") return null;

  return (
    <div
      ref={barRef}
      role="region"
      aria-label="Cookie notice"
      className="fixed inset-x-0 bottom-0 z-[9999] w-full bg-[#151718] border-t border-white/10"
    >
      <div className="mx-auto flex max-w-[1240px] flex-col items-center gap-3 px-6 py-4 sm:min-h-[80px] sm:flex-row sm:justify-between sm:gap-6 sm:py-0 lg:px-[15px]">
        <p className="text-center text-sm leading-relaxed text-slate-300 sm:text-left">
          We use cookies to allow us to remember you. To find out more about the cookies we
          use, see our{" "}
          <a href="#" className="font-bold text-white underline underline-offset-2">
            Privacy Policy
          </a>{" "}
          and{" "}
          <a href="#" className="font-bold text-white underline underline-offset-2">
            Cookie Policy
          </a>
          .
        </p>

        <button
          type="button"
          onClick={acceptCookies}
          className="shrink-0 rounded-md border border-white px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-white transition-colors duration-300 hover:bg-white hover:text-black"
        >
          Accept
        </button>
      </div>
    </div>
  );
}
