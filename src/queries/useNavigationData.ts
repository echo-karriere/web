import { useStaticQuery, graphql } from "gatsby";

export interface NavItem {
  title: string;
  link: string;
}

const useNavigationData = () => {
  const {
    site: {
      siteMetadata: { navigation: navigation },
    },
  } = useStaticQuery(graphql`
    query Navigation {
      site {
        siteMetadata {
          navigation {
            title
            link
          }
        }
      }
    }
  `);

  return navigation;
};

export default useNavigationData;
