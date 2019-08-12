import css from 'styled-jsx/css';
// eslint-disable-next-line no-unused-vars
import React from 'react';

import { colors } from '../../../tokens';

export default css`
  footer {
    align-items: center;
    background-color: ${colors.grey.dark};
    color: white;
    display: flex;
    flex-direction: column;
    margin-top: 5rem;
    padding-bottom: 5rem;
    padding-top: 5rem;
  }
`;

export const logo = css.resolve`
  svg {
    height: 2rem;
    width: 15rem;
  }
`;
