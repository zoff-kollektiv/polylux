import React from 'react';

import style from './style';

export default ({ text }) => (
  <article>
    <style jsx>{style}</style>

    <div className="constraint">
      <div className="text" dangerouslySetInnerHTML={{ __html: text }} />
    </div>
  </article>
);
