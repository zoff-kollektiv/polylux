module.exports = {
  siteMetadata: {
    title: 'Polylux'
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
      resolve: `gatsby-plugin-remote-images`,
      options: {
        nodeType: 'wpMediaItem',
        imagePath: 'sourceUrl'
      }
    },

    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/data/pages/`
      }
    },

    'gatsby-transformer-remark',
    'gatsby-plugin-styled-jsx',
    'gatsby-plugin-react-helmet'
  ]
};
