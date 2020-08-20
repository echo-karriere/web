import React from "react";
import SEO from "../components/common/Seo";
import Layout from "../components/common/Layout";
import { Container } from "../components/common/Container";

interface PageData {
  pageContext: {
    title: string;
    content: string;
  };
}

const PageTemplate: React.FC<PageData> = ({
  pageContext: { title, content },
}: PageData) => {
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
