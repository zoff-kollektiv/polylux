module.exports = {
  siteMetadata: {
    title: 'POLYLUX',
    email: 'kontakt@polylux.network',
    instagramAccount: 'https://www.instagram.com/polylux_network/',
    twitterAccount: 'https://twitter.com/polylux_network'
  },

  plugins: [
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /static\/icons/
        }
      }
    },

    {
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: 'wp',
        fieldName: 'wp',
        url: 'https://admin.polylux.network/graphql',
        refetchInterval: 10
      }
    },

    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'all',
        path: `${__dirname}/gatsby-creators/`
      }
    },

    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-styled-jsx',
    'gatsby-plugin-react-helmet'
  ]
};
