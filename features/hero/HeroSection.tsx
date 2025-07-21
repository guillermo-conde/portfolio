import styles from "./hero.module.css";
import { Button } from "../../shared/ui/Button/Button";

export default function HeroSection() {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.decorative1}></div>
      <div className={styles.decorative2}></div>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.text}>
            <h3 className={styles.greeting}>Hi! I'm</h3>
            <h1 className={styles.name}>Your Name</h1>
            <h2 className={styles.title}>Frontend Developer</h2>
            <p className={styles.subtitle}>
              Specialist in React, Next.js and modern technologies
            </p>
            <p className={styles.description}>
              I create exceptional web experiences with clean code and intuitive
              design. Passionate about frontend technologies and user
              experience.
            </p>
            <div className={styles.buttons}>
              <Button href="#projects" variant="primary">
                View my projects
              </Button>
              <Button href="#contact" variant="outline">
                Contact me
              </Button>
            </div>
          </div>
          <div className={styles.avatar}>
            <div className={styles.avatarCircle}>👨‍💻</div>
          </div>
        </div>
      </div>
    </section>
  );
}
