import type { Registry } from "shadcn/schema"

export const lib: Registry["items"] = [
  {
    name: "utils",
    type: "registry:lib",
    title: "Utility Functions",
    author: "nghia.ly <physicalmeans@gmail.com>",
    dependencies: ["clsx", "tailwind-merge"],
    files: [
      {
        path: "src/lib/utils.ts",
        type: "registry:lib",
      },
    ],
  },
  {
    name: "haptic",
    type: "registry:lib",
    title: "Haptic Feedback",
    author: "nghia.ly <physicalmeans@gmail.com>",
    description: "Trigger haptic feedback on mobile devices.",
    files: [
      {
        path: "lib/haptic/haptic.ts",
        type: "registry:lib",
      },
    ],
  },
]
