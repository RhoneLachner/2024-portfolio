import React, { useState } from 'react';
import Image from 'next/image';
import styles from './ImageCarousel.module.css';
import { projectsImages } from '../../assets/copy/projectsModalCopy';
import { ICONS } from '../../assets/icons';

interface ImageCarouselProps {
  projectTitle: string;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ projectTitle }) => {
  const images = projectsImages[projectTitle] || []; // Select images based on project title
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  if (images.length === 0) {
    return <div>No images available for this project</div>;
  }

  return (
    <div className={styles.carousel}>
      <div className={styles.imageContainer}>
        {currentIndex > 0 && (
          <button className={styles.chevronLeft} onClick={goToPrevious}>
            <Image
              className={styles.chevronLeftImage}
              src={ICONS.chevronLeft}
              alt="Previous"
              width={40}
              height={40}
            />
          </button>
        )}

        <Image
          src={images[currentIndex]}
          alt={`Image for ${projectTitle}`}
          width={200}
          height={100}
          className={styles.carouselImage}
        />

        {currentIndex < images.length - 1 && (
          <button className={styles.chevronRight} onClick={goToNext}>
            <Image
              className={styles.chevronRightImage}
              src={ICONS.chevronRight}
              alt="Next"
              width={40}
              height={40}
            />
          </button>
        )}
      </div>
    </div>
  );
};

export default ImageCarousel;
