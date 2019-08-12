import React from 'react';
import { graphql } from 'gatsby';

import ProjectList from '../components/project-list';
import withLayout from '../components/with-layout';

const Frontpage = ({
  data: {
    wp: {
      projects: { nodes: projects }
    }
  }
}) => <ProjectList projects={projects} />;

export default withLayout(Frontpage);

export const query = graphql`
  {
    wp {
      projects {
        nodes {
          ...projectListItem
        }
      }
    }
  }
`;
