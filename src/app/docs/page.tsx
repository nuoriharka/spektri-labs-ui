import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BookOpen, Code, Palette, Zap } from "lucide-react"

export default function DocsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Dokumentaatio</h1>
        <p className="text-xl text-muted-foreground">
          Kaikki mitä tarvitset Spektri.Labs UI:n käyttöön
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <Card className="card-premium">
          <CardHeader>
            <CardTitle className="flex items-center">
              <BookOpen className="mr-2 h-5 w-5" />
              Aloita käyttö
            </CardTitle>
            <CardDescription>
              Nopea aloitus Spektri.Labs UI:n käyttöön
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Asennus</h4>
              <div className="bg-muted p-3 rounded-md">
                <code className="text-sm">npm install spektri-labs-ui</code>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Peruskäyttö</h4>
              <div className="bg-muted p-3 rounded-md">
                <code className="text-sm">
                  {`import { Button } from 'spektri-labs-ui'`}
                </code>
              </div>
            </div>
            <Button>Katso koko opas</Button>
          </CardContent>
        </Card>

  <Card className="card-premium">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Code className="mr-2 h-5 w-5" />
              API-viite
            </CardTitle>
            <CardDescription>
              Yksityiskohtaiset komponentti-API:t ja propsit
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Komponenttien propsit</h4>
              <p className="text-sm text-muted-foreground">
                Kaikilla komponenteilla on TypeScript-tyypitykset ja kattava dokumentaatio.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Esimerkit</h4>
              <p className="text-sm text-muted-foreground">
                Jokaisella komponentilla on käyttöesimerkkejä ja koodiesimerkkejä.
              </p>
            </div>
            <Button variant="outline">Selaa API:a</Button>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="card-premium">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Palette className="mr-2 h-5 w-5" />
              Design-järjestelmä
            </CardTitle>
            <CardDescription>
              Väripaletti, typografia ja design-tokenit
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Värit</h4>
              <div className="flex space-x-2">
                <div className="w-8 h-8 bg-purple-500 rounded"></div>
                <div className="w-8 h-8 bg-blue-500 rounded"></div>
                <div className="w-8 h-8 bg-green-500 rounded"></div>
                <div className="w-8 h-8 bg-yellow-500 rounded"></div>
                <div className="w-8 h-8 bg-red-500 rounded"></div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Typografia</h4>
              <div className="space-y-1">
                <p className="text-lg font-bold">Heading Large</p>
                <p className="text-base font-semibold">Heading Medium</p>
                <p className="text-sm">Body Text</p>
                <p className="text-xs text-muted-foreground">Caption</p>
              </div>
            </div>
            <Button variant="outline">Katso design-järjestelmä</Button>
          </CardContent>
        </Card>

  <Card className="card-premium">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Zap className="mr-2 h-5 w-5" />
              Edistynyt käyttö
            </CardTitle>
            <CardDescription>
              Kustomointi, teemat ja edistyneet kuviot
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Teemat</h4>
              <p className="text-sm text-muted-foreground">
                Mukauta värejä, fontteja ja välejä CSS-muuttujilla.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Mukautetut komponentit</h4>
              <p className="text-sm text-muted-foreground">
                Rakenna omia komponentteja design-primitiipeillä.
              </p>
            </div>
            <Button variant="outline">Lue lisää</Button>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8 p-6 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-lg">
        <h2 className="text-2xl font-bold mb-2">Tarvitsetko apua?</h2>
        <p className="text-muted-foreground mb-4">
          Liity yhteisöön tai ota yhteyttä tukeen.
        </p>
        <div className="flex flex-wrap gap-3">
          <Button className="btn-spektri">Liity Discordiin</Button>
          <Button variant="outline">GitHub</Button>
          <Button variant="outline">Ota yhteyttä tukeen</Button>
        </div>
      </div>
    </div>
  )
}
