import styles from '@/styles/AboutPage.module.css';

const ExperiencePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Professional Experience</h1>
        <div className={styles.subtitle}>Industry Roles</div>

        <div className={styles.aboutContent}>
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
              Bayut / Dubizzle Labs
              <span style={{ fontSize: '0.9rem', fontWeight: 'normal', marginLeft: '1rem', color: 'var(--accent-color)' }}>
                Jun 2024 – Present
              </span>
            </h2>
            <div style={{ fontSize: '0.95rem', marginBottom: '1rem', color: 'var(--text-secondary)' }}>
              Software Engineer · UAE (Remote)
            </div>
            <ul className={styles.paragraph} style={{ lineHeight: '1.8' }}>
              <li>
                Delivered 30+ production features as a core React Native engineer on Profolio&apos;s upgrade from v2.0 to v3.0,
                spanning navigation refactors, onboarding flows, analytics widgets, and lead management enhancements
              </li>
              <li>
                Built a BI-driven Overview Page with widgets for top locations/properties by leads and impressions, active
                property snapshots, agent responsiveness, and TruBroker badge progress, giving agencies a single source of truth
                for performance
              </li>
              <li>
                Designed and shipped a first-time user onboarding sheet and flows that improved completion by around 40%
              </li>
              <li>
                Implemented portal-aware login and session logic for UAE and Egypt agents, centralising market-specific configuration
                and reducing auth-related issues across regions
              </li>
              <li>
                Implemented Bayut Leads surfaces from Agency & Agent Profile to expose portal leads inside Profolio, increasing
                lead transparency by 20% and helping agents act on opportunities faster
              </li>
              <li>
                Redesigned the Lead Detail Page with similar property suggestions and clearer CTAs, increasing in-screen
                engagement by 15% and improving cross-sell visibility
              </li>
              <li>
                Shipped engagement features such as ProAgent badge surfacing Dubizzle portal recognition inside Profolio
                and global haptic feedback patterns that improved user experience sentiment
              </li>
              <li>
                Added advanced property and lead filters, enabling faster segmentation by location, status, and activity so
                agents can prioritise high-intent leads more efficiently
              </li>
              <li>
                Coordinated with Product, Design, Data, and QA teams to align backlog grooming, technical scoping, and
                release planning
              </li>
              <li>
                Proactively fixed dozens of bugs and regressions, improving UI responsiveness and stability across iOS and Android
              </li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
              Devsinc
              <span style={{ fontSize: '0.9rem', fontWeight: 'normal', marginLeft: '1rem', color: 'var(--accent-color)' }}>
                Aug 2023 – May 2024
              </span>
            </h2>
            <div style={{ fontSize: '0.95rem', marginBottom: '1rem', color: 'var(--text-secondary)' }}>
              Associate Software Engineer · Lahore, PK
            </div>
            <ul className={styles.paragraph} style={{ lineHeight: '1.8' }}>
              <li>
                Delivered end-to-end frontend development of Triangle Wallet, a production React Native crypto wallet with
                real-time price tracking and dynamic data visualisation
              </li>
              <li>
                Took full ownership of core app flows including landing, login, signup, price listings, buy/sell, price graphs,
                transaction history, and gift card screens
              </li>
              <li>
                Integrated real-time cryptocurrency price APIs and built interactive 24-hour price charts, increasing session
                depth and encouraging users to explore asset trends
              </li>
              <li>
                Improved performance and maintainability by refactoring screens into reusable components and tightening state
                management patterns
              </li>
              <li>
                Worked in a Kanban-style services environment, delivering UI/UX refinements and mobile features from a
                continuous stream of client requests
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'Experience' },
  };
}

export default ExperiencePage;

