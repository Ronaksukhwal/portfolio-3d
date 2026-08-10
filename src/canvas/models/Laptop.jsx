import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, Html } from "@react-three/drei";
import * as THREE from "three";

const Laptop = ({ scale = 1.0, ...props }) => {
  const groupRef = useRef();
  const lidRef = useRef();
  const screenLightRef = useRef();
  
  const [hovered, setHovered] = useState(false);
  const [openAngle, setOpenAngle] = useState(0.1); // starts slightly open

  // Target angle: opens up beautifully when hovered
  const targetAngle = hovered ? Math.PI * 0.62 : Math.PI * 0.12;

  useFrame((state, delta) => {
    // 1. Smoothly interpolate screen lid opening angle
    const speed = 6;
    const currentAngle = lidRef.current ? lidRef.current.rotation.x : openAngle;
    const nextAngle = THREE.MathUtils.lerp(currentAngle, targetAngle, delta * speed);
    setOpenAngle(nextAngle);
    
    if (lidRef.current) {
      // Three.js hinges at screen bottom edge
      lidRef.current.rotation.x = nextAngle;
    }

    // 2. Dynamic mouse tracking rotation for interactive tilt
    if (groupRef.current) {
      const mouse = state.pointer; // [-1, 1] range
      const targetRotY = mouse.x * 0.35;
      const targetRotX = -mouse.y * 0.2 + 0.15;
      
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetRotY, delta * 4);
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetRotX, delta * 4);
    }
  });

  return (
    <Float speed={1.8} rotationIntensity={0.25} floatIntensity={0.5}>
      <group 
        ref={groupRef} 
        scale={scale * 1.3} 
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        {...props}
      >
        {/* LAPTOP CHASSIS BASE */}
        <mesh castShadow receiveShadow>
          <boxGeometry args={[3.2, 0.08, 2.2]} />
          <meshStandardMaterial 
            color="#0f172a" 
            metalness={0.88} 
            roughness={0.2} 
            envMapIntensity={0.5}
          />
        </mesh>

        {/* KEYBOARD KEYPAD BLOCK */}
        <mesh position={[0, 0.05, 0.2]} castShadow>
          <boxGeometry args={[2.8, 0.02, 1.2]} />
          <meshStandardMaterial 
            color="#020617" 
            metalness={0.9} 
            roughness={0.35} 
          />
        </mesh>

        {/* GLOWING KEYBOARD BACKLIGHT SHEET */}
        <mesh position={[0, 0.051, 0.2]}>
          <boxGeometry args={[2.78, 0.005, 1.18]} />
          <meshStandardMaterial 
            color="#06b6d4" 
            emissive="#06b6d4" 
            emissiveIntensity={0.4} 
            transparent 
            opacity={0.7}
          />
        </mesh>

        {/* TRACKPAD */}
        <mesh position={[0, 0.045, 0.9]}>
          <planeGeometry args={[0.7, 0.38]} />
          <meshStandardMaterial 
            color="#1e293b" 
            metalness={0.92} 
            roughness={0.15} 
            rotation={[-Math.PI / 2, 0, 0]}
          />
        </mesh>

        {/* LAPTOP LID HINGE BASE */}
        <mesh position={[0, 0.04, -1.02]}>
          <cylinderGeometry args={[0.06, 0.06, 2.6, 16]} rotation={[0, 0, Math.PI / 2]} />
          <meshStandardMaterial color="#334155" metalness={0.8} roughness={0.3} />
        </mesh>

        {/* ROTATING LID / SCREEN GROUP */}
        <group ref={lidRef} position={[0, 0.05, -1.02]}>
          {/* SCREEN OUTBACK (LID OUTER CASING) */}
          <mesh position={[0, 0.95, -0.04]} castShadow>
            <boxGeometry args={[3.2, 1.9, 0.07]} />
            <meshStandardMaterial 
              color="#0f172a" 
              metalness={0.9} 
              roughness={0.2} 
            />
          </mesh>

          {/* SCREEN GLASS INNER PANEL */}
          <mesh position={[0, 0.95, 0.001]}>
            <planeGeometry args={[3.04, 1.74]} />
            <meshPhysicalMaterial 
              color="#030014" 
              metalness={0.95} 
              roughness={0.1}
              clearcoat={1.0}
              clearcoatRoughness={0.05}
            />
          </mesh>

          {/* GLOWING DISPLAY SURFACE */}
          <mesh position={[0, 0.95, 0.002]}>
            <planeGeometry args={[2.98, 1.68]} />
            <meshPhysicalMaterial 
              color="#02000c" 
              emissive="#7c3aed" 
              emissiveIntensity={hovered ? 0.9 : 0.45} 
              transparent 
              opacity={0.95}
              roughness={0.2}
              clearcoat={0.6}
            />
          </mesh>

          {/* DYNAMIC SCREENLIGHT CAST (emissive helper) */}
          <pointLight 
            ref={screenLightRef}
            position={[0, 0.95, 0.25]} 
            color="#06b6d4" 
            intensity={hovered ? 1.5 : 0.6} 
            distance={4}
            decay={2}
          />

          {/* SCREEN DATA HTML DISPLAY */}
          <Html
            transform
            occlude
            distanceFactor={1.75}
            position={[0, 0.95, 0.005]}
            style={{
              width: "298px",
              height: "168px",
              background: "rgba(5, 2, 25, 0.95)",
              color: "#fff",
              fontFamily: "monospace",
              fontSize: "7px",
              padding: "10px",
              boxSizing: "border-box",
              borderRadius: "4px",
              border: "1px solid rgba(124, 58, 237, 0.5)",
              overflow: "hidden",
              pointerEvents: "none",
              userSelect: "none"
            }}
          >
            <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", gap: "6px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid rgba(6, 182, 212, 0.3)", paddingBottom: "2px", color: "#06b6d4", fontWeight: "bold" }}>
                <span>RONAK_TERMINAL v4.2</span>
                <span style={{ animation: "pulse 1.2s infinite" }}>● ACTIVE</span>
              </div>
              <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "3px", color: "#a5b4fc" }}>
                <div>&gt; Loading core components... [OK]</div>
                <div>&gt; React 19 Frontend loaded [OK]</div>
                <div>&gt; Initializing 3D orbital canvas [OK]</div>
                <div style={{ color: "#34d399", fontWeight: "bold" }}>&gt; STATUS: Web experiences optimized. Ready to build.</div>
              </div>
              <div style={{ fontSize: "5px", color: "#94a3b8", display: "flex", justifyContent: "space-between" }}>
                <span>C:\portfolio&gt; _</span>
                <span>SYSTEM LOCK: FALSE</span>
              </div>
            </div>
          </Html>
        </group>

        {/* HOLOGRAPHIC FLOATING PARTICLE SYSTEM (Active on hover!) */}
        {hovered && (
          <group position={[0, 1.2, 0.1]}>
            {Array.from({ length: 24 }).map((_, i) => {
              const randX = (Math.random() - 0.5) * 2.8;
              const randY = Math.random() * 1.5;
              const randZ = (Math.random() - 0.5) * 1.5;
              const scale = Math.random() * 0.06 + 0.02;
              const color = Math.random() > 0.5 ? "#06b6d4" : "#7c3aed";

              return (
                <mesh key={i} position={[randX, randY, randZ]}>
                  <icosahedronGeometry args={[scale, 0]} />
                  <meshBasicMaterial color={color} transparent opacity={0.8} />
                </mesh>
              );
            })}
          </group>
        )}
      </group>
    </Float>
  );
};

export default Laptop;
