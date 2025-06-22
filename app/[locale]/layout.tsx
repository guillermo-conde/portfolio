import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "../../src/i18n/routing";
import Navigation from "./components/Navigation";
import LocaleUpdater from "./components/LocaleUpdater";
import SSRSafeThemeProvider from "./providers/SSRSafeTheme";
import EmotionCacheProvider from "./providers/EmotionCacheProvider";
import Footer from "./components/Footer";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });

  return {
    title: t("title"),
    description: t("description"),
    keywords:
      "frontend developer, react, next.js, typescript, portfolio, web development",
    authors: [{ name: "Tu Nombre" }],
    creator: "Tu Nombre",
    openGraph: {
      title: t("title"),
      description: t("description"),
      type: "website",
      locale: locale,
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as any)) notFound();

  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <EmotionCacheProvider>
        <SSRSafeThemeProvider>
          <LocaleUpdater />
          <Navigation />
          <main>{children}</main>
          <Footer />
        </SSRSafeThemeProvider>
      </EmotionCacheProvider>
    </NextIntlClientProvider>
  );
}
