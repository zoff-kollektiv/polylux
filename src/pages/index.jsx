import Helmet from 'react-helmet';
import React from 'react';
import { graphql } from 'gatsby';

export default ({
  data: {
    content: { html }
  }
}) => (
  <div>
    <Helmet title="Polylux" />
    <div dangerouslySetInnerHTML={{ __html: html }} />
  </div>
);

export const query = graphql`
  {
    content: markdownRemark(fileAbsolutePath: { regex: "/pages/index.md$/" }) {
      html
    }
  }
`;
