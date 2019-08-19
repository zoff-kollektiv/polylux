import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import React from 'react';

import Constraint from '../../components/constraint';
import Heading from '../../components/blocks/heading';
import Paragraph from '../../components/blocks/paragraph';
import Title from '../../components/title';
import withLayout from '../../components/with-layout';

export const query = graphql`
  query($id: ID!) {
    wp {
      page(id: $id) {
        title

        metadata {
          themeColor
        }

        blocks {
          __typename

          ... on wp_CoreParagraphBlock {
            ...wpBlockParagraph
          }

          ... on wp_CoreHeadingBlock {
            ...wpBlockHeading
          }
        }
      }
    }
  }
`;

const Page = ({
  data: {
    wp: {
      page: { title, blocks }
    }
  }
}) => (
  <>
    <Helmet title={title} />

    <Constraint>
      <Title>{title}</Title>

      {blocks.map(({ __typename: type, ...block }) => {
        switch (type) {
          case 'wp_CoreParagraphBlock':
            return <Paragraph content={block.attributes.content} />;

          case 'wp_CoreHeadingBlock':
            return <Heading>{block.attributes.content}</Heading>;

          default:
            return <pre>{JSON.stringify(block)}</pre>;
        }
      })}
    </Constraint>
  </>
);

export default withLayout(Page);
