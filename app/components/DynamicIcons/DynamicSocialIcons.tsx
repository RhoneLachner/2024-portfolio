import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const socialLinks = {
  github: {
    light: '/images/icons/socialIcons/github-icon-light.png',
    dark: '/images/icons/socialIcons/github-icon-dark.png',
  },
  linkedin: {
    light: '/images/icons/socialIcons/linkedin-icon-light.png',
    dark: '/images/icons/socialIcons/linkedin-icon-dark.png',
  },
  music: {
    light: '/images/icons/socialIcons/music-icon-light.png',
    dark: '/images/icons/socialIcons/music-icon-dark.png',
  },
};

const DynamicSocialIcons: React.FC = () => {
  const [theme, setTheme] = useState<string | null>(null);

  useEffect(() => {
    const getCurrentTheme = () =>
      document.documentElement.getAttribute('data-theme');
    setTheme(getCurrentTheme());

    const observer = new MutationObserver(() => {
      setTheme(getCurrentTheme());
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="socialIconsContainer">
      <a
        href="https://github.com/RhoneLachner"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          className="socialIconImage"
          src={socialLinks.github[theme === 'dark' ? 'dark' : 'light']}
          alt="GitHub Icon"
          width={48}
          height={48}
        />
      </a>
      <a
        href="https://www.linkedin.com/in/rhonelachner/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          className="socialIconImage"
          src={socialLinks.linkedin[theme === 'dark' ? 'dark' : 'light']}
          alt="LinkedIn Icon"
          width={48}
          height={48}
        />
      </a>
      <a
        href="https://hopeandfailure.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          className="socialIconImage"
          src={socialLinks.music[theme === 'dark' ? 'dark' : 'light']}
          alt="Music Icon"
          width={48}
          height={48}
        />
      </a>
    </div>
  );
};

export default DynamicSocialIcons;
