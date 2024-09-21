import React from 'react';
import Image from 'next/image';
import styles from './AboutModal.module.css';
import { aboutCopy } from '../../../public/modalCopy/aboutCopy';
import DynamicCloseButton from '../DynamicIcons/DynamicCloseButton';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AboutModal: React.FC<AboutModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modalOverlay">
      <div className="modalContent">
        <DynamicCloseButton onClose={onClose} />
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
            <p className={styles.bioParagraph} key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutModal;
