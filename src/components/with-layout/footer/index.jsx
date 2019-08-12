import { graphql, useStaticQuery } from 'gatsby';
import Link from 'gatsby-link';
import React from 'react';

import Constraint from '../../constraint';
import Logo from '../../../../static/icons/logo.svg';
import SocialMediaLink from './social-media-link';
import style, { logo as logoStyle } from './style';

const Footer = ({ menu = [] }) => {
  const {
    site: {
      siteMetadata: { email, instagramAccount, twitterAccount }
    }
  } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          email
          instagramAccount
          twitterAccount
        }
      }
    }
  `);

  return (
    <footer>
      <style jsx>{style}</style>
      {logoStyle.styles}

      <Constraint>
        <div className="inner">
          <Logo className={logoStyle.className} />
          <a href={`mailto:${email}`} className="email">
            {email}
          </a>

          <div className="social-media-container">
            {instagramAccount && (
              <span>
                <SocialMediaLink href={instagramAccount} type="instagram">
                  Follow us on instagram
                </SocialMediaLink>
              </span>
            )}

            {twitterAccount && (
              <span>
                <SocialMediaLink href={twitterAccount} type="twitter">
                  Follow us on twitter
                </SocialMediaLink>
              </span>
            )}
          </div>

          {menu.length > 0 && (
            <ul>
              {menu.map(({ label, target }) => (
                <li key={`footer-menu-${target}`}>
                  <Link to={target}>{label}</Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </Constraint>
    </footer>
  );
};

export default Footer;
