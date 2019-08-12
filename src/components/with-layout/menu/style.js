import css from 'styled-jsx/css';
// eslint-disable-next-line no-unused-vars
import React from 'react';

import { colors } from '../../../tokens';

export const list = css`
  ul {
    background-color: ${colors.grey.medium};
    justify-self: flex-start;
    left: 0;
    list-style: none;
    margin-bottom: 0;
    margin-top: 0;
    padding-left: 0;
    position: absolute;
    top: 100%;
    width: 100%;
  }
`;

export const toggle = css`
  button {
    appearance: none;
    background: transparent;
    border: none;
    color: inherit;
    text-transform: uppercase;
  }

  button:hover,
  button:focus {
    color: ${colors.red};
    cursor: pointer;
  }
`;

export const barsIcon = css.resolve`
  svg {
    display: block;
    height: 2rem;
    vertical-align: middle;
    width: 2rem;
  }
`;
