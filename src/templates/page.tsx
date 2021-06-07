import { MDXRenderer } from "gatsby-plugin-mdx";

import { Container, Content, Layout, SEO } from "../components";

interface PageData {
  pageContext: {
    frontMatter: {
      title: string;
      description: string;
    };
    body: string;
  };
}

export default function PageTemplate({ pageContext }: PageData): JSX.Element {
  const { frontMatter, body } = pageContext;
  return (
    <Layout>
      <SEO title={frontMatter.title} description={frontMatter.description} />
      <Container>
        <Content title={frontMatter.title}>
          <MDXRenderer>{body}</MDXRenderer>
        </Content>
      </Container>
    </Layout>
  );
}
