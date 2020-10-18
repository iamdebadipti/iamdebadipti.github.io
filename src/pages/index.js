// Gatsby supports TypeScript natively!
import React from 'react';

import { Link, graphql } from 'gatsby';
import Bio from '../components/Bio';
import Layout from '../components/Layout';
import styles from '../styles/Index.module.scss';
import SEO from '../components/Seo';
// import Skills from '../components/Skills';

const BlogIndex = ({ data, location }) => {
  const { author } = data.site.siteMetadata;
  const posts = data.allMarkdownRemark.edges;

  return (
    <Layout location={location}>
      <SEO article title={'👋 Hey There'} description={author.bio} />
      <Bio />
      {/* <Skills /> */}
      <div className={styles.index}>
        <h3 className={styles.index_heading}>
          My Posts{' '}
          <span aria-label="" role="img">
            ✏️
          </span>
        </h3>
        <div className={styles.index_article_wrap}>
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug;
            return (
              <Link key={node.id} to={node.fields.slug} className={styles.index_article}>
                <article>
                  <h2>{title}</h2>
                  <span>
                    Posted on <time dateTime={node.frontmatter.date}>{node.frontmatter.date}</time>{' '}
                    - {node.timeToRead} min read
                  </span>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: node.excerpt
                    }}
                  />
                </article>
              </Link>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        author {
          bio
        }
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          timeToRead
          excerpt(pruneLength: 240)
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`;
