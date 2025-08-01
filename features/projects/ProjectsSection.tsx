"use client";
import styles from "./projects.module.css";
import { Button } from "../../shared/ui/Button/Button";
import { useTranslations } from "next-intl";

export default function ProjectsSection() {
  const t = useTranslations("projects");
  const projects = [
    {
      id: 1,
      title: "E-Commerce Dashboard",
      description:
        "Modern administration panel for e-commerce with real-time analytics",
      placeholder: "E-Commerce",
      technologies: ["React", "Next.js", "TypeScript", "Chart.js"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "Task management application with team collaboration and project tracking",
      placeholder: "Task",
      technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 3,
      title: "Weather App",
      description:
        "Weather application with detailed forecasts and interactive maps",
      placeholder: "Weather",
      technologies: ["React", "Weather API", "Leaflet", "CSS Modules"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ];

  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>{t("title")}</h2>
          <p>{t("subtitle")}</p>
        </div>

        <div className={styles.grid}>
          {projects.map((project) => (
            <div key={project.id} className={styles.card}>
              <div className={styles.image}>
                <div className={styles.placeholder}>{project.placeholder}</div>
              </div>
              <div className={styles.content}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className={styles.technologies}>
                  <span>{t("technologies")}:</span>
                  <div className={styles.techTags}>
                    {project.technologies.map((tech) => (
                      <span key={tech} className={styles.techTag}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className={styles.buttons}>
                  <Button href={project.liveUrl} variant="primary">
                    {t("viewProject")}
                  </Button>
                  <Button href={project.githubUrl} variant="outline">
                    {t("viewCode")}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
