"use client";
import styles from "./hero.module.css";
import { Button } from "../../shared/ui/Button/Button";
import { useTranslations } from "next-intl";

export default function HeroSection() {
  const t = useTranslations("hero");
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.decorative1}></div>
      <div className={styles.decorative2}></div>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.text}>
            <h3 className={styles.greeting}>{t("greeting")}</h3>
            <h1 className={styles.name}>{t("name")}</h1>
            <h2 className={styles.title}>{t("title")}</h2>
            <p className={styles.subtitle}>{t("subtitle")}</p>
            <p className={styles.description}>{t("description")}</p>
            <div className={styles.buttons}>
              <Button href="#projects" variant="primary">
                {t("cta")}
              </Button>
              <Button href="#contact" variant="outline">
                {t("contact")}
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
