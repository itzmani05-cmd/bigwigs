import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Line, Html } from "@react-three/drei";
import * as THREE from "three";
import OutputIcon, { type IconType } from "@/components/hero/scene/OutputIcon";
import { buildTaperedTubeGeometry } from "@/components/hero/scene/tube";
import { useIsNarrowViewport } from "@/components/hero/utils";

interface StreamDef {
  id: string;
  color: string;
  end: [number, number, number];
  icon: IconType;
  label: string;
}

// Endpoints are kept well inside the camera frustum (see HeroScene's fov) so nothing
// clips against the container edge — verified against the widened fov, not just nudged.
const STREAMS: StreamDef[] = [
  { id: "solutions", color: "#3b82f6", end: [1.55, 1.15, -0.22], icon: "neural", label: "Intelligent\nSolutions" },
  { id: "automation", color: "#8b5cf6", end: [1.63, 0.6, 0.08], icon: "gear", label: "Automation" },
  { id: "growth", color: "#14b8a6", end: [1.68, 0, 0.24], icon: "chart", label: "Business\nGrowth" },
  { id: "cx", color: "#f97316", end: [1.63, -0.6, 0.08], icon: "people", label: "Customer\nExperience" },
  { id: "ops", color: "#38bdf8", end: [1.55, -1.15, -0.22], icon: "shield", label: "Operational\nExcellence" },
];

const START = new THREE.Vector3(0.75, 0, 0);

function buildCurve(end: [number, number, number]) {
  const endVec = new THREE.Vector3(...end);
  const mid1 = new THREE.Vector3(
    START.x + (endVec.x - START.x) * 0.35,
    START.y + (endVec.y - START.y) * 0.15,
    0.42
  );
  const mid2 = new THREE.Vector3(
    START.x + (endVec.x - START.x) * 0.7,
    endVec.y * 0.85,
    endVec.z * 0.6
  );
  return new THREE.CatmullRomCurve3([START.clone(), mid1, mid2, endVec]);
}

/** A faint jittering dust trail scattered along the stream curve — the stream reads as many
 * tiny particles rather than a solid ribbon, and grows denser/larger near the node end. */
function StreamDust({
  curve,
  color,
  count,
}: {
  curve: THREE.CatmullRomCurve3;
  color: string;
  count: number;
}) {
  const pointsRef = useRef<THREE.Points>(null);

  const { positions, seeds } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const seeds = new Float32Array(count * 2);
    for (let i = 0; i < count; i++) {
      const t = i / (count - 1);
      const p = curve.getPointAt(t);
      const jitter = 0.056 - t * 0.044;
      positions[i * 3] = p.x + (Math.random() - 0.5) * jitter;
      positions[i * 3 + 1] = p.y + (Math.random() - 0.5) * jitter;
      positions[i * 3 + 2] = p.z + (Math.random() - 0.5) * jitter;
      seeds[i * 2] = t;
      seeds[i * 2 + 1] = Math.random() * Math.PI * 2;
    }
    return { positions, seeds };
  }, [curve, count]);

  useFrame((state) => {
    const geo = pointsRef.current?.geometry;
    if (!geo) return;
    const posAttr = geo.getAttribute("position") as THREE.BufferAttribute;
    const arr = posAttr.array as Float32Array;
    const time = state.clock.getElapsedTime();
    for (let i = 0; i < count; i++) {
      const t = seeds[i * 2];
      const phase = seeds[i * 2 + 1];
      const p = curve.getPointAt(t);
      const jitter = 0.048 - t * 0.038;
      arr[i * 3] = p.x + Math.sin(time * 0.5 + phase) * jitter * 0.5;
      arr[i * 3 + 1] = p.y + Math.cos(time * 0.45 + phase) * jitter * 0.5;
      arr[i * 3 + 2] = p.z + Math.sin(time * 0.35 + phase) * jitter * 0.5;
    }
    posAttr.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} count={count} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial
        size={0.024}
        color={color}
        transparent
        opacity={0.48}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

function StreamParticle({
  curve,
  color,
  offset,
}: {
  curve: THREE.CatmullRomCurve3;
  color: string;
  offset: number;
}) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = (state.clock.getElapsedTime() * 0.16 + offset) % 1;
    const p = curve.getPointAt(t);
    if (ref.current) {
      ref.current.position.copy(p);
      const fade = Math.sin(t * Math.PI);
      const taper = 1 - t * 0.55;
      ref.current.scale.setScalar(taper * (0.5 + fade * 0.7));
    }
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.024, 12, 12]} />
      <meshBasicMaterial color={color} toneMapped={false} transparent opacity={0.78} />
    </mesh>
  );
}

