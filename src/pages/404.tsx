import React from "react";
import { Content } from "../components/common/Content";

import { Layout } from "../components/common/Layout";
import { SEO } from "../components/common/Seo";
import styles from "./404.module.scss";

export default function FourOhFour(): JSX.Element {
  return (
    <Layout>
      <SEO title="404: Ikke funnet" />
      <main className={styles.wrapper}>
        <Content title="404: Vi finner ikke siden din :(">
          <p>Gå tilbake eller prøvd på nytt.</p>
        </Content>
      </main>
    </Layout>
  );
}
