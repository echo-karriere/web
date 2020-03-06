import React from "react";
import styled from "styled-components";

import mountains from "../../assets/mountains.svg";
import c from "../../styles/constants";

const Image = styled.img`
  max-width: 100%;
  width: 100%;
`;

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  height: 100vh;
  justify-content: space-around;
  width: 100%;
`;

const About = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  @media screen and (min-width: ${c.size.smallWidth}px) {
    flex-direction: row;
  }
`;

const Hello = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: end;
  @media screen and (min-width: ${c.size.smallWidth}px) {
    width: 100%;
  }
`;

const Intro: React.FC = () => {
  return (
    <Wrapper>
      <About>
        <Hello>
          <h1>echo karriere</h1>
          <h2>Velkommen til 2020!</h2>
        </Hello>
        <div>
          <Image
            src={mountains}
            alt="An image of mountains and trees with people walking in front of it"
          />
        </div>
      </About>
    </Wrapper>
  );
};

export default Intro;
