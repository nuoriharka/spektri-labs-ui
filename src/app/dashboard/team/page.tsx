"use client"

import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Users } from "lucide-react"

export default function TeamPage() {
  return (
    <DashboardLayout>
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Tiimi</h2>
            <p className="text-muted-foreground">Käyttäjät ja roolit</p>
          </div>
        </div>

        <Card className="card-premium">
          <CardHeader>
            <CardTitle className="flex items-center"><Users className="h-5 w-5 mr-2"/>Jäsenet</CardTitle>
            <CardDescription>Lisää tiimin hallinta myöhemmin</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-40 rounded-md border bg-muted/30 flex items-center justify-center text-sm text-muted-foreground">
              Placeholder table
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
