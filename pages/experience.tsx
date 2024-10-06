import Header from '../components/header';
import Footer from '../components/footer';
import styles from '../styles/Experience.module.css';
import WorkExperience from '../components/job-history';

export default function Experience() {
  return (
    <div className={styles.container}>
      <Header className={styles.header} />
      <main className={styles.main}>
        <WorkExperience />
      </main>
      <Footer className={styles.footer} />
    </div>
  );
}