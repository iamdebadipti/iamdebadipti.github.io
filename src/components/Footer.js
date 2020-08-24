import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styles from '../styles/Footer.module.scss';

const Footer = () => {
  const data = useStaticQuery(graphql`
    query FooterQuery {
      site {
        siteMetadata {
          author {
            name
          }
        }
      }
    }
  `);

  const {
    author: { name }
  } = data.site.siteMetadata;

  return (
    <div className={styles.footer}>
      <div className={styles.footer_copy}>
        Copyright &copy; {new Date().getFullYear()} | {name}
      </div>
      <div className={styles.footer_copy}>
        Made with{' '}
        <span role="img" aria-label="heart emoji">
          ❤️
        </span>{' '}
        | Built with{' '}
        <a href="https://www.gatsbyjs.com/" target="_blank" rel="noreferrer">
          Gatsby
        </a>
      </div>
    </div>
  );
};

export default Footer;
