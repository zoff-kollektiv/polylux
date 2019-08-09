import css from 'styled-jsx/css';
// eslint-disable-next-line no-unused-vars
import React from 'react';

import { colors } from '../../../tokens';

export default css`
  header {
    align-items: center;
    background-color: ${colors.red};
    display: flex;
    flex-direction: column;
    margin-bottom: 5rem;
  }
`;

export const logoStyle = css.resolve`
  svg {
    height: auto;
    max-width: 20rem;
    margin-top: 1rem;
    width: 80%;
    z-index: 5;
  }
`;
