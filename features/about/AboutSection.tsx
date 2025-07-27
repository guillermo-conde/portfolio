"use client";
import styles from "./about.module.css";
import { useTranslations } from "next-intl";

export default function AboutSection() {
  const t = useTranslations("about");

  const skills = [
    { name: "React", level: 95, category: "Frontend" },
    { name: "Next.js", level: 90, category: "Frontend" },
    { name: "TypeScript", level: 85, category: "Language" },
    { name: "JavaScript", level: 95, category: "Language" },
    { name: "HTML/CSS", level: 90, category: "Frontend" },
    { name: "Node.js", level: 80, category: "Backend" },
  ];

  const features = [
    {
      icon: "💻",
      title: "Clean Code",
      description: "Clean, maintainable and scalable code",
    },
    {
      icon: "⚡",
      title: "Performance",
      description: "Optimization for maximum performance",
    },
    {
      icon: "🎨",
      title: "UI/UX Design",
      description: "Intuitive design and user experience",
    },
    {
      icon: "💡",
      title: "Innovation",
      description: "Creative and innovative solutions",
    },
  ];

  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>{t("title")}</h2>
          <p>{t("subtitle")}</p>
        </div>

        <div className={styles.content}>
          <div className={styles.text}>
            <p className={styles.description}>{t("description")}</p>

            <div className={styles.experienceBox}>
              <h4>{t("experience")}</h4>
              <div className={styles.experienceItem}>
                <div className={styles.experienceYears}>3+</div>
                <span>{t("years")}</span>
              </div>
            </div>
          </div>

          <div className={styles.skillsSection}>
            <h4>{t("skills")}</h4>
            <div className={styles.skillsList}>
              {skills.map((skill) => (
                <div key={skill.name} className={styles.skillItem}>
                  <div className={styles.skillHeader}>
                    <span>{skill.name}</span>
                    <span className={styles.skillCategory}>
                      {skill.category}
                    </span>
                  </div>
                  <div className={styles.skillBar}>
                    <div
                      className={styles.skillProgress}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.featuresGrid}>
          {features.map((feature, index) => (
            <div key={index} className={styles.featureCard}>
              <div className={styles.featureIcon}>{feature.icon}</div>
              <h4>{feature.title}</h4>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
