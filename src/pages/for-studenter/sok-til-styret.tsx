import React from "react";
import { Layout } from "../../components/common/Layout";
import { SEO } from "../../components/common/Seo";
import { Container } from "../../components/common/Container";
import { CommitteeApplication } from "../../components/forms/CommiteeApplicationForm";

export default function Index(): JSX.Element {
  return (
    <Layout>
      <SEO
        title="Søk til styret"
        description="Send din søknad til styret her!"
      />
      <Container>
        <CommitteeApplication />
      </Container>
    </Layout>
  );
}
