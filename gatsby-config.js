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
    }
  ]
};
