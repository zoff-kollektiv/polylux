import css from 'styled-jsx/css';

import { fonts } from '../../tokens';

export default css`
  h1 {
    font-family: ${fonts.lulo.family};
    font-size: ${fonts.lulo.sizes[5]};
    hyphens: auto;
    margin-top: 3.5rem;
    text-align: center;
  }
`;
