import React from 'react';
import ImageCarousel from '../ImageCarousel/ImageCarousel';
import styles from './ProjectsModal.module.css';
import { projectsCopy } from '../../assets/copy/projectsModalCopy';
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
          {projectsCopy.map((project, index) => (
            <div key={index} className={styles.carouselItemContainer}>
              <ImageCarousel projectTitle={project.title} />

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
                </a>

                {project.title !== 'Dev Portfolio' &&
                project.title !==
                  'Work in Progress: Contingency Compass App' ? (
                  <a
                    className={styles.carouselGithubLink}
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.githubCopy}
                  </a>
                ) : null}

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
