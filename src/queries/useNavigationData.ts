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

interface Response {
  allApiNavigation: {
    edges: Array<{ node: NavApiItem }>;
  };
}

const useNavigationData = (): NavItem[] => {
  const data = useStaticQuery<Response>(graphql`
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
  data.allApiNavigation.edges.forEach(({ node }) => {
    // Might happen if node is created when a child is encountered before a
    // parent, in which case we just skip it and continue
    if (generatedData.has(node.apiId)) return;

    if (node.owner) {
      if (!generatedData.has(node.owner.apiId)) {
        const parent = data.allApiNavigation.edges.find(
          (it) => it.node.apiId === node.owner?.apiId,
        )?.node;

        if (parent === undefined) {
          throw Error(`parent ${node.owner.apiId} not found`);
        }

        generatedData.set(parent.apiId, {
          name: parent.name,
          url: parent.url,
          children: [],
        });
      }

      const parent = generatedData.get(node.owner.apiId);
      if (parent === undefined) return;

      if (!parent.children) parent.children = [];
      parent.children.push({
        name: node.name,
        url: `${parent.url}/${node.url}`,
      });
    } else {
      generatedData.set(node.apiId, { name: node.name, url: node.url });
    }
  });

  return [...generatedData.values()];
};

export default useNavigationData;
