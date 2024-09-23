'use client';
import { ReactNode } from 'react';
import './globals.css';
import styles from './layout.module.css';
import Header from './components/Header/Header';
import { ModalProvider } from './context/ModalContext';
import Head from 'next/head'; 

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <Head>
        <title>Sarah Rhone Lachner Dev Portfolio</title>
        <meta name="description" content="Development Portfolio of Sarah Rhone Lachner - Software engineer, musician, and artist with a passion for patterns, nature, and problem solving." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body className={styles.body}>
        <ModalProvider>
          <Header />
          <main className={styles.main}>{children}</main>
        </ModalProvider>
      </body>
    </html>
  );
}
