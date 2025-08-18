"use client"

import useSWR from "swr"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Button } from "@/components/ui/button"
import { PageHeader } from "@/components/page-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { formatNumber } from "@/lib/format"
import { useMemo } from "react"
import Link from "next/link"
import { InlineHint } from "@/components/inline-hint"
import { StatusBadge } from "@/components/status-badge"
import { EmptyState } from "@/components/empty-state"
import { 
  Bot, 
  Plus, 
  Search, 
  Filter, 
  MoreVertical, 
  Play, 
  Pause, 
  Settings, 
  Activity,
  Clock,
  CheckCircle,
  AlertCircle,
  TrendingUp,
  Zap
} from "lucide-react"

type Agent = {
  id: string
  name: string
  description?: string
  status?: "active" | "paused" | "error"
  type?: string
  tasksCompleted?: number
  accuracy?: number
  lastRun?: string
}

const fetcher = (url: string) => fetch(url).then((r) => r.json())

// using shared StatusBadge

export default function AgentsPage() {
  const formatInt = useMemo(() => new Intl.NumberFormat("fi-FI"), [])
  const { data, error, isLoading, mutate } = useSWR<Agent[]>("/api/agents", fetcher)
  const agents = data ?? []
  return (
    <DashboardLayout>
  <div className="page-wrap">
        <PageHeader title="Agentit" description="Hallitse ja seuraa tekoälyagenttejasi">
          <Link href="/dashboard/agents/new">
            <Button className="btn-spektri">
              <Plus className="mr-2 h-4 w-4" />
              Uusi agentti
            </Button>
          </Link>
        </PageHeader>

        <InlineHint
          action={(
            <Link href="/dashboard/templates">
              <Button size="sm" variant="outline">Avaa pohjat</Button>
            </Link>
          )}
        >
          Vinkki: Aloita nopeammin valmiista pohjista.
        </InlineHint>

        {/* Stats Cards */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card className="card-premium">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Aktiivisia agentteja
              </CardTitle>
              <Activity className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2</div>
              <p className="text-xs text-muted-foreground">
                +1 viime kuukaudesta
              </p>
            </CardContent>
          </Card>
          
          <Card className="card-premium">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Suoritettuja tehtäviä
              </CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2,916</div>
              <p className="text-xs text-muted-foreground">
                +20.1% viime kuukaudesta
              </p>
            </CardContent>
          </Card>
          
          <Card className="card-premium">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Keskimääräinen tarkkuus
              </CardTitle>
              <Bot className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">95.0%</div>
              <p className="text-xs text-muted-foreground">
                +2.1% viime kuukaudesta
              </p>
            </CardContent>
          </Card>
          
          <Card className="card-premium">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Säästetty aikaa
              </CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">247h</div>
              <p className="text-xs text-muted-foreground">
                +19% viime kuukaudesta
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Search and Filter */}
        <div className="flex items-center space-x-2">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Hae agentteja..." className="pl-8" />
          </div>
          <Button variant="outline" size="sm">
            <Filter className="mr-2 h-4 w-4" />
            Suodata
          </Button>
        </div>

        {/* Agents Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {isLoading && (
            <Card className="p-6">Ladataan agentteja…</Card>
          )}
          {error && (
            <Card className="p-6 text-destructive">Virhe ladattaessa agentteja</Card>
          )}
          {agents.map((agent) => (
            <Card key={agent.id} className="relative group hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <Avatar>
                      {/* In real app, use AvatarImage with src. Here we show initials */}
                      <AvatarFallback className="text-xs font-medium bg-muted">{
                        agent.name
                          .split(" ")
                          .map((n) => n[0])
                          .slice(0, 2)
                          .join("")
                      }</AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                      <CardTitle className="text-base">{agent.name}</CardTitle>
                      <CardDescription className="text-sm">
                        {agent.description}
                      </CardDescription>
                    </div>
                  </div>
                  <Button variant="ghost" className="h-8 w-8 p-0">
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Status</span>
                    <div className="flex items-center gap-2">
                      <StatusBadge status={agent.status || "active"} />
                      <Button size="icon" variant="ghost" aria-label="Vaihda tila" onClick={async ()=>{
                        const next = agent.status === 'paused' ? 'active' : 'paused'
                        const prev = agent.status
                        // optimistic
                        await mutate((prevList)=> prevList?.map(a=> a.id===agent.id ? { ...a, status: next } : a), { revalidate: false })
                        try {
                          await fetch(`/api/agents/${agent.id}`, { method: 'PUT', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ status: next }) })
                          await mutate()
                        } catch {
                          // rollback
                          await mutate((prevList)=> prevList?.map(a=> a.id===agent.id ? { ...a, status: prev } : a), { revalidate: false })
                        }
                      }}>
                        {agent.status === 'paused' ? <Play className="h-4 w-4"/> : <Pause className="h-4 w-4"/>}
                      </Button>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Tyyppi</span>
                    <Badge variant="outline">{agent.type || "-"}</Badge>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Tarkkuus</span>
                      <span className="font-medium">{(agent.accuracy ?? 0)}%</span>
                    </div>
                    <Progress value={agent.accuracy ?? 0} className="h-2" />
                  </div>
                  
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Tehtäviä</span>
                    <span className="font-medium">{formatNumber(agent.tasksCompleted ?? 0, "fi-FI")}</span>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Viimeksi</span>
                    <span className="font-medium">{agent.lastRun || "-"}</span>
                  </div>
                  
                  <div className="pt-2">
                    <Link href={`/dashboard/agents/${agent.id}`}>
                      <Button className="w-full" size="sm">
                        Näytä yksityiskohdat
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {!isLoading && !error && agents.length === 0 && (
          <EmptyState
            title="Ei agentteja vielä"
            description="Aloita luomalla ensimmäinen tekoälyagenttisi"
            icon={<Bot className="h-12 w-12" />}
            action={(
              <Link href="/dashboard/agents/new">
                <Button>
                  <Plus className="mr-2 h-4 w-4" /> Luo ensimmäinen agentti
                </Button>
              </Link>
            )}
          />
        )}
      </div>
    </DashboardLayout>
  )
}
