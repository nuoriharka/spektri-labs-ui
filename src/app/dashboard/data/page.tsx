"use client"

import { DashboardLayout } from "@/components/dashboard-layout"
import { PageHeader } from "@/components/page-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Database } from "lucide-react"

export default function DataSourcesPage() {
  return (
    <DashboardLayout>
      <div className="page-wrap">
        <PageHeader title="Datalähteet" description="Yhdistä ja hallinnoi datalähteitä" />

        <Card className="card-premium">
          <CardHeader>
            <CardTitle className="flex items-center"><Database className="h-5 w-5 mr-2"/>Lähteet</CardTitle>
            <CardDescription>Lista datalähteistä tulossa</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-40 rounded-md border bg-muted/30 flex items-center justify-center text-sm text-muted-foreground">
              Placeholder data sources
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
