import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";

import { Container } from "../common/container";
import Hero from "./hero";

import aboutUrl from "../../assets/about.svg";
import hiringUrl from "../../assets/hiring.svg";
import studentsUrl from "../../assets/students.svg";
import { math } from "polished";

const Art = styled.figure`
  margin: 0;
  max-width: ${({ theme }) => math(`${theme.screen.md} / 2`)};
  width: 100%;
`;

type GridType = {
  readonly inverse?: boolean;
};

const Grid = styled.div<GridType>`
  display: grid;
  grid-template-columns: 3fr 2fr;
  grid-gap: ${({ theme }) => math(`${theme.size.spacing} * 2`)};
  text-align: right;
  align-items: center;
  justify-items: center;
  margin: ${({ theme }) => theme.size.spacing} 0;
  ${props =>
    props.inverse &&
    `
    text-align: left;
    grid-template-columns: 2fr 3fr;
  `}

  h2 {
    margin-bottom: 16px;
  }

  @media (max-width: ${({ theme }) => theme.screen.md}) {
    grid-template-columns: 1fr;
    text-align: left;

    &:last-child {
      margin-bottom: ${({ theme }) => theme.size.spacing};
    }

    ${props =>
      props.inverse &&
      `
        ${Art} {
          order: 2;
        }
    `}
  }
`;

const Intro: React.FC = () => {
  const { apiLanding: data } = useStaticQuery(graphql`
    query IntroPage {
      apiLanding {
        about
        for_companies
        for_students
      }
    }
  `);

  return (
    <>
      <Hero />
      <Container>
        <Grid>
          <div>
            <h2>Om echo karriere</h2>
            <div dangerouslySetInnerHTML={{ __html: data.about }} />
          </div>
          <Art>
            <img
              src={aboutUrl}
              alt="Four persons standing around with a small dog in front."
            />
          </Art>
        </Grid>
        <Grid inverse>
          <Art>
            <img
              src={hiringUrl}
              alt="Art showing a person looking at online resumes."
            />
          </Art>
          <div>
            <h2>For bedrifter</h2>
            <div dangerouslySetInnerHTML={{ __html: data.for_companies }} />
          </div>
        </Grid>
        <Grid>
          <div>
            <h2>For studenter</h2>
            <div dangerouslySetInnerHTML={{ __html: data.for_students }} />
          </div>
          <Art>
            <img src={studentsUrl} alt="A graduation cap." />
          </Art>
        </Grid>
      </Container>
    </>
  );
};

export default Intro;
