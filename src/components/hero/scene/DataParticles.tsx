import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { buildTaperedTubeGeometry } from "@/components/hero/scene/tube";
import { useIsNarrowViewport } from "@/components/hero/utils";

const START_X = -6.2;
const END_X = -0.15;

const INTAKE_STARTS: [number, number, number][] = [
  [-5.6, 1.15, -0.4],
  [-5.6, 0, 0.5],
  [-5.6, -1.15, -0.3],
];

function buildIntakeCurve(start: [number, number, number]) {
  const s = new THREE.Vector3(...start);
  const end = new THREE.Vector3(END_X, 0, 0);
  const mid1 = new THREE.Vector3(s.x + (end.x - s.x) * 0.4, s.y * 0.6, s.z * 0.6);
  const mid2 = new THREE.Vector3(
    s.x + (end.x - s.x) * 0.75,
    end.y * 0.9 + s.y * 0.1,
    end.z * 0.9 + s.z * 0.1
  );
  return new THREE.CatmullRomCurve3([s, mid1, mid2, end]);
}

function IntakeStreams() {
  const streams = useMemo(
    () =>
      INTAKE_STARTS.map((start) => {
        const curve = buildIntakeCurve(start);
        return buildTaperedTubeGeometry(curve, 36, 6, 0.05, 0.012);
      }),
    []
  );

  return (
    <group>
      {streams.map((geo, i) => (
        <mesh key={i} geometry={geo}>
          <meshBasicMaterial
            color="#60a5fa"
            transparent
            opacity={0.22}
            toneMapped={false}
            depthWrite={false}
            blending={THREE.AdditiveBlending}
          />
        </mesh>
      ))}
    </group>
  );
}

interface LayerProps {
  count: number;
  size: number;
  opacity: number;
  speedMin: number;
  speedMax: number;
  color: string;
}

function ParticleLayer({ count, size, opacity, speedMin, speedMax, color }: LayerProps) {
  const pointsRef = useRef<THREE.Points>(null);

  const { positions, speeds, seeds } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const speeds = new Float32Array(count);
    const seeds = new Float32Array(count * 2);
    for (let i = 0; i < count; i++) {
      const x = START_X + Math.random() * (END_X - START_X);
      const funnel = (x - START_X) / (END_X - START_X);
      const spread = Math.random();
      const radius = THREE.MathUtils.lerp(1.1, 0.04, funnel) * (0.35 + spread * 0.55);
      const angle = Math.random() * Math.PI * 2;
      positions[i * 3] = x;
      positions[i * 3 + 1] = Math.sin(angle) * radius;
      positions[i * 3 + 2] = Math.cos(angle) * radius * 0.55;
      speeds[i] = speedMin + Math.random() * (speedMax - speedMin);
      seeds[i * 2] = angle;
      seeds[i * 2 + 1] = spread;
    }
    return { positions, speeds, seeds };
  }, [count, speedMin, speedMax]);

  useFrame((_, delta) => {
    const geo = pointsRef.current?.geometry;
    if (!geo) return;
    const posAttr = geo.getAttribute("position") as THREE.BufferAttribute;
    const arr = posAttr.array as Float32Array;
    for (let i = 0; i < count; i++) {
      let x = arr[i * 3] + speeds[i] * delta * 1.3;
      if (x > END_X) x = START_X;
      const funnel = (x - START_X) / (END_X - START_X);
      const angle = seeds[i * 2];
      const spread = seeds[i * 2 + 1];
      const radius = THREE.MathUtils.lerp(1.1, 0.04, funnel) * (0.35 + spread * 0.55);
      arr[i * 3] = x;
      arr[i * 3 + 1] = Math.sin(angle) * radius;
      arr[i * 3 + 2] = Math.cos(angle) * radius * 0.55;
    }
    posAttr.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} count={count} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial
        size={size}
        color={color}
        transparent
        opacity={opacity}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

/** Small twinkling cluster right where the data stream meets the core, so the intake reads
 * as "brighter near the core" rather than fading out before it arrives. */
function CoreArrivalGlow() {
  const pointsRef = useRef<THREE.Points>(null);
  const count = 22;

  const positions = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const radius = 0.06 + Math.random() * 0.38;
      const angle = Math.random() * Math.PI * 2;
      positions[i * 3] = -0.55 + Math.random() * 0.5;
      positions[i * 3 + 1] = Math.sin(angle) * radius;
      positions[i * 3 + 2] = Math.cos(angle) * radius * 0.6;
    }
    return positions;
  }, []);

  useFrame((state) => {
    const mat = pointsRef.current?.material as THREE.PointsMaterial | undefined;
    if (!mat) return;
    const t = state.clock.getElapsedTime();
    mat.opacity = 0.55 + Math.sin(t * 1.1) * 0.25;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} count={count} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#bfe0ff"
        transparent
        opacity={0.7}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

export default function DataParticles() {
  const isNarrow = useIsNarrowViewport();
  // fewer, slightly larger particles on mobile: lighter to render on a small canvas, and a
  // sparse cloud of tiny 0.02-size dots disappears entirely at phone scale
  const sizeBoost = isNarrow ? 1.35 : 1;

  return (
    <group>
      {/* faint curved intake streams threading through the particle cloud */}
      <IntakeStreams />

      {/* fine dust: dense, small, forms the bulk of the stream */}
      <ParticleLayer
        count={isNarrow ? 380 : 900}
        size={0.02 * sizeBoost}
        opacity={0.7}
        speedMin={0.5}
        speedMax={1.2}
        color="#60a5fa"
      />
      {/* mid particles */}
      <ParticleLayer
        count={isNarrow ? 90 : 200}
        size={0.038 * sizeBoost}
        opacity={0.85}
        speedMin={0.4}
        speedMax={0.9}
        color="#3b82f6"
      />
      {/* accent particles: sparse, larger, brighter cyan highlights */}
      <ParticleLayer
        count={isNarrow ? 22 : 45}
        size={0.062 * sizeBoost}
        opacity={0.9}
        speedMin={0.35}
        speedMax={0.7}
        color="#38bdf8"
      />

      <CoreArrivalGlow />
    </group>
  );
}
