import { RssIcon } from "lucide-react"

import { Icons } from "@/components/icons"
import { SiteFooterInteractiveLogotype } from "@/components/site-footer-brand"
import {
  GITHUB_USERNAME,
  SITE_INFO,
  SOURCE_CODE_GITHUB_URL,
  UTM_PARAMS,
  X_USERNAME,
} from "@/config/site"
import { cn } from "@/lib/utils"

export function SiteFooter() {
  return (
    <footer className="max-w-screen overflow-x-hidden px-2">
      <div className="screen-line-top mx-auto border-x border-line pt-4 group-has-data-[slot=layout-wide]/layout:container md:max-w-3xl">
        <p className="mb-1 px-4 text-center font-mono text-sm text-balance text-muted-foreground">
          Inspired by tailwindcss.com / ui.shadcn.com / vercel.com
        </p>

        <p className="mb-4 px-4 text-center font-mono text-sm text-balance text-muted-foreground">
          Built by{" "}
          <a
            className="link transition-[color] hover:text-foreground"
            href={`https://github.com/${GITHUB_USERNAME}?utm_source=${UTM_PARAMS.utm_source}`}
            target="_blank"
            rel="noopener"
          >
            {SITE_INFO.name}
          </a>
          . The source code is available on{" "}
          <a
            className="link transition-[color] hover:text-foreground"
            href={SOURCE_CODE_GITHUB_URL}
            target="_blank"
            rel="noopener"
          >
            GitHub
          </a>
          .
        </p>

        <div className="screen-line-top screen-line-bottom flex w-full before:z-1 after:z-1">
          <div className="mx-auto flex items-center justify-center gap-3 border-x border-line bg-background px-4">
            <a
              className="flex font-mono text-xs font-medium text-muted-foreground transition-[color] hover:text-foreground max-sm:hidden"
              href={`${SITE_INFO.url}/llms.txt`}
              target="_blank"
              rel="noopener"
            >
              llms.txt
            </a>

            <Separator className="max-sm:hidden" />

            {X_USERNAME ? (
              <>
                <a
                  className="flex items-center text-muted-foreground transition-[color] hover:text-foreground"
                  href={`https://x.com/${X_USERNAME}?utm_source=${UTM_PARAMS.utm_source}`}
                  target="_blank"
                  rel="noopener"
                >
                  <Icons.x className="size-4" />
                  <span className="sr-only">X</span>
                </a>
                <Separator />
              </>
            ) : null}

            <a
              className="flex items-center text-muted-foreground transition-[color] hover:text-foreground"
              href={`https://github.com/${GITHUB_USERNAME}?utm_source=${UTM_PARAMS.utm_source}`}
              target="_blank"
              rel="noopener"
            >
              <Icons.github className="size-4" />
              <span className="sr-only">GitHub</span>
            </a>

            <Separator />

            <a
              className="flex items-center text-muted-foreground transition-[color] hover:text-foreground"
              href={`${SITE_INFO.url}/rss`}
              target="_blank"
              rel="noopener"
            >
              <RssIcon className="size-4" />
              <span className="sr-only">RSS</span>
            </a>

            <Separator />

            <a
              className="flex text-muted-foreground transition-[color] hover:text-foreground"
              href={
                process.env.NEXT_PUBLIC_DMCA_URL ||
                "https://www.dmca.com/ProtectionPro.aspx"
              }
              target="_blank"
              rel="noopener"
            >
              <Icons.dmca className="h-4.5 w-auto" />
              <span className="sr-only">DMCA.com Protection Status</span>
            </a>
          </div>
        </div>
      </div>

      <SiteFooterInteractiveLogotype />

      <div className="pb-[env(safe-area-inset-bottom,0px)]">
        <div className="flex h-16 sm:h-2" />
      </div>
    </footer>
  )
}

function Separator({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn("flex h-11 w-px bg-line", className)} {...props} />
}
