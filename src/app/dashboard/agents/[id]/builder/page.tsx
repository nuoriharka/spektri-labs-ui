"use client"

import { DashboardLayout } from "@/components/dashboard-layout"
import { PageHeader } from "@/components/page-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { LeftChat } from "@/components/builder/LeftChat"
import { RightVisual } from "@/components/builder/RightVisual"

export default function AgentBuilderPage({ params }: { params: { id: string } }) {
  return (
    <DashboardLayout>
      <div className="page-wrap">
        <PageHeader title={`Builder · ${params.id}`} description="Split-view editor" />
        <Card className="card-premium">
          <CardHeader>
            <CardTitle>Rakenna</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 min-h-[420px]">
              <LeftChat />
              <RightVisual />
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
