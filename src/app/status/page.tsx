export const dynamic = 'force-dynamic'

export default function StatusPage() {
  return (
    <main className="container mx-auto px-4 py-10">
      <h1 className="text-2xl font-semibold mb-4">Sovelluksen tila</h1>
      <ul className="text-sm text-muted-foreground space-y-2">
        <li>API: <a className="underline" href="/api/health">/api/health</a></li>
        <li>Robots: <a className="underline" href="/robots.txt">/robots.txt</a></li>
        <li>Sitemap: <a className="underline" href="/sitemap.xml">/sitemap.xml</a></li>
      </ul>
    </main>
  )
}
