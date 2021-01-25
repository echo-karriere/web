import React from "react";
import { InterestForm } from "../../components/forms/InterestForm";
import { Layout } from "../../components/common/Layout";
import { SEO } from "../../components/common/Seo";
import { Container } from "../../components/common/Container";

export default function InterestPage(): JSX.Element {
  return (
    <Layout>
      <SEO
        title="Interesseskjema"
        description="Vis interesse for å delta på echo karriere sin karrieredag"
      />
      <Container>
        <InterestForm />
      </Container>
    </Layout>
  );
}
