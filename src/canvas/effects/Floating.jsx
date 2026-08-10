import { Float } from "@react-three/drei";

const FloatingSphere = () => {
  return (
    <Float speed={2.5} rotationIntensity={3} floatIntensity={4}>
      <mesh>
        <icosahedronGeometry args={[1.5, 3]} />
        <meshPhysicalMaterial 
          color="#8b5cf6" 
          emissive="#6d28d9" 
          emissiveIntensity={1.5} 
          roughness={0.1}
          metalness={0.9}
          wireframe={true}
        />
      </mesh>
      {/* Inner solid sphere */}
      <mesh>
        <sphereGeometry args={[1.4, 32, 32]} />
        <meshPhysicalMaterial 
          color="#030014" 
          roughness={0.4}
          metalness={0.8}
        />
      </mesh>
    </Float>
  );
};

export default FloatingSphere;