import classnames from 'classnames';
import Link from 'gatsby-link';
import React from 'react';

import Logo from '../../../../static/icons/logo.svg';
import style, { logo as logoStyle, logoLink as logoLinkStyle } from './style';

export default ({ menuOpen = false, theme, children, ...rest }) => (
  <header
    className={classnames(
      { 'is-open': menuOpen },
      { [`theme-${theme}`]: theme }
    )}
    {...rest}
  >
    <style jsx>{style}</style>
    {logoStyle.styles}
    {logoLinkStyle.styles}

    {children}

    <Link to="/" className={logoLinkStyle.className}>
      <Logo className={logoStyle.className} />
    </Link>
  </header>
);
