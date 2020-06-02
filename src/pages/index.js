// Gatsby supports TypeScript natively!
import React from 'react';
import { Link, graphql } from 'gatsby';
import Bio from '../components/Bio';
import Layout from '../components/Layout';
import styles from '../styles/Index.module.scss';
import SEO from '../components/Seo';

const BlogIndex = ({ data, location }) => {
  const { siteTitle, description } = data.site.siteMetadata;
  const posts = data.allMarkdownRemark.edges;

  // https://vigilant-leakey-a4f8cd.netlify.app/ DEMO LINK

  return (
    <Layout location={location} title={siteTitle}>
      <SEO article title={'Hello World'} description={description} />
      <Bio />
      <div className={styles.index}>
        <h3 className={styles.index_heading}>My Posts</h3>
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug;
          return (
            <Link key={node.id} to={node.fields.slug} className={styles.index_article}>
              <article>
                <h2>{title}</h2>
                <small>
                  Posted on {node.frontmatter.date} - {node.timeToRead} min read
                </small>
                <p
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt
                  }}
                />
              </article>
            </Link>
          );
        })}
      </div>
    </Layout>
  );
};

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          timeToRead
          excerpt(pruneLength: 100)
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`;
