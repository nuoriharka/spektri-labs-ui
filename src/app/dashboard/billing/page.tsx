"use client"

import { DashboardLayout } from "@/components/dashboard-layout"
import { PageHeader } from "@/components/page-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CreditCard } from "lucide-react"

export default function BillingPage() {
  return (
    <DashboardLayout>
      <div className="page-wrap">
        <PageHeader title="Laskutus" description="Tilaukset ja maksut" />

        <Card className="card-premium">
          <CardHeader>
            <CardTitle className="flex items-center"><CreditCard className="h-5 w-5 mr-2"/>Yleiskatsaus</CardTitle>
            <CardDescription>Liitä maksupalvelu myöhemmin</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-40 rounded-md border bg-muted/30 flex items-center justify-center text-sm text-muted-foreground">
              Placeholder billing info
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
