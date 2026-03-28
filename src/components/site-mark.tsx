const MARK_FONT =
  'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'

/** Simplified stack for clipboard SVG (no nested quotes in attribute). */
const MARK_FONT_SVG_EXPORT =
  "ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,sans-serif"

export function SiteMark(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 512 256"
      aria-hidden
      {...props}
    >
      <text
        x={256}
        y={172}
        textAnchor="middle"
        fill="currentColor"
        style={{
          fontSize: 140,
          fontWeight: 700,
          fontFamily: MARK_FONT,
        }}
      >
        N
      </text>
    </svg>
  )
}

export function getMarkSVG(color: string) {
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 512 256"><text x="256" y="172" text-anchor="middle" fill="${color}" font-size="140" font-weight="700" font-family="${MARK_FONT_SVG_EXPORT}">N</text></svg>`
}