function OrbitParticles({ color }: { color: string }) {
  const refs = useRef<(THREE.Mesh | null)[]>([]);
  const specs = useMemo(
    () =>
      Array.from({ length: 3 }, (_, i) => ({
        radius: 0.16 + i * 0.018,
        speed: 0.4 + i * 0.15,
        tilt: (i / 3) * Math.PI,
        offset: i * 2.1,
      })),
    []
  );

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    specs.forEach((s, i) => {
      const mesh = refs.current[i];
      if (!mesh) return;
      const a = t * s.speed + s.offset;
      mesh.position.set(Math.cos(a) * s.radius, Math.sin(a) * s.radius * Math.cos(s.tilt), Math.sin(a) * s.radius * Math.sin(s.tilt));
    });
  });

  return (
    <>
      {specs.map((_, i) => (
        <mesh key={i} ref={(el) => { refs.current[i] = el; }}>
          <sphereGeometry args={[0.012, 8, 8]} />
          <meshBasicMaterial color={color} toneMapped={false} transparent opacity={0.85} />
        </mesh>
      ))}
    </>
  );
}

function OutputNode({
  color,
  position,
  icon,
  delay,
}: {
  color: string;
  position: [number, number, number];
  icon: IconType;
  delay: number;
}) {
  const ref = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.getElapsedTime() + delay;
    ref.current.scale.setScalar(1 + Math.sin(t * 1.4) * 0.06);
  });

  return (
    <group ref={ref} position={position}>
      {/* glass shell */}
      <mesh>
        <sphereGeometry args={[0.105, 32, 32]} />
        <meshPhysicalMaterial
          color={color}
          transparent
          opacity={0.5}
          roughness={0.12}
          metalness={0.05}
          transmission={0.75}
          thickness={0.25}
          clearcoat={0.8}
          ior={1.3}
        />
      </mesh>

      {/* inner glow core */}
      <mesh scale={0.5}>
        <sphereGeometry args={[0.105, 16, 16]} />
        <meshBasicMaterial color={color} toneMapped={false} transparent opacity={0.9} />
      </mesh>

      {/* minimal icon */}
      <group position={[0, 0, 0.09]}>
        <OutputIcon type={icon} />
      </group>

      <OrbitParticles color={color} />
      <pointLight color={color} intensity={1} distance={0.85} />
    </group>
  );
}

export default function OutputStreams() {
  const isNarrow = useIsNarrowViewport();
  const activeStreams = isNarrow
    ? STREAMS.filter((s) => s.id === "solutions" || s.id === "growth" || s.id === "ops")
    : STREAMS;

  const streams = useMemo(
    () =>
      activeStreams.map((s) => {
        const curve = buildCurve(s.end);
        const ribbon = buildTaperedTubeGeometry(curve, 40, 8, 0.045, 0.016);
        return { ...s, curve, points: curve.getPoints(48), ribbon };
      }),
    [activeStreams]
  );

  return (
    <group>
      {/* shared bright point where every stream emerges from the glass */}
      <mesh position={START}>
        <sphereGeometry args={[0.045, 16, 16]} />
        <meshBasicMaterial color="#eaf4ff" toneMapped={false} />
      </mesh>
      <pointLight color="#3b82f6" intensity={1.3} distance={1.1} position={START} />

      {streams.map((s, i) => (
        <group key={s.id}>
          {/* soft glowing ribbon body so the stream reads as a flowing band of light, not a
              scatter of dots — a thin additive-blended tapered tube under the particles */}
          <mesh geometry={s.ribbon}>
            <meshBasicMaterial
              color={s.color}
              transparent
              opacity={0.22}
              toneMapped={false}
              depthWrite={false}
              blending={THREE.AdditiveBlending}
            />
          </mesh>

          {/* thin luminous guide path */}
          <Line points={s.points} color={s.color} lineWidth={1.5} transparent opacity={0.4} />

          {/* the stream itself: tiny particles, thicker where it leaves the core, thinning outward */}
          <StreamDust curve={s.curve} color={s.color} count={46} />

          {[0, 0.22, 0.44, 0.66, 0.88].map((offset) => (
            <StreamParticle key={offset} curve={s.curve} color={s.color} offset={offset} />
          ))}
          <OutputNode color={s.color} position={s.end} icon={s.icon} delay={i * 0.6} />

          {/* fixed-size uppercase label to the right of the node, matching the reference */}
          <Html position={[s.end[0] + 0.16, s.end[1], s.end[2]]} center occlude={false} zIndexRange={[10, 0]}>
            <div
              className="whitespace-pre pointer-events-none select-none text-[10px] font-bold uppercase leading-tight tracking-[0.08em]"
              style={{ color: s.color, textShadow: "0 1px 2px rgba(255,255,255,0.9)" }}
            >
              {s.label}
            </div>
          </Html>
        </group>
      ))}
    </group>
  );
}
