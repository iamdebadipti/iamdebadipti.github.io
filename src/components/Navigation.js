import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import styles from '../styles/Navigation.module.scss';
import getIcon from '../utils/get-icon';

const Navigation = ({ location }) => {
  const data = useStaticQuery(graphql`
    query AuthorQuery {
      site {
        siteMetadata {
          author {
            contact {
              TWITTER {
                name
                link
              }
              GITHUB {
                name
                link
              }
            }
          }
          navLinks {
            label
            path
          }
        }
      }
    }
  `);

  const {
    navLinks,
    author: {
      contact: { TWITTER, GITHUB }
    }
  } = data.site.siteMetadata;

  const url = location.pathname ? location.pathname : ''; // get the current window location

  return (
    <div className={styles.nav}>
      <div className={styles.nav_links}>
        {navLinks.map((link) =>
          url === '/' && link.path === '/' ? null : (
            <Link to={link.path} key={link.path} className={styles.nav_links_item}>
              {link.label}
            </Link>
          )
        )}
        <a href={GITHUB.link} className={styles.nav_links_item} target="_blank" rel="noreferrer">
          GitHub <span>{getIcon('EXTERNAL_LINK', '1rem')}</span>
        </a>
      </div>
      <div className={styles.nav_tools}>
        <a href={TWITTER.link} target="_blank" rel="noreferrer">
          {getIcon('TWITTER', '1.4rem')}
        </a>
        <span aria-label="dark mode switch">{getIcon('MOON', '1.4rem')}</span>
      </div>
    </div>
  );
};

export default Navigation;
