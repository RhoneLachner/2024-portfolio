/**
 * ProjectsModal Component
 *
 * This component renders a modal displaying several projects, each with its own carousel of images and project description.
 * It includes project titles and descriptions from public/copy/projectsCopy, and external links to live projects and GitHub repositories.
 * The modal is rendered conditionally based on the `isOpen` prop.
 */

import React from 'react';
import ImageCarousel from '../ImageCarousel/ImageCarousel';
import styles from './ProjectsModal.module.css';
import { projectsCopy } from '../../assets/copy/projectsModalCopy';
import DynamicCloseButton from '../DynamicIcons/DynamicCloseButton';

interface ProjectsModalProps {
  isOpen: boolean;

  // Function to close the modal
  onClose: () => void;
}

const ProjectsModal: React.FC<ProjectsModalProps> = ({ isOpen, onClose }) => {
  // Do not render if the modal is not open
  if (!isOpen) return null;

  return (
    <div className="modalOverlay">
      <div className="modalContent">
        <DynamicCloseButton onClose={onClose} />

        <div className={styles.carouselStack}>
          {/* Loop through the projects and render each project's details */}
          {projectsCopy.map((project, index) => (
            <div key={index} className={styles.carouselItemContainer}>
              <ImageCarousel projectTitle={project.title} />

              <div className={styles.carouselTextContainer}>
                {project.title === 'Dev Portfolio' ||
                project.title === 'CommitWizard CLI' ||
                project.title === 'Work in Progress: Contingency Compass App' ? (
                  <div className={`${styles.noHoverEffect}`}>
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
                ) : (
                  <a
                    className={styles.carouselTitleLink}
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className={styles.carouselTitle}>
                      {project.title}
                    </div>
                  </a>
                )}

                <a
                  className={styles.carouselGithubLink}
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.githubCopy}
                </a>

                <div className={styles.carouselDescription}>
                  {project.description.split('\n').map((paragraph, index) => (
                    <p className={styles.carouselParagraph} key={index}>
                      {paragraph}
                    </p>
                  ))}
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
