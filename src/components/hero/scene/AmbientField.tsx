import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const COUNT = 70;

export default function AmbientField() {
  const pointsRef = useRef<THREE.Points>(null);

  const { positions, seeds } = useMemo(() => {
    const positions = new Float32Array(COUNT * 3);
    const seeds = new Float32Array(COUNT * 3);
    for (let i = 0; i < COUNT; i++) {
      positions[i * 3] = 0.9 + Math.random() * 1.3;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 2.8;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 1.4;
      seeds[i * 3] = Math.random() * Math.PI * 2;
      seeds[i * 3 + 1] = 0.15 + Math.random() * 0.25;
      seeds[i * 3 + 2] = 0.3 + Math.random() * 0.6;
    }
    return { positions, seeds };
  }, []);

  useFrame((state) => {
    const geo = pointsRef.current?.geometry;
    if (!geo) return;
    const posAttr = geo.getAttribute("position") as THREE.BufferAttribute;
    const arr = posAttr.array as Float32Array;
    const t = state.clock.getElapsedTime();
    for (let i = 0; i < COUNT; i++) {
      const phase = seeds[i * 3];
      const amp = seeds[i * 3 + 1];
      const speed = seeds[i * 3 + 2];
      arr[i * 3 + 1] += Math.sin(t * speed + phase) * 0.0003;
      arr[i * 3 + 2] += Math.cos(t * speed * 0.7 + phase) * amp * 0.0002;
    }
    posAttr.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} count={COUNT} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        color="#93c5fd"
        transparent
        opacity={0.35}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}
