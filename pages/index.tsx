import * as React from "react";
import * as ReactDOM from "react-dom";
import styles from '../styles/Home.module.css';
import Head from 'next/head';
import Header from '../components/header';
import Footer from '../components/footer';
import Image from 'next/image';
import { DynamicCloud } from '../components/icon-cloud';
import Education from '../components/education';
import { renderSimpleIcon, ICloud, SimpleIcon } from "react-icon-cloud";
import { invertBg, lightTheme, ThemedH1, ThemeProvider } from "../hooks/use-theme";



const slugs = [
  "typescript",
  "snowflake",
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
  "langchain",
  "huggingface",
  "qt",
  "mqtt",
];

export const cloudProps: Omit<ICloud, 'children'> = {
  containerProps: {
    style: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    paddingTop: 40
    }
  },
  // https://www.goat1000.com/tagcanvas-options.php
  options: {
    clickToFront: 500,
    depth: 1,
    imageScale: 2,
    initial: [0.1, -0.1],
    outlineColour: "#0000",
    reverse: true,
    tooltip: "native",
    tooltipDelay: 0,
    wheelZoom: false
  }
}

export const renderCustomIcon = (icon: SimpleIcon, bg: string) => {
  return renderSimpleIcon({
    icon,
    bgHex: bg,
    size: 42,
    fallbackHex: invertBg(bg),
    aProps: {
      href: undefined,
      target: undefined,
      rel: undefined,
      onClick: (e: any) => e.preventDefault()
    }
  })
}


export default function Home() {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.container} style={{ backgroundColor: 'var(--background-color)'}}>
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
            <p className={styles['narrow-text']}>
              I&apos;m a 3rd-year Mechatronics Engineering Student at the
              University of Waterloo. I have completed internships working on
              full-stack development and data engineering. 
              I am currently seeking Summer 2025 SWE internships!
            </p>
          </div>
          <div className={`${styles.iconCloudContainer} relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg border bg-background px-20 pb-20 pt-8`}>
            <DynamicCloud iconSlugs={slugs} />
          </div>
          <Education
            institution="University of Waterloo"
            program="Bachelor of Applied Science in Mechatronics Engineering"
            period="2021 - 2026"
            logo="./uwaterloo.png"
            website="https://uwaterloo.ca/"
          />
        </main>
        <Footer />
      </div>
    </div>
  );
}