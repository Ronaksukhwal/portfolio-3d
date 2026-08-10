import { useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import { CanvasTexture } from "three";

const Sun = () => {
  const sunRef = useRef();

  // Procedural Sun flare surface texture map
  const sunTexture = useMemo(() => {
    const canvas = document.createElement("canvas");
    canvas.width = 512;
    canvas.height = 256;
    const ctx = canvas.getContext("2d");

    // Swirling base gradient of fire colors
    const grad = ctx.createLinearGradient(0, 0, 0, canvas.height);
    grad.addColorStop(0, "#f97316"); // orange
    grad.addColorStop(0.5, "#facc15"); // yellow
    grad.addColorStop(1, "#dc2626"); // red
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Active solar corona/hotspots overlay
    ctx.fillStyle = "rgba(254, 243, 199, 0.4)";
    for (let i = 0; i < 30; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const r = Math.random() * 45 + 15;
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fill();
    }
    return new CanvasTexture(canvas);
  }, []);

  useFrame((state) => {
    if (sunRef.current) {
      sunRef.current.rotation.y = state.clock.getElapsedTime() * 0.12;
    }
  });

  return (
    <group ref={sunRef}>
      {/* Outer Glow shell */}
      <mesh scale={1.12}>
        <sphereGeometry args={[0.9, 32, 32]} />
        <meshBasicMaterial color="#f97316" transparent opacity={0.25} toneMapped={false} />
      </mesh>
      
      {/* Middle Core flare */}
      <mesh scale={1.05}>
        <sphereGeometry args={[0.9, 32, 32]} />
        <meshBasicMaterial color="#eab308" transparent opacity={0.45} toneMapped={false} />
      </mesh>

      {/* Sun base core with custom solar texture */}
      <mesh>
        <sphereGeometry args={[0.9, 32, 32]} />
        <meshBasicMaterial map={sunTexture} toneMapped={false} />
      </mesh>
      
      {/* Light Source inside the Sun to illuminate other planets */}
      <pointLight position={[0, 0, 0]} intensity={3.5} distance={30} decay={1.5} color="#fffbeb" />
    </group>
  );
};

export default Sun;
