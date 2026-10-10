"use client";

import Particles from "react-tsparticles";

export default function ParticlesBackground() {
  return (
    <Particles
      options={{
        particles: {
          number: {
            value: 40,
          },
          color: {
            value: "#00d4ff",
          },
          move: {
            enable: true,
            speed: 1,
          },
          links: {
            enable: true,
            color: "#00d4ff",
          },
        },
      }}
      className="fixed inset-0 -z-10"
    />
  );
}