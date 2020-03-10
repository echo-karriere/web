import React from "react";
import SEO from "../components/common/seo";
import Layout from "../components/common/layout";
import { Container } from "../components/common/container";

interface PageData {
  pageContext: {
    title: string;
    content: string;
  };
}

const PageTemplate = ({ pageContext: { title, content } }: PageData) => {
  return (
    <Layout>
      <SEO title={title} />
      <Container>
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </Container>
    </Layout>
  );
};

export default PageTemplate;
