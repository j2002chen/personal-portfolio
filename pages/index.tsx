import styles from '../styles/Home.module.css';
import Head from 'next/head';
import Header from '../components/header';
import Footer from '../components/footer';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Head>
        <title>James Chen Portfolio</title>
        <meta name="description" content="James Chen Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>
        <div className={styles.intro}>
          <div className={styles.portrait}>
            <Image
              src="/temp-placeholder.jpg"
              alt="James Chen"
              width={500}
              height={500}
              className={styles.image}
            />
          </div>
          <h1 className={styles['intro-text']}>Hey! I&apos;m James Chen</h1>
        </div>
        <div className={styles.body}>
          <h2>ABOUT ME</h2>
          <p>
            I&apos;m a 3rd-year Mechatronics Engineering Student at the
            University of Waterloo. I have completed internships working in
            full-stack development, machine learning, and data engineering.
          </p>
          <p>Some of my hobbies include:</p>
          <ul>
            <li>Playing guitar</li>
            <li>Cooking</li>
            <li>Watching movies</li>
            <li>Playing video games</li>
            <li>Reading</li>
          </ul>
        </div>
      </main>
      <Footer />
    </>
  );
}
