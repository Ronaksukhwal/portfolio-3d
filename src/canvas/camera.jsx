import { useThree, useFrame } from "@react-three/fiber";
import useMouse from "../hooks/useMouse";

const CameraController = () => {
  const { camera } = useThree();
  const mouse = useMouse();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    const isMobile = state.size.width < 768;
    const isTablet = state.size.width >= 768 && state.size.width < 1024;

    let baseZ = 8;
    if (isMobile) {
      baseZ = 13.5;
    } else if (isTablet) {
      baseZ = 10.5;
    }

    const targetX = mouse.x * (isMobile ? 1.0 : 2.4) + Math.sin(t * 0.35) * 0.32;
    const targetY = mouse.y * (isMobile ? 0.6 : 1.2) + Math.cos(t * 0.28) * 0.18;
    const targetZ = baseZ + Math.sin(t * 0.25) * 0.28;

    camera.position.x += (targetX - camera.position.x) * 0.08;
    camera.position.y += (targetY - camera.position.y) * 0.08;
    camera.position.z += (targetZ - camera.position.z) * 0.05;
    camera.lookAt(0, 0, 0);
  });

  return null;
};

export default CameraController;