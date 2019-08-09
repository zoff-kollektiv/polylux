import React from 'react';

import Footer from './footer';
import Header from './header';
import Menu from './menu';
import style from './style';

export default Component => props => {
  const {
    pageContext: { menus }
  } = props;

  // eslint-disable-next-line no-unused-vars
  const footerMenu = menus && menus.find(({ name }) => name === 'Footer');
  const headerMenu = menus && menus.find(({ name }) => name === 'Header');

  return (
    <>
      <style jsx>{style}</style>

      <Header>
        {headerMenu && <Menu items={headerMenu.menuItems.nodes} />}
      </Header>

      <Component {...props} />

      <Footer />
    </>
  );
};
