"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "../../../src/navigation";
import { useState, useTransition } from "react";

const languages = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "es", name: "Español", flag: "🇪🇸" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
];

export default function LanguageSwitcher() {
  const [isPending, startTransition] = useTransition();
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const currentLanguage = languages.find((lang) => lang.code === locale);

  const handleLanguageChange = (newLocale: string) => {
    startTransition(() => {
      // Navigate to the same page with the new locale
      router.replace(pathname, { locale: newLocale });
    });
    setIsOpen(false);
  };

  return (
    <div className="language-switcher">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="language-button"
        disabled={isPending}
      >
        <span className="flag">{currentLanguage?.flag}</span>
        <span className="language-name">{currentLanguage?.name}</span>
        <span className={`arrow ${isOpen ? "open" : ""}`}>▼</span>
      </button>

      {isOpen && (
        <div className="language-dropdown">
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => handleLanguageChange(language.code)}
              className={`language-option ${
                locale === language.code ? "active" : ""
              }`}
              disabled={isPending}
            >
              <span className="flag">{language.flag}</span>
              <span className="language-name">{language.name}</span>
            </button>
          ))}
        </div>
      )}

      <style jsx>{`
        .language-switcher {
          position: relative;
          display: inline-block;
        }

        .language-button {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 12px;
          border: 1px solid #e1e5e9;
          border-radius: 6px;
          background: white;
          cursor: pointer;
          font-size: 14px;
          transition: all 0.2s ease;
        }

        .language-button:hover {
          border-color: #0070f3;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .language-button:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .arrow {
          font-size: 12px;
          transition: transform 0.2s ease;
        }

        .arrow.open {
          transform: rotate(180deg);
        }

        .language-dropdown {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background: white;
          border: 1px solid #e1e5e9;
          border-radius: 6px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          z-index: 1000;
          margin-top: 4px;
        }

        .language-option {
          display: flex;
          align-items: center;
          gap: 8px;
          width: 100%;
          padding: 8px 12px;
          border: none;
          background: white;
          cursor: pointer;
          font-size: 14px;
          transition: background-color 0.2s ease;
        }

        .language-option:hover {
          background-color: #f5f5f5;
        }

        .language-option.active {
          background-color: #e6f3ff;
          color: #0070f3;
        }

        .language-option:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .flag {
          font-size: 16px;
        }

        .language-name {
          white-space: nowrap;
        }
      `}</style>
    </div>
  );
}
