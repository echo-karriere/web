import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

import { WideContainer } from "./container";
import useNavigationData, { NavItem } from "../../queries/useNavigationData";
import { math } from "polished";

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
  align-self: flex-start;

  @media screen and (min-width: ${({ theme }) => theme.screen.md}) {
    max-width: 50%;
    align-self: center;
  }
`;

const Ul = styled.ul`
  list-style: none;
  margin: 0;
`;

const Li = styled.li`
  padding-bottom: ${({ theme }) => math(`${theme.size.spacing} / 4`)};
  margin-bottom: 0;
`;

const FooterLink = styled(Link)`
  color: ${({ theme }) => theme.color.textColor};
  text-decoration: none;

  &:visited {
    color: ${({ theme }) => theme.color.textColor};
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
