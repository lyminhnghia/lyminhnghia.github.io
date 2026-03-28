"use client"

import { motion, useMotionValue, useSpring } from "motion/react"
import { useId } from "react"

const VIEWBOX_WIDTH = 720
const DEFAULT_GRADIENT_X = 360

const WORDMARK_FONT =
  'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'

export function SiteFooterInteractiveLogotype() {
  const rawId = useId()
  const gradientId = `site-footer-logotype-${rawId.replaceAll(":", "")}`

  const gradientX1Raw = useMotionValue(DEFAULT_GRADIENT_X)
  const gradientX1 = useSpring(gradientX1Raw, {
    stiffness: 200,
    damping: 30,
    mass: 0.5,
  })

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const container = event.currentTarget
    const containerRect = container.getBoundingClientRect()
    const mouseX = event.clientX - containerRect.left
    const containerWidth = containerRect.width

    const normalizedX = (mouseX / containerWidth) * VIEWBOX_WIDTH
    const clampedX = Math.max(0, Math.min(VIEWBOX_WIDTH, normalizedX))

    gradientX1Raw.set(clampedX)
  }

  const handleMouseLeave = () => {
    gradientX1Raw.set(DEFAULT_GRADIENT_X)
  }

  const textStyle: React.CSSProperties = {
    fontSize: 118,
    fontWeight: 600,
    fontFamily: WORDMARK_FONT,
  }

  return (
    <div className="screen-line-bottom after:z-1 after:bg-foreground/10">
      <div
        className="overflow-hidden"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className="flex w-full translate-y-[37.5%] items-center justify-center">
          <svg
            className="container size-full"
            viewBox="0 0 720 258"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="nghia.ly"
          >
            <defs>
              <motion.linearGradient
                id={gradientId}
                x1={gradientX1}
                y1="1"
                x2="360"
                y2="257"
                gradientUnits="userSpaceOnUse"
              >
                <stop
                  offset="0.625"
                  stopColor="var(--foreground)"
                  stopOpacity="0"
                />
                <stop offset="1" stopColor="var(--foreground)" />
              </motion.linearGradient>
            </defs>
            <text
              x={360}
              y={175}
              textAnchor="middle"
              fill="none"
              stroke="currentColor"
              className="stroke-foreground/15"
              strokeWidth={2}
              style={textStyle}
            >
              nghia.ly
            </text>
            <text
              x={360}
              y={175}
              textAnchor="middle"
              fill={`url(#${gradientId})`}
              style={textStyle}
            >
              nghia.ly
            </text>
          </svg>
        </div>
      </div>
    </div>
  )
}
