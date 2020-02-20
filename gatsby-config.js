module.exports = {
  pathPrefix: '/applover-pgf',
  siteMetadata: {
    title: 'Applover Personal Growth Framework',
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    'gatsby-plugin-flow',
    'gatsby-plugin-eslint',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/paths`,
        name: "paths",
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-yaml`,
    `gatsby-plugin-react-helmet`,
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `#2991cc`,
        showSpinner: true,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'applover-pgf',
        short_name: 'applover-pgf',
        start_url: '/',
        background_color: '#14233c',
        theme_color: '#14233c',
        display: 'minimal-ui',
        icon: 'src/images/favicon.svg',
      },
    }
  ],
}
