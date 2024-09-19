interface ProjectsCopy {
  title: string;
  description: string;
}

export const projectsCopy: ProjectsCopy[] = [
  {
    title: 'Dev Portfolio',
    description: `
           This app was created using Next.js, TypeScript.js, and Tailwind.css during a week sprint. 
           Process details and publicly available information can be found at my GitHub account.
         `,
  },
  {
    title: 'Work in Progress: Contingency Compass App',
    description: `
           Full Stack web application designed to provide critical information and resources during natural disasters. 
           Frontend: React, HTML, CSS, JavaScript. Backend: Django, Django REST Framework. Database: Python.APIs: FEMA API, OpenWeatherMap API, Google Maps API
           `,
  },
  {
    title: 'beHuman VS Code Extension',
    description: `
           This website was created using Node.js, JavaScript, HTML, CSS, PostgreSQL, Heroku, Netlify, and Photoshop.
           In 7 days, my team and I created a VS Code extension that alerts users to take a break from their screens at
           a time increment of choice.
         `,
  },
  {
    title: 'Major Arcana Divinator App',
    description: `
           This app was primarily written with Vanilla JavaScript, HTML, and CSS. Users may choose a one or three-card Tarot spread,
           and a randomized reading is displayed. Past readings are stored in a history log using local storage.
         `,
  },
  {
    title: 'Flourish Plant Care App',
    description: `
           Flourish is a full stack React app implementing a GraphQL backend and two APIs for plant image recognition and care.
           Users can search for a plant by image recognition or name to find care instructions and tips.
         `,
  },
  {
    title: 'Karaoke Roulette App',
    description: `
           This React app was created using YouTube API, JavaScript, Node.js, PostgreSQL, CSS, Heroku, Netlify, Postman, and Photoshop.
           Karaoke Roulette allows users to select randomized karaoke songs to sing with friends.
         `,
  },
];

export const projectsImages: { [key: string]: string[] } = {
  'Dev Portfolio': [
    '/images/projectImages/portfolio-image1.png',
    '/images/projectImages/portfolio-image2.png',
    '/images/projectImages/portfolio-image3.png',
    '/images/projectImages/portfolio-image4.png',
    '/images/projectImages/portfolio-image5.png',
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
