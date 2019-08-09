import Link from 'gatsby-link';
import React from 'react';

import relativeLink from '../../../lib/relative-link';

const Menu = ({ items = [] }) => (
  <ul>
    {items.map(({ url, label }) => (
      <li>
        <Link to={relativeLink(url)}>{label}</Link>
      </li>
    ))}
  </ul>
);

export default Menu;
