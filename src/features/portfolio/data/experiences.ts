import type { Experience } from "../types/experiences"

export const EXPERIENCES: Experience[] = [
  {
    id: "independent",
    companyName: "Independent",
    companyLogo: "https://github.com/lyminhnghia.png",
    companyWebsite: "https://lyminhnghia.github.io",
    isCurrentEmployer: true,
    positions: [
      {
        id: "1",
        title: "Full-Stack Software Engineer",
        employmentPeriod: {
          start: "01.2025",
        },
        employmentType: "Full-time",
        icon: "code",
        description:
          "- Ship and maintain this site: Next.js, TypeScript, Tailwind CSS, MDX, and a shadcn-based component registry.\n- Emphasize maintainable systems, clear APIs, and thoughtful user interfaces.\n- Work with stakeholders to deliver features that stay easy to evolve.",
        skills: [
          "TypeScript",
          "Next.js",
          "React",
          "Tailwind CSS",
          "Node.js",
          "REST APIs",
        ],
        isExpanded: true,
      },
    ],
  },
]
