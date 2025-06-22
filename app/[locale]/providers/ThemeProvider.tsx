"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import {
  ThemeProvider as MUIThemeProvider,
  createTheme,
} from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

type ThemeContextType = {
  isDarkMode: boolean;
  toggleTheme: () => void;
  mounted: boolean;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Load theme preference from localStorage
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDarkMode(savedTheme === "dark");
    } else {
      // Check system preference
      setIsDarkMode(window.matchMedia("(prefers-color-scheme: dark)").matches);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
  };

  const theme = createTheme({
    palette: {
      mode: mounted && isDarkMode ? "dark" : "light",
      primary: {
        main: "#2563eb",
        light: "#3b82f6",
        dark: "#1d4ed8",
      },
      secondary: {
        main: "#7c3aed",
        light: "#8b5cf6",
        dark: "#6d28d9",
      },
      background: {
        default: mounted && isDarkMode ? "#0a0a0a" : "#ffffff",
        paper: mounted && isDarkMode ? "rgba(255, 255, 255, 0.05)" : "#f8fafc",
      },
      divider:
        mounted && isDarkMode
          ? "rgba(255, 255, 255, 0.1)"
          : "rgba(0, 0, 0, 0.12)",
    },
    typography: {
      fontFamily:
        'var(--font-geist-sans), -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      h1: {
        fontWeight: 700,
        fontSize: "3.5rem",
        "@media (max-width:600px)": {
          fontSize: "2.5rem",
        },
      },
      h2: {
        fontWeight: 600,
        fontSize: "2.5rem",
        "@media (max-width:600px)": {
          fontSize: "2rem",
        },
      },
      h3: {
        fontWeight: 600,
        fontSize: "2rem",
        "@media (max-width:600px)": {
          fontSize: "1.5rem",
        },
      },
    },
    shape: {
      borderRadius: 12,
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: "none",
            borderRadius: 8,
            padding: "12px 24px",
            fontSize: "1rem",
            fontWeight: 500,
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 16,
            backdropFilter: mounted && isDarkMode ? "blur(10px)" : undefined,
            border:
              mounted && isDarkMode
                ? "1px solid rgba(255, 255, 255, 0.1)"
                : "1px solid rgba(0, 0, 0, 0.08)",
            boxShadow:
              mounted && isDarkMode
                ? "0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1)"
                : "0 4px 20px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.1)",
            background:
              mounted && isDarkMode ? "rgba(255, 255, 255, 0.03)" : "#ffffff",
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            backdropFilter: mounted && isDarkMode ? "blur(10px)" : undefined,
            border:
              mounted && isDarkMode
                ? "1px solid rgba(255, 255, 255, 0.1)"
                : undefined,
          },
        },
      },
    },
  });

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme, mounted }}>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </ThemeContext.Provider>
  );
}
