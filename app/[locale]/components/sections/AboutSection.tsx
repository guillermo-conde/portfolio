"use client";
import { useTranslations } from "next-intl";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Chip,
  LinearProgress,
  Stack,
  Avatar,
  useTheme,
  Fade,
  useMediaQuery,
} from "@mui/material";
import { Code, Palette, Speed, Lightbulb } from "@mui/icons-material";

export default function AboutSection() {
  const t = useTranslations("about");
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const skills = [
    { name: "React", level: 95, category: "Frontend" },
    { name: "Next.js", level: 90, category: "Frontend" },
    { name: "TypeScript", level: 85, category: "Language" },
    { name: "JavaScript", level: 95, category: "Language" },
    { name: "HTML/CSS", level: 90, category: "Frontend" },
    { name: "Node.js", level: 80, category: "Backend" },
    { name: "MongoDB", level: 75, category: "Database" },
    { name: "Git", level: 85, category: "Tools" },
  ];

  const features = [
    {
      icon: <Code />,
      title: "Clean Code",
      description: "Código limpio, mantenible y escalable",
    },
    {
      icon: <Speed />,
      title: "Performance",
      description: "Optimización para máximo rendimiento",
    },
    {
      icon: <Palette />,
      title: "UI/UX Design",
      description: "Diseño intuitivo y experiencia de usuario",
    },
    {
      icon: <Lightbulb />,
      title: "Innovation",
      description: "Soluciones creativas e innovadoras",
    },
  ];

  return (
    <Box
      id="about"
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
                alignItems: "center",
              }}
            >
              {/* Description */}
              <Stack spacing={4}>
                <Typography
                  variant="body1"
                  sx={{ fontSize: "1.1rem", lineHeight: 1.8 }}
                >
                  {t("description")}
                </Typography>

                <Box>
                  <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                    {t("experience")}
                  </Typography>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <Avatar
                      sx={{
                        bgcolor: "primary.main",
                        width: 60,
                        height: 60,
                        fontSize: "1.5rem",
                        fontWeight: 700,
                      }}
                    >
                      3+
                    </Avatar>
                    <Typography variant="h6" color="text.secondary">
                      {t("years")} de experiencia
                    </Typography>
                  </Box>
                </Box>
              </Stack>

              {/* Skills */}
              <Box>
                <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
                  {t("skills")}
                </Typography>
                <Stack spacing={3}>
                  {skills.map((skill) => (
                    <Box key={skill.name}>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          mb: 1,
                        }}
                      >
                        <Typography variant="body2" sx={{ fontWeight: 500 }}>
                          {skill.name}
                        </Typography>
                        <Chip
                          label={skill.category}
                          size="small"
                          variant="outlined"
                        />
                      </Box>
                      <LinearProgress
                        variant="determinate"
                        value={skill.level}
                        sx={{
                          height: 8,
                          borderRadius: 4,
                          backgroundColor: "rgba(0, 0, 0, 0.1)",
                          "& .MuiLinearProgress-bar": {
                            borderRadius: 4,
                            background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                          },
                        }}
                      />
                    </Box>
                  ))}
                </Stack>
              </Box>
            </Box>

            {/* Features Grid */}
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: {
                  xs: "1fr",
                  sm: "repeat(2, 1fr)",
                  md: "repeat(4, 1fr)",
                },
                gap: 4,
                mt: 4,
              }}
            >
              {features.map((feature, index) => (
                <Card
                  key={index}
                  sx={{
                    height: "100%",
                    textAlign: "center",
                    p: 3,
                    transition: "transform 0.3s ease-in-out",
                    "&:hover": {
                      transform: "translateY(-8px)",
                    },
                  }}
                >
                  <CardContent>
                    <Avatar
                      sx={{
                        bgcolor: "primary.main",
                        mb: 2,
                        mx: "auto",
                        width: 60,
                        height: 60,
                      }}
                    >
                      {feature.icon}
                    </Avatar>
                    <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
                      {feature.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {feature.description}
                    </Typography>
                  </CardContent>
                </Card>
              ))}
            </Box>
          </Stack>
        </Fade>
      </Container>
    </Box>
  );
}
