import css from 'styled-jsx/css';
// eslint-disable-next-line no-unused-vars
import React from 'react';

export default css`
  header {
    align-items: center;
    display: flex;
    flex-direction: column;
    margin-bottom: 5rem;
  }
`;

export const logoStyle = css.resolve`
  svg {
    height: auto;
    max-width: 10rem;
    margin-top: 1rem;
    width: 80%;
    z-index: 5;
  }
`;

export const triangleStyle = css.resolve`
  svg {
    height: 6rem;
    position: absolute;
    width: auto;
  }
`;
