import { GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';
import { VscArrowLeft, VscLinkExternal } from 'react-icons/vsc';
import { projects } from '@/data/projects';
import { Project } from '@/types';
import ProjectCarousel from '@/components/ProjectCarousel';

import styles from '@/styles/ProjectsPage.module.css';

interface ProjectDetailProps {
  project: Project;
}

const ProjectDetail = ({ project }: ProjectDetailProps) => {
  return (
    <div className={styles.layout}>
      <Link href="/projects" className={styles.backLink}>
        <VscArrowLeft /> Back to Projects
      </Link>

      <div style={{ marginTop: '2rem' }}>
        <h1 className={styles.pageTitle}>{project.title}</h1>
        <p className={styles.pageSubtitle}>{project.description}</p>

        {project.links && (
          <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem', flexWrap: 'wrap' }}>
            {project.links.appStore && (
              <a
                href={project.links.appStore}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.6rem 1.2rem',
                  background: 'var(--accent-color)',
                  color: 'var(--bg-primary)',
                  borderRadius: '6px',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  fontWeight: '500',
                }}
              >
                App Store <VscLinkExternal />
              </a>
            )}
            {project.links.playStore && (
              <a
                href={project.links.playStore}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.6rem 1.2rem',
                  background: 'var(--accent-color)',
                  color: 'var(--bg-primary)',
                  borderRadius: '6px',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  fontWeight: '500',
                }}
              >
                Play Store <VscLinkExternal />
              </a>
            )}
            {project.links.website && (
              <a
                href={project.links.website}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.6rem 1.2rem',
                  background: 'var(--accent-color)',
                  color: 'var(--bg-primary)',
                  borderRadius: '6px',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  fontWeight: '500',
                }}
              >
                Visit Website <VscLinkExternal />
              </a>
            )}
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.6rem 1.2rem',
                  background: 'var(--accent-color)',
                  color: 'var(--bg-primary)',
                  borderRadius: '6px',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  fontWeight: '500',
                }}
              >
                GitHub <VscLinkExternal />
              </a>
            )}
          </div>
        )}

        {project.screenshots && project.screenshots.length > 0 && (
          <ProjectCarousel 
            screenshots={project.screenshots}
            projectTitle={project.title}
          />
        )}

        <section style={{ marginTop: '3rem' }}>
          <h2
            style={{
              fontSize: '1.5rem',
              marginBottom: '1rem',
              color: 'var(--accent-color)',
            }}
          >
            Key Contributions
          </h2>
          <ul style={{ lineHeight: '1.8', paddingLeft: '1.5rem' }}>
            {project.contributions.map((contribution, index) => (
              <li 
                key={index} 
                style={{ marginBottom: '0.8rem' }}
                dangerouslySetInnerHTML={{ __html: contribution }}
              />
            ))}
          </ul>
        </section>

        <section style={{ marginTop: '3rem' }}>
          <h2
            style={{
              fontSize: '1.5rem',
              marginBottom: '1rem',
              color: 'var(--accent-color)',
            }}
          >
            Technologies Used
          </h2>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.75rem',
              marginTop: '1rem',
            }}
          >
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                style={{
                  padding: '0.5rem 1rem',
                  background: 'rgba(127, 127, 127, 0.1)',
                  border: '1px solid rgba(127, 127, 127, 0.2)',
                  borderRadius: '6px',
                  fontSize: '0.9rem',
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = projects.map((project) => ({
    params: { slug: project.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const project = projects.find((p) => p.slug === params?.slug);

  if (!project) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      project,
      title: project.title,
    },
  };
};

export default ProjectDetail;

