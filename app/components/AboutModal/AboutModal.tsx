import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './AboutModal.module.css';
import { aboutCopy } from '../../../public/modalCopy/aboutCopy';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AboutModal: React.FC<AboutModalProps> = ({ isOpen, onClose }) => {
  const [theme, setTheme] = useState<string | null>(null);

  useEffect(() => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    setTheme(currentTheme);
  }, []);

  if (!isOpen) return null;

  const closeIconSrc =
    theme === 'dark'
      ? '/images/icons/close-icon-white.png'
      : '/images/icons/close-icon-black.png';

  return (
    <div className="modalOverlay">
      <div className="modalContent">
        <button onClick={onClose} className="closeButton">
          <Image src={closeIconSrc} alt="Close Icon" width={24} height={24} />
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
