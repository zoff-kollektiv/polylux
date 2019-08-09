import React from 'react';

const Facts = ({ facts }) => (
  <section>
    <ul>
      {facts.map(({ fact }) => (
        <li>{fact}</li>
      ))}
    </ul>
  </section>
);

export default Facts;
