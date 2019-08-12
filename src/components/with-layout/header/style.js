import css from 'styled-jsx/css';
// eslint-disable-next-line no-unused-vars
import React from 'react';

import { colors } from '../../../tokens';

export default css`
  header {
    align-items: center;
    background-color: white;
    display: flex;
    flex-direction: row;
    padding: 1.5rem;
    position: relative;
    z-index: 10;
  }

  header.is-open {
    background-color: ${colors.grey.dark};
    color: white;
  }
`;

export const logoLink = css.resolve`
  a {
    align-self: center;
    font-size: 0;
    line-height: 1;
    margin-left: auto;
    margin-right: auto;
    vertical-align: middle;
  }

  a:hover,
  a:focus {
    color: ${colors.red};
  }
`;

export const logo = css.resolve`
  svg {
    fill: currentColor;
    height: 2rem;
    width: 15rem;
    z-index: 5;
  }
`;
