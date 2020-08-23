import React from 'react';
import Navigation from './Navigation';
import styles from '../styles/Layout.module.scss';

const Layout = ({ location, children }) => {
  return (
    <div className={styles.layout}>
      <Navigation location={location} />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
