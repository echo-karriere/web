require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    siteUrl: "https://www.echokarriere.no",
    title: "echo karriere",
    description: "echo karriere er en karrieredag for IT-studenter i Bergen.",
    navigation: [
      { title: "For studenter", link: "/for-studenter/" },
      { title: "For bedrifter", link: "/for-bedrifter/" },
      { title: "Om", link: "/om/" },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true,
        allExtensions: true,
      },
    },
    `gatsby-transformer-json`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-remark-images`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/content/pages/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/content/posts/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/content/data/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/content/images/`,
      },
    },
    {
      resolve: `@directus/gatsby-source-directus`,
      options: {
        url: process.env.API_URL,
        project: process.env.API_PROJECT,
        typePrefix: "api",
        auth: {
          email: process.env.API_EMAIL,
          password: process.env.API_PASSWORD,
        },
        targetStatuses: [
          "published",
          process.env.NODE_ENV === "development" ? "draft" : null,
          "__NONE__",
        ],
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        defaultLayouts: {
          pages: require.resolve("./src/templates/page.tsx"),
          posts: require.resolve("./src/templates/post.tsx"),
          default: require.resolve("./src/templates/page.tsx"),
        },
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
            },
          },
        ],
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "echo karriere",
        lang: "no",
        short_name: "echo",
        start_url: "/",
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: "./static/icon.png",
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-159946110-1`,
      },
    },
    `gatsby-plugin-robots-txt`,
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        createLinkInHead: true,
      },
    },
    `gatsby-plugin-catch-links`,
  ],
};
