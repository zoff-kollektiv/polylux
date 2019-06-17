import Helmet from 'react-helmet';
import React from 'react';
import { graphql } from 'gatsby';

import style from './style';
import withLayout from '../components/with-layout';

const Frontpage = ({
  data: {
    site: {
      siteMetadata: { title }
    },
    content: { html }
  }
}) => (
  <article>
    <style jsx>{style}</style>

    <Helmet title={title} />

    <div className="constraint">
      <div className="text" dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  </article>
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
