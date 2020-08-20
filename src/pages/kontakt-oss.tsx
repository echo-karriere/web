import React from "react";
import Layout from "../components/common/Layout";
import SEO from "../components/common/Seo";
import { Container } from "../components/common/Container";
import ContactUs from "../components/forms/contact";

const Index: React.FC = () => (
  <Layout>
    <SEO title="Kontakt oss" />
    <Container>
      <ContactUs />
    </Container>
  </Layout>
);
export default Index;
