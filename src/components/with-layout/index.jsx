import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

import Footer from './footer';
import Header from './header';
import Menu from './menu';
import style from './style';

export default Component => props => {
  const {
    wp: {
      menus: { nodes: menus }
    }
  } = useStaticQuery(graphql`
    {
      wp {
        menus {
          nodes {
            menuItems {
              nodes {
                label
                url
              }
            }
            name
          }
        }
      }
    }
  `);

  const headerMenu = menus && menus.find(({ name }) => name === 'Header');
  const footerMenu = menus && menus.find(({ name }) => name === 'Footer');

  return (
    <>
      <style jsx>{style}</style>

      <Header>
        {headerMenu && <Menu items={headerMenu.menuItems.nodes} />}
      </Header>

      <main>
        <Component {...props} />
      </main>

      <Footer>
        {footerMenu && <Menu items={footerMenu.menuItems.nodes} />}
      </Footer>
    </>
  );
};
