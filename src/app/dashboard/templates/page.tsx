"use client"

import Link from "next/link"
import { DashboardLayout } from "@/components/dashboard-layout"
import { PageHeader } from "@/components/page-header"
import { TemplateCard, Template } from "@/components/template-card"
import { Button } from "@/components/ui/button"

const templates: Template[] = [
  { id: "content-writer", name: "Content Writer", description: "Kirjoita blogeja ja postauksia", category: "Marketing" },
  { id: "support-bot", name: "Support Bot", description: "Vastaa tukipyyntöihin", category: "Support" },
  { id: "data-summarizer", name: "Data Summarizer", description: "Tiivistää dokumentteja", category: "Data" },
]

export default function TemplatesPage() {
  return (
    <DashboardLayout>
      <div className="page-wrap">
        <PageHeader title="Pohjat" description="Aloita nopeasti valmiilla malleilla">
          <Link href="/dashboard/agents/new">
            <Button>Luo agentti</Button>
          </Link>
        </PageHeader>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {templates.map((t) => (
            <TemplateCard key={t.id} template={t} />
          ))}
        </div>
      </div>
    </DashboardLayout>
  )
}
