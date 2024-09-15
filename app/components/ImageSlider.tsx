import Image from 'next/image';
import styles from './ImageSlider.module.css';

interface ImageSliderProps {
  images: string[];
}
// TO-DO - image slider still needs functional and styling fixes. 

const ImageSlider = ({ images }: ImageSliderProps) => {
  return (
    <div className={styles.slider}>
      {images.map((imageSrc, index) => (
        <div key={index} className={styles.imageContainer}>
          <Image
            src={imageSrc}
            alt={`Project ${index + 1}`}
            width={600}
            height={400}
            layout="responsive"
            priority={index === 0} 
          />
        </div>
      ))}
      <button className={styles.arrowButton}>←</button>
      <button className={styles.arrowButton}>→</button>
    </div>
  );
}

export default ImageSlider;