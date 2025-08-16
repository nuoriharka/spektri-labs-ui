"use client"

import { DashboardLayout } from "@/components/dashboard-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { formatNumber } from "@/lib/format"
import { useMemo } from "react"
import Link from "next/link"
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
  Users,
  Zap
} from "lucide-react"

// Mock data for agents
const agents = [
  {
    id: "1",
    name: "Asiakaspalvelurobotti",
    description: "Automaattinen asiakaspalvelu 24/7",
    status: "active",
    type: "Asiakaspalvelu",
    tasksCompleted: 1247,
    accuracy: 98.5,
    lastRun: "2 min sitten",
  avatar: ""
  },
  {
    id: "2", 
    name: "Sosiaalisen median manageri",
    description: "Julkaisee sisältöä ja vastaa kommentteihin",
    status: "active",
    type: "Markkinointi",
    tasksCompleted: 892,
    accuracy: 95.2,
    lastRun: "15 min sitten",
  avatar: ""
  },
  {
    id: "3",
    name: "Laskutusautomaatti",
    description: "Käsittelee laskutusta ja maksuja",
    status: "paused",
    type: "Talous",
    tasksCompleted: 543,
    accuracy: 99.1,
    lastRun: "2 tuntia sitten",
  avatar: ""
  },
  {
    id: "4",
    name: "Dataanalytiikka-agentti",
    description: "Analysoi myyntidataa ja luo raportteja",
    status: "error",
    type: "Analytiikka",
    tasksCompleted: 234,
    accuracy: 87.3,
    lastRun: "1 päivä sitten",
  avatar: ""
  }
]

function StatusBadge({ status }: { status: string }) {
  const config = {
    active: { 
      variant: "default" as const, 
      icon: CheckCircle, 
      text: "Aktiivinen",
      className: "bg-green-100 text-green-800 border-green-200 dark:bg-green-900 dark:text-green-300"
    },
    paused: { 
      variant: "secondary" as const, 
      icon: Clock, 
      text: "Pysäytetty",
      className: "bg-yellow-100 text-yellow-800 border-yellow-200 dark:bg-yellow-900 dark:text-yellow-300"
    },
    error: { 
      variant: "destructive" as const, 
      icon: AlertCircle, 
      text: "Virhe",
      className: "bg-red-100 text-red-800 border-red-200 dark:bg-red-900 dark:text-red-300"
    }
  }
  
  const { icon: Icon, text, className } = config[status as keyof typeof config]
  
  return (
    <Badge className={className}>
      <Icon className="w-3 h-3 mr-1" />
      {text}
    </Badge>
  )
}

export default function AgentsPage() {
  const formatInt = useMemo(() => new Intl.NumberFormat("fi-FI"), [])
  return (
    <DashboardLayout>
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        {/* Header */}
        <div className="flex items-center justify-between space-y-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Agentit</h2>
            <p className="text-muted-foreground">
              Hallitse ja seuraa tekoälyagenttejasi
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <Link href="/dashboard/agents/new">
              <Button className="btn-spektri">
                <Plus className="mr-2 h-4 w-4" />
                Uusi agentti
              </Button>
            </Link>
          </div>
        </div>

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
                    <StatusBadge status={agent.status} />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Tyyppi</span>
                    <Badge variant="outline">{agent.type}</Badge>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Tarkkuus</span>
                      <span className="font-medium">{agent.accuracy}%</span>
                    </div>
                    <Progress value={agent.accuracy} className="h-2" />
                  </div>
                  
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Tehtäviä</span>
                    <span className="font-medium">{formatNumber(agent.tasksCompleted, "fi-FI")}</span>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Viimeksi</span>
                    <span className="font-medium">{agent.lastRun}</span>
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
        {agents.length === 0 && (
          <Card className="flex flex-col items-center justify-center p-8 text-center">
            <Bot className="h-12 w-12 text-muted-foreground mb-4" />
            <CardTitle className="mb-2">Ei agentteja vielä</CardTitle>
            <CardDescription className="mb-4">
              Aloita luomalla ensimmäinen tekoälyagenttisi
            </CardDescription>
            <Link href="/dashboard/agents/new">
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Luo ensimmäinen agentti
              </Button>
            </Link>
          </Card>
        )}
      </div>
    </DashboardLayout>
  )
}
