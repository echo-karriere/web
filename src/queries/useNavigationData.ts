import { graphql, useStaticQuery } from "gatsby";

import { icons } from "../assets/icons";
import { MenuItemProps } from "../components";

interface Response {
  allNavigationJson: {
    edges: Array<{ node: MenuItem }>;
  };
}

interface MenuChild {
  mainMobile: boolean;
}

interface MenuItem {
  title: string;
  hasPosts: boolean;
  items: (MenuItemProps & MenuChild)[];
}

export const useNavigationData = (): MenuItem[] => {
  const data = useStaticQuery<Response>(graphql`
    query Navigation {
      allNavigationJson {
        edges {
          node {
            title
            hasPosts
            items {
              title
              to
              description
              children
              mainMobile
            }
          }
        }
      }
    }
  `);

  return data.allNavigationJson.edges.map(({ node }) => {
    return {
      ...node,
      items: node.items.map((item) => {
        return {
          ...item,
          children: icons.get(item.children as string),
        };
      }),
    };
  });
};
