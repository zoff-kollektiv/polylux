import React from 'react';

import BarsIcon from '../../../../static/icons/bars.svg';
import Item from './item';
import relativeLink from '../../../lib/relative-link';
import {
  list as listStyle,
  toggle as toggleStyle,
  barsIcon as barsIconStyle
} from './style';
import TimesIcon from '../../../../static/icons/times.svg';

const Menu = ({ open = false, items = [], onToggle = () => {} }) => (
  <>
    <button
      type="button"
      onClick={event => {
        event.preventDefault();
        onToggle();
      }}
    >
      <style jsx>{toggleStyle}</style>
      {barsIconStyle.styles}

      {open ? (
        <TimesIcon className={barsIconStyle.className} />
      ) : (
        <BarsIcon className={barsIconStyle.className} />
      )}
    </button>

    {open && (
      <ul>
        <style jsx>{listStyle}</style>

        {items.map(({ url, label }) => (
          <Item to={relativeLink(url)} key={`header-menu-${url}`}>
            {label}
          </Item>
        ))}
      </ul>
    )}
  </>
);

export default Menu;
