/* eslint-disable import/prefer-default-export */

import css from 'styled-jsx/css';
// eslint-disable-next-line no-unused-vars
import React from 'react';

import { fonts } from '../../../../tokens';

export const link = css.resolve`
  a {
    display: block;
    font-family: ${fonts.lulo.family};
    font-size: 1.6rem;
    font-weight: 700;
    line-height: 1.3;
    padding-bottom: 1.5rem;
    padding-top: 1.5rem;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
  }
`;
