import React from 'react';

import Logo from '../../../../static/icons/logo.svg';
import Triangle from '../../../../static/icons/triangle-1.svg';
import style, { logoStyle, triangleStyle } from './style';

export default () => (
  <header>
    <style jsx>{style}</style>
    {logoStyle.styles}
    {triangleStyle.styles}

    <Triangle className={triangleStyle.className} />
    <Logo className={logoStyle.className} />
  </header>
);
