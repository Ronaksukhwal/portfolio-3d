import { Environment } from "@react-three/drei";

const Lights = () => {
  return (
    <>
      <ambientLight intensity={1.5} color="#ffffff" />
      <directionalLight position={[10, 10, 5]} intensity={3} color="#e2e8f0" />
      <directionalLight position={[-10, -10, -5]} intensity={1.5} color="#8b5cf6" />
      <pointLight position={[0, 0, 0]} intensity={2} color="#ec4899" />
      <Environment preset="city" />
    </>
  );
};

export default Lights;