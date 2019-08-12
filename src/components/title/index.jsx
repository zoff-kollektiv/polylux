import React from 'react';

import style from './style';

const Title = ({ children }) => (
  <h1>
    <style jsx>{style}</style>
    {children}
  </h1>
);

export default Title;
