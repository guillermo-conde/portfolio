"use client";

import { useLocale } from "next-intl";
import { Link, usePathname } from "@/src/i18n/navigation";
import styles from "./language-switch.module.css";

export function LanguageSwitch() {
  const locale = useLocale();
  const pathname = usePathname();

  const languages = [
    { code: "es", label: "ES", name: "Español" },
    { code: "en", label: "EN", name: "English" },
  ];

  return (
    <div className={styles.languageSwitch}>
      {languages.map((language) => (
        <Link
          key={language.code}
          href={pathname}
          locale={language.code}
          className={`${styles.languageBtn} ${
            locale === language.code ? styles.active : ""
          }`}
          aria-label={`Switch to ${language.name}`}
          title={language.name}
        >
          {language.label}
        </Link>
      ))}
    </div>
  );
}
