const path = require("path");

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const response = await graphql(`
    query ApiPages {
      allApiPage {
        edges {
          node {
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
    createPage({
      path: `/${page.slug}/`,
      component: path.resolve("./src/templates/page.tsx"),
      context: page,
    });
  });
};
