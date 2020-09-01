import React from "react";
import { Layout } from "../components/common/Layout";
import { Intro } from "../components/landing/Intro";
import { SEO } from "../components/common/Seo";

export default function Index(): JSX.Element {
  return (
    <Layout>
      <SEO />
      <Intro />
    </Layout>
  );
}
