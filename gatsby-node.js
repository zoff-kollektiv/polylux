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
            name

            menuItems {
              nodes {
                label
                url
              }
            }
          }
        }
      }
    }
  `).then(({ data: { wp: { menus: { nodes: menus } } } }) =>
    Promise.all([
      createPages(graphql, createPage, menus),
      createProjects(graphql, createPage, menus)
    ])
  );
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
        type: `File`,
        resolve(source) {
          if (!source || !source.sourceUrl) {
            return Promise.resolve();
          }

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
