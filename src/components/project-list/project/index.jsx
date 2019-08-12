import { graphql } from 'gatsby';
import Link from 'gatsby-link';
import React from 'react';

import Picture from '../../picture';
import style, { container as containerStyle } from './style';

const Project = ({ title, target, image }) => (
  <Link to={target} className={containerStyle.className}>
    <style jsx>{style}</style>
    {containerStyle.styles}

    <h2>{title}</h2>

    {image && <Picture type="fixed" image={image.localFile} />}
  </Link>
);

export default Project;

export const fragment = graphql`
  fragment projectListItem on wp_Project {
    slug
    title

    image: featuredImage {
      sourceUrl

      localFile {
        childImageSharp {
          fixed(width: 468, height: 540, grayscale: true) {
            src
            srcSet
            srcSetWebp
          }
        }
      }
    }
  }
`;
