import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import { Layout } from "../components/common/Layout";
import { SEO } from "../components/common/Seo";
import { Container } from "../components/common/Container";

export default function About(): JSX.Element {
  const { apiAbout: data } = useStaticQuery(graphql`
    query AboutPage {
      apiAbout {
        title
        main_content
      }
    }
  `);

  return (
    <Layout>
      <SEO title={data.title} />
      <Container>
        <h1>{data.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: data.main_content }} />
      </Container>
    </Layout>
  );
}
