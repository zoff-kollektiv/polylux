import css from 'styled-jsx/css';
// eslint-disable-next-line no-unused-vars
import React from 'react';

import { colors, fonts } from '../../tokens';

export default css.resolve`
  a,
  button {
    appearance: none;
    background: ${colors.red};
    border: none;
    border-radius: 1rem;
    color: white;
    display: inline-block;
    font-family: ${fonts.bitter.family};
    font-size: 2.2rem;
    font-weight: 700;
    letter-spacing: 0.03rem;
    line-height: 1.2;
    padding: 1.5rem 3.5rem;
    text-decoration: none;
  }

  a:hover,
  a:focus,
  button:hover,
  button:focus {
    background-color: ${colors.black};
  }
`;
