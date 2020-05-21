module.exports = {
  siteMetadata: {
    title: `👋 Welcome to my website`,
    description: `My small portfolio website where you can find out what I am upto 🤪`,
    siteUrl: `https://debadipti.me/`,
    author: {
      name: `Debadipti`,
      summary: `who is an ugly programmer, creates beautiful websites.`
    },
    social: {
      twitter: `iamdebadipti`
    }
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
    }
  ]
};
