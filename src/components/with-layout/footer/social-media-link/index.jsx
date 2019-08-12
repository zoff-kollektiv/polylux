import React from 'react';

import InstagramIcon from '../../../../../static/icons/instagram.svg';
import style, { icon as iconStyle } from './style';
import TwitterIcon from '../../../../../static/icons/twitter-square.svg';

const ICONS = {
  instagram: InstagramIcon,
  twitter: TwitterIcon
};

const SocialMediaLink = ({ type, children, ...rest }) => {
  const Icon = ICONS[type];

  return (
    <a {...rest}>
      <style jsx>{style}</style>
      {iconStyle.styles}

      {type && <Icon className={iconStyle.className} />}
      <span className="label">{children}</span>
    </a>
  );
};

export default SocialMediaLink;
