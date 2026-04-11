import { USER } from "@/features/portfolio/data/user"
import type { NavItem } from "@/types/nav"

export const SITE_INFO = {
  name: USER.displayName,
  url: process.env.APP_URL || "https://lyminhnghia.github.io",
  ogImage: USER.ogImage,
  description: USER.bio,
  keywords: USER.keywords,
}

export const META_THEME_COLORS = {
  light: "#ffffff",
  dark: "#09090b",
}

export const MAIN_NAV: NavItem[] = [
  {
    title: "Components",
    href: "/components",
  },
  {
    title: "Blocks",
    href: "/blocks",
  },
  {
    title: "Blog",
    href: "/blog",
  },
  {
    title: "Uses",
    href: "/uses",
  },
]

export const MOBILE_NAV: NavItem[] = [
  {
    title: "Home",
    href: "/",
  },
  ...MAIN_NAV,
]

export const X_USERNAME = ""
export const GITHUB_USERNAME = "lyminhnghia"
export const SOURCE_CODE_GITHUB_REPO = "lyminhnghia/lyminhnghia.github.io"
export const SOURCE_CODE_GITHUB_URL =
  "https://github.com/lyminhnghia/lyminhnghia.github.io"

export const SPONSORSHIP_URL = "https://github.com/lyminhnghia"

export const UTM_PARAMS = {
  utm_source: "lyminhnghia.github.io",
}
