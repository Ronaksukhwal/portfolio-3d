import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Ufo = () => {
  const ufoRef = useRef();
  const beamRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    if (ufoRef.current) {
      // UFO flies in a wide, sweeping Lissajous wave trajectory
      const radiusX = 4.8;
      const radiusZ = 3.6;
      const speed = 0.45;
      
      ufoRef.current.position.x = Math.sin(time * speed) * radiusX;
      ufoRef.current.position.z = Math.cos(time * speed * 0.75) * radiusZ;
      ufoRef.current.position.y = Math.sin(time * speed * 1.8) * 0.7 + 1.3;

      // Organic roll/tilt as it banking turns
      ufoRef.current.rotation.z = Math.cos(time * speed) * 0.15;
      ufoRef.current.rotation.x = Math.sin(time * speed * 0.75) * 0.1;
      ufoRef.current.rotation.y = time * 2.2; // Rapid rotation around vertical axis
    }

    if (beamRef.current) {
      // Pulse tractor beam intensity
      beamRef.current.material.opacity = 0.15 + Math.sin(time * 6) * 0.06;
    }
  });

  return (
    <group ref={ufoRef}>
      {/* UFO Upper Dome */}
      <mesh position={[0, 0.05, 0]}>
        <sphereGeometry args={[0.16, 16, 16, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <meshPhysicalMaterial 
          color="#22d3ee" 
          emissive="#22d3ee" 
          emissiveIntensity={1.2}
          transparent 
          opacity={0.7} 
          roughness={0.1}
          transmission={0.6}
        />
      </mesh>

      {/* UFO Main Saucer Ring */}
      <mesh>
        <cylinderGeometry args={[0.42, 0.42, 0.06, 16]} />
        <meshStandardMaterial color="#64748b" metalness={0.9} roughness={0.15} />
      </mesh>
      
      {/* Lower Saucer Base */}
      <mesh position={[0, -0.04, 0]}>
        <cylinderGeometry args={[0.3, 0.42, 0.05, 16]} />
        <meshStandardMaterial color="#334155" metalness={0.95} roughness={0.12} />
      </mesh>

      {/* Running Lights (Outer Circle) */}
      {[0, 1, 2, 3, 4, 5].map((i) => {
        const angle = (i * Math.PI) / 3;
        const r = 0.37;
        return (
          <mesh key={i} position={[Math.sin(angle) * r, -0.01, Math.cos(angle) * r]}>
            <sphereGeometry args={[0.03, 8, 8]} />
            <meshBasicMaterial color={i % 2 === 0 ? "#10b981" : "#ec4899"} toneMapped={false} />
          </mesh>
        );
      })}

      {/* Downward Volumetric Tractor Beam */}
      <mesh ref={beamRef} position={[0, -0.65, 0]} rotation={[Math.PI, 0, 0]}>
        <coneGeometry args={[0.22, 1.2, 16, 1, true]} />
        <meshBasicMaterial 
          color="#22d3ee" 
          transparent 
          opacity={0.15} 
          depthWrite={false}
          side={2} // DoubleSide
        />
      </mesh>
    </group>
  );
};

export default Ufo;
