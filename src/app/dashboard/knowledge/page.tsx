"use client"

import { DashboardLayout } from "@/components/dashboard-layout"
import { PageHeader } from "@/components/page-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain } from "lucide-react"

export default function KnowledgePage() {
  return (
    <DashboardLayout>
      <div className="page-wrap">
        <PageHeader title="Tietopohja" description="Hallinnoi tietolähteitä ja dokumentteja" />

        <Card className="card-premium">
          <CardHeader>
            <CardTitle className="flex items-center"><Brain className="h-5 w-5 mr-2"/>Sisällöt</CardTitle>
            <CardDescription>Lisää tietolähteitä myöhemmin</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-40 rounded-md border bg-muted/30 flex items-center justify-center text-sm text-muted-foreground">
              Placeholder list
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
