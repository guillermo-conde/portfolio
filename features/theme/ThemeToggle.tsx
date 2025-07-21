"use client";
import { useEffect, useState } from "react";
import styles from "./theme-toggle.module.css";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  // Handle click
  const handleClick = () => {
    if (typeof window !== "undefined" && window.__theme) {
      const newTheme = window.__theme.toggle();
      setIsDark(newTheme === "dark");
    }
  };

  useEffect(() => {
    // Set initial state
    if (typeof window !== "undefined" && window.__theme) {
      const currentTheme = window.__theme.get();
      setIsDark(currentTheme === "dark");
    }

    // Handle theme changes from other sources
    const handleThemeChange = () => {
      if (typeof window !== "undefined" && window.__theme) {
        const currentTheme = window.__theme.get();
        setIsDark(currentTheme === "dark");
      }
    };

    window.addEventListener("themechange", handleThemeChange);

    // Cleanup
    return () => {
      window.removeEventListener("themechange", handleThemeChange);
    };
  }, []);

  return (
    <button
      onClick={handleClick}
      className={styles.themeToggle}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      {isDark ? "☀️ Light" : "🌙 Dark"}
    </button>
  );
}
