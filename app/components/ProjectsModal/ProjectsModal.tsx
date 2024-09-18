import React from 'react';
import ImageCarousel from '../ImageCarousel/ImageCarousel';
import styles from './ProjectsModal.module.css';
import Image from 'next/image';
import { projectsCopy, projectsImages } from '../../../public/modalCopy/projectsCopy';

interface ProjectsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

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
          {projectsCopy.map((project, index) => {
            const projectImages = projectsImages[project.title] || [];

            return (
              <div key={index} className={styles.carouselItemContainer}>
                {projectImages.length > 0 ? (
                  <ImageCarousel images={projectImages} />
                ) : (
                  <div>No images available for this project</div>
                )}

                <div className={styles.carouselTextContainer}>
                  <div className={styles.carouselTitle}>{project.title}</div>
                  <div className={styles.carouselDescription}>
                    {project.description}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectsModal;
