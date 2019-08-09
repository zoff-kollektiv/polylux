import Link from 'gatsby-link';
import React from 'react';
import { graphql } from 'gatsby';

import withLayout from '../components/with-layout';

const Frontpage = ({
  data: {
    wp: {
      projects: { nodes: projects }
    }
  }
}) => (
  <>
    {projects.map(({ slug, title, featuredImage }) => (
      <Link to={`/projects/${slug}/`}>
        <h2>{title}</h2>

        {featuredImage && featuredImage.localFile && (
          <img {...featuredImage.localFile.fixed} alt="" />
        )}
      </Link>
    ))}
  </>
);

export default withLayout(Frontpage);

export const query = graphql`
  {
    wp {
      projects {
        nodes {
          slug
          title

          featuredImage {
            localFile {
              childImageSharp {
                fixed(width: 500) {
                  src
                  srcSet
                }
              }
            }
          }
        }
      }
    }
  }
`;
