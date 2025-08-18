"use client"

import { DashboardLayout } from "@/components/dashboard-layout"
import { PageHeader } from "@/components/page-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Globe } from "lucide-react"

export default function IntegrationsPage() {
  return (
    <DashboardLayout>
      <div className="page-wrap">
        <PageHeader title="Integraatiot" description="Yhdistä ulkoiset palvelut" />

        <Card className="card-premium">
          <CardHeader>
            <CardTitle className="flex items-center"><Globe className="h-5 w-5 mr-2"/>Käytettävissä olevat integraatiot</CardTitle>
            <CardDescription>Integraatioiden katalogi tulossa</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-40 rounded-md border bg-muted/30 flex items-center justify-center text-sm text-muted-foreground">
              Placeholder grid
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
