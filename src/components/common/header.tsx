import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { Container } from "./container";

const Head = styled.div`
  line-height: 56px;
  background-color: ${props => props.theme.brand.color1};
`;

const Title = styled(Link)`
  color: ${props => props.theme.color.textColor};
  font-size: 1.31951rem;
  text-transform: uppercase;

  &:visited {
    color: ${props => props.theme.color.textColor};
  }
`;

const Nav = styled.nav`
  float: right;
`;

const NavLink = styled(Link)`
  color: ${props => props.theme.color.textColor};
  text-decoration: none;

  &:not(:last-child) {
    margin-right: ${props => props.theme.size.spacing};
  }

  &:visited {
    color: ${props => props.theme.color.textColor};
  }

  @media screen and (min-width: ${props => props.theme.screen.md}) {
    margin-left: ${props => props.theme.size.spacing};
    padding: ${props => props.theme.size.spacing} 0;

    &:not(:last-child) {
      margin-right: 0;
    }
  }
`;

export default function Header() {
  return (
    <Head>
      <Container>
        <Title to="/">Hjem</Title>
        <Nav>
          <NavLink to="/program">Program</NavLink>
          <NavLink to="/for-bedrifter">For bedrifter</NavLink>
          <NavLink to="/about">Om</NavLink>
        </Nav>
      </Container>
    </Head>
  );
}
