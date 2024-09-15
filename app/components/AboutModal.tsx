// TO-DO - about modal still needs styling and content

import React from 'react';
import Image from 'next/image';
import styles from './AboutModal.module.css';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AboutModal: React.FC<AboutModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null; // Only render if isOpen is true

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
      <button onClick={onClose} className={styles.closeButton}>
          <Image src="/images/icons/close-icon-white.png" alt="Close Icon" width={24} height={24} />
        </button>        <Image src="/images/bio-image.jpg" alt="Bio Image" width={150} height={150} />
        <p>This is a short bio description.</p>
      </div>
    </div>
  );
};

export default AboutModal;
