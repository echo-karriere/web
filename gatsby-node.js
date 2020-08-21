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
