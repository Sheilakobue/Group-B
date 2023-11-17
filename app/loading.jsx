// pages/LoadingPage.js
import React from 'react';
import styles from '../styles/LoadingPage.module.css';

const LoadingPage = () => {
  return (
    <div className={styles.loadingContainer}>
      <div className={styles.loader}></div>
      <p className={styles.loadingText}>Loading...</p>
    </div>
  );
};

export default LoadingPage;
