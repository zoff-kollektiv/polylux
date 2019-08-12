import css from 'styled-jsx/css';

import { colors } from '../../tokens';

export default css`
  ul {
    background-color: ${colors.grey.light};
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    list-style: none;
    margin-bottom: 0;
    margin-top: 0;
    padding: 1.5rem;
    width: 100%;
  }
`;
