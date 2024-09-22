// This file contains the copy and image references used in the ProjectsModal component.

interface ProjectsCopy {
  title: string;
  description: string;
  url: string;
  githubUrl: string;
  githubCopy: string;
}

export const projectsCopy: ProjectsCopy[] = [
  {
    title: 'Dev Portfolio',
    githubCopy: 'GitHub',
    description: `
      This portfolio site was built using Next.js, TypeScript, and Tailwind CSS to showcase my work as a developer and highlight my passion for clean, responsive design. Leveraging server-side rendering (SSR) and static site generation (SSG), the site ensures fast performance.
      I used a component-based architecture, custom hooks, and state management to create an engaging user experience, while Tailwind CSS helped streamline the design process with scalable, efficient styling. Playwright was implemented to perform end-to-end testing, ensuring the contact form and email functionality work seamlessly. 
      I invite you to explore my projects, and the source code is available on GitHub for those interested in a closer look!
    `,
    url: 'https://github.com/RhoneLachner/2024-portfolio',
    githubUrl: 'https://github.com/RhoneLachner/2024-portfolio',
  },
  {
    title: 'Work in Progress: Contingency Compass App',
    githubCopy: 'GitHub',
    description: `
      A full-stack web application designed to provide critical information and resources during natural disasters. It features real-time updates, location-based data, and resource mapping.  The frontend is built with React, HTML, CSS, and JavaScript, while the backend utilizes Django and Django REST Framework. APIs include FEMA, OpenWeatherMap, and Google Maps to ensure reliable, up-to-date data.
    `,
    url: 'https://github.com/RhoneLachner/contingency-compass-app',
    githubUrl: 'https://github.com/RhoneLachner/contingency-compass-app',
  },
  {
    title: 'beHuman VS Code Extension',
    githubCopy: 'GitHub',
    description: `
      A VS Code extension developed in 7 days that encourages developers to take breaks with customizable intervals. 
      Built with Node.js, JavaScript, HTML, CSS, PostgreSQL, and deployed via Heroku and Netlify. The extension promotes healthy screen-time habits by alerting users when it's time for a break.
    `,
    url: 'https://marketplace.visualstudio.com/items?itemName=not-bot.be-human',
    githubUrl: 'https://github.com/alchemy-be-human',
  },
  {
    title: 'Major Arcana Divinator App',
    githubCopy: 'GitHub',
    description: `
      This Tarot reading app allows users to draw one or three cards from the Major Arcana for a personalized reading. Built with Vanilla JavaScript, HTML, and CSS, the app stores past readings in the browser using local storage, and data for each card was translated from my favorite old book on Tarot interpretation.
    `,
    url: 'https://mystechal-divinators.github.io/project-week-tarot-divinators/index.html',
    githubUrl: 'https://github.com/Mystechal-Divinators',
  },
  {
    title: 'Flourish Plant Care App',
    githubCopy: 'GitHub',
    description: `
      Flourish is a full-stack React app with a GraphQL backend and integrated plant recognition APIs. Users can upload plant images or search by name to access personalized care instructions. Authentication features allow users to save plants and create notes for each one.
    `,
    url: 'https://flourish-pro.netlify.app/',
    githubUrl: 'https://github.com/FlourishTeam',
  },
  {
    title: 'Karaoke Roulette App',
    githubCopy: 'GitHub',
    description: `
      Karaoke Roulette is a fun React app that uses the YouTube API to randomly select karaoke tracks.  Built with JavaScript, Node.js, PostgreSQL, and deployed on Heroku and Netlify, this app provides a randomized karaoke experience, perfect for group gatherings.
    `,
    url: 'https://karaoke-roulette.netlify.app/',
    githubUrl: 'https://github.com/Karaoke-Roulette',
  },
];

export const projectsImages: { [key: string]: string[] } = {
  'Dev Portfolio': [
    '/images/projectImages/portfolio-image1.png',
    '/images/projectImages/portfolio-image2.png',
    '/images/projectImages/portfolio-image3.png',
    '/images/projectImages/portfolio-image4.png',
    '/images/projectImages/portfolio-image5.png',
    '/images/projectImages/portfolio-image6.png',
    '/images/projectImages/portfolio-image7.png',
    '/images/projectImages/portfolio-image8.png',
  ],
  'Work in Progress: Contingency Compass App': [
    '/images/projectImages/compassapp-image1.png',
    '/images/projectImages/compassapp-image2.png',
    '/images/projectImages/compassapp-image3.png',
  ],
  'beHuman VS Code Extension': [
    '/images/projectImages/behuman-image1.png',
    '/images/projectImages/behuman-image2.png',
    '/images/projectImages/behuman-image3.png',
  ],
  'Major Arcana Divinator App': [
    '/images/projectImages/tarot-image1.png',
    '/images/projectImages/tarot-image2.png',
    '/images/projectImages/tarot-image3.png',
  ],
  'Flourish Plant Care App': ['/images/projectImages/flourish-image1.png'],
  'Karaoke Roulette App': ['/images/projectImages/karaoke-image1.png'],
};
