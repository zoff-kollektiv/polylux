import Link from 'gatsby-link';
import React from 'react';

import { link as linkStyle } from './style';

const Item = ({ children, to, ...rest }) => (
  <li {...rest}>
    {linkStyle.styles}

    <Link to={to} className={linkStyle.className}>
      {children}
    </Link>
  </li>
);

export default Item;
