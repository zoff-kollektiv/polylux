const { createProject } = require('./gatsby-creators/project');

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  return Promise.all([createProject(graphql, createPage)]);
};
