import React from "react";
import InterestForm from "../../components/forms/interest";
import Layout from "../../components/common/Layout";
import SEO from "../../components/common/Seo";
import { Container } from "../../components/common/Container";

const InterestPage: React.FC = () => (
  <Layout>
    <SEO title="Interesseskjema" />
    <Container>
      <InterestForm />
    </Container>
  </Layout>
);
export default InterestPage;
