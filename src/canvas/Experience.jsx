import Lights from "./Lights";
import StarsCanvas from "./effects/Stars";
import Particles from "./effects/Particles";
import Sun from "./models/Sun";
import SolarSystem from "./models/SolarSystem";
import Ufo from "./models/Ufo";
import CameraController from "./Camera";

const Experience = () => {
  return (
    <>
      <Lights />
      <CameraController />
      <Sun />
      <SolarSystem />
      <Ufo />
      <Particles count={250} />
      <StarsCanvas />
    </>
  );
};

export default Experience;