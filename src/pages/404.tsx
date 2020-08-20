import React from "react";

import Layout from "../components/common/Layout";
import SEO from "../components/common/Seo";
import styles from "./404.module.scss";

const FourOhFour: React.FC = () => {
  return (
    <Layout>
      <SEO title="404: Ikke funnet" />
      <main className={styles.wrapper}>
        <h1>404: Vi finner ikke siden din :(</h1>
        <p>Gå tilbake eller prøvd på nytt.</p>
      </main>
    </Layout>
  );
};

export default FourOhFour;
