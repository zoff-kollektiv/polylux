import Link from 'gatsby-link';
import React from 'react';

import Constraint from '../../constraint';
import Logo from '../../../../static/icons/logo.svg';
import style, { logo as logoStyle } from './style';

const Footer = ({ menu = [] }) => (
  <footer>
    <style jsx>{style}</style>
    {logoStyle.styles}

    <Constraint>
      <Logo className={logoStyle.className} />
      <a href="mailto:kontakt@polylux.network">kontakt@polylux.network</a>

      {menu.length > 0 && (
        <ul>
          {menu.map(({ label, target }) => (
            <li key={`footer-menu-${target}`}>
              <Link to={target}>{label}</Link>
            </li>
          ))}
        </ul>
      )}
    </Constraint>
  </footer>
);

export default Footer;
