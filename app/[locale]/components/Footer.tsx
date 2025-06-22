"use client";
import { useTranslations } from "next-intl";
import {
  Box,
  Container,
  Typography,
  Stack,
  Divider,
  useTheme,
} from "@mui/material";
import { Favorite } from "@mui/icons-material";

export default function Footer() {
  const t = useTranslations("footer");
  const theme = useTheme();
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        py: 6,
        backgroundColor:
          theme.palette.mode === "dark"
            ? "rgba(15, 23, 42, 0.8)"
            : "rgba(248, 250, 252, 0.8)",
        borderTop: `1px solid ${theme.palette.divider}`,
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={4}>
          <Divider />

          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              justifyContent: "space-between",
              alignItems: "center",
              gap: 2,
            }}
          >
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ display: "flex", alignItems: "center", gap: 1 }}
            >
              © {currentYear} Portfolio. {t("rights")}.
              <Favorite sx={{ fontSize: 16, color: "red" }} />
            </Typography>

            <Typography variant="body2" color="text.secondary">
              {t("builtWith")}
            </Typography>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
