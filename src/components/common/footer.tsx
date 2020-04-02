import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

import { WideContainer } from "./container";
import useNavigationData, { NavItem } from "../../queries/useNavigationData";

const Wrapper = styled.footer`
  padding: ${({ theme }) => theme.size.spacing} 0;
  background-color: ${({ theme }) => theme.brand.color4};
`;

const FlexContainer = styled(WideContainer)`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: space-around;

  @media screen and (min-width: ${({ theme }) => theme.screen.md}) {
    flex-direction: row;
  }
`;

const FlexDiv = styled.div`
  max-width: 100%;

  @media screen and (min-width: ${({ theme }) => theme.screen.md}) {
    max-width: 50%;
  }
`;

const Ul = styled.ul`
  list-style: none;
  margin: 0;
`;

const Footer = () => {
  const navigation = useNavigationData();

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
            {navigation.map((nav: NavItem) => (
              <li key={nav.link}>
                <Link to={nav.link} key={nav.link}>
                  {nav.title}
                </Link>
              </li>
            ))}
          </Ul>
        </FlexDiv>
      </FlexContainer>
    </Wrapper>
  );
};

export default Footer;
