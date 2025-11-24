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
                Delivered <strong>30+</strong> production features as a core React Native engineer on Profolio&apos;s upgrade from v2.0 to v3.0,
                including BI-driven analytics widgets, onboarding flows that improved completion by <strong>40%</strong>, and lead management
                enhancements that increased engagement by <strong>15%</strong>
              </li>
              <li>
                Coordinated with Product, Design, Data, and QA teams to deliver scalable features across iOS and Android,
                serving <strong>50K+</strong> monthly users across UAE and Egypt markets
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
                Delivered <strong>end-to-end</strong> frontend development of Triangle Wallet, a React Native crypto wallet app with
                real-time price tracking, interactive charts, and dynamic data visualisation
              </li>
              <li>
                Took <strong>full ownership</strong> of core app flows and improved performance through component reusability and optimized
                state management patterns
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

