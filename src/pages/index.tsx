import React from "react";
import Layout from "../components/common/layout";
import Intro from "../components/landing/intro";
import SEO from "../components/common/seo";

export default function Index() {
  return (
    <Layout>
      <SEO title="Hjem" />
      <Intro />
    </Layout>
  );
}
