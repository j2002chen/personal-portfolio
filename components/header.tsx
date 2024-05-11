import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/" className={styles.navLink}>
          About
        </Link>
        <Link href="/experience" className={styles.navLink}>
          Experience
        </Link>
      </nav>
    </header>
  );
}
