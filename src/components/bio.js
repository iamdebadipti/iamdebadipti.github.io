import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
// import Image from 'gatsby-image';
import styles from '../styles/Bio.module.scss';
import { getIcon } from '../utils';
// import useDarkMode from 'use-dark-mode';

const Bio = () => {
  // const { value } = useDarkMode(false);

  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          title
          author {
            name
            bio
            contact {
              EMAIL {
                name
                link
              }
              GITHUB {
                name
                link
              }
            }
          }
        }
      }
    }
  `);

  const {
    author: {
      name,
      bio,
      contact: { EMAIL, GITHUB }
    }
  } = data.site.siteMetadata;

  return (
    <header className={styles.bio}>
      <span className={styles.bio_hello}>
        <span className={styles.bio_hello_wave} role="img" aria-label="Hand Wave Emoji">
          👋
        </span>
        Hey, I'm
      </span>
      <h1 className={styles.bio_title}>{name}</h1>
      <p className={styles.bio_desc}>{bio}</p>
      {/* {useIcon('twitter', '1.4rem')} */}
      <div className={styles.bio_social}>
        <a href={EMAIL.link} target="_blank" rel="noreferrer" className={styles.bio_social_link}>
          {getIcon('EMAIL', '18')}
          {EMAIL.name}
        </a>
        <a href={GITHUB.link} target="_blank" rel="noreferrer" className={styles.bio_social_link}>
          {getIcon('GITHUB', '18')}
          GitHub
        </a>
      </div>
    </header>
  );
};

export default Bio;
