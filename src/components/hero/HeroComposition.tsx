"use client";

import { MotionValue } from "framer-motion";
import { Map, Radar, Stethoscope, ScanEye, Workflow, BarChart3 } from "lucide-react";
import FloatingShape from "./FloatingShape";
import {
  GlassHexagon,
  OrganicBlob,
  CircularCapsule,
  DiamondPanel,
  WireframePolygon,
  GlowRing,
  OrbitPath,
  DataNodeCluster,
  GradientMeshPanel,
} from "./shapes";

interface HeroCompositionProps {
  parallaxX: MotionValue<number>;
  parallaxY: MotionValue<number>;
}

export default function HeroComposition({ parallaxX, parallaxY }: HeroCompositionProps) {
  const p = { parallaxX, parallaxY };

  return (
    <div className="absolute inset-0">
      {/* the six domain shapes, one per subheading topic */}
      <FloatingShape {...p} top="8%" left="62%" depth={30} duration={10} delay={0.1}>
        <GlassHexagon size={132} icon={Stethoscope} label="Medical AI" tint="green" />
      </FloatingShape>

      <FloatingShape {...p} top="6%" left="84%" depth={20} duration={8.5} delay={0.5} className="hidden sm:block">
        <GlassHexagon size={104} icon={ScanEye} label="Vision" tint="blue" />
      </FloatingShape>

      <FloatingShape {...p} top="30%" left="88%" depth={36} duration={9.5} delay={0.3} rotateRange={0}>
        <CircularCapsule icon={Map} label="GIS" tint="green" />
      </FloatingShape>

      <FloatingShape {...p} top="52%" left="70%" depth={26} duration={11} delay={0.7}>
        <DiamondPanel size={112} icon={Radar} label="LiDAR" tint="blue" />
      </FloatingShape>

      <FloatingShape {...p} top="68%" left="90%" depth={18} duration={9} delay={0.2} className="hidden md:block">
        <GradientMeshPanel width={158} height={104} icon={Workflow} label="Automation" />
      </FloatingShape>

      <FloatingShape {...p} top="80%" left="58%" depth={24} duration={10.5} delay={0.9} className="hidden sm:block">
        <GradientMeshPanel width={150} height={98} icon={BarChart3} label="Analytics" />
      </FloatingShape>

      {/* pure abstract accents */}
      <FloatingShape {...p} top="16%" left="46%" depth={14} duration={13} delay={0.4} rotateRange={0} className="hidden lg:block">
        <OrganicBlob size={110} tint="blue" duration={14} />
      </FloatingShape>

      <FloatingShape {...p} top="4%" left="30%" depth={16} duration={12} delay={1.1} className="hidden lg:block">
        <WireframePolygon size={70} sides={5} tint="green" />
      </FloatingShape>

      <FloatingShape {...p} top="46%" left="8%" depth={22} duration={9} delay={0.6} className="hidden md:block">
        <GlowRing size={90} tint="violet" />
      </FloatingShape>

      <FloatingShape {...p} top="72%" left="20%" depth={12} duration={15} delay={0.8} rotateRange={0} className="hidden lg:block">
        <OrbitPath size={140} tint="blue" />
      </FloatingShape>

      <FloatingShape {...p} top="88%" left="38%" depth={20} duration={11} delay={1.3} rotateRange={0} className="hidden md:block">
        <DataNodeCluster size={110} tint="green" />
      </FloatingShape>
    </div>
  );
}
