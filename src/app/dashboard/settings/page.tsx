"use client"

import { DashboardLayout } from "@/components/dashboard-layout"
import { PageHeader } from "@/components/page-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Settings } from "lucide-react"

export default function SettingsPage() {
  return (
    <DashboardLayout>
      <div className="page-wrap">
        <PageHeader title="Asetukset" description="Sovelluksen asetukset" />

        <Tabs defaultValue="general">
          <TabsList>
            <TabsTrigger value="general">Yleiset</TabsTrigger>
            <TabsTrigger value="security">Turvallisuus</TabsTrigger>
            <TabsTrigger value="billing">Laskutus</TabsTrigger>
          </TabsList>
          <TabsContent value="general">
            <Card className="card-premium">
              <CardHeader>
                <CardTitle className="flex items-center"><Settings className="h-5 w-5 mr-2"/>Yleiset asetukset</CardTitle>
                <CardDescription>Perusasetukset tuotteelle</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="org">Organisaation nimi</Label>
                    <Input id="org" placeholder="Yritys Oy" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="domain">Verkkotunnus</Label>
                    <Input id="domain" placeholder="spektri.fi" />
                  </div>
                </div>
                <Button className="btn-spektri">Tallenna</Button>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="security">
            <Card className="card-premium">
              <CardHeader>
                <CardTitle>Turvallisuus</CardTitle>
                <CardDescription>Kaksivaiheinen tunnistus, API-avaimet</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Turvallisuusasetukset tulevat myöhemmin.</p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="billing">
            <Card className="card-premium">
              <CardHeader>
                <CardTitle>Laskutus</CardTitle>
                <CardDescription>Maksut ja tilaustaso</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Laskutusintegraatio lisätään myöhemmin.</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  )
}
