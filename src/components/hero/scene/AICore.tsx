import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { RoundedBox, MeshTransmissionMaterial, Line, Edges } from "@react-three/drei";
import * as THREE from "three";

function roundedRectShape(width: number, height: number, radius: number) {
  const shape = new THREE.Shape();
  const w = width / 2;
  const h = height / 2;
  const r = Math.min(radius, w, h);
  shape.moveTo(-w + r, -h);
  shape.lineTo(w - r, -h);
  shape.quadraticCurveTo(w, -h, w, -h + r);
  shape.lineTo(w, h - r);
  shape.quadraticCurveTo(w, h, w - r, h);
  shape.lineTo(-w + r, h);
  shape.quadraticCurveTo(-w, h, -w, h - r);
  shape.lineTo(-w, -h + r);
  shape.quadraticCurveTo(-w, -h, -w + r, -h);
  return shape;
}

/** A solid picture-frame shape (outer rounded rect with an inner rounded-rect hole),
 * extruded thin and placed just in front of the glass. `Edges`/wireframe lines cap out
 * around 1px in most browsers and read as too faint for the reference's crisp metal
 * bezel — an actual filled shape with a hole gives a real, thick, unmistakable border
 * without occluding what's behind it (the hole IS the glass's visible area). */
function buildBezelGeometry(width: number, height: number, radius: number, border: number, depth: number) {
  const outer = roundedRectShape(width, height, radius);
  const inner = roundedRectShape(width - border * 2, height - border * 2, Math.max(radius - border, 0.02));
  outer.holes.push(inner);
  const geometry = new THREE.ExtrudeGeometry(outer, { depth, bevelEnabled: false, curveSegments: 12 });
  geometry.translate(0, 0, -depth / 2);
  return geometry;
}

// A deliberate layered feed-forward network (input → hidden → output), not a random
// polygon — reads as "an intelligent processing core" rather than a decorative sphere.
const NEURAL_NODES: [number, number, number][] = [
  // input layer
  [-0.4, 0.36, 0.08],
  [-0.4, 0.12, -0.1],
  [-0.4, -0.12, 0.1],
  [-0.4, -0.36, -0.06],
  // hidden layer (index 7 is the brighter central node)
  [0, 0.46, -0.07],
  [0, 0.24, 0.14],
  [0, 0.04, -0.12],
  [0, 0, 0],
  [0, -0.22, 0.11],
  [0, -0.46, -0.09],
  // output layer
  [0.4, 0.34, 0.06],
  [0.4, 0.1, -0.08],
  [0.4, -0.14, 0.09],
  [0.4, -0.34, -0.05],
];
const CENTRAL_NODE_INDEX = 7;

const NEURAL_EDGES: [number, number][] = [
  [0, 4],
  [0, 5],
  [1, 5],
  [1, 6],
  [2, 6],
  [2, 7],
  [2, 8],
  [3, 8],
  [3, 9],
  [4, 10],
  [5, 10],
  [5, 11],
  [6, 11],
  [7, 11],
  [7, 12],
  [8, 12],
  [8, 13],
  [9, 13],
];

/** Dense spherical cloud of tiny glowing particles around the core — the reference's
 * interior reads as a textured energy sphere, not just thin wireframe lines on empty
 * glass. Built as an InstancedMesh (not THREE.Points): MeshTransmissionMaterial captures
 * what's behind it via its own render pass, and Points-based objects don't reliably show
 * up through that capture, unlike ordinary mesh geometry. */
function CoreParticles() {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const count = 130;

  const seeds = useMemo(() => {
    const dummy = new THREE.Object3D();
    const data: { radius: number; theta: number; phi: number; scale: number }[] = [];
    for (let i = 0; i < count; i++) {
      const radius = 0.14 + Math.sqrt(Math.random()) * 0.42;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const scale = 0.6 + Math.random() * 0.7;
      data.push({ radius, theta, phi, scale });
    }
    return { dummy, data };
  }, [count]);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
  });

  return (
    <instancedMesh
      ref={(el) => {
        meshRef.current = el;
        if (!el) return;
        const { dummy, data } = seeds;
        data.forEach((d, i) => {
          dummy.position.set(
            d.radius * Math.sin(d.phi) * Math.cos(d.theta),
            d.radius * Math.sin(d.phi) * Math.sin(d.theta),
            d.radius * Math.cos(d.phi) * 0.55
          );
          dummy.scale.setScalar(d.scale);
          dummy.updateMatrix();
          el.setMatrixAt(i, dummy.matrix);
        });
        el.instanceMatrix.needsUpdate = true;
      }}
      args={[undefined, undefined, count]}
    >
      <sphereGeometry args={[0.018, 6, 6]} />
      <meshBasicMaterial
        color="#bfe4ff"
        transparent
        opacity={0.85}
        toneMapped={false}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </instancedMesh>
  );
}

/** Four crossed light-streak planes at the core so the hot-spot reads as a radiant light
 * source (starburst glint) rather than a flat bright dot. */
function CoreGlint() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.getElapsedTime();
    groupRef.current.scale.setScalar(1 + Math.sin(t * 2.4) * 0.12);
  });

  return (
    <group ref={groupRef}>
      {[0, 30, 60, 90, 120, 150].map((deg) => (
        <mesh key={deg} rotation={[0, 0, THREE.MathUtils.degToRad(deg)]}>
          <planeGeometry args={[1.1, 0.02]} />
          <meshBasicMaterial
            color="#ffffff"
            transparent
            opacity={0.75}
            toneMapped={false}
            depthWrite={false}
            blending={THREE.AdditiveBlending}
          />
        </mesh>
      ))}
    </group>
  );
}

