/**
 * ImageCarousel Component
 *
 * This component is used within the ProjectsModal component.
 * This component displays a carousel with images based on the project's title.
 * It allows users to navigate through a set of images using left and right chevron buttons.
 * If no images are available for the given project, it displays a fallback message.
 */

import React, { useState } from 'react';
import Image from 'next/image';
import styles from './ImageCarousel.module.css';
import { projectsImages } from '../../assets/copy/projectsModalCopy';
import { ICONS } from '../../assets/icons';
import ImageExpandedModal from './ImageExpandedModal';

interface ImageCarouselProps {
  projectTitle: string;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ projectTitle }) => {
  // Get the images for the specified project title, fallback to an empty array if not found
  const images = projectsImages[projectTitle] || [];

  // Track the current image index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Track expanded image modal state
  const [isExpanded, setIsExpanded] = useState(false);

  // Navigate to the next image
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Navigate to the previous image
  const goToPrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  // Handle image click to expand (only on screens > 756px)
  const handleImageClick = () => {
    if (window.innerWidth > 756) {
      setIsExpanded(true);
    }
  };

  // Handle closing expanded view
  const handleCloseExpanded = () => {
    setIsExpanded(false);
  };

  // Return a fallback message if there are no images for the project
  if (images.length === 0) {
    return <div>No images available for this project</div>;
  }

  return (
    <div className={styles.carousel}>
      {/* Desktop chevron - outside imageContainer at 768+ */}
      <div className={styles.chevronOutside}>
        {currentIndex > 0 && (
          <button className={styles.chevronLeft} onClick={goToPrevious}>
            <Image
              className={styles.chevronLeftImage}
              src={ICONS.chevronLeft}
              alt="Previous"
              width={40}
              height={40}
              quality={90}
            />
          </button>
        )}
      </div>

      <div className={styles.imageContainer}>
        {/* Mobile chevrons - inside imageContainer below 768px */}
        {currentIndex > 0 && (
          <button className={styles.chevronLeftMobile} onClick={goToPrevious}>
            <Image
              className={styles.chevronLeftImage}
              src={ICONS.chevronLeft}
              alt="Previous"
              width={40}
              height={40}
              quality={90}
            />
          </button>
        )}

        <Image
          src={images[currentIndex]}
          alt={`Image for ${projectTitle}`}
          width={456}
          height={264}
          className={styles.carouselImage}
          quality={100}
          onClick={handleImageClick}
        />

        {currentIndex < images.length - 1 && (
          <button className={styles.chevronRightMobile} onClick={goToNext}>
            <Image
              className={styles.chevronRightImage}
              src={ICONS.chevronRight}
              alt="Next"
              width={40}
              height={40}
              quality={90}
            />
          </button>
        )}
      </div>

      {/* Desktop chevron - outside imageContainer at 768+ */}
      <div className={styles.chevronOutside}>
        {currentIndex < images.length - 1 && (
          <button className={styles.chevronRight} onClick={goToNext}>
            <Image
              className={styles.chevronRightImage}
              src={ICONS.chevronRight}
              alt="Next"
              width={40}
              height={40}
              quality={90}
            />
          </button>
        )}
      </div>

      {/* Expanded Image Modal */}
      <ImageExpandedModal
        isOpen={isExpanded}
        onClose={handleCloseExpanded}
        images={images}
        currentIndex={currentIndex}
        onNext={goToNext}
        onPrevious={goToPrevious}
        projectTitle={projectTitle}
      />
    </div>
  );
};

export default ImageCarousel;
