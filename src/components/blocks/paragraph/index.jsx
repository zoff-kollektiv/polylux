import React from 'react';

import style from './style';

const Paragraph = ({ content }) => (
  <>
    <style jsx>{style}</style>
    <p dangerouslySetInnerHTML={{ __html: content }} />
  </>
);

export default Paragraph;
