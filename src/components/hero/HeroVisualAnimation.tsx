import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import gsap from "gsap";

/**
 * Images in data/video/, grouped by their filename prefix (LongSize/MediumSize/SmallSize)
 * and sorted numerically within each group, so each hero tile only cycles through images
 * whose aspect ratio matches its own shape.
 */
const imageModules = import.meta.glob("/data/video/*.{jpg,jfif}", {
  eager: true,
  import: "default",
}) as Record<string, string>;

function loadGroup(prefix: string): string[] {
  return Object.entries(imageModules)
    .filter(([path]) => path.includes(`/${prefix}`))
    .sort(([a], [b]) => {
      const na = parseInt(a.match(/(\d+)/)?.[1] ?? "0", 10);
      const nb = parseInt(b.match(/(\d+)/)?.[1] ?? "0", 10);
      return na - nb;
    })
    .map(([, url]) => url);
}

const longImages = loadGroup("LongSize");
const mediumImages = loadGroup("MediumSize");
const smallImages = loadGroup("SmallSize");

/** Rotates a group's images so a tile can start its crossfade sequence partway through. */
function pickSequence(images: string[], offset: number) {
  if (images.length === 0) return [];
  return images.map((_, i) => images[(offset + i) % images.length]);
}

interface TileProps {
  images: string[];
  interval: number;
  delay: number;
  className: string;
  paused: boolean;
  priority?: boolean;
}

function Tile({ images, interval, delay, className, paused, priority }: TileProps) {
  const layerARef = useRef<HTMLImageElement>(null);
  const layerBRef = useRef<HTMLImageElement>(null);
  const aIsFront = useRef(true);
  const indexRef = useRef(0);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion || paused || images.length <= 1) return;

    let cancelled = false;
    let stepTimeout: number;

    const advance = () => {
      if (cancelled) return;
      indexRef.current = (indexRef.current + 1) % images.length;
      const nextSrc = images[indexRef.current];

      const front = aIsFront.current ? layerARef.current : layerBRef.current;
      const back = aIsFront.current ? layerBRef.current : layerARef.current;
      if (front && back) {
        back.src = nextSrc;
        gsap.set(back, { opacity: 0, scale: 1.08 });
        gsap.to(back, { opacity: 1, scale: 1, duration: 1.6, ease: "power2.out" });
        gsap.to(front, { opacity: 0, duration: 1.3, ease: "power1.inOut" });
        aIsFront.current = !aIsFront.current;
      }

      stepTimeout = window.setTimeout(advance, interval);
    };

    const startTimeout = window.setTimeout(advance, delay);
    return () => {
      cancelled = true;
      window.clearTimeout(startTimeout);
      window.clearTimeout(stepTimeout);
    };
  }, [images, interval, delay, paused, prefersReducedMotion]);

  if (images.length === 0) return null;

  return (
    <div className={`relative overflow-hidden rounded-2xl bg-slate-100 ${className}`}>
      <img
        ref={layerARef}
        src={images[0]}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        loading={priority ? "eager" : "lazy"}
      />
      <img
        ref={layerBRef}
        src={images[0]}
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover opacity-0"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#03132f]/25 via-transparent to-transparent" />
      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
    </div>
  );
}

/**
 * Art-directed, continuously-shifting image mosaic for the hero's right side.
 * Several bento-style tiles crossfade independently between images sourced
 * from data/video/, so the overall composition stays stable while individual
 * tiles keep changing — evoking AI / data / global scale without a slideshow feel.
 */
export default function HeroVisualAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(true);

  useEffect(() => {
    const el = containerRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleVisibility = () => {
      if (document.hidden) setInView(false);
    };
    document.addEventListener("visibilitychange", handleVisibility);
    return () => document.removeEventListener("visibilitychange", handleVisibility);
  }, []);

  const paused = !inView;

  return (
    <div
      ref={containerRef}
      className="relative h-full w-full overflow-hidden rounded-[28px] p-2.5  sm:p-3"
    >
      <div className="relative grid h-full w-full grid-cols-2 grid-rows-2 gap-3 sm:grid-cols-4 sm:grid-rows-3 sm:gap-3.5 lg:gap-4">
        <Tile
          images={pickSequence(longImages, 0)}
          interval={6000}
          delay={0}
          paused={paused}
          priority
          className="col-span-1 row-span-2 sm:col-span-2 sm:row-span-3"
        />
        <Tile
          images={pickSequence(mediumImages, 0)}
          interval={5000}
          delay={900}
          paused={paused}
          priority
          className="col-span-1 row-span-1 sm:col-span-2 sm:row-span-2"
        />
        <Tile
          images={pickSequence(smallImages, 0)}
          interval={5800}
          delay={1200}
          paused={paused}
          className="hidden sm:block sm:col-span-2 sm:row-span-1"
        />
        <Tile
          images={pickSequence(smallImages, 5)}
          interval={4300}
          delay={500}
          paused={paused}
          className="col-span-1 row-span-1 sm:hidden"
        />
      </div>
    </div>
  );
}
