/**
 * The `AboutModal` component displays a modal containing an image and a bio paragraph.
 * It uses the `aboutCopy` data for the bio content and allows users to close the modal with a dynamic close button.
 * Global classes `modalOverlay` and `modalContent` are used to style the modal across all modal components.
 * The `isOpen` prop controls the visibility of the modal, while the `onClose` prop handles the close event.
 */

import React from 'react';
import Image from 'next/image';
import styles from './AboutModal.module.css';
import { aboutCopy } from '../../assets/copy/aboutModalCopy';
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
            src={aboutCopy.bioImage}
            alt="Bio Image"
            width={280}
            height={280}
            priority
            quality={95}
          />
        </div>

        <div className={styles.bioCopy}>
          <p className={styles.bioParagraph}>
            {/* render the first paragraph in aboutCopy.bio with prefix appended to the beginning */}
            <span className={styles.highlight}>{aboutCopy.prefix}</span>
            {aboutCopy.bio[0]}
          </p>
          {/* render the second paragraph in aboutCopy.bio */}
          {aboutCopy.bio.slice(1).map((paragraph, index) => (
            <p className={styles.bioParagraph} key={index}>
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutModal;
