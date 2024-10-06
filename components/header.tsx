import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Header({ className = '' }) {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/" className={styles.navLink} style={{ marginLeft: '40px' }}>
          About
        </Link>
        <Link href="/experience" className={styles.navLink} style={{ marginLeft: '20px' }}>
          Experience
        </Link>
      </nav>
    </header>
  );
}