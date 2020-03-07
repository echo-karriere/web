import React from "react";
import styled from "styled-components";

import c from "../../styles/constants";

const Wrapper = styled.div`
  background: url("/images/mountains.svg");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  height: 60vh;
`;

const Hello = styled.div`
  position: absolute;
  bottom: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${c.color.textColor};
  text-align: center;
  width: 100vw;

  @media screen and (max-width: ${c.size.tablet}px) {
    bottom: 15%;
  }

  @media screen and (max-width: ${c.size.mobile}px) {
    bottom: 0;
  }
`;

const Intro: React.FC = () => {
  return (
    <Wrapper>
      <Hello>
        <h1>echo karriere</h1>
        <h2>Velkommen til 2020!</h2>
      </Hello>
    </Wrapper>
  );
};

export default Intro;
