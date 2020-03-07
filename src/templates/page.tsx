import React from "react";
import SEO from "../components/common/seo";
import Layout from "../components/common/layout";
import ContentWrapper from "../components/common/contentWrapper";

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
      <ContentWrapper>
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </ContentWrapper>
    </Layout>
  );
};

export default PageTemplate;
