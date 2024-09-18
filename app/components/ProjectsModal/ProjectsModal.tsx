import React from 'react';
import ImageCarousel from '../ImageCarousel/ImageCarousel';
import styles from './ProjectsModal.module.css';
import Image from 'next/image';

interface ProjectsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const images = [
  '/images/placeholder-images/placeholder-image1.png',
  '/images/placeholder-images/placeholder-image2.png',
  '/images/placeholder-images/placeholder-image3.png',
  '/images/placeholder-images/placeholder-image4.png',
];


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
          <div className={styles.carouselItemContainer}>
            <ImageCarousel images={images} />
            <div className={styles.carouselTextContainer}>
              <div className={styles.carouselTitle}>Dev Portfolio</div>
              <div className={styles.carouselDescription}>
                This app was created using Next.js, TypeScript.js, and
                Tailwind.css during a week sprint. Process details and
                publically available can be found at my GitHub account.
              </div>
            </div>
          </div>

          <div className={styles.carouselItemContainer}>
            <ImageCarousel images={images} />
            <div className={styles.carouselTextContainer}>
              <div className={styles.carouselTitle}>
                Work In Progress: <br /> Contingency Compass App
              </div>
              <div className={styles.carouselDescription}>
                Full Stack web application designed to provide critical
                information and resources during natural disasters.
                <br />
                Frontend: React, HTML, CSS, JavaScript <br />
                Backend: Django, Django REST Framework
                <br />
                Database: Python
                <br />
                APIs: FEMA API, OpenWeatherMap API, Google Maps API
                <br />
              </div>
            </div>
          </div>

          <div className={styles.carouselItemContainer}>
            <ImageCarousel images={images} />
            <div className={styles.carouselTextContainer}>
              <div className={styles.carouselTitle}>
                beHuman VS Code Extension
              </div>
              <div className={styles.carouselDescription}>
                This website was created using with Node.js, JavaScript, HTML,
                CSS, PostgreSQL, Heroku, Netlify, and Photoshop. In 7 days my
                team and I created a VS Code extension that alerts users to take
                a break from their screens at a time increment of choice.
              </div>
            </div>
          </div>

          <div className={styles.carouselItemContainer}>
            <ImageCarousel images={images} />
            <div className={styles.carouselTextContainer}>
              <div className={styles.carouselTitle}>
                Flourish Plant Care App
              </div>
              <div className={styles.carouselDescription}>
                Flourish is a full stack React app implementing a GraphQL back
                end and two APIs for plant image recognition and plant care.
                Users are able to search for a plant by image recognition or
                name to find care instructions and tips. Through authentication
                users may set up a personal profile, save plants to their
                collection, and create personalized notes for their plant
                babies!
              </div>
            </div>
          </div>

          <div className={styles.carouselItemContainer}>
            <ImageCarousel images={images} />
            <div className={styles.carouselTextContainer}>
              <div className={styles.carouselTitle}>
                Major Arcana Divinator App
              </div>
              <div className={styles.carouselDescription}>
                This app was primarily written with Vanilla JavaScript, HTML,
                and CSS with additional items created in PhotoShop and
                GarageBand. Users may choose a one or three-card Tarot spread,
                and a randomized reading is displayed. Past readings are stored
                in a history log using local storage.{' '}
              </div>
            </div>
          </div>

          <div className={styles.carouselItemContainer}>
            <ImageCarousel images={images} />
            <div className={styles.carouselTextContainer}>
              <div className={styles.carouselTitle}>Karaoke Roulette App</div>
              <div className={styles.carouselDescription}>
                This React app was created using YouTube API, JavaScript,
                Node.js, PostgreSQL, CSS, Heroku, Netlify, Postman, and
                Photoshop. Karaoke Roulette App uses the YouTube API, allowing
                users to select randomized karaoke songs to sing with friends.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsModal;
