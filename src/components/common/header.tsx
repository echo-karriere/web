import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { Container } from "./container";

const Head = styled.div`
  line-height: 56px;
  background-color: ${({ theme }) => theme.brand.color1};
`;

const Title = styled(Link)`
  color: ${({ theme }) => theme.color.textColor};
  font-size: 1.31951rem;
  text-transform: uppercase;

  &:visited {
    color: ${({ theme }) => theme.color.textColor};
  }
`;

const Nav = styled.nav`
  float: right;
`;

const NavLink = styled(Link)`
  color: ${({ theme }) => theme.color.textColor};
  text-decoration: none;

  &:not(:last-child) {
    margin-right: ${({ theme }) => theme.size.spacing};
  }

  &:visited {
    color: ${({ theme }) => theme.color.textColor};
  }

  @media screen and (min-width: ${({ theme }) => theme.screen.md}) {
    margin-left: ${({ theme }) => theme.size.spacing};
    padding: ${({ theme }) => theme.size.spacing} 0;

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
