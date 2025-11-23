import styles from '@/styles/AboutPage.module.css';

const AchievementsPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Achievements</h1>
        <div className={styles.subtitle}>Teaching, Volunteering & Competitions</div>

        <div className={styles.aboutContent}>
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Teaching & Volunteer Experience</h2>
            
            <div style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: 'var(--accent-color)' }}>
                Research Volunteer - Nitrogen Estimation App
              </h3>
              <p className={styles.paragraph}>
                Working with Dr. Muhammad Hassan Khan to turn a computer-vision model into a farmer-facing mobile app.
                Leading UX design, capture flows, audio prompts, and localization to make the app accessible for low-literacy
                users. Designed nitrogen data visualizations and recommendations to help farmers interpret model outputs
                and choose appropriate fertiliser actions.
              </p>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: 'var(--accent-color)' }}>
                Section Leader Mentor - Stanford Code in Place 2025
              </h3>
              <p className={styles.paragraph}>
                Mentoring global learners in Python through weekly sessions and guiding them to complete final projects.
                Part of Stanford&apos;s free online introductory programming course reaching thousands of students worldwide.
                <a 
                  href="https://codeinplace.stanford.edu" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ marginLeft: '0.5rem', color: 'var(--accent-color)' }}
                >
                  (certificate)
                </a>
              </p>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: 'var(--accent-color)' }}>
                Teaching Assistant - PUCIT
              </h3>
              <p className={styles.paragraph}>
                Delivered 100+ hours of labs for Introduction to Computing (ITC) and Data Structures & Algorithms (DSA).
                Mentored students in core computer science concepts, helped evaluate assignments and projects, and provided
                one-on-one support to improve understanding of fundamental programming concepts.
              </p>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>International Hackathons & Competitions</h2>
            
            <div style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: 'var(--accent-color)' }}>
                NASA International Space Apps Challenge 2025
              </h3>
              <p className={styles.paragraph}>
                Led a team of 4 to build <strong>Airwatch</strong>, an MVP web app visualising NASA TEMPO-based air-quality
                forecasts in real time. Built the entire front-end using Next.js, Ant Design, and Mapbox with interactive
                maps and charts for viewing regional air-quality trends.
                <a 
                  href="https://airwatch.health" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ marginLeft: '0.5rem', color: 'var(--accent-color)' }}
                >
                  (see project)
                </a>
                <a 
                  href="#" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ marginLeft: '0.5rem', color: 'var(--accent-color)' }}
                >
                  (certificate)
                </a>
              </p>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: 'var(--accent-color)' }}>
                Hacktoberfest 2025
              </h3>
              <p className={styles.paragraph}>
                Completed 6 merged pull requests across multiple open-source projects in October 2025, finishing in the
                first 10,000 contributors globally and earning the <strong>Supercontributor badge</strong>. Contributed
                to diverse projects including documentation improvements, bug fixes, and feature additions.
                <a 
                  href="#" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ marginLeft: '0.5rem', color: 'var(--accent-color)' }}
                >
                  (see profile)
                </a>
              </p>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: 'var(--accent-color)' }}>
                Harvard CS50x Puzzle Day 2025
              </h3>
              <p className={styles.paragraph}>
                Won with a <strong>perfect 9/9 score</strong>, ranking among top global teams out of 12,700+ participants.
                Solved all puzzles requiring logical reasoning, pattern recognition, and algorithmic thinking under time
                constraints.
                <a 
                  href="#" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ marginLeft: '0.5rem', color: 'var(--accent-color)' }}
                >
                  (certificate)
                </a>
              </p>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: 'var(--accent-color)' }}>
                MIT Informatics Tournament Spring 2025
              </h3>
              <p className={styles.paragraph}>
                Placed <strong>213th globally</strong> in Round 1, sharpening contest-style algorithmic problem solving
                under timed constraints. Competed against students and professionals worldwide in computational thinking challenges.
                <a 
                  href="#" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ marginLeft: '0.5rem', color: 'var(--accent-color)' }}
                >
                  (see results)
                </a>
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'Achievements' },
  };
}

export default AchievementsPage;

