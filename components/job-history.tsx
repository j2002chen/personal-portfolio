import React, { useState } from 'react';
import Image from 'next/image';
import styles from '../styles/Job-History.module.css';

const WorkExperience = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const experiences = [
    {
      company: 'Mircom Group of Companies',
      role: 'Software Development Engineering Intern',
      period: 'Sept 2024 - Dec 2024',
      details: 'Architected & developed entire MVP for Mircom\'s remote panel access platform, streaming data from IoT devices with MQTT through a HiveMQ broker & setting up real time mobile notifications sent via a WebSocket server. Enhanced V2.4.2 of Mircom\'s QX Mini configurator by fixing bugs preventing the deletion of audio clips as well as implementing features to allow users to remove multiple devices from the configuration setup all at once.',
      logo: 'mircom.jpg'
    },
    {
      company: 'Swan Cloud Inc.',
      role: 'Software Engineering Intern',
      period: 'Jan 2024 - April 2024',
      details: 'Built Swan Cloud\'s L2 Ethereum token bridge, allowing users to onboard into the Swan Cloud ecosystem easily from transferring Ethereum funds with NextJS & ExpressJS. Optimized various endpoints facilitating an orchestration engine that provisioned compute resources to users. Developed incident response and alerting systems to notify engineers of anomalies, service disruptions, security issues & failures.',
      logo: 'swan_cloud.jpg'
    },
    {
      company: 'Healthcare Systems R&A',
      role: 'Software Engineering Intern',
      period: 'May 2023 - Aug 2023',
      details: 'Optimized the parameters for a graph convolutional neural network that predicted metrics that measured patients\' cardiovascular health. Piloted CI/CD initiative to reduce the time to develop and deploy machine learning model to production.',
      logo: 'healthcare_systems.jpg'
    },
    {
      company: 'Purolator',
      role: 'Data Engineering Intern',
      period: 'Sept 2022 - Dec 2022',
      details: 'Orchestrated workflows and ETL processes to support a large scale data migration project to Purolator\'s data analytics platform outside of the Qlik ecosystem, eliminating technical debt and enabling faster OLAP processing by enabling engineers to leverage tools in distributed computing like Spark.',
      logo: 'purolator.png'
    },
    {
      company: 'Employment & Social Development Canada',
      role: 'Data Engineering Intern',
      period: 'Jan 2022 - Aug 2022',
      details: 'Built & optimized ETL pipelines for ESDC\'s OLAP cubes & designed interactive dashboards using PowerBI & Power Query. Enabled access to disparate sources of data by using fuzzy matching',
      logo: 'esdc.jpg'
    }
  ];

  return (
    <div className={`container mx-auto px-4 ${styles.container}`}>
      <h2 className="text-3xl font-bold mb-7" style={{ fontFamily: 'var(--font-mono)', marginLeft: '2rem' }}>Work Experience</h2>
      {experiences.map((exp, index) => (
        <div 
          key={index} 
          className={`flex flex-col py-6 border-b border-gray-700 ${styles.experienceItem}`} 
          onClick={() => toggleExpand(index)}
        >
          <div className={`flex items-center ${styles.experienceDetails}`}>
            <div className="flex-shrink-0">
              <Image 
                src={exp.logo} 
                alt={`${exp.company} logo`} 
                width={40} 
                height={40} 
                className={styles.circularImage}
              />
            </div>
            <div className="ml-4 flex-grow">
              <h3 className={`text-xl font-bold ${styles.textColor}`} style={{ fontFamily: 'var(--font-mono)' }}>{exp.company}</h3>
              <p className={`text-xs ${styles.role}`} style={{ fontFamily: 'var(--font-mono)' }}>{exp.role}</p>
            </div>
            <div className={`text-2xl cursor-pointer ${styles.link} ${styles.arrow}`}>
              <span className={`${styles.hiddenArrow}`}>{expandedIndex === index ? '▲' : '▼'}</span>
            </div>
            <p className={`text-sm ${styles.subtextColor} ${styles.period}`}>{exp.period}</p>
          </div>

          <div className={`experience-details mt-2 text-sm ${styles.detailsSection} ${expandedIndex === index ? styles.expanded : ''}`}>
            <p>{exp.details}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorkExperience;