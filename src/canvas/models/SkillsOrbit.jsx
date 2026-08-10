import Planet from "./Planet";

const orbitConfig = [
  { position: 2.0, color: "#38bdf8", speed: 1.15, size: 0.24, phase: 0.0, tilt: 0.18, eccentricity: 1.1, bob: 0.06 },
  { position: 3.0, color: "#22c55e", speed: 0.92, size: 0.28, phase: 1.2, tilt: -0.12, eccentricity: 1.08, bob: 0.08 },
  { position: 4.0, color: "#a855f7", speed: 0.72, size: 0.34, phase: 2.0, tilt: 0.1, eccentricity: 1.15, bob: 0.1 },
  { position: 5.1, color: "#f59e0b", speed: 0.56, size: 0.4, phase: 2.8, tilt: -0.08, eccentricity: 1.22, bob: 0.12 },
];

const SkillsOrbit = () => {
  return (
    <>
      {orbitConfig.map((orbit) => (
        <mesh key={`ring-${orbit.position}`} rotation={[orbit.tilt, 0, 0]}>
          <torusGeometry args={[orbit.position, 0.012, 12, 180]} />
          <meshBasicMaterial color="#94a3b8" transparent opacity={0.18} />
        </mesh>
      ))}

      {orbitConfig.map((orbit) => (
        <Planet
          key={`planet-${orbit.position}`}
          position={orbit.position}
          color={orbit.color}
          speed={orbit.speed}
          size={orbit.size}
          phase={orbit.phase}
          orbitTilt={orbit.tilt}
          eccentricity={orbit.eccentricity}
          bob={orbit.bob}
          emissive={orbit.color}
        />
      ))}
    </>
  );
};

export default SkillsOrbit;