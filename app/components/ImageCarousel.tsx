import React, { useState } from 'react';
import Image from 'next/image';
import styles from './ImageCarousel.module.css'; // Import the CSS module

const ImageCarousel: React.FC<{ images: string[] }> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className={styles.carousel}>
      <div className={styles.imageContainer}>
        {currentIndex > 0 && (
          <button className={styles.chevronLeft} onClick={goToPrevious}>
            <Image
              className={styles.chevronLeftImage}
              src="/images/icons/chevron-left.png"
              alt="Previous"
              width={40}
              height={40}
            />
          </button>
        )}

        <Image
          src={images[currentIndex]}
          alt="Carousel Image"
          width={200} // Placeholder dimensions
          height={100} // Placeholder dimensions
          className={styles.carouselImage}
        />

        {currentIndex < images.length - 1 && (
          <button className={styles.chevronRight} onClick={goToNext}>
            <Image
              className={styles.chevronRightImage}
              src="/images/icons/chevron-right.png"
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
