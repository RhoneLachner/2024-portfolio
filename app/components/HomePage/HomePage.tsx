/**
 * HomePage Component
 * 
 * This component renders the homepage with the ParticleBackground component and copy content.
 * It includes a particle reset button to reset the particle background.
 * Copy and button element visibility is based on modal state; not visible on small screens when modals are open.
 */

'use client'; 
import React, { useRef } from 'react';
import { useModalContext } from '../../context/ModalContext';
import ParticleBackground from '../ParticleBackground/ParticleBackground';
import styles from './HomePage.module.css';

const HomePage: React.FC = () => {
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

  return (
    <div className={styles.homePage}>
      <div className={styles.particleBackgroundContainer}>
        {/* Particle background with reference to reset particles */}
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
