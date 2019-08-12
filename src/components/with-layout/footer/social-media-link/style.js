import css from 'styled-jsx/css';
// eslint-disable-next-line no-unused-vars
import React from 'react';

import { colors } from '../../../../tokens';

export default css`
  a:hover,
  a:focus {
    color: ${colors.red};
  }

  .label {
    position: absolute !important;
    clip: rect(1px, 1px, 1px, 1px);
    padding: 0 !important;
    border: 0 !important;
    height: 1px !important;
    width: 1px !important;
    overflow: hidden;
  }
`;

export const icon = css.resolve`
  svg {
    height: 2.75rem;
    width: 2.75rem;
  }
`;
