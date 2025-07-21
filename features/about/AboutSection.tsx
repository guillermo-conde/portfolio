import styles from "./about.module.css";

export default function AboutSection() {
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
          <h2>About me</h2>
          <p>
            Frontend Developer passionate about creating exceptional web
            experiences
          </p>
        </div>

        <div className={styles.content}>
          <div className={styles.text}>
            <p className={styles.description}>
              With over 3 years of experience in frontend development, I
              specialize in React, Next.js, TypeScript and modern technologies.
              I love turning ideas into beautiful and functional digital
              products.
            </p>

            <div className={styles.experienceBox}>
              <h4>Experience</h4>
              <div className={styles.experienceItem}>
                <div className={styles.experienceYears}>3+</div>
                <span>years of experience</span>
              </div>
            </div>
          </div>

          <div className={styles.skillsSection}>
            <h4>Skills</h4>
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
