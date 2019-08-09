import React from 'react';

import style from './style';

const Facts = ({ facts }) => (
  <section>
    <style jsx>{style}</style>

    <h2>Facts</h2>

    <ul>
      {facts.map(({ fact }) => (
        <li>{fact}</li>
      ))}
    </ul>
  </section>
);

export default Facts;
