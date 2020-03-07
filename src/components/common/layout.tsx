import React from "react";

import Header from "./header";
import GlobalStyle from "../../styles/global";
import SEO from "./seo";

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
