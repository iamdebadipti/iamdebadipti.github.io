import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import useDarkMode from 'use-dark-mode';

import styles from '../styles/Navigation.module.scss';
import getIcon from '../utils/get-icon';

const Navigation = () => {
  const { value, toggle } = useDarkMode(false);

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
      contact: { TWITTER }
    }
  } = data.site.siteMetadata;

  return (
    <div className={styles.nav}>
      <div className={styles.nav_links}>
        {navLinks.map((link) => (
          <Link to={link.path} key={link.path} className={styles.nav_links_item}>
            {link.label}
          </Link>
        ))}
      </div>
      <div className={styles.nav_tools}>
        <a href={TWITTER.link} target="_blank" rel="noreferrer">
          {getIcon('TWITTER', '22', value ? '#F1F1F1' : '#343434')}
        </a>
        <button className={styles.nav_tools} aria-label="dark mode switch" onClick={() => toggle()}>
          <span>Toggle Dark Mode</span>
          {getIcon(value ? 'SUN' : 'MOON', '22')}
        </button>
      </div>
    </div>
  );
};

export default Navigation;
