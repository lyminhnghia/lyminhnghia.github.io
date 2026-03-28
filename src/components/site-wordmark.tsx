const WORDMARK_FONT =
  'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'

const WORDMARK_FONT_SVG_EXPORT =
  "ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,sans-serif"

const WORDMARK_TEXT = "nghia.ly"

export function SiteWordmark(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 720 256"
      aria-hidden
      {...props}
    >
      <text
        x={360}
        y={172}
        textAnchor="middle"
        fill="currentColor"
        style={{
          fontSize: 112,
          fontWeight: 600,
          fontFamily: WORDMARK_FONT,
        }}
      >
        {WORDMARK_TEXT}
      </text>
    </svg>
  )
}

export function getWordmarkSVG(color: string) {
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 720 256"><text x="360" y="172" text-anchor="middle" fill="${color}" font-size="112" font-weight="600" font-family="${WORDMARK_FONT_SVG_EXPORT}">${WORDMARK_TEXT}</text></svg>`
}
