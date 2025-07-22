# 2024 Developer Portfolio

A modern, responsive portfolio website built with Next.js 15, TypeScript, and Tailwind CSS, featuring an interactive particle animation background and dark/light mode toggle.

## Features

- **Interactive Particle Animation**: Custom Canvas API implementation with mouse interaction
- **Dark/Light Mode Toggle**: Persistent theme switching with system preference detection
- **Responsive Design**: Mobile-first approach with optimized layouts for all screen sizes
- **Contact Form**: Functional email form with Nodemailer integration
- **Project Showcase**: Interactive image carousels with modal views
- **Optimized Performance**: Next.js 15 with static site generation (SSG)
- **Modern Stack**: TypeScript, CSS Modules, and WebP image optimization

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + CSS Modules
- **Animation**: Custom Canvas API particle system
- **Email**: Nodemailer
- **Testing**: Jest + React Testing Library + Playwright
- **Deployment**: Optimized for static hosting

## Testing

This project includes comprehensive testing with both unit tests and end-to-end tests:

### Unit Tests (Jest + React Testing Library)

```bash
# Run all unit tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage report
npm run test:coverage
```

**Test Coverage:**

- ContactForm component (form validation, API integration, error handling)
- ModalContext (state management, modal switching)
- useDarkMode hook (theme toggling, localStorage persistence, system preference detection)

### End-to-End Tests (Playwright)

```bash
# Run e2e tests
npm run test:e2e

# Run e2e tests with UI
npm run test:e2e:ui
```

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Project Structure

```
app/
├── components/          # React components
├── context/            # React context providers
├── hooks/              # Custom React hooks
├── assets/             # Static assets and data
└── globals.css         # Global styles

__tests__/              # Unit tests
playwright/             # E2E tests
public/                 # Static files
```

## Key Components

- **ParticleBackground**: Interactive Canvas-based animation system
- **ContactForm**: Email functionality with validation
- **ModalContext**: Global state management for modals
- **useDarkMode**: Theme management hook
- **ImageCarousel**: Project showcase with navigation

## License

MIT License - see LICENSE file for details.
