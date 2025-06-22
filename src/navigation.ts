import { createNavigation } from "next-intl/navigation";
import { routing } from "./i18n/routing";

export const locales = ["en", "es", "fr"] as const;

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
