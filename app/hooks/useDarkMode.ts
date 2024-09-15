import { useEffect, useState } from 'react';

//Not working as expected. Needs further work. 

export function useDarkMode() {
  const [darkMode, setDarkMode] = useState<boolean>(true); 

  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode) {
      const isDark = savedMode === 'true';
      setDarkMode(isDark);
      document.documentElement.classList.toggle('dark', isDark);
    } else {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem('darkMode', newMode.toString());
      document.documentElement.classList.toggle('dark', newMode);
      return newMode;
    });
  };

  return [darkMode, toggleDarkMode] as const;
}
