import css from 'styled-jsx/css';

import { colors } from '../../../tokens';

export default css`
  footer {
    align-items: center;
    background-color: ${colors.grey.dark};
    color: white;
    display: flex;
    flex-direction: column;
    margin-top: 5rem;
    padding-bottom: 5rem;
    padding-top: 5rem;
  }
`;
