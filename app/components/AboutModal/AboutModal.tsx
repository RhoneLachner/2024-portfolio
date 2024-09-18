import React from 'react';
import Image from 'next/image';
import styles from './AboutModal.module.css';
import { aboutCopy } from '../../../public/modalCopy/aboutCopy';

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
          <Image
            src="/images/icons/close-icon-white.png"
            alt="Close Icon"
            width={24}
            height={24}
          />
        </button>

        <div className={styles.bioImageContainer}>
          <Image
            className={styles.bioImage}
            src="/images/bio-image.jpg"
            alt="Bio Image"
            width={320}
            height={320}
            priority
          />
        </div>

        <div className={styles.bioCopy}>
          {aboutCopy.bio.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutModal;
