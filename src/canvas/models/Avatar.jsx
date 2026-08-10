import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Avatar = () => {
  const avatarRef = useRef();

  useFrame((state) => {
    if (avatarRef.current) {
      avatarRef.current.rotation.y = state.clock.elapsedTime * 0.35;
      avatarRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.25) * 0.15;

      avatarRef.current.position.y =
        Math.sin(state.clock.elapsedTime * 1) * 0.2 - 1.5;
    }
  });

  return (
    <group ref={avatarRef} scale={1.8}>
      <mesh>
        <icosahedronGeometry args={[1.1, 1]} />
        <meshStandardMaterial color="#7c3aed" metalness={0.7} roughness={0.18} emissive="#2b0f4f" emissiveIntensity={0.12} />
      </mesh>
      <mesh scale={1.18}>
        <torusKnotGeometry args={[0.55, 0.12, 128, 24]} />
        <meshStandardMaterial color="#06b6d4" metalness={0.95} roughness={0.12} transparent opacity={0.9} />
      </mesh>
    </group>
  );
};

export default Avatar;