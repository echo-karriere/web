import React from "react";
import { ThemeProvider } from "styled-components";

import Header from "./header";
import SEO from "./seo";

import theme from "../../styles/theme";
import GlobalStyle from "../../styles/global";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <SEO />
        <Header />
        {children}
      </>
    </ThemeProvider>
  );
};

export default Layout;
