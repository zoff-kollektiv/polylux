import css from 'styled-jsx/css';
// eslint-disable-next-line no-unused-vars
import React from 'react';

import { fonts } from '../../../tokens';

export const container = css.resolve`
  a {
    display: block;
    max-height: 27rem;
    max-width: 23rem;
    position: relative;
  }
`;

export default css`
  h2 {
    color: white;
    font-family: ${fonts.lulo.family};
    font-size: 2.3rem;
    font-weight: 700;
    hyphens: auto;
    left: 50%;
    letter-spacing: 0.03rem;
    padding-left: 1rem;
    padding-right: 1rem;
    position: absolute;
    text-align: center;
    text-transform: uppercase;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    word-wrap: anywhere;
    z-index: 2;
  }
`;
