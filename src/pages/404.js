import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/Seo';

const NotFoundPage = ({ location }) => {
  return (
    <Layout location={location}>
      <SEO title={'404 - Page Not Found'} />
      <h1>
        Ooops! You've lost in space{' '}
        <span role="img" aria-label="rocket emoji">
          🚀
        </span>
      </h1>
      <p>
        Don't worry we've got your back!{' '}
        <Link to="/" style={{ textDecoration: 'underline' }}>
          Go back to Earth{' '}
          <span role="img" aria-label="earth emoji">
            🌍
          </span>
        </Link>
      </p>
    </Layout>
  );
};

export default NotFoundPage;
