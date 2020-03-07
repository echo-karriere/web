import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import ContentWrapper from "../components/common/contentWrapper";
import Layout from "../components/common/layout";
import SEO from "../components/common/seo";

const About: React.FC = () => {
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
      <ContentWrapper>
        <h1>{data.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: data.main_content }} />
      </ContentWrapper>
    </Layout>
  );
};

export default About;
