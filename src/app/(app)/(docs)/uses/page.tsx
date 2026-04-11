import type { Metadata } from "next"

import { X_USERNAME } from "@/config/site"
import { UsesEntry } from "@/features/portfolio/components/uses/uses-entry"
import {
  USES_CATEGORIES,
  USES_PAGE_INTRO,
} from "@/features/portfolio/data/uses"
import { cn } from "@/lib/utils"

const title = "Uses"
const description = USES_PAGE_INTRO

const ogImage = `/og/simple?title=${encodeURIComponent(title)}&description=${encodeURIComponent(description.slice(0, 120))}`

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/uses",
  },
  openGraph: {
    url: "/uses",
    type: "website",
    images: {
      url: ogImage,
      width: 1200,
      height: 630,
      alt: title,
    },
  },
  twitter: {
    card: "summary_large_image",
    site: X_USERNAME,
    creator: X_USERNAME,
    images: [ogImage],
  },
}

export default function UsesPage() {
  return (
    <div className="min-h-svh">
      <div className="screen-line-bottom px-4">
        <h1 className="text-3xl font-semibold tracking-tight">{title}</h1>
      </div>

      <div className="p-4">
        <p className="max-w-prose font-mono text-sm text-balance text-muted-foreground">
          {description}
        </p>
      </div>

      <div className="space-y-10 pb-8">
        {USES_CATEGORIES.map((category) => (
          <section key={category.title} className="screen-line-top">
            <h2 className="screen-line-bottom px-4 py-3 text-lg font-semibold tracking-tight">
              {category.title}
            </h2>

            <div className="relative pt-4">
              <div className="pointer-events-none absolute inset-0 -z-1 grid grid-cols-1 gap-4 max-sm:hidden sm:grid-cols-2">
                <div className="border-r border-line" />
                <div className="border-l border-line" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2">
                {category.entries.map((entry) => (
                  <UsesEntry
                    key={entry.name}
                    entry={entry}
                    className={cn(
                      "max-sm:screen-line-top max-sm:screen-line-bottom",
                      "sm:nth-[2n+1]:screen-line-top sm:nth-[2n+1]:screen-line-bottom"
                    )}
                  />
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}
