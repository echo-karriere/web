const path = require("path");

module.exports.createPages = async ({ graphql, actions }) => {
  await buildPages(graphql, actions);
  await buildPosts(graphql, actions);
};

const buildPosts = async (graphql, actions) => {
  const { createPage } = actions;

  const response = await graphql(`
    query Posts {
      allMdx(
        filter: { fileAbsolutePath: { glob: "**/*/posts/*" } }
        sort: { fields: [frontmatter___date], order: ASC }
        limit: 1000
      ) {
        edges {
          next {
            frontmatter {
              title
              path
            }
          }
          node {
            frontmatter {
              title
              path
              published
            }
            body
          }
          previous {
            frontmatter {
              title
              path
            }
          }
        }
      }
    }
  `);

  const posts = response.data.allMdx.edges;

  posts.forEach((edge) => {
    if (
      (process.env.NODE_ENV === "production" &&
        !edge.node.frontmatter.published) ||
      edge.node.frontmatter.path === null
    ) {
      return;
    }

    createPage({
      path: edge.node.frontmatter.path,
      component: path.resolve("./src/templates/post.tsx"),
      context: edge,
    });
  });
};

const buildPages = async (graphql, actions) => {
  const { createPage } = actions;

  const response = await graphql(`
    query Pages {
      allMdx(filter: { fileAbsolutePath: { glob: "**/*/pages/*" } }) {
        edges {
          node {
            frontmatter {
              title
              path
              published
            }
            body
          }
        }
      }
    }
  `);

  const pages = response.data.allMdx.edges;

  pages.forEach(({ node: page }) => {
    if (process.env.NODE_ENV === "production" && !page.frontmatter.published) {
      return;
    } else if (page.frontmatter.path === null) {
      return;
    }
    createPage({
      path: page.frontmatter.path,
      component: path.resolve("./src/templates/page.tsx"),
      context: page,
    });
  });
};

/* We are using (S)CSS-modules, and therefore the order doesn't matter, which is
 * why we enable the `ignoreOrder` option. If we however wrote regular old CSS
 * this would mean that we have conflicting definitions of classes in our styles.
 */
module.exports.onCreateWebpackConfig = ({ stage, actions, getConfig }) => {
  if (stage === "build-javascript") {
    const config = getConfig();
    const miniCssExtractPlugin = config.plugins.find(
      (plugin) => plugin.constructor.name === "MiniCssExtractPlugin",
    );

    if (miniCssExtractPlugin) {
      miniCssExtractPlugin.options.ignoreOrder = true;
    }

    actions.replaceWebpackConfig(config);
  }
};
