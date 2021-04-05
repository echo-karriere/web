import React from "react";
import { InterestForm } from "../../components";
import { Layout } from "../../components";
import { SEO } from "../../components";
import { Container } from "../../components";

export default function InterestPage(): JSX.Element {
  return (
    <Layout>
      <SEO
        title="Arrangementstypeskjema"
        description="Gi tilbakemelding på om årets arrangement bør holdes fysisk eller digitalt."
      />
      <Container>
        <InterestForm />
      </Container>
    </Layout>
  );
}
