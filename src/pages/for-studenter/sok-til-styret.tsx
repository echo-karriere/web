import React from "react";
import Layout from "../../components/common/Layout";
import SEO from "../../components/common/Seo";
import { Container } from "../../components/common/Container";
import CommiteeApplication from "../../components/forms/CommiteeApplicationForm";

const Index: React.FC = () => (
  <Layout>
    <SEO title="Søk til styret" />
    <Container>
      <CommiteeApplication />
    </Container>
  </Layout>
);
export default Index;
