import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import c from "../../styles/constants";

const Head = styled.header`
  line-height: 56px;
  position: relative;
`;

const Title = styled(Link)`
  color: ${c.color.textColor};
  font-size: 1.31951rem;
  text-transform: uppercase;
`;

const Nav = styled.nav`
  float: right;
`;

const NavLink = styled(Link)`
  color: ${c.color.textColor};
  text-decoration: none;
  &:not(:last-child) {
    margin-right: ${c.size.spacingUnit}px;
  }
  @media screen and (max-width: ${c.size.smallWidth}) {
    margin-left: ${c.size.spacingUnit}px;
    padding: ${c.size.spacingUnit}px 0;
    &:not(:last-child) {
      margin-right: 0;
    }
  }
`;

export default function Header() {
  return (
    <Head>
      <Title to="/">Hjem</Title>
      <Nav>
        <NavLink to="#">Program</NavLink>
        <NavLink to="#">For bedrifter</NavLink>
        <NavLink to="#">Om</NavLink>
      </Nav>
    </Head>
  );
}
