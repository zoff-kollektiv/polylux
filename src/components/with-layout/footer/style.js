import css from 'styled-jsx/css';
// eslint-disable-next-line no-unused-vars
import React from 'react';

import { colors, fonts } from '../../../tokens';

export default css`
  footer {
    align-items: center;
    background-color: ${colors.grey.dark};
    color: white;
    display: flex;
    flex-direction: column;
    padding-bottom: 5rem;
    padding-top: 5rem;
  }

  .inner {
    align-items: center;
    display: flex;
    flex-direction: column;
  }

  .email {
    font-family: ${fonts.bitter.family};
    font-size: 1.4rem;
    font-weight: 400;
    display: block;
    margin-top: 1rem;
  }

  .email:hover,
  .email:focus {
    color: ${colors.red};
  }

  .social-media-container {
    display: flex;
    flex-direction: row;
    margin-top: 2.5rem;
  }

  .social-media-container > * + * {
    margin-left: 1rem;
  }
`;

export const logo = css.resolve`
  svg {
    height: 2rem;
    width: 15rem;
  }
`;
