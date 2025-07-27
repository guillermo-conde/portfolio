"use client";
import { useState } from "react";
import styles from "./contact.module.css";
import { Button } from "../../shared/ui/Button/Button";
import { useTranslations } from "next-intl";

export default function ContactSection() {
  const t = useTranslations("contact");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form data:", formData);
    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  const socialLinks = [
    {
      icon: "📧",
      label: "Email",
      href: "mailto:tu@email.com",
      className: "email",
    },
    {
      icon: "💼",
      label: "LinkedIn",
      href: "https://linkedin.com/in/tu-perfil",
      className: "linkedin",
    },
    {
      icon: "💻",
      label: "GitHub",
      href: "https://github.com/tu-usuario",
      className: "github",
    },
  ];

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>{t("title")}</h2>
          <p>{t("subtitle")}</p>
        </div>

        <div className={styles.content}>
          <div className={styles.formContainer}>
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label htmlFor="name">{t("name")}</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email">{t("email")}</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="message">{t("message")}</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </div>
              <Button type="submit" variant="primary">
                {t("sendMessage")}
              </Button>
            </form>
          </div>

          <div className={styles.info}>
            <h3>{t("letsConnect")}</h3>
            <p>{t("lestConnectSubtitle")}</p>

            <div className={styles.socialLinks}>
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className={`${styles.socialLink} ${styles[link.className]}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className={styles.socialIcon}>{link.icon}</div>
                  <span>{link.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
