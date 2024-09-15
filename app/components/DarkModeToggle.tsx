'use client'; 

import { useDarkMode } from '../hooks/useDarkMode';
import styles from './DarkModeToggle.module.css';

const DarkModeToggle = () => {

    // TO-DO - useDarkMode hook needs further configuration/fixes. 
  const [darkMode, toggleDarkMode] = useDarkMode();

  return (
    <button onClick={toggleDarkMode} className={styles.toggleButton} aria-label="Toggle Dark Mode">
      {darkMode ? '⚪️' : '⚫️'}
    </button>
  );
}

export default DarkModeToggle;