import classnames from 'classnames';
import Link from 'gatsby-link';
import React from 'react';

import style from './style';

const Button = ({ children, href = false, className, ...rest }) => {
  if (href) {
    return (
      <Link
        to={href}
        {...rest}
        className={classnames(style.className, className)}
      >
        {style.styles}
        {children}
      </Link>
    );
  }

  return (
    <button
      type="button"
      className={classnames(style.className, className)}
      {...rest}
    >
      {style.styles}
      {children}
    </button>
  );
};

export default Button;
