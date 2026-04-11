import type { UsesCategory } from "../types/uses"

export const USES_PAGE_INTRO =
  "Tools and practices I rely on for backend systems, AI features, and shipping this site. Updated when my workflow changes."

export const USES_CATEGORIES: UsesCategory[] = [
  {
    title: "Editor & AI assist",
    entries: [
      {
        name: "Cursor",
        description:
          "Primary editor for refactors, multi-file changes, and fast iteration.",
        href: "https://cursor.com",
      },
      {
        name: "Claude & ChatGPT",
        description:
          "Reasoning through designs, drafting specs, and reviewing tricky edge cases.",
        href: "https://claude.ai",
      },
    ],
  },
  {
    title: "Languages & runtimes",
    entries: [
      {
        name: "Go",
        description:
          "Services, workers, and performance-sensitive APIs in production.",
        href: "https://go.dev",
      },
      {
        name: "Python",
        description:
          "ML-adjacent services, scripting, and rapid prototyping for AI pipelines.",
        href: "https://www.python.org",
      },
      {
        name: "TypeScript",
        description:
          "Typed UI and tooling; this portfolio and registry are built with it.",
        href: "https://www.typescriptlang.org",
      },
    ],
  },
  {
    title: "Platform & data",
    entries: [
      {
        name: "Docker",
        description:
          "Reproducible builds and local stacks that mirror production.",
        href: "https://www.docker.com",
      },
      {
        name: "Kubernetes",
        description:
          "Deploying and operating services at scale with clear rollout patterns.",
        href: "https://kubernetes.io",
      },
      {
        name: "Kafka",
        description:
          "Event-driven flows, buffering, and decoupled consumers in busy systems.",
        href: "https://kafka.apache.org",
      },
      {
        name: "Redis & SQL stores",
        description:
          "Caching, sessions, and relational data depending on workload shape.",
        href: "https://redis.io",
      },
    ],
  },
  {
    title: "Frontend & content",
    entries: [
      {
        name: "Next.js & React",
        description:
          "App Router, MDX content, and component-driven UI for this site.",
        href: "https://nextjs.org",
      },
      {
        name: "Tailwind CSS",
        description:
          "Consistent spacing, themes, and fast layout tweaks without leaving markup.",
        href: "https://tailwindcss.com",
      },
      {
        name: "shadcn/ui",
        description:
          "Accessible primitives and a registry workflow for reusable components.",
        href: "https://ui.shadcn.com",
      },
    ],
  },
  {
    title: "Delivery & quality",
    entries: [
      {
        name: "Git & CI",
        description:
          "Branching, reviews, and automated checks before anything reaches users.",
        href: "https://git-scm.com",
      },
      {
        name: "Observability",
        description:
          "Metrics, logs, and tracing to catch regressions before users do.",
      },
      {
        name: "Vercel",
        description:
          "Hosting and previews for the public site and experiments.",
        href: "https://vercel.com",
      },
    ],
  },
]
