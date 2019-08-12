import { Helmet } from 'react-helmet';
import React from 'react';
import { graphql } from 'gatsby';

import Button from '../../components/button';
import Constraint from '../../components/constraint';
import Facts from '../../components/facts';
import Heading from '../../components/blocks/heading';
import Location from './location';
import Paragraph from '../../components/blocks/paragraph';
import Picture from '../../components/picture';
import style, { donate as donateButtonStyle } from './style';
import Title from '../../components/title';
import withLayout from '../../components/with-layout';

export const query = graphql`
  query($id: ID!) {
    wp {
      project(id: $id) {
        title

        featuredImage {
          sourceUrl

          localFile {
            childImageSharp {
              fluid(maxWidth: 1000, grayscale: true) {
                src
                srcSet
                srcSetWebp
              }
            }
          }
        }

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
            ...wpBlockParagraph
          }

          ... on wp_CoreHeadingBlock {
            ...wpBlockHeading
          }

          ... on wp_AcfFactsBlock {
            ...wpBlockFacts
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
        featuredImage,
        projectMetadata: { donations, metadata },
        blocks = []
      }
    }
  }
}) => (
  <>
    <Helmet title={title} />

    <Constraint>
      <style jsx>{style}</style>
      {donateButtonStyle.styles}

      <Title>{title}</Title>

      {(metadata.city || metadata.federalState) && (
        <Location city={metadata.city} state={metadata.federalState} />
      )}

      {(featuredImage || donations.donationUrl) && (
        <header className="image-donate-combination">
          {featuredImage && <Picture image={featuredImage.localFile} />}

          {donations.donationUrl && (
            <Button
              href={donations.donationUrl}
              className={featuredImage && donateButtonStyle.className}
            >
              Unterstützen
            </Button>
          )}
        </header>
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
