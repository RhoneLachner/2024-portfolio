import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { ICONS } from '../../assets/icons'; // Importing icon paths
import { socialLinkCopy } from '../../assets/socialLinks';

const socialLinks = {
  github: {
    light: ICONS.githubLight,
    dark: ICONS.githubDark,
  },
  linkedin: {
    light: ICONS.linkedinLight,
    dark: ICONS.linkedinDark,
  },
  bandsite: {
    light: ICONS.bandsiteLight,
    dark: ICONS.bandsiteDark,
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
        href={socialLinkCopy.linkedin}
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
      <a href={socialLinkCopy.github} target="_blank" rel="noopener noreferrer">
        <Image
          className="socialIconImage"
          src={socialLinks.github[theme === 'dark' ? 'dark' : 'light']}
          alt="GitHub Icon"
          width={48}
          height={48}
        />
      </a>
      <a
        href={socialLinkCopy.bandsite}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          className="socialIconImage"
          src={socialLinks.bandsite[theme === 'dark' ? 'dark' : 'light']}
          alt="Music Icon"
          width={48}
          height={48}
        />
      </a>
    </div>
  );
};

export default DynamicSocialIcons;
