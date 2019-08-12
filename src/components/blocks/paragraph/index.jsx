import { graphql } from 'gatsby';
import React from 'react';

import style from './style';

const Paragraph = ({ content }) => (
  <>
    <style jsx>{style}</style>
    <p dangerouslySetInnerHTML={{ __html: content }} />
  </>
);

export default Paragraph;

export const fragment = graphql`
  fragment wpBlockParagraph on wp_CoreParagraphBlock {
    attributes {
      ... on wp_CoreParagraphBlockAttributesV3 {
        content
      }
    }
  }
`;
