import React from 'react';

import style from './style';

const Constraint = ({ children }) => (
  <div>
    <style jsx>{style}</style>
    {children}
  </div>
);

export default Constraint;
