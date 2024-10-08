'use client';
import { ReactNode } from 'react';
import './globals.css';
import styles from './layout.module.css';
import Header from './components/Header/Header';
import { ModalProvider } from './context/ModalContext';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={styles.body}>
        <ModalProvider>
          <Header />
          <main className={styles.main}>{children}</main>
        </ModalProvider>
      </body>
    </html>
  );
}
