import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const Particles = ({ count = 350 }) => {
  const pointsRef = useRef();

  // Generate random positions, sizes, and speeds
  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const cols = new Float32Array(count * 3);
    
    const colorPrimary = new THREE.Color("#7c3aed");
    const colorSecondary = new THREE.Color("#06b6d4");

    for (let i = 0; i < count; i++) {
      // Position inside a sphere radius
      const r = 8 + Math.random() * 12;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos((Math.random() * 2) - 1);

      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);

      // Color interpolation (violet to cyan)
      const mixedColor = colorPrimary.clone().lerp(colorSecondary, Math.random());
      cols[i * 3] = mixedColor.r;
      cols[i * 3 + 1] = mixedColor.g;
      cols[i * 3 + 2] = mixedColor.b;
    }

    return [pos, cols];
  }, [count]);

  useFrame((state) => {
    if (pointsRef.current) {
      const time = state.clock.getElapsedTime();
      
      // Gentle floating rotation
      pointsRef.current.rotation.y = time * 0.04;
      pointsRef.current.rotation.x = Math.sin(time * 0.02) * 0.08;
      
      // Wave bobbing effect
      const positionsArray = pointsRef.current.geometry.attributes.position.array;
      for (let i = 0; i < count; i++) {
        const indexY = i * 3 + 1;
        // Bob particles up and down slowly based on position
        positionsArray[indexY] += Math.sin(time + positionsArray[i * 3]) * 0.0016;
      }
      pointsRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.065}
        sizeAttenuation={true}
        transparent
        opacity={0.72}
        vertexColors
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
};

export default Particles;
