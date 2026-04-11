import { ExternalLinkIcon } from "lucide-react"

import type { UsesEntry as UsesEntryType } from "@/features/portfolio/types/uses"
import { cn } from "@/lib/utils"

type UsesEntryProps = {
  entry: UsesEntryType
  className?: string
}

export function UsesEntry({ entry, className }: UsesEntryProps) {
  const body = (
    <>
      <div className="flex items-start justify-between gap-2">
        <h3 className="font-medium">{entry.name}</h3>
        {entry.href ? (
          <ExternalLinkIcon
            className="mt-0.5 size-4 shrink-0 text-muted-foreground"
            aria-hidden
          />
        ) : null}
      </div>
      <p className="mt-1 font-mono text-sm text-pretty text-muted-foreground">
        {entry.description}
      </p>
    </>
  )

  if (entry.href) {
    return (
      <a
        href={entry.href}
        target="_blank"
        rel="noopener"
        className={cn(
          "block p-4 transition-[background-color] ease-out hover:bg-accent-muted",
          className
        )}
      >
        {body}
      </a>
    )
  }

  return <div className={cn("p-4", className)}>{body}</div>
}
