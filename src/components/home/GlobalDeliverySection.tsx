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
import globalDeliveryMap from "@/assests/globalDeliveryMap.png";


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

const NODES: Node[] = [
  { id: "na", x: 330, y: 172 },
  { id: "sa", x: 479, y: 350 },
  { id: "eu", x: 711, y: 129 },
  { id: "in", x: 1025, y: 255, isHub: true },
  { id: "as", x: 1100, y: 178 },
  { id: "au", x: 1259, y: 391 },
];

const HUB = NODES.find((n) => n.isHub)!;
const SPOKES = NODES.filter((n) => !n.isHub);

function buildPath(from: Node, to: Node) {
  const midX = (from.x + to.x) / 2;
  const liftY = Math.min(from.y, to.y) - 55;
  return `M ${from.x},${from.y} Q ${midX},${liftY} ${to.x},${to.y}`;
}

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
            className="w-full select-none rounded-2xl"
            draggable={false}
          />

          <svg
            aria-hidden
            viewBox="0 0 1536 445"
            className="absolute inset-0 h-full w-full"
          >
            <defs>
              {SPOKES.map((n) => (
                <path key={n.id} id={`spoke-${n.id}`} d={buildPath(n, HUB)} fill="none" />
              ))}
              <filter id="mapGlow" x="-200%" y="-200%" width="500%" height="500%">
                <feGaussianBlur stdDeviation="1.2" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* pulsing rings on every node */}
            {NODES.map((n, i) => (
              <circle
                key={`pulse-${n.id}`}
                cx={n.x}
                cy={n.y}
                r={n.isHub ? 9 : 6}
                fill="none"
                stroke="#2563eb"
                strokeWidth="1.5"
              >
                <animate
                  attributeName="r"
                  values={`${n.isHub ? 9 : 6};${n.isHub ? 26 : 18};${n.isHub ? 9 : 6}`}
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

            {/* particles traveling each spoke toward/from the India hub */}
            {SPOKES.map((n, i) => (
              <circle key={`p-${n.id}`} r="3" fill="#2563eb" filter="url(#mapGlow)">
                <animateMotion
                  dur="3s"
                  begin={`${i * 0.5}s`}
                  repeatCount="indefinite"
                  keyPoints="0;1"
                  keyTimes="0;1"
                >
                  <mpath href={`#spoke-${n.id}`} xlinkHref={`#spoke-${n.id}`} />
                </animateMotion>
                <animate
                  attributeName="opacity"
                  values="0;1;1;0"
                  keyTimes="0;0.15;0.85;1"
                  dur="3s"
                  begin={`${i * 0.5}s`}
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
