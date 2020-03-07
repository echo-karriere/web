import React from "react";
import styled from "styled-components";

import c from "../../styles/constants";

const Wrapper = styled.div`
  background: url("/images/mountains.svg");
  background-size: contain;
  height: 60vh;
`;

const Hello = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${c.color.textColor};
  text-align: center;
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
