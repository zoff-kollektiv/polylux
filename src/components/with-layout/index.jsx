import React from 'react';

import Header from './header';
import style from './style';

export default Component => props => (
  <>
    <style jsx>{style}</style>

    <Header />

    <Component {...props} />
  </>
);
