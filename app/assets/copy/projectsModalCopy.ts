// This file contains the copy and image references used in the ProjectsModal component.

interface ProjectsCopy {
  title: string;
  description: string;
  url: string;
  githubUrl: string;
  githubCopy: string;
  websiteCopy: string;
}

export const projectsCopy: ProjectsCopy[] = [
  {
    title: 'Automated Price Scraper Desktop App for The Portland Game Store',
    websiteCopy: '',
    githubCopy: '',
    githubUrl: '',
    url: '',
    description: `
Hired to create a web scraping desktop app to automate item searches across 7 different gaming distribution websites. The shop owner previously spent several hours per week manually comparing hundreds of items across distributors. I created this app to automate his search processes, populate a dated spreadsheet with inventory results per distributor warehouse, and run comparison calculations.
The app's backend logs in and scrapes 7 websites concurrently, simulates human behavior, automatically blocks ads and trackers, formats SKU and text inputs for each website format, and connects to a spreadsheet via Google Sheets API. Whenever possible, I used UPCs rather than SKUs, and accessed API endpoints directly to improve the stability and performance of the scraping functionality. Each scraper includes two different fallback methods to cover potential edge cases, missing product information, and user input error.

The app's UI includes a user-friendly login page, and a home page displaying a Google Sheet URL input, user instructions, and a status menu with real-time scraping updates.

The app is installed via downloadable file, and includes browser bundles to automatically include necessary Python and Playwright packages. I used a Windows emulator on my Mac to create Windows browser bundles and download files.

<strong>Backend:</strong> Node.js, TypeScript, Express.js, Playwright, Socket.IO, Google Sheets API, JWT, bcryptjs, dotenv, Helmet, CORS<br/><strong>Frontend:</strong> React, TypeScript, Vite, Axios, React Router, Socket.IO Client, CSS3<br/><strong>Desktop Deployment:</strong> Electron, Python (for packaging, environment management, and cross-platform support)<br/><strong>Tools:</strong> Jest, ts-jest, ESLint, Nodemon, Git, ts-node<br/><strong>Automation:</strong> Playwright scraping, endpoint parsing, session isolation, human-like input simulation`,
  },
  {
    title: 'Boilerplate Wizard',
    websiteCopy: 'Website',
    githubCopy: 'GitHub',
    githubUrl: 'https://github.com/RhoneLachner/boilerplate-wizard-monorepo',
    url: 'https://www.npmjs.com/~rhonezone',
    description: `
A collection of batteries‑included boilerplate generators for modern web apps published on npm. This project was created as a modern alternative to create-react-app to help developers scaffold production‑ready React and Next.js projects in seconds with strong defaults, a clean architectural foundation, and minimal configuration.

Each boilerplate UI contains an about page with user startup instructions and development commands. Wizard Note comments are embedded throughout the codebase to guide users on which files can be safely customized or removed.

Built using Node.js with native ES modules, Boilerplate Wizard powers multiple bp-wizard-create-* CLI tools, each designed to spin up a new project with sensible defaults, testing, linting, and modern structure. It integrates popular frontend frameworks like React 18 and Next.js 14 (App Router), and includes Vite for fast builds and modern development features. Code quality is enforced through ESLint and Prettier, and testing is fully configured with Vitest, Jest, and Playwright for unit, integration, and end-to-end coverage.

The project uses npm and pnpm workspaces for package management, and includes CI/CD support via GitHub Actions and Dependabot for automated updates and security. By emphasizing up-to-date dependencies and security-first practices, Boilerplate Wizard provides a robust starting point for professional-grade applications, personal projects, and hackathons.
<strong>Available Commands for npm Package Download:</strong></br><strong>React + JavaScript: </strong>npx bp-wizard-create-react-js my-app</br><strong>React + TypeScript: </strong>npx bp-wizard-create-react-ts my-app</br><strong>Next.js + JavaScript: </strong>npx bp-wizard-create-next-js my-app</br><strong>Next.js + TypeScript: </strong>npx bp-wizard-create-next-ts my-app</br>`,
  },
  {
    title: 'Dev Portfolio',
    websiteCopy: 'Website',
    githubCopy: 'GitHub',
    description: `
      This portfolio site was built using Next.js, TypeScript, and Tailwind CSS to showcase my work as a developer and highlight my passion for clean, responsive design. Utilizing static site generation and optimized WebP images, the site ensures fast performance and a smooth user experience.
      I used a component-based architecture, custom hooks, and state management to create an engaging user experience, while Tailwind CSS helped streamline the design process with scalable, efficient styling. Playwright was implemented to perform end-to-end testing, ensuring the contact form and email functionality work seamlessly.
      The source code is available on GitHub for those interested in a closer look.
    `,
    url: '',
    githubUrl: 'https://github.com/RhoneLachner/2024-portfolio',
  },
  {
    title: 'CommitWizard CLI',
    websiteCopy: 'Website',
    githubCopy: 'GitHub',
    description: `
CommitWizard CLI is a command-line tool that helps developers write consistent and structured Git commit messages by interactively selecting a commit category before writing the message. This ensures best practices are followed and makes it easier to maintain a clean and organized commit history.
Features include interactive commit prompts, structured commit messages, and customizable categories.
CommitWizard CLI has been published on npm and can be installed globally with the following command:
npm install -g commitwizard-cli
Contributions are welcome! Feel free to open an issue or submit a pull request on GitHub.
`,
    url: 'https://www.npmjs.com/package/commitwizard-cli',
    githubUrl: 'https://github.com/RhoneLachner/CommitWizard-CLI',
  },
  {
    title: 'beHuman VS Code Extension',
    websiteCopy: 'Website',
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
    websiteCopy: 'Website',
    githubCopy: 'GitHub',
    description: `
      This Tarot reading app allows users to draw one or three cards from the Major Arcana for a personalized reading. Built with Vanilla JavaScript, HTML, and CSS, the app stores past readings in the browser using local storage, and data for each card was translated from my favorite old book on Tarot interpretation.
    `,
    url: 'https://www.arcanadivinator.online/',
    githubUrl: 'https://github.com/RhoneLachner/major_arcana_divinator_app',
  },
];

