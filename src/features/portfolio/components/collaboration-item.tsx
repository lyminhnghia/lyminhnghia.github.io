import { CheckIcon } from "lucide-react"

import type { ServiceOffering } from "@/features/portfolio/types/service-offering"

type CollaborationItemProps = {
  item: ServiceOffering
}

export function CollaborationItem({ item }: CollaborationItemProps) {
  return (
    <article className="screen-line-top screen-line-bottom space-y-3 p-4">
      <h3 className="text-base font-semibold">{item.title}</h3>
      <p className="font-mono text-sm text-muted-foreground">
        {item.description}
      </p>

      <ul className="space-y-2">
        {item.outcomes.map((outcome) => (
          <li key={outcome} className="flex items-start gap-2 text-sm">
            <CheckIcon className="mt-0.5 size-4 text-primary" />
            <span>{outcome}</span>
          </li>
        ))}
      </ul>
    </article>
  )
}
