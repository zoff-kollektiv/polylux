const path = require('path');

const fetchPages = graphql =>
  graphql(`
    {
      wp {
        projects {
          nodes {
            id
            slug
            title
          }
        }
      }
    }
  `);

const createPages = (data, createPage) => {
  const {
    wp: {
      projects: { nodes: projects }
    }
  } = data;

  projects.forEach(({ slug, id }) => {
    const pagePath = `/project/${slug}/`;

    // eslint-disable-next-line no-console
    console.log('Create project:', pagePath);

    createPage({
      path: pagePath,
      component: path.resolve('src/templates/project/index.jsx'),
      context: {
        id
      }
    });
  });
};

const createProject = (graphql, createPage) =>
  fetchPages(graphql).then(({ data }) => createPages(data, createPage));

module.exports = {
  createProject
};
