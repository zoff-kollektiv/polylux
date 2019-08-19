const path = require('path');

const fetchPages = graphql =>
  graphql(`
    {
      wp {
        pages {
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
      pages: { nodes: pages }
    }
  } = data;

  pages.forEach(({ slug, id }) => {
    let pagePath = `/${slug}/`;

    if (slug === 'start') {
      pagePath = '/';
    }

    // eslint-disable-next-line no-console
    console.log('Create page:', pagePath);

    createPage({
      path: pagePath,
      component: path.resolve('src/templates/page/index.jsx'),
      context: {
        id,
        menus
      }
    });
  });
};

const createPages = (graphql, createPage, menus) =>
  fetchPages(graphql).then(({ data }) =>
    createGatsbyPages(data, createPage, menus)
  );

module.exports = {
  createPages
};
