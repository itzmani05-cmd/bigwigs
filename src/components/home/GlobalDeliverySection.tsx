import Container from "@/components/ui/Container";
import { ScrollReveal } from "@/components/scroll";
import { useParallax } from "@/hooks/useParallax";
import globalDeliveryMap from "@/assests/worldMap.webp";

interface Node {
  id: string;
  x: number;
  y: number;
  isHub?: boolean;
}

export default function GlobalDeliverySection() {
  const { ref: mapRef, y: mapY } = useParallax(20);

  return (
    <section
      id="global-delivery"
      className="relative w-full scroll-mt-14 overflow-hidden bg-slate-50/60 py-16 lg:py-20"
    >
      <Container className="relative z-10">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <div className="flex items-center justify-center gap-3" aria-hidden="true">
            <span className="h-px w-8 bg-orange-500/50" />
            <span className="text-xs font-bold tracking-[0.2em] text-orange-500 uppercase sm:text-sm">
              Global Delivery Model
            </span>
            <span className="h-px w-8 bg-orange-500/50" />
          </div>
          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Think Global. <span className="text-brand-blue-500">Deliver Anywhere.</span>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-slate-500 sm:text-lg">
            Our global delivery model combines the best talent, advanced technology, and
            agile processes to deliver exceptional results, anywhere in the world.
          </p>
        </ScrollReveal>

        <ScrollReveal
          ref={mapRef}
          direction="none"
          scale
          duration={0.8}
          delay={0.1}
          style={{ y: mapY }}
          className="relative mx-auto mt-6 w-full max-w-[1200px]"
        >
          <span className="sr-only">
            Delivery locations: North America (On-site &amp; Nearshore), South America
            (Nearshore Support), Europe (On-site &amp; Nearshore), India (Global Delivery
            Hub), Asia (Delivery Center), Australia (Local Support).
          </span>
          <img
            src={globalDeliveryMap}
            alt=""
            aria-hidden
            className="w-full select-none rounded-2xl aspect-[1672/941]"
            draggable={false}
          />

        </ScrollReveal>
      </Container>
    </section>
  );
}
