import React from "react";
import styled from "styled-components";

import Header from "./header";
import SEO from "./seo";

import c from "../../styles/constants";
import GlobalStyle from "../../styles/global";

interface Props {
  children: React.ReactNode;
}

const ContentWrapper = styled.section`
  width: ${c.size.contentWidth}px;
`;

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <React.StrictMode>
      <GlobalStyle />
      <SEO />
      <Header />
      {children}
    </React.StrictMode>
  );
};

export default Layout;
