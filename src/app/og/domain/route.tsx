export const dynamic = "force-static"

export async function GET(request: Request) {
  if (process.env.PAGES_BASE_PATH !== undefined) {
    const { GET: getStatic } = await import("./domain-og-static")
    return getStatic()
  }
  const { GET: getDynamic } = await import("./domain-og-dynamic")
  return getDynamic(request)
}
