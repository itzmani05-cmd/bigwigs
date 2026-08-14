import { Suspense, useRef, type ReactNode } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, ContactShadows } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import * as THREE from "three";
import AICore from "@/components/hero/scene/AICore";
import Platform from "@/components/hero/scene/Platform";
import DataParticles from "@/components/hero/scene/DataParticles";
import OutputStreams from "@/components/hero/scene/OutputStreams";
import AmbientField from "@/components/hero/scene/AmbientField";

const prefersReducedMotion =
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function PointerRig({ children }: { children: ReactNode }) {
  const group = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!group.current) return;
    // a small permanent yaw keeps the glass edge/thickness visible even at rest
    const baseYaw = 0.16;
    const targetY = prefersReducedMotion ? baseYaw : baseYaw + state.pointer.x * 0.28;
    const targetX = prefersReducedMotion ? 0 : -state.pointer.y * 0.12;
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, targetY, 0.04);
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, targetX, 0.04);
  });

  return <group ref={group}>{children}</group>;
}

function FloatingGroup({ children }: { children: ReactNode }) {
  const ref = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!ref.current || prefersReducedMotion) return;
    ref.current.position.y = Math.sin(state.clock.getElapsedTime() * 0.6) * 0.08;
  });

  return <group ref={ref}>{children}</group>;
}

export default function HeroScene() {
  return (
    <Canvas
      dpr={[1, 1.75]}
      gl={{ alpha: true, antialias: true }}
      camera={{ position: [0.25, 1.0, 6.2], fov: 36 }}
      className="!absolute inset-0"
    >
      <ambientLight intensity={0.55} />
      <directionalLight position={[3, 4, 4]} intensity={1.1} color="#ffffff" />
      <directionalLight position={[-3, -2, -3]} intensity={0.35} color="#8b5cf6" />

      <Suspense fallback={null}>
        <Environment preset="city" />
        <PointerRig>
          <FloatingGroup>
            <AICore />
            <DataParticles />
            <OutputStreams />
            <AmbientField />
            <Platform />
          </FloatingGroup>
        </PointerRig>
        <ContactShadows
          position={[0, -1.42, 0]}
          opacity={0.26}
          scale={3.8}
          blur={2.2}
          far={2}
          color="#0b1742"
        />
        <EffectComposer>
          <Bloom mipmapBlur intensity={0.5} luminanceThreshold={0.42} luminanceSmoothing={0.15} />
        </EffectComposer>
      </Suspense>
    </Canvas>
  );
}
