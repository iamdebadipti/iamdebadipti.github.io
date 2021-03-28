import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';

import Layout from '../components/Layout';
import SEO from '../components/Seo';
import styles from '../styles/Contact.module.scss';
import getIcon from '../utils/get-icon';

const ContactPage = ({ location }) => {
  const data = useStaticQuery(graphql`
    query ContactQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpeg/" }) {
        childImageSharp {
          fixed(width: 240, height: 320) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            contact {
              EMAIL {
                name
                link
              }
              TWITTER {
                name
                link
              }
              GITHUB {
                name
                link
              }
              LINKEDIN {
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
    author,
    author: { contact }
  } = data.site.siteMetadata;

  return (
    <Layout location={location}>
      <SEO title={'Contact Me'} />
      <div className={styles.contact}>
        <div className={styles.contact_flex}>
          <div>
            <h1 className={styles.contact_heading}>Contact Me</h1>
            <p>
              Feel free to contact me if anything! I will be glad to have a discussion on anything
              tech{' '}
              <span role="img" aria-label="yoo emoji">
                ✌️
              </span>
            </p>
            <div className={styles.contact_links}>
              {Object.keys(contact).map((name) => (
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={contact[name].link}
                  className={styles.contact_links_item}
                  key={name}
                >
                  {getIcon(name, '38')}
                </a>
              ))}
            </div>
          </div>
          <div>
            <Image
              fixed={data.avatar.childImageSharp.fixed}
              alt={author.name}
              // style={{ border: '1px solid #e0e0e0' }}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;
