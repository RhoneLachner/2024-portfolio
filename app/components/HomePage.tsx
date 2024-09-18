'use client';
import React, { useRef } from 'react';
import { useModalContext } from './ModalContext'; 
import ParticleBackground from './ParticleBackground';
import styles from './HomePage.module.css';

const HomePage: React.FC = () => {
  const particleRef = useRef<{ resetParticles: () => void } | null>(null);
  const { openModal } = useModalContext(); 

  const handleResetClick = () => {
    if (particleRef.current) {
      particleRef.current.resetParticles();
    }
  };

  return (
    <div className={styles.homePage}>
      <div className={styles.particleBackgroundContainer}>
        <ParticleBackground ref={particleRef} />
      </div>

      <div className={`${styles.particleResetButtonContainer} ${openModal ? styles.hideOnSmallScreens : ''}`}>
        <button
          className={styles.particleResetButton}
          onClick={handleResetClick}
        >
          reset particles
        </button>
      </div>

      <div className={`${styles.copyContainer} ${openModal ? styles.hideOnSmallScreens : ''}`}>
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
          <div className={styles.copyLine5}> I make web applications and music. </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
