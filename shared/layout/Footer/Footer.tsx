"use client";
import styles from "./footer.module.css";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("footer");
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>
          &copy; 2024 {t("rights")}. {t("builtWith")}
        </p>
      </div>
    </footer>
  );
}
