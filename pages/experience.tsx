import Header from '../components/header';
import Footer from '../components/footer';
import styles from '../styles/Experience.module.css';

export default function Experience() {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <h2 className={styles.companyName}>
          Swan Cloud Inc. - Software Engineer Intern
        </h2>
        <p className={styles.description}>
          Global cloud compute and storage platform leveraging their L2
          Ethereum Solution for payment channels
        </p>
        <p className={styles.jobDetails}>
          Worked as a fullstack developer to ship several critical features
          handling high traffic cryptocurrency transaction channels and
          optimized various endpoints that facilitated their cloud compute
          platform for performance. Designed incident response and alerting
          systems to notify staff of anomolies, service disruptions, security
          issues, and failures.
        </p>
        <h2 className={styles.companyName}>
          Healthcare Systems R&A - Software Engineer Intern
        </h2>
        <p className={styles.description}>
          Canadian medical data analysis and research institution creating a
          predictive modelling platform with leveraging various machine
          learning methods
        </p>
        <p className={styles.jobDetails}>
          Led graph neural network model optimization processes for classification
          task predicting patients&apos; likeliness of developing
          cardiovascular disorders as well as various regression models
          predicting the progression of users&apos; self reported biometrics.
          Enhanced the scalability and security of both DevOps and MLOps
          infrastructure, streamlining and automating deployments as well as
          optimizing backend code for performance.
        </p>
        <h2 className={styles.companyName}>
          Purolator - Data Engineer Intern
        </h2>
        <p className={styles.description}>
          Internal reporting and data analytics platform for Canadian courier
          service for mailing, shipping and package tracking
        </p>
        <p className={styles.jobDetails}>
          Worked on a large scale data migration project designing
          orchestration workflows and ETL processes supporting
          Purolator&apos;s data analytics platform licensing agreement changes
          to save time and costs.
        </p>
        <h2 className={styles.companyName}>
          Employment & Social Development Canada(ESDC) - Integrated Service
          Coordination Centre - Data Engineer Intern
        </h2>
        <p className={styles.description}>
          Centralized data analytics and visualization hub that creates
          internal reporting systems for ESDC services such as web-forms, call
          centres and employee key performance metrics
        </p>
        <p className={styles.jobDetails}>
          Developed and optimized data warehouse ETL processes, optimized
          database architecture and designed interactive dashboards.
        </p>
      </main>
      <Footer />
    </div>
  );
}