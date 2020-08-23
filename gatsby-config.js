const siteConfig = require('./config.js');

module.exports = {
  siteMetadata: {
    title: siteConfig.title,
    description: siteConfig.description,
    siteUrl: siteConfig.url,
    author: siteConfig.author,
    navLinks: siteConfig.navLinks,
    skills: siteConfig.skills
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590
            }
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`
        ]
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Debadipti`,
        short_name: `debadipti`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#000000`,
        display: `minimal-ui`,
        icon: `content/assets/profile-pic.jpg`
      }
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`
  ]
};
