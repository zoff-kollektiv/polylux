const { createRemoteFileNode } = require(`gatsby-source-filesystem`);

const { createPages } = require('./gatsby-creators/page');
const { createProjects } = require('./gatsby-creators/project');

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  return graphql(`
    {
      wp {
        menus {
          nodes {
            menuItems {
              nodes {
                label
                url
              }
            }
            name
          }
        }
      }
    }
  `).then(({ data }) => {
    let {
      wp: {
        menus: { nodes: menus }
      }
    } = data;

    menus = menus.map(({ menuItems: { nodes: items }, ...menuProps }) => ({
      ...menuProps,
      menuItems: items.map(({ url, ...itemProps }) => ({
        ...itemProps,
        // make the URL relative
        url: new URL(url).pathname
      }))
    }));

    return Promise.all([
      createPages(graphql, createPage, menus),
      createProjects(graphql, createPage, menus)
    ]);
  });
};

// https://dev.to/nevernull/gatsby-with-wpgraphql-acf-and-gatbsy-image-72m
exports.createResolvers = ({
  actions,
  cache,
  createNodeId,
  createResolvers,
  store,
  reporter
}) => {
  const { createNode } = actions;

  createResolvers({
    wp_MediaItem: {
      localFile: {
        type: 'File',
        resolve(source) {
          return createRemoteFileNode({
            url: source.sourceUrl,
            store,
            cache,
            createNode,
            createNodeId,
            reporter
          });
        }
      }
    }
  });
};
