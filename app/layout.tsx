'use client';
import { ReactNode } from 'react';
import './globals.css';
import styles from './layout.module.css';
import Header from './components/Header/Header';
import { ModalProvider } from './context/ModalContext';
import Script from 'next/script';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={styles.body}>
        <ModalProvider>
          <Header />
          <main className={styles.main}>{children}</main>
        </ModalProvider>
        <Script
          src="https://cloud.umami.is/script.js"
          data-website-id="c55fe9c8-adb4-4b1f-bb69-374091dda47f"
          strategy="afterInteractive"
          defer
        />
      </body>
    </html>
  );
}
