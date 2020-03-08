import React from "react";
import InterestForm from "../components/forms/interest";
import Layout from "../components/common/layout";
import SEO from "../components/common/seo";
import { Container } from "../components/common/container";

export default function InterestPage() {
  return (
    <Layout>
      <SEO title="Interesseskjema" />
      <Container>
        <InterestForm />
      </Container>
    </Layout>
  );
}
