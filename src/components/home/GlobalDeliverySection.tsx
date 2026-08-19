import { motion } from "framer-motion";
import {
  Globe2,
  Users,
  Clock,
  Building2,
  Smile,
  type LucideIcon,
} from "lucide-react";
import Container from "@/components/ui/Container";
import globalDeliveryMap from "@/assests/worldMap.png";


interface Stat {
  icon: LucideIcon;
  value: string;
  label: string;
}

interface Node {
  id: string;
  x: number;
  y: number;
  isHub?: boolean;
}

/** Coordinates aligned to the red pin markers already baked into worldMap.jpg (2000x1143 space). */
const NODES: Node[] = [
  { id: "na", x: 360, y: 385 },
  { id: "sa", x: 545, y: 690 },
  { id: "eu", x: 1160, y: 305 },
  { id: "in", x: 1465, y: 515, isHub: true },
  { id: "as", x: 1480, y: 290 },
  { id: "au", x: 1695, y: 825 },
];

export default function GlobalDeliverySection() {
  return (
    <section
      id="global-delivery"
      className="relative w-full scroll-mt-14 overflow-hidden bg-slate-50/60 py-16 lg:py-20"
    >
      <Container className="relative z-10">
        <div className="mx-auto max-w-2xl text-center">
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
        </div>

        <div className="relative mx-auto mt-6 w-full max-w-[1200px]">
          <span className="sr-only">
            Delivery locations: North America (On-site &amp; Nearshore), South America
            (Nearshore Support), Europe (On-site &amp; Nearshore), India (Global Delivery
            Hub), Asia (Delivery Center), Australia (Local Support).
          </span>
          <img
            src={globalDeliveryMap}
            alt=""
            aria-hidden
            className="max-h-full h-[500px] w-full select-none rounded-2xl"
            draggable={false}
          />

          <svg
            aria-hidden
            viewBox="0 0 2000 1143"
            className="absolute inset-0 h-full w-full"
          >
            {/* pulsing rings on every node */}
            {NODES.map((n, i) => (
              <circle
                key={`pulse-${n.id}`}
                cx={n.x}
                cy={n.y}
                r={n.isHub ? 18 : 13}
                fill="none"
                stroke="#2563eb"
                strokeWidth="2.5"
              >
                <animate
                  attributeName="r"
                  values={`${n.isHub ? 18 : 13};${n.isHub ? 42 : 32};${n.isHub ? 18 : 13}`}
                  dur="3.2s"
                  begin={`${i * 0.35}s`}
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  values="0.5;0;0.5"
                  dur="3.2s"
                  begin={`${i * 0.35}s`}
                  repeatCount="indefinite"
                />
              </circle>
            ))}
          </svg>
        </div>
      </Container>
    </section>
  );
}
