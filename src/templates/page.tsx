import React from "react";
import SEO from "../components/common/seo";
import Layout from "../components/common/layout";

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
      <main>
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </main>
    </Layout>
  );
};

export default PageTemplate;
