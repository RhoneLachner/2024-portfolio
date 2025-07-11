/**
 * ImageExpandedModal Component
 *
 * This modal displays an expanded view of a carousel image when clicked.
 * It shows the full-size image with a close button and navigation if multiple images exist.
 */

import React from 'react';
import Image from 'next/image';
import styles from './ImageExpandedModal.module.css';
import DynamicCloseButton from '../DynamicIcons/DynamicCloseButton';
import { ICONS } from '../../assets/icons';

interface ImageExpandedModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: string[];
  currentIndex: number;
  onNext: () => void;
  onPrevious: () => void;
  projectTitle: string;
}

const ImageExpandedModal: React.FC<ImageExpandedModalProps> = ({
  isOpen,
  onClose,
  images,
  currentIndex,
  onNext,
  onPrevious,
  projectTitle,
}) => {
  if (!isOpen || images.length === 0) return null;

  // Don't render on screens 756px and below
  if (typeof window !== 'undefined' && window.innerWidth <= 756) return null;

  return (
    <div className={styles.expandedOverlay} onClick={onClose}>
      <div
        className={styles.expandedContent}
        onClick={(e) => e.stopPropagation()}
      >
        <DynamicCloseButton onClose={onClose} />

        <div className={styles.expandedImageContainer}>
          {/* Previous button */}
          {currentIndex > 0 ? (
            <button className={styles.expandedChevronLeft} onClick={onPrevious}>
              <Image
                src={ICONS.chevronLeft}
                alt="Previous"
                width={50}
                height={50}
                className={styles.expandedChevronImage}
              />
            </button>
          ) : (
            <div style={{ width: '3rem' }}></div>
          )}

          <div className={styles.expandedImageWrapper}>
            <Image
              src={images[currentIndex]}
              alt={`${projectTitle} - Image ${currentIndex + 1}`}
              width={800}
              height={600}
              className={styles.expandedImage}
              quality={100}
            />
          </div>

          {/* Next button */}
          {currentIndex < images.length - 1 ? (
            <button className={styles.expandedChevronRight} onClick={onNext}>
              <Image
                src={ICONS.chevronRight}
                alt="Next"
                width={50}
                height={50}
                className={styles.expandedChevronImage}
              />
            </button>
          ) : (
            <div style={{ width: '3rem' }}></div>
          )}
        </div>

        <div className={styles.projectInfo}>
          <div className={styles.projectTitle}>{projectTitle}</div>
          <div className={styles.imageCounter}>
            {currentIndex + 1} / {images.length}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageExpandedModal;
