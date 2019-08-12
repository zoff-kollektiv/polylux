import classnames from 'classnames';
import Link from 'gatsby-link';
import React from 'react';

import Constraint from '../../constraint';
import Logo from '../../../../static/icons/logo.svg';
import style, { logo as logoStyle, logoLink as logoLinkStyle } from './style';

export default ({ menuOpen = false, children }) => (
  <header className={classnames({ 'is-open': menuOpen })}>
    <style jsx>{style}</style>
    {logoStyle.styles}
    {logoLinkStyle.styles}

    <Constraint>
      <div className="inner">
        {children}

        <Link to="/" className={logoLinkStyle.className}>
          <Logo className={logoStyle.className} />
        </Link>
      </div>
    </Constraint>
  </header>
);
