import styles from './HomePage.module.css'; // Import CSS module

const HomePage = () => {
  return (
    <div className={styles.homePage}>
      {/* TO-DO -  <ParticleBackground /> */}
      <div className={styles.copyContainer}>
        <div className={styles.internalCopyContainer}>
          <div className={styles.copyLine1}> </div>
          <div className={styles.copyLine1}> Hello, my name is </div>
          <div className={styles.copyLine2}>
            {' '}
            Sarah Rhone Lachner<span className={styles.comma}></span>{' '}
          </div>
          <div className={styles.copyLine3}> but you can </div>
          <div className={styles.copyLine4}>
            {' '}
            call me <span className={styles.rhone}>Rhone</span>
          </div>
          <div className={styles.copyLine5}>
            {' '}
            I make web applications and music.{' '}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