export const projectsImages: { [key: string]: string[] } = {
  'Automated Price Scraper Desktop App for The Portland Game Store': [
    '/images/projectImages/PGS-image1.png',
    '/images/projectImages/PGS-image2.png',
    '/images/projectImages/PGS-image3.png',
    '/images/projectImages/PGS-image4.png',
    '/images/projectImages/PGS-image5.png',
  ],
  'Boilerplate Wizard': [
    '/images/projectImages/bp-wizard.png',
    '/images/projectImages/bp-wizard1.png',
    '/images/projectImages/bp-wizard2.png',
    '/images/projectImages/bp-wizard3.png',
    '/images/projectImages/bp-wizard4.png',
    '/images/projectImages/bp-wizard5.png',
    '/images/projectImages/bp-wizard6.png',
    '/images/projectImages/bp-wizard7.png',
    '/images/projectImages/bp-wizard8.png',
    '/images/projectImages/bp-wizard9.png',
    '/images/projectImages/bp-wizard10.png',
  ],
  'Dev Portfolio': [
    '/images/projectImages/portfolio-image1.webp',
    '/images/projectImages/portfolio-image2.webp',
    '/images/projectImages/portfolio-image3.webp',
    '/images/projectImages/portfolio-image4.webp',
    '/images/projectImages/portfolio-image5.webp',
    '/images/projectImages/portfolio-image6.webp',
    '/images/projectImages/portfolio-image7.webp',
    '/images/projectImages/portfolio-image8.webp',
  ],
  'CommitWizard CLI': [
    '/images/projectImages/commitwizard-image2.webp',
    '/images/projectImages/commitwizard-image1.webp',
  ],
  'Work in Progress: Contingency Compass App': [
    '/images/projectImages/compassapp-image1.webp',
    '/images/projectImages/compassapp-image2.webp',
    '/images/projectImages/compassapp-image3.webp',
  ],
  'beHuman VS Code Extension': [
    '/images/projectImages/behuman-image1.webp',
    '/images/projectImages/behuman-image2.webp',
    '/images/projectImages/behuman-image3.webp',
  ],
  'Major Arcana Divinator App': [
    '/images/projectImages/tarot-image1.png',
    '/images/projectImages/tarot-image2.png',
    '/images/projectImages/tarot-image3.png',
    '/images/projectImages/tarot-image4.png',
  ],
};
