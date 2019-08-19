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
        refetchInterval: 100
      }
    },

    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'all',
        path: `${__dirname}/gatsby-creators/`
      }
    },

    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'POLYLUX',
        short_name: 'POLYLUX',
        start_url: '/',
        background_color: '#FF0000',
        theme_color: 'white',
        display: 'standalone',
        legacy: false
      }
    },

    {
      resolve: 'gatsby-plugin-netlify',
      options: {
        allPageHeaders: [
          'Link: </fonts/LuloCleanOne/LuloCleanOne-Bold.woff2>; as=font; rel=preload; crossorigin=anonymous',
          'Link: </fonts/Bitter/Bitter.woff2>; as=font; rel=preload; crossorigin=anonymous'
        ]
      }
    },

    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-styled-jsx',
    'gatsby-plugin-react-helmet'
  ]
};
