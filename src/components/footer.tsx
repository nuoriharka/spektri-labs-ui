"use client"

import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t bg-background/60 backdrop-blur supports-[backdrop-filter]:bg-background/40">
      <div className="container mx-auto px-4 py-10 grid gap-8 md:grid-cols-4">
        <div>
          <div className="text-lg font-semibold">Spektri.Labs</div>
          <p className="text-sm text-muted-foreground mt-2">Maaginen yksinkertaisuus. Ammattilaisille suunniteltu.</p>
          <p className="text-xs text-muted-foreground mt-4">© {new Date().getFullYear()} Spektri.Labs</p>
        </div>
        <nav className="text-sm grid gap-2">
          <div className="text-xs uppercase tracking-wider text-muted-foreground">Tuote</div>
          <Link href="/components" className="text-muted-foreground hover:text-foreground">Komponentit</Link>
          <Link href="/examples" className="text-muted-foreground hover:text-foreground">Esimerkit</Link>
          <Link href="/docs" className="text-muted-foreground hover:text-foreground">Dokumentaatio</Link>
        </nav>
        <nav className="text-sm grid gap-2">
          <div className="text-xs uppercase tracking-wider text-muted-foreground">Resurssit</div>
          <Link href="/dashboard" className="text-muted-foreground hover:text-foreground">Hallintapaneeli</Link>
          <Link href="#" className="text-muted-foreground hover:text-foreground">Yksityisyys</Link>
          <Link href="#" className="text-muted-foreground hover:text-foreground">Käyttöehdot</Link>
        </nav>
        <div className="text-sm text-muted-foreground md:text-right">
          <p>Rakennettu shadcn/ui-komponenteilla.</p>
          <div className="mt-3 inline-flex gap-2">
            <span className="h-8 w-8 rounded bg-muted inline-block" />
            <span className="h-8 w-8 rounded bg-muted inline-block" />
            <span className="h-8 w-8 rounded bg-muted inline-block" />
          </div>
        </div>
      </div>
    </footer>
  )
}
