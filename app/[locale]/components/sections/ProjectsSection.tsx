"use client";
import { useTranslations } from "next-intl";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  Chip,
  Stack,
  useTheme,
  useMediaQuery,
  Fade,
} from "@mui/material";
import { Launch, GitHub } from "@mui/icons-material";
import GlassCard from "./Glasscard";

export default function ProjectsSection() {
  const t = useTranslations("projects");
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const projects = [
    {
      id: 1,
      title: "E-Commerce Dashboard",
      description:
        "Panel de administración moderno para comercio electrónico con análisis en tiempo real",
      image: "/api/placeholder/400/250",
      technologies: ["React", "Next.js", "TypeScript", "Chart.js"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "Aplicación de gestión de tareas con colaboración en equipo y seguimiento de proyectos",
      image: "/api/placeholder/400/250",
      technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 3,
      title: "Weather App",
      description:
        "Aplicación meteorológica con pronósticos detallados y mapas interactivos",
      image: "/api/placeholder/400/250",
      technologies: ["React", "Weather API", "Leaflet", "CSS Modules"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 4,
      title: "Social Media Platform",
      description:
        "Plataforma social moderna con mensajería en tiempo real y compartir contenido",
      image: "/api/placeholder/400/250",
      technologies: ["Next.js", "Prisma", "PostgreSQL", "Tailwind"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ];

  return (
    <Box
      id="projects"
      sx={{
        py: 10,
        backgroundColor: theme.palette.background.default,
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

            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: {
                  xs: "1fr",
                  sm: "repeat(2, 1fr)",
                  lg: "repeat(3, 1fr)",
                },
                gap: 4,
                mb: 6,
              }}
            ></Box>

            <Typography
              variant="h4"
              component="h3"
              sx={{ mb: 4, textAlign: "center", fontWeight: 600 }}
            >
              {t("regular_projects")}
            </Typography>

            {/* Projects Grid */}
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: {
                  xs: "1fr",
                  sm: "repeat(2, 1fr)",
                  lg: "repeat(3, 1fr)",
                },
                gap: 4,
              }}
            >
              {projects.map((project) => (
                <Card
                  key={project.id}
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    transition: "all 0.3s ease-in-out",
                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow:
                        theme.palette.mode === "dark"
                          ? "0 20px 40px rgba(0, 0, 0, 0.4)"
                          : "0 20px 40px rgba(0, 0, 0, 0.15)",
                    },
                  }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      height: 200,
                      background: `linear-gradient(135deg, ${theme.palette.primary.main}33, ${theme.palette.secondary.main}33)`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      position: "relative",
                      overflow: "hidden",
                    }}
                  >
                    <Typography
                      variant="h4"
                      sx={{
                        color: theme.palette.primary.main,
                        fontWeight: 700,
                        opacity: 0.7,
                      }}
                    >
                      {project.title.split(" ")[0]}
                    </Typography>
                  </CardMedia>

                  <CardContent sx={{ flexGrow: 1, p: 3 }}>
                    <Typography
                      variant="h5"
                      component="h3"
                      sx={{ mb: 2, fontWeight: 600 }}
                    >
                      {project.title}
                    </Typography>

                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mb: 3, lineHeight: 1.6 }}
                    >
                      {project.description}
                    </Typography>

                    <Box sx={{ mb: 3 }}>
                      <Typography
                        variant="body2"
                        sx={{ mb: 1, fontWeight: 500 }}
                      >
                        {t("technologies")}:
                      </Typography>
                      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                        {project.technologies.map((tech) => (
                          <Chip
                            key={tech}
                            label={tech}
                            size="small"
                            variant="outlined"
                            sx={{
                              borderColor: theme.palette.primary.main,
                              color: theme.palette.primary.main,
                            }}
                          />
                        ))}
                      </Box>
                    </Box>

                    <Stack direction="row" spacing={2}>
                      <Button
                        variant="contained"
                        startIcon={<Launch />}
                        href={project.liveUrl}
                        target="_blank"
                        size="small"
                        sx={{ flex: 1 }}
                      >
                        {t("viewProject")}
                      </Button>
                      <Button
                        variant="outlined"
                        startIcon={<GitHub />}
                        href={project.githubUrl}
                        target="_blank"
                        size="small"
                        sx={{ flex: 1 }}
                      >
                        {t("viewCode")}
                      </Button>
                    </Stack>
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
