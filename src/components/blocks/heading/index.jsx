import React from 'react';

import style from './style';

const Heading = ({ level = 2, children, ...rest }) => {
  const Level = `h${level}`;

  return (
    <Level className={style.className} {...rest}>
      {style.styles}
      {children}
    </Level>
  );
};

export default Heading;
