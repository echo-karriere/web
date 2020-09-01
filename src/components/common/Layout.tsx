import React from "react";

import { Header } from "./Header";
import { Footer } from "./Footer";

import "../../styles/global.scss";
import styles from "./Layout.module.scss";

interface Props {
  children: React.ReactNode;
}

export function Layout({ children }: Props): JSX.Element {
  return (
    <>
      <div className={styles.wrapper}>
        <Header />
        {children}
        <Footer />
      </div>
    </>
  );
}
