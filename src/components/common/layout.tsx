import React from "react";
import styled from "styled-components";

import Header from "./header";
import GlobalStyle from "../../styles/global";
import c from "../../styles/constants";
import SEO from "./seo";

interface Props {
  children: React.ReactNode;
}

const Container = styled.div`
  margin: 0 auto;
  max-width: calc(${c.size.contentWidth}px - ${c.size.spacingUnit * 2}px);
  padding: 0 ${c.size.spacingUnit}px;

  @media screen and (max-width: ${c.size.largeWidth}px) {
    max-width: calc(${c.size.contentWidth}px - ${c.size.spacingUnit}px);
    padding: 0 ${c.size.spacingUnit / 2}px;
  }
`;

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <React.StrictMode>
      <GlobalStyle />
      <SEO />
      <Container>
        <Header />
        {children}
      </Container>
    </React.StrictMode>
  );
};

export default Layout;
