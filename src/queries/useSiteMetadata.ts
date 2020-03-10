import { useStaticQuery, graphql } from "gatsby";

interface SiteMetadata {
  siteUrl: string;
  title: string;
  description: string;
}

const useSiteMetadata = (): SiteMetadata => {
  const { site } = useStaticQuery(graphql`
    query SiteMetadata {
      site {
        siteMetadata {
          siteUrl
          title
          description
        }
      }
    }
  `);

  return site.siteMetadata;
};

export default useSiteMetadata;
