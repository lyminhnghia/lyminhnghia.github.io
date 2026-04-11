export type UsesEntry = {
  name: string
  description: string
  href?: string
}

export type UsesCategory = {
  title: string
  entries: UsesEntry[]
}
