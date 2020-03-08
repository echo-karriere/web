import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";

const Wrapper = styled.div`
  background: url("/images/mountains.svg");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  height: 60vh;
`;

const Hello = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${props => props.theme.color.textColor};
  text-align: center;
  width: 100vw;

  @media screen and (min-width: ${props => props.theme.screen.sm}) {
    bottom: 15%;
  }

  @media screen and (min-width: ${props => props.theme.screen.md}) {
    bottom: 50%;
  }
`;

const Intro: React.FC = () => {
  const { apiLanding: data } = useStaticQuery(graphql`
    query IntroPage {
      apiLanding {
        title
        subtitle
        about
      }
    }
  `);

  return (
    <>
      <Wrapper>
        <Hello>
          <h1>{data.title}</h1>
          <h2>{data.subtitle}</h2>
        </Hello>
      </Wrapper>
    </>
  );
};

export default Intro;
