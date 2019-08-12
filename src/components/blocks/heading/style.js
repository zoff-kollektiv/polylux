import css from 'styled-jsx/css';
// eslint-disable-next-line no-unused-vars
import React from 'react';

import { fonts } from '../../../tokens';

export default css.resolve`
  h2,
  h3 {
    font-family: ${fonts.lulo.family};
    font-weight: 700;
  }

  h2 {
    font-size: ${fonts.lulo.sizes[2]};
    line-height: 1.5;
    margin-bottom: 0;
    margin-top: 4rem;
  }
`;
