import css from 'styled-jsx/css';

import { colors, fonts } from '../../tokens';

export default css`
  section {
    background-color: ${colors.grey.light};
    padding: 2.5rem;
  }

  h2 {
    font-family: ${fonts.lulo.family};
    font-size: ${fonts.lulo.sizes[3]};
    margin-top: 0;
    text-align: center;
    text-transform: uppercase;
  }

  ul {
    margin-bottom: 0;
  }

  li {
    font-family: ${fonts.bitter.family};
    font-size: ${fonts.bitter.sizes[1]};
    font-weight: 700;
    letter-spacing: 0.04rem;
    line-height: 1.6;
    padding-left: 2.5rem;
  }
`;
