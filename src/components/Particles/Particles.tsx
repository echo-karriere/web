import React from "react";
import styled from "styled-components";
import Particles from "react-particles-js";

const ParticleWrapper = styled.div`
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  z-index: -1;
  canvas {
    position: absolute;
  }
`;

const BackgroundParticles = () => {
  return (
    <ParticleWrapper>
      <Particles
        params={{
          particles: {
            number: {
              value: 150
            },
            size: {
              value: 3
            }
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "repulse"
              }
            }
          }
        }}
      />
    </ParticleWrapper>
  );
};

export default BackgroundParticles;
