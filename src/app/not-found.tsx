import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="mx-auto mb-6 h-16 w-16 rounded-2xl bg-muted flex items-center justify-center">
          <span className="text-2xl font-bold text-[hsl(var(--spektri-violet))]">404</span>
        </div>
        <h1 className="text-3xl font-bold mb-2">Sivua ei löytynyt</h1>
        <p className="text-muted-foreground mb-6">Etsimääsi sivua ei ole olemassa tai se on siirretty.</p>
        <Link href="/">
          <Button className="btn-spektri">Palaa etusivulle</Button>
        </Link>
      </div>
    </div>
  )
}
