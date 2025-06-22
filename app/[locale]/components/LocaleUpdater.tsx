"use client";

import { useLocale } from "next-intl";
import { useEffect } from "react";

export default function LocaleUpdater() {
  const locale = useLocale();

  useEffect(() => {
    // Update the HTML lang attribute when locale changes
    document.documentElement.lang = locale;
  }, [locale]);

  return null;
}
