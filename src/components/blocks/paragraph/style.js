import css from 'styled-jsx/css';

import { fonts } from '../../../tokens';

export default css`
  p {
    font-family: ${fonts.bitter.family};
    font-size: ${fonts.bitter.sizes[2]};
    letter-spacing: 0.035rem;
    line-height: 1.5;
  }
`;
