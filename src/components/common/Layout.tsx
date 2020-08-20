import React from "react";
import { ThemeProvider } from "styled-components";

import Header from "./Header";
import SEO from "./Seo";

import theme from "../../styles/theme";
import Footer from "./Footer";

import "../../styles/global.scss";
import styles from "./Layout.module.scss";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <SEO />
        <div className={styles.wrapper}>
          <Header />
          {children}
          <Footer />
        </div>
      </>
    </ThemeProvider>
  );
};

export default Layout;
