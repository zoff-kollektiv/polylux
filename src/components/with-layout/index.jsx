import React, { useState } from 'react';

import Footer from './footer';
import Header from './header';
import Menu from './menu';
import style from './style';

export default Component => props => {
  const [headerMenuOpen, setHeaderMenuOpen] = useState(false);
  const {
    pageContext: { menus }
  } = props;

  const headerMenu = menus && menus.find(({ name }) => name === 'Header');
  const footerMenu = menus && menus.find(({ name }) => name === 'Footer');

  const {
    data: { wp }
  } = props;

  return (
    <>
      <style jsx>{style}</style>

      <Header
        menuOpen={headerMenuOpen}
        theme={
          (wp.project && wp.project.metadata.themeColor) ||
          (wp.page && wp.page.metadata.themeColor)
        }
      >
        {headerMenu && (
          <Menu
            items={headerMenu.menuItems}
            open={headerMenuOpen}
            onToggle={() => setHeaderMenuOpen(!headerMenuOpen)}
          />
        )}
      </Header>

      <main>
        <Component {...props} />
      </main>

      <Footer menu={footerMenu.menuItems.nodes} />
    </>
  );
};
