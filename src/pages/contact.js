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
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 180, height: 180) {
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil ipsum unde esse, dolore
              rem dignissimos repellat nostrum molestiae iste laudantium?
            </p>
            <div className={styles.contact_links}>
              {Object.keys(contact).map((name) => (
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={contact[name].link}
                  className={styles.contact_links_item}
                >
                  {getIcon(name, '2.4rem')}
                </a>
              ))}
            </div>
          </div>
          <div>
            <Image
              fixed={data.avatar.childImageSharp.fixed}
              alt={author.name}
              style={{ border: '1px solid #e0e0e0' }}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;
