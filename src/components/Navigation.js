import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import styles from '../styles/Navigation.module.scss';

const Navigation = () => {
  const data = useStaticQuery(graphql`
    query AuthorQuery {
      site {
        siteMetadata {
          title
          author {
            name
          }
        }
      }
    }
  `);

  const { author, title } = data.site.siteMetadata;

  return (
    <div className={styles.nav}>
      <Link to="/" title={title}>
        <h1 className={styles.nav_title}>{author.name}</h1>
      </Link>
    </div>
  );
};

export default Navigation;
