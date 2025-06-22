"use client";

import { useTranslations } from "next-intl";
import { Link } from "../../../src/navigation";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTheme } from "../providers/ThemeProvider";
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  IconButton,
  useTheme as useMUITheme,
  useMediaQuery,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import {
  LightMode,
  DarkMode,
  Menu as MenuIcon,
  Close as CloseIcon,
} from "@mui/icons-material";
import { useState, useEffect } from "react";

export default function Navigation() {
  const t = useTranslations("navigation");
  const themeT = useTranslations("theme");
  const { isDarkMode, toggleTheme, mounted } = useTheme();
  const muiTheme = useMUITheme();
  const isMobile = useMediaQuery(muiTheme.breakpoints.down("md"));
  const [mobileOpen, setMobileOpen] = useState(false);

  // Prevent hydration mismatch by using static styles initially
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const navigationItems = [
    { href: "/", label: t("home") },
    { href: "#about", label: t("about") },
    { href: "#projects", label: t("projects") },
    { href: "#contact", label: t("contact") },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box sx={{ width: 250, pt: 2 }}>
      <Box sx={{ display: "flex", justifyContent: "flex-end", pr: 2, pb: 1 }}>
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {navigationItems.map((item) => (
          <ListItem key={item.href} disablePadding>
            <ListItemButton
              component={item.href.startsWith("#") ? "a" : Link}
              href={item.href}
              onClick={handleDrawerToggle}
            >
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Box sx={{ p: 2, borderTop: 1, borderColor: "divider", mt: 2 }}>
        <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
          <IconButton
            onClick={toggleTheme}
            title={isDarkMode ? themeT("light") : themeT("dark")}
          >
            {isDarkMode ? <LightMode /> : <DarkMode />}
          </IconButton>
          <LanguageSwitcher />
        </Box>
      </Box>
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          backdropFilter: "blur(20px)",
          backgroundColor:
            isClient && mounted && isDarkMode
              ? "rgba(10, 10, 10, 0.8)"
              : "rgba(255, 255, 255, 0.95)",
          borderBottom:
            isClient && mounted && isDarkMode
              ? "1px solid rgba(255, 255, 255, 0.1)"
              : "1px solid rgba(0, 0, 0, 0.1)",
          boxShadow:
            isClient && mounted && isDarkMode
              ? "0 8px 32px rgba(0, 0, 0, 0.4)"
              : "0 2px 8px rgba(0, 0, 0, 0.05)",
          transition: "all 0.3s ease-in-out",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography
            variant="h6"
            component={Link}
            href="/"
            sx={{
              textDecoration: "none",
              color: "inherit",
              fontWeight: 700,
            }}
          >
            Portfolio
          </Typography>

          {isMobile ? (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
              {navigationItems.map((item) => (
                <Button
                  key={item.href}
                  component={item.href.startsWith("#") ? "a" : Link}
                  href={item.href}
                  color="inherit"
                  sx={{ textTransform: "none" }}
                >
                  {item.label}
                </Button>
              ))}
              <IconButton
                onClick={toggleTheme}
                color="inherit"
                title={isDarkMode ? themeT("light") : themeT("dark")}
              >
                {isDarkMode ? <LightMode /> : <DarkMode />}
              </IconButton>
              <LanguageSwitcher />
            </Box>
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: 250,
            backgroundColor:
              isClient && mounted && isDarkMode
                ? "rgba(10, 10, 10, 0.95)"
                : undefined,
            backdropFilter:
              isClient && mounted && isDarkMode ? "blur(20px)" : undefined,
            border:
              isClient && mounted && isDarkMode
                ? "1px solid rgba(255, 255, 255, 0.1)"
                : undefined,
            transition: "all 0.3s ease-in-out",
          },
        }}
      >
        {drawer}
      </Drawer>

      {/* Spacer for fixed AppBar */}
      <Toolbar />
    </>
  );
}
