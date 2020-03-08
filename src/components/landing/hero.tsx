import React from "react";
import styled from "styled-components";
import { Link, useStaticQuery, graphql } from "gatsby";
import { math } from "polished";

import { Container } from "../common/container";

import mountains from "../../assets/mountains.svg";

const Wrapper = styled.div`
  background-color: ${props => props.theme.brand.color4};
  padding-top: ${props => props.theme.size.spacing};
`;

const Hello = styled.div`
  justify-self: start;

  @media screen and (min-width: ${props => props.theme.screen.md}) {
    justify-self: center;
  }
`;

const HeroImage = styled.figure`
  width: 100%;
  margin: 0;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  grid-gap: ${props => math(`${props.theme.size.spacing} * 2`)};

  @media screen and (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    grid-gap: ${props => math(`${props.theme.size.spacing} * 3`)};

    > ${HeroImage} {
      order: 2;
    }
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  padding-bottom: 0;
  margin-bottom: 0;

  @media screen and (min-width: ${props => props.theme.screen.md}) {
    font-size: 3rem;
  }
`;

const SubTitle = styled.h2`
  font-size: 1.5rem;
  color: ${props => props.theme.color.grey};

  @media screen and (min-width: ${props => props.theme.screen.md}) {
    font-size: 2rem;
  }
`;

const StyledLink = styled(Link)`
  font-size: 1.2rem;

  &:visited {
    color: ${props => props.theme.color.textColor};
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
      <Container>
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
              <StyledLink to="/interest/">Meld interesse ➔</StyledLink>
            </p>
          </Hello>
        </Grid>
      </Container>
    </Wrapper>
  );
};

export default Hero;
