import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/Seo';

const ProjectsPage = ({ data, location }) => {
  return (
    <Layout location={location}>
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
