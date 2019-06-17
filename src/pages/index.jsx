import Helmet from 'react-helmet';
import React from 'react';
import { graphql } from 'gatsby';

import Article from '../components/article';
import withLayout from '../components/with-layout';

const Frontpage = ({
  data: {
    site: {
      siteMetadata: { title }
    },
    content: { html }
  }
}) => (
  <>
    <Helmet title={title} />
    <Article text={html} />
  </>
);

export default withLayout(Frontpage);

export const query = graphql`
  {
    content: markdownRemark(fileAbsolutePath: { regex: "/pages/index.md$/" }) {
      html
    }

    site {
      siteMetadata {
        title
      }
    }
  }
`;
