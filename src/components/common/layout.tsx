import React from "react";

import Header from "./header";
import SEO from "./seo";

import GlobalStyle from "../../styles/global";

interface Props {
  children: React.ReactNode;
}

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
