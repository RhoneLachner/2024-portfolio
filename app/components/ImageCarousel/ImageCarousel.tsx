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

interface ImageCarouselProps {
  projectTitle: string;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ projectTitle }) => {
  // Get the images for the specified project title, fallback to an empty array if not found
  const images = projectsImages[projectTitle] || [];

  // Track the current image index
  const [currentIndex, setCurrentIndex] = useState(0);

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

  // Return a fallback message if there are no images for the project
  if (images.length === 0) {
    return <div>No images available for this project</div>;
  }

  return (
    <div className={styles.carousel}>
      <div className={styles.imageContainer}>
        {/* Display the previous button only if there are more images to navigate back to */}
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

        <Image
          src={images[currentIndex]}
          alt={`Image for ${projectTitle}`}
          width={200}
          height={100}
          className={styles.carouselImage}
          quality={100}
        />

        {/* Display the next button only if there are more images to navigate forward to */}
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
    </div>
  );
};

export default ImageCarousel;
