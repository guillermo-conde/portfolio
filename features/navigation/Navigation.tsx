"use client";
import styles from "./navigation.module.css";
import ThemeToggle from "../theme/ThemeToggle";
import { LanguageSwitch } from "@/shared/ui/LanguageSwitch/LanguageSwitch";
import { useTranslations } from "next-intl";

export default function Navigation() {
  const t = useTranslations("navigation");

  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <div className={styles.brand}>Portfolio</div>
        <div className={styles.navContent}>
          <ul className={styles.links}>
            <li>
              <a href="#home">{t("home")}</a>
            </li>
            <li>
              <a href="#about">{t("about")}</a>
            </li>
            <li>
              <a href="#projects">{t("projects")}</a>
            </li>
            <li>
              <a href="#contact">{t("contact")}</a>
            </li>
          </ul>
          <div className={styles.actions}>
            <LanguageSwitch />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
