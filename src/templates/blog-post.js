import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import styles from '../styles/Post.module.scss';
import SEO from '../components/Seo';

const BlogPostTemplate = ({
  data,
  // pageContext,
  location
}) => {
  const post = data.markdownRemark;
  // const { previous, next } = pageContext;

  return (
    <Layout location={location}>
      <SEO article title={post.frontmatter.title} description={post.excerpt} />
      <article className={styles.post}>
        <header className={styles.post_header}>
          <h1>{post.frontmatter.title}</h1>
          <time dateTime={post.frontmatter.date}>Posted on {post.frontmatter.date}</time>
        </header>
        <section className={styles.post_content} dangerouslySetInnerHTML={{ __html: post.html }} />
      </article>

      {/* <nav className={styles.post_nav}>
        <ul>
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav> */}
    </Layout>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      timeToRead
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;
