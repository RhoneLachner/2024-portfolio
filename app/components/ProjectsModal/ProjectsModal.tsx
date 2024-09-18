import React from 'react';
import ImageCarousel from '../ImageCarousel/ImageCarousel';
import styles from './ProjectsModal.module.css';
import Image from 'next/image';
import { projectsCopy } from '../../../public/modalCopy/projectsCopy';


interface ProjectsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const images = [
  '/images/placeholder-images/placeholder-image1.png',
  '/images/placeholder-images/placeholder-image2.png',
  '/images/placeholder-images/placeholder-image3.png',
  '/images/placeholder-images/placeholder-image4.png',
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
        {projectsCopy.map((project, index) => (
            <div key={index} className={styles.carouselItemContainer}>
              <ImageCarousel images={images} />
              <div className={styles.carouselTextContainer}>
                <div className={styles.carouselTitle}>{project.title}</div>
                <div className={styles.carouselDescription}>
                  {project.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsModal;
