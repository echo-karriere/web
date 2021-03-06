import { graphql, useStaticQuery } from "gatsby";

interface SiteMetadata {
  siteUrl: string;
  title: string;
  description: string;
}

export const useSiteMetadata = (): SiteMetadata => {
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
