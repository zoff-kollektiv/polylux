import React from 'react';

import style from './style';

const Title = ({ children, ...props }) => (
  <h1 {...props}>
    <style jsx>{style}</style>
    {children}
  </h1>
);

export default Title;
