import styles from '@/styles/AchievementsPage.module.css';

const AchievementsPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Achievements</h1>
        <div className={styles.subtitle}>Teaching, Volunteering & Competitions</div>

        <div className={styles.aboutContent}>
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Teaching & Volunteer Experience</h2>
            
            <div className={styles.timelineContainer}>
              <div className={styles.timelineItem}>
                <h3 className={styles.experienceTitle}>
                  Research Volunteer - Nitrogen Estimation App
                </h3>
                <ul className={styles.pointsList}>
                  <li>
                    Leading <strong>UX design</strong> for farmer-facing mobile app with Dr. Muhammad Hassan Khan
                  </li>
                  <li>
                    Created accessible flows with audio prompts and <strong>localization</strong> for low-literacy users
                  </li>
                  <li>
                    Designed nitrogen data <strong>visualizations</strong> to help farmers interpret model outputs
                  </li>
                </ul>
              </div>

              <div className={styles.timelineItem}>
                <h3 className={styles.experienceTitle}>
                  Section Leader Mentor - Stanford Code in Place 2025
                </h3>
                <ul className={styles.pointsList}>
                  <li>
                    Mentored global learners in Python for <strong>30+</strong> hours during 6-week Stanford-led program
                  </li>
                  <li>
                    Delivered 1-hour <strong>1:1 sessions</strong> with 4+ international students weekly
                  </li>
                </ul>
                <div className={styles.linkContainer}>
                  <a 
                    href="https://digitalcredential.stanford.edu/check/994D9FDF44F9C637182E049A227CFBCD115B3D0FC6DDA6D185E7FBA27FF5BFEFWi9GamduRE0rSW1RaEU5bll5VW41VWZkNjRxWGRNQzVlSzVEQlBBWXhlVnBlcEhR" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    (certificate)
                  </a>
                </div>
              </div>

              <div className={styles.timelineItem}>
                <h3 className={styles.experienceTitle}>
                  Teaching Assistant - PUCIT
                </h3>
                <ul className={styles.pointsList}>
                  <li>
                    Delivered <strong>100+</strong> hours of teaching support across two core CS courses (ITC, DSA)
                  </li>
                  <li>
                    Conducted <strong>lab sessions</strong> and provided mentorship to strengthen programming skills
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>International Hackathons & Competitions</h2>
            
            <div className={styles.timelineContainer}>
              <div className={styles.timelineItem}>
                <h3 className={styles.experienceTitle}>
                  NASA International Space Apps Challenge 2025
                </h3>
                <ul className={styles.pointsList}>
                  <li>
                    <strong>Led</strong> team of 4 to build Airwatch MVP for NASA TEMPO air-quality forecasts
                  </li>
                  <li>
                    Built entire <strong>front-end</strong> mainly using Next.js, Ant Design, and Mapbox
                  </li>
                </ul>
                <div className={styles.linkContainer}>
                  <a 
                    href="https://airwatch.health" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    (see project)
                  </a>
                  <a 
                    href="https://drive.google.com/file/d/1R_A7oHt8lPRhg79bZJWtkXAcv5LR2zBb/view?usp=sharing" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    (certificate)
                  </a>
                </div>
              </div>

              <div className={styles.timelineItem}>
                <h3 className={styles.experienceTitle}>
                  Hacktoberfest 2025
                </h3>
                <ul className={styles.pointsList}>
                  <li>
                    Completed <strong>6</strong> merged pull requests across multiple open-source projects
                  </li>
                  <li>
                    Finished in <strong>top 10,000</strong> contributors globally, earning <strong>Supercontributor</strong> badge
                  </li>
                </ul>
                <div className={styles.linkContainer}>
                  <a 
                    href="https://www.linkedin.com/feed/update/urn:li:activity:7391474324152586240/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    (see here)
                  </a>
                </div>
              </div>

              <div className={styles.timelineItem}>
                <h3 className={styles.experienceTitle}>
                  Harvard CS50x Puzzle Day 2025
                </h3>
                <ul className={styles.pointsList}>
                  <li>
                    Won with <strong>perfect 9/9</strong> score among 12,700+ participants
                  </li>
                  <li>
                    Solved puzzles requiring <strong>logical</strong> reasoning and creative problem solving
                  </li>
                </ul>
                <div className={styles.linkContainer}>
                  <a 
                    href="https://certificates.cs50.io/49e27a6b-2545-4737-89ff-d7928fcc2f59.pdf?size=letter" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    (certificate)
                  </a>
                </div>
              </div>

              <div className={styles.timelineItem}>
                <h3 className={styles.experienceTitle}>
                  MIT Informatics Tournament Spring 2025
                </h3>
                <ul className={styles.pointsList}>
                  <li>
                    Placed <strong>213th globally</strong> in Round 1 out of thousands of competitors
                  </li>
                  <li>
                    Competed in <strong>computational</strong> thinking challenges under time constraints
                  </li>
                </ul>
                <div className={styles.linkContainer}>
                  <a 
                    href="https://www.linkedin.com/posts/muhammad-tayyab-saeed_mitinformatics-codingcompetition-qualified-activity-7315468021655908353-O8Et" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    (see here)
                  </a>
                </div>
              </div>
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

