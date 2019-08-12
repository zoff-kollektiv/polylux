import React from 'react';

import Constraint from '../../constraint';
import style from './style';

const Footer = ({ children }) => (
  <footer>
    <style jsx>{style}</style>

    <Constraint>{children}</Constraint>
  </footer>
);

export default Footer;
