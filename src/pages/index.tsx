import React from "react";
import Layout from "../components/common/Layout";
import Intro from "../components/landing/intro";
import SEO from "../components/common/Seo";

const Index: React.FC = () => (
  <Layout>
    <SEO title="Hjem" />
    <Intro />
  </Layout>
);

export default Index;
