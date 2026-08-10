import { useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import { CanvasTexture } from "three";

const Planet = ({
  position,
  color,
  speed,
  size = 0.3,
  phase = 0,
  orbitTilt = 0,
  eccentricity = 1,
  bob = 0.05,
  emissive = color,
  hasRings = false,
  hasMoon = false,
  name = "Planet"
}) => {
  const meshRef = useRef();
  const orbitRef = useRef();
  const moonRef = useRef();

  // Procedurally generate authentic textures for each planet type
  const planetTexture = useMemo(() => {
    const canvas = document.createElement("canvas");
    canvas.width = 512;
    canvas.height = 256;
    const ctx = canvas.getContext("2d");

    // 1. Fill base planet color
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // 2. Overlay authentic, customized features based on planet identity
    if (name === "Mercury") {
      // Grey surface with heavy cratering
      ctx.fillStyle = "rgba(75, 85, 99, 0.4)";
      for (let i = 0; i < 45; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const r = Math.random() * 12 + 3;
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.strokeStyle = "rgba(255, 255, 255, 0.12)";
        ctx.lineWidth = 1;
        ctx.stroke();
      }
    } else if (name === "Venus") {
      // Swirling golden acid sulfuric clouds
      ctx.strokeStyle = "rgba(251, 146, 60, 0.25)";
      ctx.lineWidth = 8;
      for (let i = 0; i < 15; i++) {
        ctx.beginPath();
        ctx.moveTo(0, Math.random() * canvas.height);
        ctx.bezierCurveTo(
          canvas.width / 3, Math.random() * canvas.height,
          (canvas.width * 2) / 3, Math.random() * canvas.height,
          canvas.width, Math.random() * canvas.height
        );
        ctx.stroke();
      }
    } else if (name === "Earth") {
      // Draw green and brown continents on the blue ocean base
      ctx.fillStyle = "#15803d"; // Green continents
      for (let i = 0; i < 8; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const rx = Math.random() * 85 + 35;
        const ry = Math.random() * 55 + 25;
        ctx.beginPath();
        ctx.ellipse(x, y, rx, ry, Math.random() * Math.PI, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.fillStyle = "#854d0e"; // Brown landmasses
      for (let i = 0; i < 6; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const rx = Math.random() * 40 + 15;
        const ry = Math.random() * 25 + 10;
        ctx.beginPath();
        ctx.ellipse(x, y, rx, ry, Math.random() * Math.PI, 0, Math.PI * 2);
        ctx.fill();
      }
      // White swirling clouds overlay
      ctx.strokeStyle = "rgba(255, 255, 255, 0.35)";
      ctx.lineWidth = 12;
      for (let i = 0; i < 8; i++) {
        ctx.beginPath();
        ctx.moveTo(0, Math.random() * canvas.height);
        ctx.bezierCurveTo(
          canvas.width / 3, Math.random() * canvas.height,
          (canvas.width * 2) / 3, Math.random() * canvas.height,
          canvas.width, Math.random() * canvas.height
        );
        ctx.stroke();
      }
    } else if (name === "Mars") {
      // Rust-red surface with white polar caps and dark iron patches
      ctx.fillStyle = "rgba(127, 29, 29, 0.3)";
      for (let i = 0; i < 15; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        ctx.beginPath();
        ctx.arc(x, y, Math.random() * 50 + 20, 0, Math.PI * 2);
        ctx.fill();
      }
      // White polar ice caps at the top and bottom edges
      ctx.fillStyle = "rgba(255, 255, 255, 0.85)";
      ctx.fillRect(0, 0, canvas.width, 18);
      ctx.fillRect(0, canvas.height - 18, canvas.width, 18);
    } else if (name === "Jupiter" || name === "Saturn") {
      // Horizontal gas stripes/belts
      for (let y = 0; y < canvas.height; y += 14) {
        ctx.fillStyle = y % 28 === 0 
          ? "rgba(255, 255, 255, 0.16)" 
          : "rgba(0, 0, 0, 0.16)";
        ctx.fillRect(0, y, canvas.width, 12);
      }
      if (name === "Jupiter") {
        // Great Red Spot
        ctx.fillStyle = "#b91c1c";
        ctx.beginPath();
        ctx.ellipse(canvas.width * 0.65, canvas.height * 0.65, 24, 14, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = "rgba(253, 186, 116, 0.5)";
        ctx.lineWidth = 3;
        ctx.stroke();
      }
    } else if (name === "Uranus" || name === "Neptune") {
      // Swirling gaseous bands
      for (let y = 0; y < canvas.height; y += 24) {
        ctx.fillStyle = "rgba(255, 255, 255, 0.08)";
        ctx.fillRect(0, y, canvas.width, 10);
      }
      if (name === "Neptune") {
        // Methane storm cloud bands and Great Dark Spot
        ctx.fillStyle = "#1e3a8a";
        ctx.beginPath();
        ctx.ellipse(canvas.width * 0.35, canvas.height * 0.45, 20, 11, 0, 0, Math.PI * 2);
        ctx.fill();

        ctx.strokeStyle = "rgba(255, 255, 255, 0.22)";
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.moveTo(0, canvas.height * 0.7);
        ctx.lineTo(canvas.width, canvas.height * 0.72);
        ctx.stroke();
      }
    }

    const tex = new CanvasTexture(canvas);
    return tex;
  }, [color, name]);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    const angle = time * speed + phase;
    
    if (meshRef.current) {
      meshRef.current.position.x = Math.sin(angle) * position * eccentricity;
      meshRef.current.position.z = Math.cos(angle) * position;
      meshRef.current.position.y = Math.sin(time * speed * 1.5 + phase) * bob;
      meshRef.current.rotation.y += 0.012;
      meshRef.current.rotation.x += 0.003;

      if (hasMoon && moonRef.current) {
        const moonAngle = time * 3.0;
        moonRef.current.position.x = Math.sin(moonAngle) * (size * 1.8);
        moonRef.current.position.z = Math.cos(moonAngle) * (size * 1.8);
      }
    }
  });

  return (
    <group rotation={[orbitTilt, 0, 0]} ref={orbitRef}>
      <group ref={meshRef}>
        <mesh>
          <sphereGeometry args={[size, 32, 32]} />
          <meshStandardMaterial 
            map={planetTexture}
            emissive={emissive}
            emissiveIntensity={0.1}
            metalness={0.5}
            roughness={0.5}
          />
        </mesh>

        {/* Optional Ring System (for Saturn) */}
        {hasRings && (
          <mesh rotation={[Math.PI / 2.5, 0, 0]}>
            <ringGeometry args={[size * 1.3, size * 2.3, 64]} />
            <meshStandardMaterial 
              color="#d9ad5b" 
              transparent 
              opacity={0.5} 
              side={2} // DoubleSide
              metalness={0.8}
              roughness={0.2}
            />
          </mesh>
        )}

        {/* Optional Moon System (for Earth) */}
        {hasMoon && (
          <mesh ref={moonRef}>
            <sphereGeometry args={[size * 0.25, 16, 16]} />
            <meshStandardMaterial color="#94a3b8" metalness={0.2} roughness={0.8} />
          </mesh>
        )}
      </group>
    </group>
  );
};

export default Planet;