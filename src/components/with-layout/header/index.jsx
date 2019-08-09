import Link from 'gatsby-link';
import React from 'react';

import Logo from '../../../../static/icons/logo.svg';
import style, { logoStyle } from './style';

export default ({ children }) => (
  <header>
    <style jsx>{style}</style>
    {logoStyle.styles}

    <Link to="/">
      <Logo className={logoStyle.className} />
    </Link>

    {children}
  </header>
);
