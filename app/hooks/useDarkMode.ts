/**
 * This custom hook manages the dark mode toggle for the application.
 * It reads the user's theme preference from localStorage (defaulting to dark mode if none is found), 
 * and applies the chosen theme to the document. 
 * It provides a function to toggle between dark and light modes, persisting the choice in localStorage.
 */

import { useEffect, useState } from 'react';

export const useDarkMode = () => {
  const [darkMode, setDarkMode] = useState<boolean>(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    const isDark = savedTheme === 'dark';
    setDarkMode(isDark);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const toggleDarkMode = () => {
    const newTheme = darkMode ? 'light' : 'dark';
    setDarkMode(!darkMode);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return [darkMode, toggleDarkMode] as const;
};
