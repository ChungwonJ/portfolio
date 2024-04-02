import React, { useCallback, useEffect } from 'react'
import Particles from "react-tsparticles";
import { loadStarsPreset } from "tsparticles-preset-stars";

function StarBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadStarsPreset(engine);
  }, []);
  return (
    <>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          preset: "stars",
          background: {
            color: "#000",
          },
          fullScreen: {
            enable: true,
            zIndex: -1,
          },
        }}
      />
    </>
  )
}

export default StarBackground