import styles from '../styles/Home.module.css';
import Head from 'next/head';
import Header from '../components/header';
import Footer from '../components/footer';
import Image from 'next/image';
import IconCloud from '../components/icon-cloud';

const slugs = [
  "typescript",
  "javascript",
  "cplusplus",
  "MQTT",
  "QTT",
  "react",
  "python",
  "go",
  "nodedotjs",
  "pytorch",
  "apachekafka",
  "apachespark",
  "apacheairflow",
  "express",
  "amazonaws",
  "nginx",
  "redis",
  "docker",
  "jenkins",  
  "kubernetes",
  "git",
  "jira",
];

export default function Home() {
  return (
    <div className={styles.container}>
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
              src="./portrait.jpg"
              alt="James Chen"
              width={500}
              height={500}
              className={styles.image}
            />
          </div>
          <h1 className={styles['intro-text']}>
            {"Hey! I'm James Chen".split("").map((char, index) => (
              <span key={index} style={{ animationDelay: `${index * 0.1}s` }}>
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </h1>
        </div>
        <div className={styles.body}>
          <h2>ABOUT ME</h2>
          <p>
            I&apos;m a 3rd-year Mechatronics Engineering Student at the
            University of Waterloo. I have completed internships working in
            full-stack development and data engineering. 
            I am currently seeking Summer 2025 SWE internships!
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
        <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg border bg-background px-20 pb-20 pt-8 ">
      <IconCloud iconSlugs={slugs} />
    </div>
      </main>
      <Footer />
    </div>
  );
}