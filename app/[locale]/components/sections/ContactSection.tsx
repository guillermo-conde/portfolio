"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Stack,
  Card,
  CardContent,
  Alert,
  useTheme,
  useMediaQuery,
  Fade,
  CircularProgress,
} from "@mui/material";
import { Send, Email, LinkedIn, GitHub } from "@mui/icons-material";

export default function ContactSection() {
  const t = useTranslations("contact");
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Here you would normally send the data to your backend
      console.log("Form data:", formData);

      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    {
      icon: <Email />,
      label: "Email",
      href: "mailto:tu@email.com",
      color: "#EA4335",
    },
    {
      icon: <LinkedIn />,
      label: "LinkedIn",
      href: "https://linkedin.com/in/tu-perfil",
      color: "#0A66C2",
    },
    {
      icon: <GitHub />,
      label: "GitHub",
      href: "https://github.com/tu-usuario",
      color: "#333",
    },
  ];

  return (
    <Box
      id="contact"
      sx={{
        py: 10,
        backgroundColor:
          theme.palette.mode === "dark"
            ? "rgba(30, 41, 59, 0.5)"
            : "rgba(248, 250, 252, 0.5)",
      }}
    >
      <Container maxWidth="lg">
        <Fade in timeout={1000}>
          <Stack spacing={6}>
            {/* Header */}
            <Box textAlign="center">
              <Typography
                variant="h2"
                component="h2"
                sx={{ mb: 2, fontWeight: 700 }}
              >
                {t("title")}
              </Typography>
              <Typography
                variant="h6"
                color="text.secondary"
                sx={{ maxWidth: 600, mx: "auto" }}
              >
                {t("subtitle")}
              </Typography>
            </Box>

            {/* Content Grid */}
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
                gap: 6,
                alignItems: "start",
              }}
            >
              {/* Contact Form */}
              <Card>
                <CardContent sx={{ p: 4 }}>
                  <Box component="form" onSubmit={handleSubmit}>
                    <Stack spacing={3}>
                      <TextField
                        fullWidth
                        label={t("name")}
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        variant="outlined"
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            borderRadius: 2,
                          },
                        }}
                      />

                      <TextField
                        fullWidth
                        label={t("email")}
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        variant="outlined"
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            borderRadius: 2,
                          },
                        }}
                      />

                      <TextField
                        fullWidth
                        label={t("message")}
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        multiline
                        rows={4}
                        variant="outlined"
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            borderRadius: 2,
                          },
                        }}
                      />

                      {submitStatus && (
                        <Alert
                          severity={
                            submitStatus === "success" ? "success" : "error"
                          }
                          sx={{ borderRadius: 2 }}
                        >
                          {submitStatus === "success"
                            ? t("success")
                            : t("error")}
                        </Alert>
                      )}

                      <Button
                        type="submit"
                        variant="contained"
                        size="large"
                        startIcon={
                          isSubmitting ? (
                            <CircularProgress size={20} color="inherit" />
                          ) : (
                            <Send />
                          )
                        }
                        disabled={isSubmitting}
                        sx={{
                          py: 1.5,
                          borderRadius: 2,
                          boxShadow: "0 8px 25px rgba(37, 99, 235, 0.3)",
                        }}
                      >
                        {isSubmitting ? t("sending") : t("send")}
                      </Button>
                    </Stack>
                  </Box>
                </CardContent>
              </Card>

              {/* Contact Info */}
              <Box>
                <Typography variant="h4" sx={{ mb: 3, fontWeight: 600 }}>
                  ¡Conectemos!
                </Typography>

                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ mb: 4, lineHeight: 1.8 }}
                >
                  Estoy siempre interesado en nuevas oportunidades y proyectos
                  emocionantes. Si tienes una idea o simplemente quieres charlar
                  sobre desarrollo frontend, no dudes en contactarme.
                </Typography>

                <Stack spacing={3}>
                  {socialLinks.map((link, index) => (
                    <Box
                      key={index}
                      component="a"
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 2,
                        p: 2,
                        borderRadius: 2,
                        backgroundColor: theme.palette.background.paper,
                        textDecoration: "none",
                        color: "inherit",
                        transition: "all 0.3s ease-in-out",
                        "&:hover": {
                          transform: "translateY(-2px)",
                          boxShadow: "0 8px 25px rgba(0, 0, 0, 0.1)",
                        },
                      }}
                    >
                      <Box
                        sx={{
                          width: 48,
                          height: 48,
                          borderRadius: "50%",
                          backgroundColor: link.color,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "white",
                        }}
                      >
                        {link.icon}
                      </Box>
                      <Typography variant="h6" sx={{ fontWeight: 500 }}>
                        {link.label}
                      </Typography>
                    </Box>
                  ))}
                </Stack>
              </Box>
            </Box>
          </Stack>
        </Fade>
      </Container>
    </Box>
  );
}
