import { useStaticQuery, graphql } from "gatsby";

interface NavParent {
  apiId: number;
}

export interface NavApiItem {
  apiId: number;
  name: string;
  url: string;
  owner?: NavParent;
}

export interface NavItem {
  name: string;
  url: string;
  children?: NavItem[];
}

const useNavigationData = (): NavItem[] => {
  const data = useStaticQuery(graphql`
    query Navigation {
      allApiNavigation {
        edges {
          node {
            name
            url
            apiId
            owner {
              apiId
            }
          }
        }
      }
    }
  `);

  const generatedData = new Map<number, NavItem>();
  data.allApiNavigation.edges.forEach(({ node }: { node: NavApiItem }) => {
    if (node.owner) {
      if (!generatedData.has(node.owner.apiId)) {
        generatedData.set(node.apiId, { name: "", url: "" });
      }

      const parent = generatedData.get(node.owner.apiId);
      if (parent === undefined) return;

      if (!parent.children) parent.children = [];
      parent.children.push(node);
    } else {
      generatedData.set(node.apiId, { name: node.name, url: node.url });
    }
  });

  console.log([...generatedData.values()]);

  return [...generatedData.values()];
};

export default useNavigationData;
