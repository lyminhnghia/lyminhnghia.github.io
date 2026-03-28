export const dynamic = "force-static"

export async function GET(request: Request) {
  if (process.env.PAGES_BASE_PATH !== undefined) {
    const { GET: getStatic } = await import("./simple-og-static")
    return getStatic()
  }
  const { GET: getDynamic } = await import("./simple-og-dynamic")
  return getDynamic(request)
}
