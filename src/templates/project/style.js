import css from 'styled-jsx/css';
// eslint-disable-next-line no-unused-vars
import React from 'react';

export default css`
  .image-donate-combination {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 2.5rem;
  }
`;

export const donate = css.resolve`
  a,
  button {
    align-self: center;
    transform: translateY(-50%);
  }
`;
