import css from 'styled-jsx/css';

import { fonts } from '../../../tokens';

export default css`
  p {
    font-family: ${fonts.lulo.family};
    font-size: ${fonts.lulo.sizes[1]};
    font-weight: 700;
    text-align: center;
    text-transform: uppercase;
  }
`;
