import Image from 'next/image'
import styles from '../styles/ProjectShowcase.module.css'
import Link from 'next/link'

interface Project {
  name: string
  role: string
  description: string
  imageUrl: string
  link?: string 
}

const projects: Project[] = [
  {
    name: "QX Mini Configurator v2.4.2",
    role: "Desktop Application Development",
    description: "Using QT & C++ to enhance UX and simplify fire panel configuration.",
    imageUrl: "desktop_app.png?height=240&width=500",
    link: "https://mircom.com/download/qx-mini-configurator-v2-4-1/" 
  },
  {
    name: "L2 Ethereum Token Bridge",
    role: "Fullstack Development",
    description: "Using Wagmi, Ethers, & Optimism SDK to finalize token bridgening.",
    imageUrl: "token_bridge.png?height=240&width=500",
    link: "https://bridge.swanchain.io/" 
  },
  {
    name: "Mobile Cardiovascular Health Analytics App",
    role: "Backend, Infrastructure, & Machine Learning",
    description: "Using Pytorch & Bayesian Optimization to optimize GCN parameters.",
    imageUrl: "healthcare_app.png?height=240&width=500"
  }
]

export default function ProjectShowcase() {
  return (
    <div className={styles.container}>
          <h2 className={styles.heading}>Some things I&apos;ve built:</h2>
      <div className={styles.projectList}>
        {projects.map((project, index) => {
          const cardContent = (
            <div 
              key={project.name}
              className={`${styles.projectCard} ${styles[`gradient${index + 1}`]}`}
            >
              <Image
                src={project.imageUrl}
                alt={project.name}
                width={500}
                height={240}
                className={styles.projectImage}
              />
              <div className={styles.projectInfo}>
                <h2 className={styles.projectName}>{project.name}</h2>
                <p className={styles.projectRole}>{project.role}</p>
                <p className={styles.projectDescription}>{project.description}</p>
              </div>
            </div>
          );

          return project.link ? (
            <Link href={project.link} key={project.name} legacyBehavior>
              <a target="_blank" rel="noopener noreferrer" className={styles.projectCardLink}>
                {cardContent}
              </a>
            </Link>
          ) : (
            cardContent
          );
        })}
      </div>
    </div>
  )
}