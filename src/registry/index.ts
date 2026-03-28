import type { Registry } from "shadcn/schema"

import { blocks } from "./blocks/_registry"
import { components } from "./components/_registry"
import { examples } from "./examples/_registry"
import { hook } from "./hooks/_registry"
import { lib } from "./lib/_registry"
import { styles } from "./styles/_registry"

export const registry = {
  name: "lyminhnghia",
  homepage: "https://lyminhnghia.github.io/components",
  items: [
    ...lib,
    ...hook,
    ...components,
    ...blocks,
    ...styles,

    // Internal use only
    ...examples,
  ],
} satisfies Registry
