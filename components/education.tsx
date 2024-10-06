import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Education.module.css';

interface EducationProps {
  institution: string;
  program: string;
  period: string;
  logo: string;
  website: string;
}

export default function Education({ institution, program, period, logo, website }: EducationProps) {
  return (
    <Link href={website} target="_blank" rel="noopener noreferrer" className="block">
      <div className="container mx-auto max-w-[var(--max-width)] px-4 cursor-pointer">
        <h2 className={`text-3xl font-bold mb-7 ${styles.textColor} ${styles.heading}`}>Education</h2>
        <div className={`flex justify-between items-center py-6 border-b border-gray-700 ${styles.educationItem}`}>
          <div className={`flex items-center ${styles.educationDetails}`}>
            <div className="flex-shrink-0">
              <Image src={logo} alt={`${institution} logo`} width={40} height={40} className="rounded-full" />
            </div>
            <div className="ml-4 flex-grow">
              <h3 className={`text-xl font-bold ${styles.textColor}`}>{institution}</h3>
              <p className={`text-xs ${styles.programText}`}>{program}</p>
            </div>
            <span className={`text-2xl ml-4 ${styles.link} hover:text-white transition-colors duration-300`}>
              <span className={styles.hiddenArrow}>&raquo;</span> 
            </span>
            <p className={`text-sm ${styles.subtextColor} ${styles.period}`}>{period}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}