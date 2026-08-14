import { useMemo } from "react";
import { Line } from "@react-three/drei";
import * as THREE from "three";

export type IconType = "neural" | "gear" | "chart" | "people" | "shield";

const NEURAL_POINTS: [number, number, number][] = [
  [0, 0.045, 0],
  [-0.04, -0.01, 0],
  [0.04, -0.01, 0],
  [-0.022, -0.045, 0],
  [0.022, -0.045, 0],
];

const NEURAL_EDGES: [number, number][] = [
  [0, 1],
  [0, 2],
  [1, 2],
  [1, 3],
  [2, 4],
];

const CHART_BARS = [0.55, 0.8, 1];

function buildGearGeometry() {
  const teeth = 8;
  const outerR = 0.06;
  const innerR = 0.044;
  const holeR = 0.02;
  const shape = new THREE.Shape();
  const step = (Math.PI * 2) / (teeth * 2);
  for (let i = 0; i < teeth * 2; i++) {
    const r = i % 2 === 0 ? outerR : innerR;
    const a = i * step;
    const x = Math.cos(a) * r;
    const y = Math.sin(a) * r;
    if (i === 0) shape.moveTo(x, y);
    else shape.lineTo(x, y);
  }
  shape.closePath();
  const hole = new THREE.Path();
  hole.absarc(0, 0, holeR, 0, Math.PI * 2, true);
  shape.holes.push(hole);
  return new THREE.ExtrudeGeometry(shape, { depth: 0.014, bevelEnabled: false });
}

function buildShieldGeometry() {
  const shape = new THREE.Shape();
  shape.moveTo(0, 0.062);
  shape.lineTo(0.048, 0.04);
  shape.lineTo(0.048, -0.008);
  shape.quadraticCurveTo(0.048, -0.048, 0, -0.066);
  shape.quadraticCurveTo(-0.048, -0.048, -0.048, -0.008);
  shape.lineTo(-0.048, 0.04);
  shape.closePath();
  return new THREE.ExtrudeGeometry(shape, { depth: 0.012, bevelEnabled: false });
}

export default function OutputIcon({ type }: { type: IconType }) {
  const extrudeGeometry = useMemo(() => {
    if (type === "gear") return buildGearGeometry();
    if (type === "shield") return buildShieldGeometry();
    return null;
  }, [type]);

  if (type === "neural") {
    return (
      <group>
        {NEURAL_EDGES.map(([a, b], i) => (
          <Line
            key={i}
            points={[NEURAL_POINTS[a], NEURAL_POINTS[b]]}
            color="#ffffff"
            lineWidth={1}
            transparent
            opacity={0.75}
          />
        ))}
        {NEURAL_POINTS.map((p, i) => (
          <mesh key={i} position={p}>
            <sphereGeometry args={[0.011, 8, 8]} />
            <meshBasicMaterial color="#ffffff" toneMapped={false} />
          </mesh>
        ))}
      </group>
    );
  }

  if (type === "chart") {
    return (
      <group>
        {CHART_BARS.map((h, i) => (
          <mesh key={i} position={[(i - 1) * 0.034, h * 0.03 - 0.032, 0]}>
            <boxGeometry args={[0.02, h * 0.06, 0.012]} />
            <meshBasicMaterial color="#ffffff" toneMapped={false} />
          </mesh>
        ))}
      </group>
    );
  }

  if (type === "people") {
    return (
      <group>
        <mesh position={[-0.018, 0.012, 0]}>
          <sphereGeometry args={[0.024, 14, 14]} />
          <meshBasicMaterial color="#ffffff" toneMapped={false} />
        </mesh>
        <mesh position={[0.02, -0.008, 0.002]}>
          <sphereGeometry args={[0.02, 14, 14]} />
          <meshBasicMaterial color="#ffffff" toneMapped={false} transparent opacity={0.85} />
        </mesh>
      </group>
    );
  }

  return (
    <mesh geometry={extrudeGeometry ?? undefined}>
      <meshBasicMaterial color="#ffffff" toneMapped={false} />
    </mesh>
  );
}
