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

const createGatsbyPages = (data, createPage, menus) => {
  const {
    wp: {
      projects: { nodes: projects }
    }
  } = data;

  projects.forEach(({ slug, id }) => {
    const pagePath = `/projects/${slug}/`;

    // eslint-disable-next-line no-console
    console.log('Create project:', pagePath);

    createPage({
      path: pagePath,
      component: path.resolve('src/templates/project/index.jsx'),
      context: {
        id,
        menus
      }
    });
  });
};

const createProjects = (graphql, createPage, menus) =>
  fetchPages(graphql).then(({ data }) =>
    createGatsbyPages(data, createPage, menus)
  );

module.exports = {
  createProjects
};
