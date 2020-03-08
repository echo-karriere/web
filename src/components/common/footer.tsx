import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

import { Container } from "./container";

const Wrapper = styled.footer`
  padding: ${props => props.theme.size.spacing} 0;
  background-color: ${props => props.theme.brand.color4};
`;

const FlexContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: space-around;

  @media screen and (min-width: ${props => props.theme.screen.md}) {
    flex-direction: row;
  }
`;

const FlexDiv = styled.div`
  max-width: 100%;

  @media screen and (min-width: ${props => props.theme.screen.md}) {
    max-width: 50%;
  }
`;

const Ul = styled.ul`
  list-style: none;
  margin: 0;
`;

const Footer = () => {
  return (
    <Wrapper>
      <FlexContainer>
        <FlexDiv>
          <h3>echo karriere</h3>
          <p>
            echo karriere er en karrieredag for IT-studenter i Bergensområdet
            som arrangeres 17. og 18. september 2020.
          </p>
        </FlexDiv>
        <FlexDiv>
          <Ul>
            <li>
              <Link to="/about">Om</Link>
            </li>
            <li>
              <Link to="/for-bedrifter">For bedrifter</Link>
            </li>
            <li>
              <Link to="/program">Program</Link>
            </li>
          </Ul>
        </FlexDiv>
      </FlexContainer>
    </Wrapper>
  );
};

export default Footer;
