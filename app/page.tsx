import HomePage from '../app/components/HomePage/HomePage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sarah Rhone Lachner Dev Portfolio',
  description:
    'Development Portfolio of Sarah Rhone Lachner - Software engineer, musician, and artist with a passion for patterns, nature, and problem solving.',
  viewport: 'width=device-width, initial-scale=1',
  icons: {
    icon: '/favicon.webp',
    shortcut: '/favicon.ico',
  },
  openGraph: {
    title: 'Sarah Rhone Lachner Dev Portfolio',
    description:
      'Development Portfolio of Sarah Rhone Lachner - Software engineer, musician, and artist with a passion for patterns, nature, and problem solving.',
    url: 'https://sarahrhonelachner.dev',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Sarah Rhone Lachner Portfolio',
      },
    ],
  },
};

export default function Page() {
  return <HomePage />;
}
