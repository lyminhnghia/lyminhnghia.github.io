import { CodeXmlIcon } from "lucide-react"

import type { ExperienceItemType } from "@/registry/components/work-experience"
import { WorkExperience } from "@/registry/components/work-experience"

export default function WorkExperienceDemo() {
  return <WorkExperience className="w-full" experiences={WORK_EXPERIENCE} />
}

const WORK_EXPERIENCE: ExperienceItemType[] = [
  {
    id: "independent",
    companyName: "Independent",
    companyLogo: "https://github.com/lyminhnghia.png",
    companyWebsite: "https://lyminhnghia.github.io",
    positions: [
      {
        id: "1",
        title: "Full-Stack Software Engineer",
        employmentPeriod: {
          start: "01.2025",
        },
        employmentType: "Full-time",
        icon: <CodeXmlIcon />,
        description: `- Ship and maintain this portfolio: Next.js, TypeScript, Tailwind CSS, MDX, and a shadcn-based component registry.
- Focus on maintainable systems, clear APIs, and thoughtful interfaces.`,
        skills: [
          "TypeScript",
          "Next.js",
          "React",
          "Tailwind CSS",
          "Node.js",
          "REST APIs",
        ],
      },
    ],
    isCurrentEmployer: true,
  },
]
