import css from 'styled-jsx/css';

export default css`
  article {
    display: flex;
    justify-content: center;
    min-height: 100vh;
    position: relative;
    width: 100%;
  }

  .constraint {
    max-width: 35rem;
    width: 100%;
  }

  .text {
    font-family: 'Montserrat';
    font-size: 1.25rem;
    font-weight: 300;
    line-height: 1.45;
  }
`;
