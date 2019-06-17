import css from 'styled-jsx/css';

export default css`
  :global(*),
  :global(*::before),
  :global(*::after) {
    box-sizing: border-box;
  }

  :global(body) {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    margin: 0;
    padding: 0;
  }

  :global(a) {
    color: currentColor;
  }

  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 300;
    src: local('Montserrat Light'), local('Montserrat-Light'),
      local('Montserrat'),
      url('/fonts/Montserrat/Montserrat-Light.woff2') format('woff2'),
      url('/fonts/Montserrat/Montserrat-Light.woff') format('woff');
  }
`;
