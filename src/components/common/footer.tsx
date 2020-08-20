import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

import { WideContainer } from "./container";
import useNavigationData, { NavItem } from "../../queries/useNavigationData";
import { math } from "polished";

const Wrapper = styled.footer`
  background-color: ${({ theme }) => theme.brand.color4};
  padding: ${({ theme }) => theme.size.spacing} 0;
`;

const FlexContainer = styled(WideContainer)`
  align-content: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  @media screen and (min-width: ${({ theme }) => theme.screen.md}) {
    flex-direction: row;
  }
`;

const FlexDiv = styled.div`
  align-self: flex-start;
  max-width: 100%;

  @media screen and (min-width: ${({ theme }) => theme.screen.md}) {
    align-self: center;
    max-width: 50%;
  }
`;

const Ul = styled.ul`
  list-style: none;
  margin: 0;
`;

const Li = styled.li`
  margin-bottom: 0;
  padding-bottom: ${({ theme }) => math(`${theme.size.spacing} / 4`)};
`;

const FooterLink = styled(Link)`
  color: ${({ theme }) => theme.color.textcolor};
  text-decoration: none;

  &:visited {
    color: ${({ theme }) => theme.color.textcolor};
  }
`;

const Footer: React.FC = () => {
  const navigation = useNavigationData();

  return (
    <Wrapper>
      <FlexContainer>
        <FlexDiv>
          <h3>echo karriere</h3>
          <p>
            echo karriere er en karrieredag for IT-studenter i Bergensområdet
            som arrangeres 12. februar 2021.
          </p>
        </FlexDiv>
        <FlexDiv>
          <h3>Lenker</h3>
          <Ul>
            {navigation.map((nav: NavItem) => (
              <Li key={nav.link}>
                <FooterLink to={nav.link} key={nav.link}>
                  {nav.title}
                </FooterLink>
              </Li>
            ))}
          </Ul>
        </FlexDiv>
      </FlexContainer>
    </Wrapper>
  );
};

export default Footer;
