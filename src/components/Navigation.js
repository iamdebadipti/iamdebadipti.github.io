import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styles from '../styles/Navigation.module.scss';

const Navigation = () => {
  const data = useStaticQuery(graphql`
    query AuthorQuery {
      site {
        siteMetadata {
          title
          siteUrl
          author {
            name
          }
        }
      }
    }
  `);

  const { author, title, siteUrl } = data.site.siteMetadata;

  return (
    <div className={styles.nav}>
      <a href={siteUrl} title={title}>
        <h1 className={styles.nav_title}>{author.name}</h1>
      </a>
    </div>
  );
};

export default Navigation;
