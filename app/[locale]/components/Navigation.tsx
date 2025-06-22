import { useTranslations } from "next-intl";
import { Link } from "../../../src/navigation";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navigation() {
  const t = useTranslations("navigation");

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem 2rem",
        borderBottom: "1px solid #e1e5e9",
      }}
    >
      <div style={{ display: "flex", gap: "2rem" }}>
        <Link href="/" style={{ textDecoration: "none", color: "#0070f3" }}>
          {t("home")}
        </Link>
        <Link
          href="/about"
          style={{ textDecoration: "none", color: "#0070f3" }}
        >
          {t("about")}
        </Link>
        <Link
          href="/portfolio"
          style={{ textDecoration: "none", color: "#0070f3" }}
        >
          {t("portfolio")}
        </Link>
        <Link
          href="/contact"
          style={{ textDecoration: "none", color: "#0070f3" }}
        >
          {t("contact")}
        </Link>
      </div>

      <LanguageSwitcher />
    </nav>
  );
}
