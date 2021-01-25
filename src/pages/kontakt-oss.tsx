import React from "react";
import { Layout } from "../components/common/Layout";
import { SEO } from "../components/common/Seo";
import { Container } from "../components/common/Container";
import { ContactUs } from "../components/forms/ContactUs";

export default function Index(): JSX.Element {
  return (
    <Layout>
      <SEO
        title="Kontakt oss"
        description="Trenger du å nå ut til styret i echo karriere? Send oss en epost her."
      />
      <Container>
        <ContactUs />
      </Container>
    </Layout>
  );
}
