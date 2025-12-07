import {
  SiTypescript,
  SiJavascript,
  SiPython,
  SiCplusplus,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiFirebase,
  SiMongodb,
  SiMysql,
  SiVercel,
  SiSwift,
  SiRedux,
} from "react-icons/si";
import { FaJava, FaMobileAlt } from "react-icons/fa";
import styles from "@/styles/AboutPage.module.css";

const AboutPage = () => {
  const programmingLanguages = [
    { name: "TypeScript", icon: SiTypescript },
    { name: "JavaScript", icon: SiJavascript },
    { name: "Python", icon: SiPython },
    { name: "Java", icon: FaJava },
    { name: "C++", icon: SiCplusplus },
  ];

  const frameworks = [
    { name: "React Native", icon: SiReact },
    { name: "Expo", icon: FaMobileAlt },
    { name: "React", icon: SiReact },
    { name: "Next.js", icon: SiNextdotjs },
    { name: "Node.js", icon: SiNodedotjs },
    { name: "Express.js", icon: SiNodedotjs },
    { name: "Swift/UIKit", icon: SiSwift },
  ];

  const tools = [
    { name: "Redux Toolkit", icon: SiRedux },
    { name: "Tanstack Query", icon: SiReact },
    { name: "React Hook Form", icon: SiReact },
  ];

  const databases = [
    { name: "Firebase", icon: SiFirebase },
    { name: "MongoDB", icon: SiMongodb },
    { name: "MySQL", icon: SiMysql },
  ];

  const cicd = [
    { name: "Expo EAS", icon: FaMobileAlt },
    { name: "Vercel", icon: SiVercel },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Muhammad Tayyab Saeed</h1>
        <div className={styles.subtitle}>Software Engineer</div>

        <div className={styles.aboutContent}>
          <section className={styles.section}>
            <p className={styles.paragraph}>
              I&apos;m a Software Engineer specializing in
              JavaScript/TypeScript, building production-grade web and mobile
              apps with React, React Native, Next.js, and Expo. Focused on
              scalable application architecture, smooth and responsive UX, and
              reliable API/analytics integrations, while collaborating closely
              with product, design, QA, and backend teams.
            </p>
          </section>

          <section className={styles.section}>
            <h2
              className={styles.sectionTitle}
              style={{ textDecoration: "underline" }}
            >
              Education
            </h2>
            <div style={{ marginBottom: "1rem" }}>
              <h3
                style={{
                  fontSize: "1.1rem",
                  marginBottom: "0.3rem",
                  color: "var(--accent-color)",
                }}
              >
                BSc Information Technology
              </h3>
              <p className={styles.paragraph} style={{ margin: 0 }}>
                Punjab University College of Information Technology
              </p>
              <p
                className={styles.paragraph}
                style={{ fontSize: "0.9rem", opacity: 0.8, margin: "0.2rem 0" }}
              >
                CGPA: <strong>3.48</strong>/4.00
              </p>
            </div>
          </section>

          <section className={styles.section}>
            <h2
              className={styles.sectionTitle}
              style={{ textDecoration: "underline" }}
            >
              Certifications
            </h2>
            <div style={{ marginBottom: "1rem" }}>
              <h3
                style={{
                  fontSize: "1.1rem",
                  marginBottom: "0.3rem",
                  color: "var(--accent-color)",
                }}
              >
                IELTS Certification
              </h3>
              <p className={styles.paragraph} style={{ margin: 0 }}>
                Overall Band: <strong>7.5</strong> (CEFR C1 - Advanced) · Sep
                2025
              </p>
            </div>
          </section>

          <section className={styles.section}>
            <h2
              className={styles.sectionTitle}
              style={{ textDecoration: "underline" }}
            >
              Skills & Technologies
            </h2>

            <div style={{ marginBottom: "2rem" }}>
              <h3
                style={{
                  fontSize: "1rem",
                  marginBottom: "1rem",
                  color: "var(--text-secondary)",
                }}
              >
                Programming Languages
              </h3>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))",
                  gap: "1rem",
                }}
              >
                {programmingLanguages.map((lang) => (
                  <div
                    key={lang.name}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: "0.5rem",
                      padding: "1rem",
                      background: "rgba(127, 127, 127, 0.1)",
                      borderRadius: "8px",
                      border: "1px solid rgba(127, 127, 127, 0.2)",
                    }}
                  >
                    <lang.icon size={32} />
                    <span style={{ fontSize: "0.85rem", textAlign: "center" }}>
                      {lang.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ marginBottom: "2rem" }}>
              <h3
                style={{
                  fontSize: "1rem",
                  marginBottom: "1rem",
                  color: "var(--text-secondary)",
                }}
              >
                Frameworks
              </h3>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))",
                  gap: "1rem",
                }}
              >
                {frameworks.map((framework) => (
                  <div
                    key={framework.name}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: "0.5rem",
                      padding: "1rem",
                      background: "rgba(127, 127, 127, 0.1)",
                      borderRadius: "8px",
                      border: "1px solid rgba(127, 127, 127, 0.2)",
                    }}
                  >
                    <framework.icon size={32} />
                    <span style={{ fontSize: "0.85rem", textAlign: "center" }}>
                      {framework.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ marginBottom: "2rem" }}>
              <h3
                style={{
                  fontSize: "1rem",
                  marginBottom: "1rem",
                  color: "var(--text-secondary)",
                }}
              >
                Tools & Libraries
              </h3>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "0.75rem",
                }}
              >
                {tools.map((tool) => (
                  <span
                    key={tool.name}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      padding: "0.5rem 1rem",
                      background: "rgba(127, 127, 127, 0.1)",
                      border: "1px solid rgba(127, 127, 127, 0.2)",
                      borderRadius: "6px",
                      fontSize: "0.9rem",
                    }}
                  >
                    <tool.icon size={20} />
                    {tool.name}
                  </span>
                ))}
              </div>
            </div>

            <div style={{ marginBottom: "2rem" }}>
              <h3
                style={{
                  fontSize: "1rem",
                  marginBottom: "1rem",
                  color: "var(--text-secondary)",
                }}
              >
                Databases
              </h3>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))",
                  gap: "1rem",
                }}
              >
                {databases.map((db) => (
                  <div
                    key={db.name}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: "0.5rem",
                      padding: "1rem",
                      background: "rgba(127, 127, 127, 0.1)",
                      borderRadius: "8px",
                      border: "1px solid rgba(127, 127, 127, 0.2)",
                    }}
                  >
                    <db.icon size={32} />
                    <span style={{ fontSize: "0.85rem", textAlign: "center" }}>
                      {db.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ marginBottom: "2rem" }}>
              <h3
                style={{
                  fontSize: "1rem",
                  marginBottom: "1rem",
                  color: "var(--text-secondary)",
                }}
              >
                CI/CD & Deployments
              </h3>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "0.75rem",
                }}
              >
                {cicd.map((item) => (
                  <span
                    key={item.name}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      padding: "0.5rem 1rem",
                      background: "rgba(127, 127, 127, 0.1)",
                      border: "1px solid rgba(127, 127, 127, 0.2)",
                      borderRadius: "6px",
                      fontSize: "0.9rem",
                    }}
                  >
                    <item.icon size={20} />
                    {item.name}
                  </span>
                ))}
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    padding: "0.5rem 1rem",
                    background: "rgba(127, 127, 127, 0.1)",
                    border: "1px solid rgba(127, 127, 127, 0.2)",
                    borderRadius: "6px",
                    fontSize: "0.9rem",
                  }}
                >
                  App Store & Play Store
                </span>
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
    props: { title: "About" },
  };
}

export default AboutPage;
