import React from 'react';
import Navigation from './Navigation';
import styles from '../styles/Layout.module.scss';
import Footer from './Footer';

const Layout = ({ location, children }) => {
  return (
    <div className={styles.layout}>
      <Navigation location={location} />
      <div className={styles.layout_content}>
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
