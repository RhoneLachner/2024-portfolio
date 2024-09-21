import React from 'react';
import ImageCarousel from '../ImageCarousel/ImageCarousel';
import styles from './ProjectsModal.module.css';
import {
  projectsCopy,
  projectsImages,
} from '../../../public/modalCopy/projectsCopy';
import DynamicCloseButton from '../DynamicIcons/DynamicCloseButton';

interface ProjectsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ProjectsModal: React.FC<ProjectsModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modalOverlay">
      <div className="modalContent">
        <DynamicCloseButton onClose={onClose} />
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
                  <a
                    className={styles.carouselTitleLink}
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className={styles.carouselTitle}>
                      {project.title ===
                      'Work in Progress: Contingency Compass App' ? (
                        <>
                          Work in Progress: <br />
                          <span>Contingency Compass App</span>
                        </>
                      ) : (
                        project.title
                      )}
                    </div>
                   {project.title !== 'Dev Portfolio' &&
                  project.title !== 'Work in Progress: Contingency Compass App' ? (
                    <a
                      className={styles.carouselGithubLink}
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {project.githubCopy}
                    </a>
                  ) : null}
                  </a>
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
