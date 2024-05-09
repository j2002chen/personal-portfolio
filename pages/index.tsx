import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Header from '../components/header';
import Footer from '../components/footer';

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
      <main>
        <p>
          Hey! I&apos;m James Chen, a 3rd-year Mechatronics Engineering Student
          at the University of Waterloo.
        </p>
      </main>
      <Footer />
    </>
  );
}
