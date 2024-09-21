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
           This app was created using Next.js, TypeScript.js, and Tailwind.css during a week sprint. 
           Process details and publicly available information can be found at my GitHub account.
         `,
    url: 'https://github.com/RhoneLachner/2024-portfolio',
    githubUrl: 'https://github.com/RhoneLachner/2024-portfolio',
  },
  {
    title: 'Work in Progress: Contingency Compass App',
    githubCopy: 'GitHub',
    description: `
           Full Stack web application designed to provide critical information and resources during natural disasters. 
           Frontend: React, HTML, CSS, JavaScript. Backend: Django, Django REST Framework. Database: Python.APIs: FEMA API, OpenWeatherMap API, Google Maps API
           `,
    url: 'https://github.com/RhoneLachner/contingency-compass-app',
    githubUrl: 'https://github.com/RhoneLachner/contingency-compass-app',
  },
  {
    title: 'beHuman VS Code Extension',
    githubCopy: 'GitHub',
    description: `
           This website was created using Node.js, JavaScript, HTML, CSS, PostgreSQL, Heroku, Netlify, and Photoshop.
           In 7 days, my team and I created a VS Code extension that alerts users to take a break from their screens at
           a time increment of choice.
         `,
    url: 'https://marketplace.visualstudio.com/items?itemName=not-bot.be-human',
    githubUrl: 'https://github.com/alchemy-be-human',
  },
  {
    title: 'Major Arcana Divinator App',
    githubCopy: 'GitHub',
    description: `
           This app was primarily written with Vanilla JavaScript, HTML, and CSS. Users may choose a one or three-card Tarot spread,
           and a randomized reading is displayed. Past readings are stored in a history log using local storage.
         `,
    url: 'https://mystechal-divinators.github.io/project-week-tarot-divinators/index.html',
    githubUrl: 'https://github.com/Mystechal-Divinators',
  },
  {
    title: 'Flourish Plant Care App',
    githubCopy: 'GitHub',
    description: `
           Flourish is a full stack React app implementing a GraphQL backend and two APIs for plant image recognition and care.
           Users can search for a plant by image recognition or name to find care instructions and tips.
         `,
    url: 'https://flourish-pro.netlify.app/',
    githubUrl: 'https://github.com/FlourishTeam',
  },
  {
    title: 'Karaoke Roulette App',
    githubCopy: 'GitHub',
    description: `
           This React app was created using YouTube API, JavaScript, Node.js, PostgreSQL, CSS, Heroku, Netlify, Postman, and Photoshop.
           Karaoke Roulette allows users to select randomized karaoke songs to sing with friends.
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
