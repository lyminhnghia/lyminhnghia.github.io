import { unstable_cache } from "next/cache"

import type { Activity } from "@/components/kibo-ui/contribution-graph"
import { GITHUB_USERNAME } from "@/config/site"

/** Public default; override with GITHUB_CONTRIBUTIONS_API_URL (see .env.example). */
const CONTRIBUTIONS_API_BASE =
  process.env.GITHUB_CONTRIBUTIONS_API_URL?.replace(/\/$/, "") ||
  "https://github-contributions-api.jogruber.de"

type GitHubContributionsResponse = {
  contributions: Activity[]
}

export const getGitHubContributions = unstable_cache(
  async () => {
    try {
      const res = await fetch(
        `${CONTRIBUTIONS_API_BASE}/v4/${GITHUB_USERNAME}?y=last`
      )
      if (!res.ok) {
        return []
      }
      const data = (await res.json()) as GitHubContributionsResponse
      return data.contributions ?? []
    } catch {
      return []
    }
  },
  ["github-contributions"],
  { revalidate: 86400 } // Cache for 1 day (86400 seconds)
)
