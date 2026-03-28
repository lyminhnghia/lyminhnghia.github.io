import type { MetadataRoute } from "next"

import { SITE_INFO } from "@/config/site"

export const dynamic = "force-static"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
      },
    ],
    sitemap: `${SITE_INFO.url}/sitemap.xml`,
  }
}
