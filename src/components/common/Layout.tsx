import React from "react";

import Header from "./Header";
import SEO from "./Seo";

import Footer from "./Footer";

import "../../styles/global.scss";
import styles from "./Layout.module.scss";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <SEO />
      <div className={styles.wrapper}>
        <Header />
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
