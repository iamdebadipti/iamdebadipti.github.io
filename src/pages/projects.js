import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/Seo';

const ProjectsPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title={'Projects'} />
      <h1>Projects</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente officiis laboriosam
        blanditiis adipisci non molestiae id odit dicta eaque expedita, deleniti doloribus rerum? Ad
        veniam provident, cupiditate nemo quasi alias!
      </p>
    </Layout>
  );
};

export default ProjectsPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
