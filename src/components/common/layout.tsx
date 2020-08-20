import React from "react";
import styled, { ThemeProvider } from "styled-components";

import Header from "./header";
import SEO from "./seo";

import theme from "../../styles/theme";
import GlobalStyle from "../../styles/global";
import Footer from "./footer";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <SEO />
        <Wrapper>
          <Header />
          {children}
          <Footer />
        </Wrapper>
      </>
    </ThemeProvider>
  );
};

export default Layout;
