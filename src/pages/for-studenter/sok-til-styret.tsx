import React from "react";
import { Layout } from "../../components/common/Layout";
import { SEO } from "../../components/common/Seo";
import { Container } from "../../components/common/Container";
import { Content } from "../../components/common/Content";

export default function Index(): JSX.Element {
  return (
    <Layout>
      <SEO
        title="Søk til styret"
        description="Send din søknad til styret her!"
      />
      <Container>
        <Content title="Søk til styret" subtitle="Bli med!">
          <div>
            <p>Vi tar ikke inn medlemmer for øyeblikket.</p>
          </div>
        </Content>
      </Container>
    </Layout>
  );
}
