import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/Seo';

const NotFoundPage = ({ location }) => {
  return (
    <Layout location={location}>
      <SEO title={'404 - Page Not Found'} />
      <h1>Ooops!</h1>
      <p>
        You are lost in space! Go back to <Link to="/">Earth</Link>
      </p>
    </Layout>
  );
};

export default NotFoundPage;
