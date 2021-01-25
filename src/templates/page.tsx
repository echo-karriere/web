import React from "react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { SEO } from "../components/common/Seo";
import { Layout } from "../components/common/Layout";
import { Container } from "../components/common/Container";
import { Content } from "../components/common/Content";

interface PageData {
  pageContext: {
    frontmatter: {
      title: string;
      description: string;
    };
    body: string;
  };
}

export default function PageTemplate({ pageContext }: PageData): JSX.Element {
  const { frontmatter, body } = pageContext;
  return (
    <Layout>
      <SEO title={frontmatter.title} description={frontmatter.description} />
      <Container>
        <Content title={frontmatter.title}>
          <MDXRenderer>{body}</MDXRenderer>
        </Content>
      </Container>
    </Layout>
  );
}
