const path = require("path");

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const response = await graphql(`
    query ApiPages {
      allApiPage {
        edges {
          node {
            category {
              slug
            }
            apiId
            slug
            title
            content
          }
        }
      }
    }
  `);

  const {
    data: {
      allApiPage: { edges: pages = [] },
    },
  } = response;

  pages.forEach(({ node: page }) => {
    const slug = page.category
      ? page.category.slug.concat("/", page.slug, "/")
      : `/${page.slug}/`;
    createPage({
      path: slug,
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
