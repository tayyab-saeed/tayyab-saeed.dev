import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/data/projects';

import styles from '@/styles/ProjectsPage.module.css';

const ProjectsPage = () => {
  const professionalProjects = projects.filter(
    (p) => p.category === 'professional'
  );
  const researchProjects = projects.filter((p) => p.category === 'research');
  const hackathonProjects = projects.filter((p) => p.category === 'hackathon');

  return (
    <div className={styles.layout}>
      <h1 className={styles.pageTitle}>My Projects</h1>
      <p className={styles.pageSubtitle}>
        Here&apos;s a collection of my work spanning professional development,
        research initiatives, and hackathon competitions.
      </p>

      {professionalProjects.length > 0 && (
        <div style={{ marginBottom: '3rem' }}>
          <h2
            style={{
              fontSize: '1.5rem',
              marginBottom: '1rem',
              color: 'var(--accent-color)',
            }}
          >
            Professional Projects
          </h2>
          <div className={styles.container}>
            {professionalProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      )}

      {researchProjects.length > 0 && (
        <div style={{ marginBottom: '3rem' }}>
          <h2
            style={{
              fontSize: '1.5rem',
              marginBottom: '1rem',
              color: 'var(--accent-color)',
            }}
          >
            Research Project
          </h2>
          <div className={styles.container}>
            {researchProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      )}

      {hackathonProjects.length > 0 && (
        <div style={{ marginBottom: '3rem' }}>
          <h2
            style={{
              fontSize: '1.5rem',
              marginBottom: '1rem',
              color: 'var(--accent-color)',
            }}
          >
            Hackathon Project
          </h2>
          <div className={styles.container}>
            {hackathonProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'Projects' },
  };
}

export default ProjectsPage;
