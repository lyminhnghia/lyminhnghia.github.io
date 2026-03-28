"use client"

import { DownloadIcon, TriangleDashedIcon, TypeIcon } from "lucide-react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { toast } from "sonner"

import { SOURCE_CODE_GITHUB_URL } from "@/config/site"
import { copyText } from "@/utils/copy"

import { getMarkSVG, SiteMark } from "./site-mark"
import { getWordmarkSVG } from "./site-wordmark"
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "./ui/context-menu"

export function BrandContextMenu({ children }: { children: React.ReactNode }) {
  const { resolvedTheme } = useTheme()

  return (
    <ContextMenu>
      <ContextMenuTrigger asChild>{children}</ContextMenuTrigger>

      <ContextMenuContent className="w-fit">
        <ContextMenuItem
          onClick={() => {
            const svg = getMarkSVG(resolvedTheme === "light" ? "#000" : "#fff")
            copyText(svg)
            toast.success("Mark as SVG copied")
          }}
        >
          <SiteMark />
          Copy Mark as SVG
        </ContextMenuItem>

        <ContextMenuItem
          onClick={() => {
            const svg = getWordmarkSVG(
              resolvedTheme === "light" ? "#000" : "#fff"
            )
            copyText(svg)
            toast.success("Logotype as SVG copied")
          }}
        >
          <TypeIcon />
          Copy Logotype as SVG
        </ContextMenuItem>

        <ContextMenuItem asChild>
          <Link href="/blog/welcome">
            <TriangleDashedIcon />
            About this site
          </Link>
        </ContextMenuItem>

        <ContextMenuItem asChild>
          <a
            href={SOURCE_CODE_GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <DownloadIcon />
            View source on GitHub
          </a>
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  )
}
