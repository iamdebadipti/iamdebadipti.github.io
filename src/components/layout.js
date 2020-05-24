import React from 'react';
import Navigation from './Navigation';
import styles from '../styles/Layout.module.scss';

const Layout = ({ title, children }) => {
  return (
    <>
      <Navigation />
      <div className={styles.layout}>
        <main>{children}</main>
      </div>
    </>
  );
};

export default Layout;
