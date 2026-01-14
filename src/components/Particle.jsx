import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

function Particle() {
  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: false },
        background: { color: { value: "transparent" } },
        particles: {
          number: { value: 120, density: { enable: true, area: 800 } },
          color: { value: "#38bdf8" }, // change to white or light yellow for stars effect
          opacity: { value: 0.4 },
          size: { value: 1 },
          move: { enable: true, speed: 0.2, direction: "none", outModes: { default: "out" } },
        },
      }}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
      }}
    />
  );
}

export default Particle;
