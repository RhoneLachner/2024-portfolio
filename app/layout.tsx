// app/layout.tsx
import './globals.css';
import React from 'react';

export const metadata = {
  title: 'My Portfolio',
  description: 'Welcome to my portfolio website',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
