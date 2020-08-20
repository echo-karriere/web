import React from "react";
import styled from "styled-components";
import { Link, useStaticQuery, graphql } from "gatsby";
import { math } from "polished";

import { WideContainer } from "../common/container";

import mountains from "../../assets/mountains.svg";

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.brand.color4};
  padding-top: ${({ theme }) => theme.size.spacing};
`;

const Hello = styled.div`
  justify-self: start;

  @media screen and (min-width: ${({ theme }) => theme.screen.md}) {
    justify-self: center;
  }
`;

const HeroImage = styled.figure`
  margin: 0;
  width: 100%;
`;

const Grid = styled.div`
  align-items: center;
  display: grid;
  grid-gap: ${({ theme }) => math(`${theme.size.spacing} * 2`)};
  grid-template-columns: 1fr 1fr;

  @media screen and (max-width: ${({ theme }) => theme.screen.md}) {
    grid-gap: ${({ theme }) => math(`${theme.size.spacing} * 3`)};
    grid-template-columns: 1fr;

    > ${HeroImage} {
      order: 2;
    }
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 0;
  padding-bottom: 0;

  @media screen and (min-width: ${({ theme }) => theme.screen.md}) {
    font-size: 3rem;
  }
`;

const SubTitle = styled.h2`
  color: ${({ theme }) => theme.color.grey};
  font-size: 1.5rem;

  @media screen and (min-width: ${({ theme }) => theme.screen.md}) {
    font-size: 2rem;
  }
`;

export const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.color.textcolor};
  font-size: 1.2rem;

  &:visited {
    color: ${({ theme }) => theme.color.textcolor};
  }
`;

const Hero: React.FC = () => {
  const { apiLanding: data } = useStaticQuery(graphql`
    query HeroPage {
      apiLanding {
        title
        subtitle
      }
    }
  `);

  return (
    <Wrapper>
      <WideContainer>
        <Grid>
          <HeroImage>
            <img
              src={mountains}
              alt="A mountain range with people walking in front of it."
            />
          </HeroImage>
          <Hello>
            <Title>{data.title}</Title>
            <SubTitle>{data.subtitle}</SubTitle>
            <p>
              <StyledLink to="/utsatt-til-2021/">Utsatt til 2021 ➔</StyledLink>
            </p>
          </Hello>
        </Grid>
      </WideContainer>
    </Wrapper>
  );
};

export default Hero;
