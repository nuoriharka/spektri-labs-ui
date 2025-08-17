"use client"

import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Database } from "lucide-react"

export default function DataSourcesPage() {
  return (
    <DashboardLayout>
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Datalähteet</h2>
            <p className="text-muted-foreground">Yhdistä ja hallinnoi datalähteitä</p>
          </div>
        </div>

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
