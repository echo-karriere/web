import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";
import { WideContainer } from "./container";
import Navbar from "../navbar";

const HeaderWrapper = styled.div`
  line-height: 56px;
`;

const Title = styled(Link)`
  align-self: center;
`;

const Logo = styled.img`
  padding: 0;
  margin: 0;
  display: block;
`;

const NavContainer = styled(WideContainer)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-height: 70px;
`;

const Header: React.FC = () => {
  const query = useStaticQuery(graphql`
    query LogoQuery {
      logoImage: file(name: { eq: "echo-karriere" }) {
        childImageSharp {
          fixed(width: 160, height: 70) {
            src
            srcSet
            base64
          }
        }
      }
    }
  `);

  return (
    <HeaderWrapper>
      <NavContainer>
        <Title to="/">
          <Logo
            src={query.logoImage.childImageSharp.fixed.base64}
            srcSet={query.logoImage.childImageSharp.fixed.srcSet}
            alt="echo karriere logo"
          />
        </Title>
        <Navbar />
      </NavContainer>
    </HeaderWrapper>
  );
};

export default Header;
