import React from "react";
import Layout from "../components/common/layout";
import SEO from "../components/common/seo";
import { Container } from "../components/common/container";
import ContactUs from "../components/forms/contact";

export default function Index() {
  return (
    <Layout>
      <SEO title="Kontakt oss" />
      <Container>
        <ContactUs />
      </Container>
    </Layout>
  );
}
