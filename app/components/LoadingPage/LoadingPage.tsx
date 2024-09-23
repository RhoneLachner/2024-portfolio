/**
 * LoadingPage Component
 * 
 * LoadingPage displays a loading screen with a spinner animation and loading message 
 * when the parent component has not rendered yet.
 */

import React, { useEffect, useState } from 'react';
import styles from './LoadingPage.module.css';

const LoadingPage = () => {
  const [isClient, setIsClient] = useState(false); 

  useEffect(() => {
    // Loading spinner only shows on the client-side to avoid server-side rendering issues
    setIsClient(true);
  }, []);

  // If on the server-side, or if the page is fully loaded, don't show the loading spinner
  if (!isClient) {
    return null;
  }

  return (
    <div className={styles.loadingPage}>
      <div className={styles.spinner}></div>
      <div className={styles.loadingMessage}>Loading...</div>
    </div>
  );
};

export default LoadingPage;
