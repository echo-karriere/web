require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`
});

module.exports = {
  siteMetadata: {
    siteUrl: "https://www.echokarriere.no",
    title: "echo karriere",
    description: "echo karriere er en karrieredag for IT-studenter i Bergen."
  },
  plugins: [
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true,
        allExtensions: true
      }
    },
    {
      resolve: `@directus/gatsby-source-directus`,
      options: {
        url: process.env.API_URL,
        project: process.env.API_PROJECT,
        auth: {
          email: process.env.API_EMAIL,
          password: process.env.API_PASSWORD
        },
        targetStatuses: ["published", "__NONE__"]
      }
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `./src/styles/typography`,
        omitGoogleFont: true
      }
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-netlify`
  ]
};
