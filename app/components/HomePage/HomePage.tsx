/**
 * HomePage Component
 * 
 * This component renders the homepage with the ParticleBackground component and copy content.
 * It includes a particle reset button to reset the particle background.
 * Copy and button element visibility is based on modal state; not visible on small screens when modals are open.
 * A LoadingPage component is displayed while the homepage content is loading.
 */

'use client'; 
import React, { useRef, useEffect, useState } from 'react';
import { useModalContext } from '../../context/ModalContext';
import ParticleBackground from '../ParticleBackground/ParticleBackground';
import styles from './HomePage.module.css';
import LoadingPage from '../LoadingPage/LoadingPage';

const HomePage: React.FC = () => {
  // State to manage loading status
  const [loading, setLoading] = useState(true);

  // Ref to trigger particle reset
  const particleRef = useRef<{ resetParticles: () => void } | null>(null);

  // Access modal state from context
  const { openModal } = useModalContext(); 

  // Function to reset particle background
  const handleResetClick = () => {
    if (particleRef.current) {
      particleRef.current.resetParticles();
    }
  };

  useEffect(() => {
    // Check if the document is already loaded
    if (document.readyState === 'complete') {
      setLoading(false);
    } else {
      // Set loading to false when the page has fully loaded
      const handlePageLoad = () => {
        setLoading(false);
      };
      window.addEventListener('load', handlePageLoad);

      // Cleanup event listener on component unmount
      return () => window.removeEventListener('load', handlePageLoad);
    }
  }, []);

  // Render the loading screen while the page is still loading
  if (loading) {
    return <LoadingPage />;
  }

  return (
    <div className={styles.homePage}>
      <div className={styles.particleBackgroundContainer}>
        <ParticleBackground ref={particleRef} />
      </div>

      <div
        className={`${styles.particleResetButtonContainer} ${
          openModal ? styles.hideOnSmallScreens : ''
        }`}
      >
        <button
          className={`${styles.particleResetButton} ${
            openModal ? styles.hideOnSmallScreens : ''
          }`}
          onClick={handleResetClick}
        >
          reset particles
        </button>
      </div>

      <div
        className={`${styles.copyContainer} ${
          openModal ? styles.hideOnSmallScreens : ''
        }`}
      >
        <div className={styles.internalCopyContainer}>
          <div className={styles.copyLine1}></div>
          <div className={styles.copyLine1}> Hello, my name is </div>
          <div className={styles.copyLine2}>
            Sarah Rhone Lachner<span className={styles.comma}></span>
          </div>
          <div className={styles.copyLine3}> but you can </div>
          <div className={styles.copyLine4}>
            call me <span className={styles.rhone}>Rhone</span>
          </div>
          <div className={styles.copyLine5}>
            {' '}
            I make web applications and music.{' '}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
