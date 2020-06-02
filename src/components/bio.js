import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';
import styles from '../styles/Bio.module.scss';
import { getIcon } from '../utils';

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 85, height: 85) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          title
          description
          author {
            name
            bio
            contact {
              github
              twitter
            }
          }
        }
      }
    }
  `);

  const { author, description } = data.site.siteMetadata;

  return (
    <header className={styles.bio}>
      <div className={styles.bio_detail}>
        <h3 className={styles.bio_title}>
          <span className={styles.bio_title_wave} role="img" aria-label="Hand Wave Emoji">
            👋
          </span>
          {description}
        </h3>
        <p className={styles.bio_desc}>{author.bio}</p>
        {/* {useIcon('twitter', '1.4rem')} */}
        <div className={styles.bio_social}>
          Follow me on:
          {Object.keys(author.contact).map((name) => (
            <a
              href={author.contact[name]}
              target="_blank"
              rel="noreferrer"
              key={name}
              className={styles.bio_social_link}
            >
              {getIcon(name, '18')}
            </a>
          ))}
        </div>
      </div>
      <div className={styles.bio_pic}>
        <Image fixed={data.avatar.childImageSharp.fixed} alt={author.name} />
      </div>
    </header>
  );
};

export default Bio;
