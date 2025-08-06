"use client";
import styles from "./contact.module.css";
import { Button } from "../../shared/ui/Button/Button";
import { useTranslations } from "next-intl";
import { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const linkedin = process.env.NEXT_PUBLIC_LINKEDIN_URL || "";
const github = process.env.NEXT_PUBLIC_GITHUB_URL || "";
const email = process.env.NEXT_PUBLIC_EMAIL || "";
const recaptchaSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "";

export default function ContactSection() {
  const t = useTranslations("contact");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!recaptchaToken) {
      setMessage({
        type: "error",
        text: "Please complete the reCAPTCHA verification.",
      });
      return;
    }

    setIsLoading(true);
    setMessage(null);

    const form = e.currentTarget;

    try {
      const formData = new FormData(form);
      const data = {
        name: formData.get("name") as string,
        email: formData.get("email") as string,
        message: formData.get("message") as string,
        recaptchaToken: recaptchaToken,
      };

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setMessage({
          type: "success",
          text: t("successMessage") || "Message sent successfully!",
        });
        form.reset();
        setRecaptchaToken(null);
        recaptchaRef.current?.reset();
      } else {
        setMessage({
          type: "error",
          text:
            result.error ||
            t("errorMessage") ||
            "Failed to send message. Please try again.",
        });
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setMessage({
        type: "error",
        text:
          t("errorMessage") ||
          "An unexpected error occurred. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleRecaptchaChange = (token: string | null) => {
    setRecaptchaToken(token);
  };

  const socialLinks = [
    {
      icon: "📧",
      label: "Email",
      href: `mailto:${email}`,
      className: "email",
    },
    {
      icon: "💼",
      label: "LinkedIn",
      href: linkedin,
      className: "linkedin",
    },
    {
      icon: "💻",
      label: "GitHub",
      href: github,
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
              {message && (
                <div className={`${styles.message} ${styles[message.type]}`}>
                  {message.text}
                </div>
              )}

              <div className={styles.formGroup}>
                <label htmlFor="name">{t("name")}</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  disabled={isLoading}
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email">{t("email")}</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  disabled={isLoading}
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="message">{t("message")}</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  disabled={isLoading}
                ></textarea>
              </div>

              <div className={styles.formGroup}>
                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey={recaptchaSiteKey}
                  onChange={handleRecaptchaChange}
                  size="normal"
                />
              </div>

              <Button type="submit" variant="primary" disabled={isLoading}>
                {isLoading ? t("sending") || "Sending..." : t("sendMessage")}
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
