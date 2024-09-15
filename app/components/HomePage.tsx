import styles from './HomePage.module.css'; // Import CSS module

const HomePage = () => {
  return (
    <div className={styles.homePage}>
      {/* TO-DO -  <ParticleBackground /> */}
      <div className={styles.copyContainer}>
        <div className={styles.copyLine1}> Line1 </div>
        <div className={styles.copyLine2}> Line2 </div>
        <div className={styles.copyLine3}> Line3 </div>
        <div className={styles.copyLine4}> Line4 </div>
      </div>
    </div>
  );
}

export default HomePage;
