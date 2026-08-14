import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function Platform() {
  const ringRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    const pulse = 0.7 + Math.sin(t * 0.8) * 0.3;
    if (ringRef.current) {
      const mat = ringRef.current.material as THREE.MeshBasicMaterial;
      mat.opacity = 0.5 + pulse * 0.3;
    }
    if (glowRef.current) {
      const mat = glowRef.current.material as THREE.MeshBasicMaterial;
      mat.opacity = 0.07 + pulse * 0.06;
    }
  });

  // pedestal diameter ≈ 1.25 × the AI core's width (core is 1.62 wide → ~2.0 diameter)
  return (
    <group position={[0, -1.28, 0]} scale={[1, 1, 0.65]}>
      {/* soft ambient glow beneath the pedestal */}
      <mesh ref={glowRef} position={[0, -0.015, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[1.18, 40]} />
        <meshBasicMaterial color="#3b82f6" transparent opacity={0.1} toneMapped={false} depthWrite={false} />
      </mesh>

      {/* solid disc surface — unlit (meshBasicMaterial) so it's guaranteed visible regardless
          of light direction, the same fix that solved the transmission-material particles
          disappearing earlier: a *lit* material here rendered too dark/faint to see and left
          only the thin ring visible */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.006, 0]} receiveShadow>
        <circleGeometry args={[1.0, 64]} />
        <meshBasicMaterial color="#c7d5e6" toneMapped={false} />
      </mesh>
      {/* soft radial highlight fading the disc lighter toward the center for depth */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.005, 0]}>
        <circleGeometry args={[0.7, 56]} />
        <meshBasicMaterial color="#e8f0fa" transparent opacity={0.55} toneMapped={false} depthWrite={false} />
      </mesh>

      {/* dark rim so the disc's edge reads clearly, matching the portal's bezel treatment */}
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, -0.004, 0]}>
        <torusGeometry args={[1.0, 0.006, 12, 100]} />
        <meshBasicMaterial color="#16233f" transparent opacity={0.45} toneMapped={false} />
      </mesh>

      {/* compact translucent glass sheen on top of the metal disc */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
        <circleGeometry args={[1.01, 56]} />
        <meshBasicMaterial color="#eaf3ff" transparent opacity={0.18} toneMapped={false} depthWrite={false} />
      </mesh>

      {/* faint inner highlight, brighter near the center where the core stands */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.001, 0]}>
        <circleGeometry args={[0.52, 40]} />
        <meshBasicMaterial color="#dbeeff" transparent opacity={0.24} toneMapped={false} depthWrite={false} />
      </mesh>

      {/* glowing edge ring */}
      <mesh ref={ringRef} rotation={[Math.PI / 2, 0, 0]} position={[0, 0.006, 0]}>
        <torusGeometry args={[1.01, 0.012, 16, 100]} />
        <meshBasicMaterial color="#3b82f6" transparent opacity={0.75} toneMapped={false} />
      </mesh>

      <pointLight color="#3b82f6" intensity={1.4} distance={1.9} position={[0, 0.2, 0]} />
    </group>
  );
}
