import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Your Name - Frontend Developer",
  description:
    "Professional portfolio of a frontend developer specialized in React, Next.js and modern technologies. Creating exceptional web experiences.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        {/* Theme initialization script - must run before React hydration */}
        <Script
          id="theme-script"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                function getInitialTheme() {
                  if (typeof localStorage !== 'undefined') {
                    const stored = localStorage.getItem('theme');
                    if (stored && (stored === 'light' || stored === 'dark')) {
                      return stored;
                    }
                  }
                  
                  if (typeof window !== 'undefined' && window.matchMedia) {
                    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                      return 'dark';
                    }
                  }
                  
                  return 'light';
                }
                
                function applyTheme(theme) {
                  const root = document.documentElement;
                  if (theme === 'dark') {
                    root.setAttribute('data-theme', 'dark');
                  } else {
                    root.removeAttribute('data-theme');
                  }
                  
                  if (typeof localStorage !== 'undefined') {
                    localStorage.setItem('theme', theme);
                  }
                }
                
                const initialTheme = getInitialTheme();
                applyTheme(initialTheme);
                
                if (typeof window !== 'undefined' && window.matchMedia) {
                  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
                  
                  function handleSystemThemeChange(e) {
                    if (typeof localStorage !== 'undefined') {
                      const stored = localStorage.getItem('theme');
                      if (!stored) {
                        applyTheme(e.matches ? 'dark' : 'light');
                      }
                    }
                  }
                  
                  mediaQuery.addEventListener('change', handleSystemThemeChange);
                }
                
                window.__theme = {
                  get: function() {
                    const root = document.documentElement;
                    return root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
                  },
                  
                  set: function(theme) {
                    applyTheme(theme);
                    
                    if (typeof window !== 'undefined') {
                      window.dispatchEvent(new CustomEvent('themechange', { 
                        detail: { theme } 
                      }));
                    }
                  },
                  
                  toggle: function() {
                    const current = this.get();
                    const next = current === 'light' ? 'dark' : 'light';
                    this.set(next);
                    return next;
                  }
                };
              })();
            `,
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <NextIntlClientProvider messages={messages} locale={locale}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
