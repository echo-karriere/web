import React from "react";
import InterestForm from "../components/forms/interest";
import Layout from "../components/common/layout";
import SEO from "../components/common/seo";
import ContentWrapper from "../components/common/contentWrapper";

export default function InterestPage() {
  return (
    <Layout>
      <SEO title="Interesseskjema" />
      <ContentWrapper>
        <InterestForm />
      </ContentWrapper>
    </Layout>
  );
}
