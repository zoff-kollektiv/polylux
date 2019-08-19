import { graphql } from 'gatsby';
import React from 'react';

import Project from './project';
import style from './style';

const ProjectList = ({ projects }) => (
  <ul>
    <style jsx>{style}</style>

    {projects.map(project => (
      <li key={`project-${project.title}`}>
        <Project {...project} target={`/projects/${project.slug}/`} />
      </li>
    ))}
  </ul>
);

export default ProjectList;

export const fragment = graphql`
  fragment wpBlockProjects on wp_AcfProjectsBlock {
    acf {
      title
      number_of_projects
    }
  }
`;
