import React from 'react';
import ImageCarousel from './ImageCarousel';
import styles from './ProjectsModal.module.css';
import Image from 'next/image';

interface ProjectsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const images = [
  '/images/placeholder-image1.png',
  '/images/placeholder-image2.png',
  '/images/placeholder-image3.png',
];

const ProjectsModal: React.FC<ProjectsModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

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

        <div className={styles.carouselStack}>
          <div className={styles.carouselItemContainer}>
            <ImageCarousel images={images} />
            <div className={styles.carouselTextContainer}>
              <div className={styles.carouselTitle}>
                Work In Progress: <br /> Contingency Compass App
              </div>
              <div className={styles.carouselDescription}>
                text example below carousel
              </div>
            </div>
          </div>

          <div className={styles.carouselItemContainer}>
            <ImageCarousel images={images} />
            <div className={styles.carouselTextContainer}>
              <div className={styles.carouselTitle}>Carousel Title</div>
              <div className={styles.carouselDescription}>
                text example below carousel
              </div>
            </div>
          </div>

          <div className={styles.carouselItemContainer}>
            <ImageCarousel images={images} />
            <div className={styles.carouselTextContainer}>
              <div className={styles.carouselTitle}>Carousel Title</div>
              <div className={styles.carouselDescription}>
                text example below carousel
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsModal;
