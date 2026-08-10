import Planet from "./Planet";

const solarConfig = [
  { name: "Mercury", position: 1.7, color: "#9ca3af", speed: 1.8, size: 0.12, phase: 0.0, tilt: 0.08, eccentricity: 1.05, bob: 0.02 },
  { name: "Venus", position: 2.4, color: "#eab308", speed: 1.3, size: 0.18, phase: 1.5, tilt: -0.06, eccentricity: 1.02, bob: 0.03 },
  { name: "Earth", position: 3.2, color: "#3b82f6", speed: 1.0, size: 0.22, phase: 3.0, tilt: 0.05, eccentricity: 1.0, bob: 0.04, hasMoon: true },
  { name: "Mars", position: 4.0, color: "#ef4444", speed: 0.8, size: 0.16, phase: 4.5, tilt: 0.12, eccentricity: 1.08, bob: 0.04 },
  { name: "Jupiter", position: 5.2, color: "#f97316", speed: 0.55, size: 0.38, phase: 0.5, tilt: -0.04, eccentricity: 1.04, bob: 0.06 },
  { name: "Saturn", position: 6.6, color: "#fde047", speed: 0.4, size: 0.32, phase: 2.2, tilt: 0.1, eccentricity: 1.06, bob: 0.07, hasRings: true },
  { name: "Uranus", position: 7.8, color: "#22d3ee", speed: 0.28, size: 0.25, phase: 3.8, tilt: -0.08, eccentricity: 1.03, bob: 0.08 },
  { name: "Neptune", position: 9.0, color: "#1d4ed8", speed: 0.2, size: 0.24, phase: 5.0, tilt: 0.05, eccentricity: 1.02, bob: 0.09 }
];

const SolarSystem = () => {
  return (
    <>
      {/* Flat light-colored orbit path rings */}
      {solarConfig.map((planet) => (
        <mesh key={`ring-${planet.name}`} rotation={[planet.tilt + Math.PI / 2, 0, 0]}>
          <ringGeometry args={[planet.position * planet.eccentricity - 0.01, planet.position * planet.eccentricity + 0.01, 128]} />
          <meshBasicMaterial color="#38bdf8" transparent opacity={0.12} side={2} />
        </mesh>
      ))}

      {/* Render the Planet components */}
      {solarConfig.map((planet) => (
        <Planet
          key={planet.name}
          name={planet.name}
          position={planet.position}
          color={planet.color}
          speed={planet.speed}
          size={planet.size}
          phase={planet.phase}
          orbitTilt={planet.tilt}
          eccentricity={planet.eccentricity}
          bob={planet.bob}
          emissive={planet.color}
          hasRings={planet.hasRings}
          hasMoon={planet.hasMoon}
        />
      ))}
    </>
  );
};

export default SolarSystem;
