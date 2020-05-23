import React from 'react';
import Navigation from './Navigation';
import styles from '../styles/Layout.module.scss';

const Layout = ({ title, children }) => {
  return (
    <>
      <Navigation />
      <div className={styles.layout}>
        <main>{children}</main>
        <footer>© {new Date().getFullYear()}</footer>
      </div>
    </>
  );
};

export default Layout;
