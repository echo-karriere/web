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

const Logo = styled.img`
  width: 160px;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: ${({ theme }) => theme.screen.md}) {
    flex-direction: row;
  }
`;

const NavLinks = styled.div`
  margin-left: auto;
  display: flex;
  justify-content: center;

  @media screen and (max-width: ${({ theme }) => theme.screen.sm}) {
    margin: 0 auto;
  }
`;

const NavLink = styled(Link)`
  color: ${({ theme }) => theme.color.textColor};
  text-decoration: none;
  align-self: center;

  &:not(:last-child) {
    margin-right: ${({ theme }) => theme.size.spacing};
  }

  &:visited {
    color: ${({ theme }) => theme.color.textColor};
  }

  @media screen and (min-width: ${({ theme }) => theme.screen.md}) {
    margin-left: ${({ theme }) => theme.size.spacing};
  }
`;

export default function Header() {
  return (
    <Head>
      <Container>
        <Nav>
          <Title to="/">
            <Logo src="/logo.png" />
          </Title>
          <NavLinks>
            <NavLink to="/program">Program</NavLink>
            <NavLink to="/for-bedrifter">For bedrifter</NavLink>
            <NavLink to="/about">Om</NavLink>
          </NavLinks>
        </Nav>
      </Container>
    </Head>
  );
}
