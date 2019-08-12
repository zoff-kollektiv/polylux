import css from 'styled-jsx/css';
// eslint-disable-next-line no-unused-vars
import React from 'react';

import { colors } from '../../../tokens';

export default css`
  header {
    align-items: center;
    background-color: white;
    display: flex;
    flex-direction: column;
    margin-bottom: 2.5rem;
    padding-bottom: 1.5rem;
    padding-top: 1.5rem;
    position: relative;
  }

  header.is-open {
    background-color: ${colors.grey.dark};
    color: white;
  }

  .inner {
    display: flex;
    flex-direction: row;
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
`;

export const logo = css.resolve`
  svg {
    fill: currentColor;
    height: 2rem;
    width: 15rem;
    z-index: 5;
  }
`;
