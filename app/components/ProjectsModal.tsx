// TO-DO - projects modal still needs styling and content

import React from 'react';
import ImageSlider from './ImageSlider';
import styles from './ProjectsModal.module.css';
import Image from 'next/image';

interface ProjectsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// TO-DO - image slider still needs functional and styling fixes. 

const ProjectsModal: React.FC<ProjectsModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const projectImages1 = [
    '/images/placeholder-image1.png',
    '/images/placeholder-image2.png',
    '/images/placeholder-image3.png',
  ];

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
      <button onClick={onClose} className={styles.closeButton}>
          <Image src="/images/icons/close-icon-white.png" alt="Close Icon" width={24} height={24} />
        </button>       
         <ImageSlider images={projectImages1} />
      </div>
    </div>
  );
};

export default ProjectsModal;
