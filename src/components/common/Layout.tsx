import React from "react";

import { Footer } from "./Footer";
import { Header } from "./Header";

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
