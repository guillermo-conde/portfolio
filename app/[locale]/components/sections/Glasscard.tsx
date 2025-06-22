"use client";

import React, { useState, useEffect } from "react";
import { Box, Typography, Card, CardContent } from "@mui/material";
import { useTheme } from "../../providers/ThemeProvider";

interface GlassCardProps {
  title?: string;
  subtitle?: string;
  children?: React.ReactNode;
  height?: string | number;
  width?: string | number;
  onClick?: () => void;
}

export default function GlassCard({
  title = "Example 1",
  subtitle,
  children,
  height = 300,
  width = "100%",
  onClick,
}: GlassCardProps) {
  const { isDarkMode, mounted } = useTheme();

  // Prevent hydration mismatch
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <Card
      onClick={onClick}
      sx={{
        position: "relative",
        height,
        width,
        borderRadius: "20px",
        overflow: "hidden",
        cursor: onClick ? "pointer" : "default",
        border:
          isClient && mounted && isDarkMode
            ? "1px solid rgba(255, 255, 255, 0.15)"
            : "1px solid rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur(20px)",
        backgroundColor:
          isClient && mounted && isDarkMode
            ? "rgba(255, 255, 255, 0.05)"
            : "rgba(255, 255, 255, 0.8)",
        boxShadow:
          isClient && mounted && isDarkMode
            ? "0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1)"
            : "0 8px 32px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.1)",
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        "&:hover": onClick
          ? {
              transform: "translateY(-4px)",
              boxShadow:
                isClient && mounted && isDarkMode
                  ? "0 12px 40px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.15)"
                  : "0 12px 40px rgba(0, 0, 0, 0.15), 0 1px 3px rgba(0, 0, 0, 0.15)",
            }
          : {},
      }}
    >
      {/* Glass shine effect */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "50%",
          background:
            "linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, transparent 100%)",
          pointerEvents: "none",
        }}
      />

      <CardContent
        sx={{
          position: "relative",
          zIndex: 2,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          p: 3,
        }}
      >
        {title && (
          <Typography
            variant="h4"
            component="h3"
            sx={{
              fontWeight: 600,
              mb: subtitle ? 1 : 2,
              color: isClient && mounted && isDarkMode ? "#ffffff" : "#1f2937",
              textShadow:
                isClient && mounted && isDarkMode
                  ? "0 2px 4px rgba(0, 0, 0, 0.5)"
                  : "0 2px 4px rgba(0, 0, 0, 0.1)",
            }}
          >
            {title}
          </Typography>
        )}

        {subtitle && (
          <Typography
            variant="body1"
            sx={{
              mb: 2,
              opacity: 0.8,
              color: isClient && mounted && isDarkMode ? "#e5e7eb" : "#6b7280",
            }}
          >
            {subtitle}
          </Typography>
        )}

        {children && <Box sx={{ width: "100%" }}>{children}</Box>}
      </CardContent>

      {/* Border glow effect */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          borderRadius: "20px",
          padding: "1px",
          background:
            isClient && mounted && isDarkMode
              ? "linear-gradient(45deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))"
              : "linear-gradient(45deg, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.02))",
          pointerEvents: "none",
        }}
      />
    </Card>
  );
}
