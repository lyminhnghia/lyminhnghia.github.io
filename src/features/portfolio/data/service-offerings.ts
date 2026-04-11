import type { ServiceOffering } from "../types/service-offering"

export const SERVICE_OFFERINGS: ServiceOffering[] = [
  {
    title: "AI Product Engineering",
    description:
      "Design and ship production-ready AI features for chat, voice, and automation workflows.",
    outcomes: [
      "Faster launch of AI experiences",
      "Safer prompts and model behavior",
      "Reliable integrations with existing systems",
    ],
  },
  {
    title: "Backend Platform Modernization",
    description:
      "Build scalable microservices and event-driven architecture for high-growth products.",
    outcomes: [
      "Higher throughput and lower latency",
      "Cleaner service boundaries",
      "Easier long-term maintenance",
    ],
  },
  {
    title: "Reliability and Performance",
    description:
      "Improve availability with observability, resilient deployment patterns, and incident hardening.",
    outcomes: [
      "Fewer production incidents",
      "Faster issue detection and recovery",
      "More predictable system performance",
    ],
  },
]
