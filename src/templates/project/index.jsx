import Helmet from 'react-helmet';
import React from 'react';
import { graphql } from 'gatsby';

import Constraint from '../../components/constraint';
import Facts from '../../components/facts';
import Heading from '../../components/blocks/heading';
import Location from './location';
import Paragraph from '../../components/blocks/paragraph';
import Title from '../../components/title';
import withLayout from '../../components/with-layout';

export const query = graphql`
  query($id: ID!) {
    wp {
      project(id: $id) {
        title

        projectMetadata {
          donations {
            donationUrl
          }

          metadata {
            city
            federalState
          }
        }

        blocks {
          __typename

          ... on wp_CoreParagraphBlock {
            attributes {
              ... on wp_CoreParagraphBlockAttributesV3 {
                content
              }
            }
          }

          ... on wp_CoreHeadingBlock {
            attributes {
              level
              content
            }
          }

          ... on wp_AcfFactsBlock {
            acf {
              facts {
                fact
              }
            }
          }
        }
      }
    }
  }
`;

const Project = ({
  data: {
    wp: {
      project: {
        title,
        projectMetadata: { donations, metadata },
        blocks = []
      }
    }
  }
}) => (
  <>
    <Helmet title={title} />

    <Constraint>
      <Title>{title}</Title>

      {donations.donationUrl && (
        <a href={donations.donationUrl}>Unterstützen</a>
      )}

      {(metadata.city || metadata.federalState) && (
        <Location city={metadata.city} state={metadata.federalState} />
      )}
    </Constraint>

    <Constraint>
      {blocks.map(({ __typename: type, ...block }) => {
        switch (type) {
          case 'wp_CoreParagraphBlock':
            return <Paragraph content={block.attributes.content} />;

          case 'wp_CoreHeadingBlock':
            return <Heading>{block.attributes.content}</Heading>;

          case 'wp_AcfFactsBlock':
            return <Facts {...block.acf} />;

          default:
            return <pre>{JSON.stringify(block)}</pre>;
        }
      })}
    </Constraint>
  </>
);

export default withLayout(Project);
