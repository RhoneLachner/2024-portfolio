// TO-DO - about modal still needs styling and content

import React from 'react';
import Image from 'next/image';
import styles from './AboutModal.module.css';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AboutModal: React.FC<AboutModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null; // Only render if isOpen is true

  console.log('ABOUTMODAL ON SCREEN');

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

        <div className={styles.bioImageContainer}>
          <Image
            className={styles.bioImage}
            src="/images/bio-image.jpg"
            alt="Bio Image"
            width={320}  
            height={320}
            priority 
          />
        </div>

        <div className={styles.bioCopy}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          vitae magna ullamcorper, scelerisque libero sed, vehicula turpis.
          Curabitur tincidunt mauris et sem bibendum, vitae bibendum felis
          vehicula. Cras tincidunt, eros eget dapibus efficitur, nulla eros
          aliquet mi, vitae venenatis nulla orci nec erat. Praesent sed lacus
          risus. Donec tempor interdum arcu, id posuere nulla lacinia ac. Nam
          fermentum tristique lectus, id ultricies nunc tristique id. Nulla in
          fringilla eros..
          <br />
          <br />
          Vivamus malesuada felis non feugiat ullamcorper. Phasellus bibendum
          est ut dui aliquet, vitae fermentum risus pulvinar. Proin euismod
          augue quam, ut vulputate nulla convallis a. Nulla non pharetra nulla.
          Mauris accumsan sem at turpis tincidunt, ac hendrerit urna pharetra.
          Nulla venenatis aliquet eros, vel eleifend eros facilisis sit amet.
          Vestibulum sed eros nunc. Quisque vulputate, urna ut dignissim luctus,
          mi dui vehicula ipsum, at pretium enim ligula nec dolor.
        </div>
      </div>
    </div>
  );
};

export default AboutModal;
