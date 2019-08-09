import Helmet from 'react-helmet';
import React from 'react';
import { graphql } from 'gatsby';

import Facts from '../../components/facts';
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

    <h1>{title}</h1>

    {donations.donationUrl && <a href={donations.donationUrl}>Unterstützen</a>}

    {metadata.city ||
      (metadata.federalState && (
        <em>
          {metadata.city}
          {metadata.city && metadata.federalState && ', '}
          {metadata.federalState}
        </em>
      ))}

    {blocks.map(({ __typename: type, ...block }) => {
      switch (type) {
        case 'wp_CoreParagraphBlock':
          return <p>{block.attributes.content}</p>;

        case 'wp_CoreHeadingBlock':
          // eslint-disable-next-line no-case-declarations
          const Heading = `h${block.attributes.level}`;

          return <Heading>{block.attributes.content}</Heading>;

        case 'wp_AcfFactsBlock':
          return <Facts {...block.acf} />;

        default:
          return <pre>{JSON.stringify(block)}</pre>;
      }
    })}
  </>
);

export default withLayout(Project);
