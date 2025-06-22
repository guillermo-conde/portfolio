"use client";
import { useTranslations } from "next-intl";
import {
  Box,
  Container,
  Typography,
  Button,
  Stack,
  Avatar,
  useTheme,
  useMediaQuery,
  Fade,
  Slide,
} from "@mui/material";
import { Download, Email } from "@mui/icons-material";
import Glasscard from "./Glasscard";

export default function HeroSection() {
  const t = useTranslations("hero");
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        background:
          theme.palette.mode === "dark"
            ? "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)"
            : "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
            gap: 6,
            alignItems: "center",
            minHeight: "80vh",
          }}
        >
          {/* Text Content */}
          <Fade in timeout={1000}>
            <Stack spacing={3}>
              <Typography variant="h6" color="primary" sx={{ fontWeight: 500 }}>
                {t("greeting")}
              </Typography>

              <Typography
                variant="h1"
                sx={{
                  fontWeight: 700,
                  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {t("name")}
              </Typography>

              <Typography
                variant="h2"
                color="text.primary"
                sx={{ fontWeight: 600 }}
              >
                {t("title")}
              </Typography>

              <Typography
                variant="h6"
                color="text.secondary"
                sx={{ maxWidth: 500 }}
              >
                {t("subtitle")}
              </Typography>

              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ maxWidth: 600, lineHeight: 1.8 }}
              >
                {t("description")}
              </Typography>

              <Stack direction="row" spacing={2} sx={{ pt: 2 }}>
                <Button
                  variant="contained"
                  size="large"
                  onClick={scrollToProjects}
                  sx={{
                    px: 4,
                    py: 1.5,
                    borderRadius: 3,
                    boxShadow: "0 8px 25px rgba(37, 99, 235, 0.3)",
                  }}
                >
                  {t("cta")}
                </Button>

                <Button
                  variant="outlined"
                  size="large"
                  startIcon={<Email />}
                  onClick={scrollToContact}
                  sx={{
                    px: 4,
                    py: 1.5,
                    borderRadius: 3,
                  }}
                >
                  {t("contact")}
                </Button>
              </Stack>
            </Stack>
          </Fade>

          {/* Avatar/Image Section */}
          <Slide direction="left" in timeout={1200}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                order: isMobile ? -1 : 1,
              }}
            >
              <Avatar
                sx={{
                  width: isMobile ? 200 : 300,
                  height: isMobile ? 200 : 300,
                  bgcolor: "primary.main",
                  fontSize: isMobile ? "4rem" : "6rem",
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
                  border: `4px solid ${theme.palette.background.paper}`,
                }}
              >
                👨‍💻
              </Avatar>
            </Box>
          </Slide>
        </Box>
      </Container>

      {/* Decorative Elements */}
      <Box
        sx={{
          position: "absolute",
          top: "20%",
          right: "10%",
          width: 100,
          height: 100,
          borderRadius: "50%",
          background: `linear-gradient(135deg, ${theme.palette.primary.main}33, ${theme.palette.secondary.main}33)`,
          zIndex: -1,
          animation: "float 6s ease-in-out infinite",
          "@keyframes float": {
            "0%, 100%": { transform: "translateY(0px)" },
            "50%": { transform: "translateY(-20px)" },
          },
        }}
      />

      <Box
        sx={{
          position: "absolute",
          bottom: "30%",
          left: "5%",
          width: 60,
          height: 60,
          borderRadius: "50%",
          background: `linear-gradient(135deg, ${theme.palette.secondary.main}33, ${theme.palette.primary.main}33)`,
          zIndex: -1,
          animation: "float 4s ease-in-out infinite reverse",
        }}
      />
    </Box>
  );
}
