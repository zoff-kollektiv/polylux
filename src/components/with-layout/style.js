import css from 'styled-jsx/css';

export default css`
  :global(*),
  :global(*::before),
  :global(*::after) {
    box-sizing: border-box;
  }

  :global(html) {
    font-size: 62.5%;
  }

  :global(body) {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    font-size: 1.6rem;
    margin: 0;
    padding: 0;
  }

  :global(a) {
    color: currentColor;
  }

  @font-face {
    font-display: swap;
    font-family: 'Bitter';
    font-style: normal;
    font-weight: 400;
    src: local('Bitter'), local('Bitter Regular'), local('Bitter-Regular'),
      url(/fonts/Bitter/Bitter.woff2) format('woff2'),
      url(/fonts/Bitter/Bitter.woff) format('woff');
  }

  @font-face {
    font-display: swap;
    font-family: 'Bitter';
    font-style: normal;
    font-weight: 700;
    src: local('Bitter Bold'), local('Bitter-Bold'),
      url(/fonts/Bitter/Bitter-Bold.woff2) format('woff2'),
      url(/fonts/Bitter/Bitter-Bold.woff) format('woff');
  }

  @font-face {
    font-display: swap;
    font-family: 'Bitter';
    font-style: italic;
    font-weight: 400;
    src: url(/fonts/Bitter/Bitter-Italic.woff2) format('woff2'),
      url(/fonts/Bitter/Bitter-Italic.woff) format('woff');
  }

  @font-face {
    font-display: swap;
    font-family: 'Lulo Clean One';
    font-weight: 400;
    src: url(/fonts/LuloCleanOne/LuloCleanOne.woff2) format('woff2'),
      url(/fonts/LuloCleanOne/LuloCleanOne.woff) format('woff');
  }

  @font-face {
    font-display: swap;
    font-family: 'Lulo Clean One';
    font-weight: 700;
    src: url(/fonts/LuloCleanOne/LuloCleanOne-Bold.woff2) format('woff2'),
      url(/fonts/LuloCleanOne/LuloCleanOne-Bold.woff) format('woff');
  }

  main {
    align-items: center;
    display: flex;
    flex-direction: column;
  }
`;
