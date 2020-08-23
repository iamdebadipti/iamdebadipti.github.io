import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/Seo';

const ContactPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title={'Contact Me'} />
      <h1>Contact Me</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, blanditiis ipsum ab culpa
        suscipit impedit non, nihil odio inventore nostrum ut tempora placeat, deserunt magni eaque
        voluptatum. Reprehenderit, inventore eaque!
      </p>
    </Layout>
  );
};

export default ContactPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
