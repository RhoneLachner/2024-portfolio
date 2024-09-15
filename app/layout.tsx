import { ReactNode } from 'react';
import './globals.css'; 
import styles from './layout.module.css'; 
import Header from './components/Header';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={styles.body}>
        <Header /> 
        <main className={styles.main}>{children}</main>
      </body>
    </html>
  );
}
