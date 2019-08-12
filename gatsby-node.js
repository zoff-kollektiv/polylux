const { createRemoteFileNode } = require(`gatsby-source-filesystem`);

const { createPages } = require('./gatsby-creators/page');
const { createProjects } = require('./gatsby-creators/project');

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  return Promise.all([
    createPages(graphql, createPage, []),
    createProjects(graphql, createPage, [])
  ]);
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
