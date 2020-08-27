import React from "react";
import { SEO } from "../components/common/Seo";
import { Layout } from "../components/common/Layout";
import { Container } from "../components/common/Container";

interface PageData {
  pageContext: {
    title: string;
    content: string;
  };
}

export default function PageTemplate({
  pageContext: { title, content },
}: PageData): JSX.Element {
  return (
    <Layout>
      <SEO title={title} />
      <Container>
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </Container>
    </Layout>
  );
}