export default function AICore() {
  const bezelGeometry = useMemo(() => buildBezelGeometry(1.62, 2.5, 0.22, 0.055, 0.045), []);
  const coreRef = useRef<THREE.Mesh>(null);
  const energyRef = useRef<THREE.Mesh>(null);
  const latticeRef = useRef<THREE.Mesh>(null);
  const neuralRef = useRef<THREE.Group>(null);
  const highlightRef = useRef<THREE.PointLight>(null);
  const rimRef = useRef<THREE.PointLight>(null);

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();
    if (coreRef.current) {
      coreRef.current.scale.setScalar(1 + Math.sin(t * 1.6) * 0.06);
    }
    if (energyRef.current) {
      energyRef.current.scale.setScalar(1 + Math.sin(t * 2.4) * 0.15);
    }
    if (latticeRef.current) {
      latticeRef.current.rotation.y += delta * 0.15;
      latticeRef.current.rotation.x += delta * 0.06;
    }
    if (neuralRef.current) {
      neuralRef.current.rotation.y -= delta * 0.09;
      neuralRef.current.rotation.z += delta * 0.04;
    }
    // extremely subtle shimmer across the glass edges
    if (highlightRef.current) {
      highlightRef.current.intensity = 2.1 + Math.sin(t * 0.5) * 0.5;
    }
    if (rimRef.current) {
      rimRef.current.intensity = 1.5 + Math.sin(t * 0.45 + 1.6) * 0.4;
    }
  });

  return (
    <group>
      {/* faint rotating outer lattice, reads as "engine" complexity through the glass */}
      <mesh ref={latticeRef}>
        <icosahedronGeometry args={[0.89, 1]} />
        <meshBasicMaterial color="#8fb8e8" wireframe transparent opacity={0.18} toneMapped={false} />
      </mesh>

      {/* soft central glow — kept small so the neural net around it stays visible */}
      <mesh ref={coreRef}>
        <sphereGeometry args={[0.26, 32, 32]} />
        <meshBasicMaterial color="#cfe6ff" transparent opacity={0.6} toneMapped={false} />
      </mesh>

      {/* two-stop mid glow between the soft outer halo and the hot core, so the center reads
          as a proper bright bloom hot-spot with a smooth gradient instead of a single dot */}
      <mesh>
        <sphereGeometry args={[0.19, 32, 32]} />
        <meshBasicMaterial color="#dcf0ff" transparent opacity={0.75} toneMapped={false} />
      </mesh>
      <mesh>
        <sphereGeometry args={[0.135, 32, 32]} />
        <meshBasicMaterial color="#f2f9ff" transparent opacity={0.95} toneMapped={false} />
      </mesh>

      {/* brighter AI energy / data-transformation point at the very center — this is where
          the incoming stream visually converges before splitting into the output streams */}
      <mesh ref={energyRef}>
        <sphereGeometry args={[0.1, 32, 32]} />
        <meshBasicMaterial color="#ffffff" toneMapped={false} />
      </mesh>

      <CoreGlint />
      <CoreParticles />

      {/* fine interconnected neural network suspended inside the glass */}
      <group ref={neuralRef}>
        {NEURAL_EDGES.map(([a, b], i) => (
          <Line
            key={i}
            points={[NEURAL_NODES[a], NEURAL_NODES[b]]}
            color="#8fc4f5"
            lineWidth={1.75}
            transparent
            opacity={0.85}
          />
        ))}
        {NEURAL_NODES.map((p, i) => (
          <mesh key={i} position={p}>
            <sphereGeometry args={[i === CENTRAL_NODE_INDEX ? 0.05 : 0.028, 12, 12]} />
            <meshBasicMaterial color={i === CENTRAL_NODE_INDEX ? "#eaf6ff" : "#ffffff"} toneMapped={false} />
          </mesh>
        ))}
      </group>

      {/* internal blue glow, biased toward the right so that edge reads slightly deeper */}
      <pointLight color="#3b82f6" intensity={10} distance={4.8} decay={2} position={[0.21, 0, 0]} />
      <pointLight color="#ffffff" intensity={4.5} distance={2.7} decay={2} position={[0, 0, 0.4]} />
      {/* soft highlight, top-left — shimmers gently */}
      <pointLight ref={highlightRef} color="#ffffff" intensity={2.2} distance={3.7} decay={2} position={[-0.98, 1.44, 1.15]} />
      {/* subtle deeper blue reflection, right edge — shimmers gently */}
      <pointLight ref={rimRef} color="#2563eb" intensity={1.5} distance={2.9} decay={2} position={[1.15, -0.4, 0.52]} />

      {/* solid metal bezel on the front face — real geometry with a hole, not a thin line,
          so it reads as an unmistakable dark-navy frame like the reference. No back-face
          copy: with the glass this transparent, a second frame behind it showed through as
          a confusing dark overlapping shape rather than reinforcing the edge. */}
      <mesh geometry={bezelGeometry} position={[0, 0, 0.5]} castShadow>
        <meshStandardMaterial color="#16233f" metalness={0.3} roughness={0.55} envMapIntensity={0.3} />
      </mesh>

      <RoundedBox args={[1.62, 2.5, 1.05]} radius={0.22} smoothness={6} castShadow>
        <MeshTransmissionMaterial
          samples={6}
          resolution={512}
          thickness={0.5}
          roughness={0.02}
          transmission={0.95}
          ior={1.35}
          chromaticAberration={0.028}
          anisotropy={0.2}
          distortion={0.04}
          distortionScale={0.15}
          temporalDistortion={0.02}
          color="#eef7ff"
          background={new THREE.Color("#f5fafd")}
        />
        <Edges threshold={20} color="#132a63" />
      </RoundedBox>
    </group>
  );
}
