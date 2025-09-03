import Link from 'next/link'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/layout/ThemeToggle'
import { Logo } from '@/components/brand/Logo'

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Logo />
          <span className="hidden font-bold sm:inline-block">
            Spektri.Labs
          </span>
        </Link>
        <nav className="flex flex-1 items-center space-x-6 text-sm font-medium">
          <Link
            href="/docs"
            className="text-foreground/60 transition-colors hover:text-foreground/80"
          >
            Dokumentaatio
          </Link>
          <Link
            href="/#features"
            className="text-foreground/60 transition-colors hover:text-foreground/80"
          >
            Ominaisuudet
          </Link>
          <Link
            href="/about"
            className="text-foreground/60 transition-colors hover:text-foreground/80"
          >
            Tietoa
          </Link>
        </nav>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <ThemeToggle />
          <Button asChild>
            <Link href="/login">Kirjaudu sisään</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
