import React from 'react';

import style from './style';

const Location = ({ city, state }) => (
  <p>
    <style jsx>{style}</style>

    {city}
    {city && state && ', '}
    {state}
  </p>
);

export default Location;
