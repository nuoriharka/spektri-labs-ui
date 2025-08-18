"use client"

import * as React from "react"
import Link from "next/link"
import { DashboardLayout } from "@/components/dashboard-layout"
import { PageHeader } from "@/components/page-header"
import { Sidebar } from "@/components/sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { formatCurrency, formatNumber } from "@/lib/format"
import { 
  Bot, 
  TrendingUp, 
  Users, 
  Activity,
  ArrowUpRight,
  ArrowDownRight,
  Clock,
  CheckCircle,
  AlertCircle,
  Zap,
  DollarSign,
  BarChart3
} from "lucide-react"
import { ChartAreaInteractive } from "@/components/chart-area-interactive"
import { MoneyBar } from "@/components/money-bar"

const stats = [
  {
  name: "Aktiiviset agentit",
  value: 12,
    change: "+2",
    changeType: "increase",
    icon: Bot,
  },
  {
  name: "Kuukausittaiset tehtävät",
  value: 2847,
  change: "+12 %",
    changeType: "increase", 
    icon: Activity,
  },
  {
  name: "Onnistumisprosentti",
  value: 98.5,
  change: "+0.5 %",
    changeType: "increase",
    icon: CheckCircle,
  },
  {
  name: "Kustannussäästöt",
  value: 12540,
  change: "+8 %",
    changeType: "increase",
    icon: DollarSign,
  },
]

const recentAgents = [
  {
    id: 1,
    name: "Content Creator",
    description: "Generates blog posts and social media content",
    status: "active",
    tasksCompleted: 156,
    successRate: 97,
  },
  {
    id: 2,
    name: "Data Processor",
    description: "Processes and analyzes customer data",
    status: "active",
    tasksCompleted: 89,
    successRate: 100,
  },
  {
    id: 3,
    name: "Email Assistant",
    description: "Manages customer support emails",
    status: "paused",
    tasksCompleted: 234,
    successRate: 95,
  },
  {
    id: 4,
    name: "Social Media Manager",
    description: "Schedules and publishes social media posts",
    status: "active",
    tasksCompleted: 67,
    successRate: 99,
  },
]

const recentActivity = [
  {
    id: 1,
    agent: "Content Creator",
    action: "Generated 5 blog posts",
    time: "2 minutes ago",
    status: "success",
  },
  {
    id: 2,
    agent: "Data Processor",
    action: "Processed 500 customer records",
    time: "15 minutes ago",
    status: "success",
  },
  {
    id: 3,
    agent: "Email Assistant",
    action: "Responded to 12 support tickets",
    time: "1 hour ago",
    status: "success",
  },
  {
    id: 4,
    agent: "Social Media Manager",
    action: "Posted to 3 social platforms",
    time: "2 hours ago",
    status: "warning",
  },
]

export default function DashboardPage() {
  const kpis = [
    { label: "MRR", value: formatCurrency(12540, "EUR", "fi-FI"), delta: "+8 %", intent: "good" as const },
    { label: "Runs 7d", value: formatNumber(2847, "fi-FI"), delta: "+12 %", intent: "good" as const },
    { label: "Success %", value: `${(98.5).toFixed(1)} %`, delta: "+0.5 %", intent: "good" as const },
    { label: "Cost / run", value: "€0.07", delta: "-3 %", intent: "good" as const },
    { label: "Saved h", value: "247h", delta: "+19 %", intent: "good" as const },
  ]
  return (
    <DashboardLayout>
  <div className="page-wrap">
        <PageHeader title="Hallintapaneeli" description="Tervetuloa takaisin Spektri.Labs -alustalle">
          <Badge variant="outline" className="border-green-300/40 bg-green-100/40 text-green-700 dark:bg-green-900/20 dark:text-green-300">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
            Järjestelmä toimii
          </Badge>
          <Link href="/dashboard/agents/new">
            <Button className="btn-spektri">
              <Bot className="mr-2 h-4 w-4" />
              Luo agentti
            </Button>
          </Link>
        </PageHeader>

          <MoneyBar items={kpis} />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Recent Agents */}
            <Card className="card-premium">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Bot className="mr-2 h-5 w-5" />
                  Omat agentit
                </CardTitle>
                <CardDescription>
                  Hallitse ja seuraa tekoälyagenttejasi
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentAgents.map((agent) => (
                    <div key={agent.id} className="flex items-center justify-between p-3 rounded-lg border bg-card dark:bg-muted/30">
                      <div className="flex items-center space-x-3">
                        <div className="h-10 w-10 rounded-lg flex items-center justify-center bg-muted">
                          <Bot className="h-5 w-5 text-[hsl(var(--quantum-blue))]" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">{agent.name}</h4>
                          <p className="text-sm text-gray-500">{agent.description}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge 
                          variant={agent.status === "active" ? "default" : "secondary"}
                          className="mb-1"
                        >
                          {agent.status}
                        </Badge>
                        <p className="text-xs text-muted-foreground">{formatNumber(agent.tasksCompleted, "fi-FI")} tehtävää</p>
                        <p className="text-xs text-muted-foreground">{agent.successRate}% onnistui</p>
                      </div>
                    </div>
                  ))}
                </div>
        <Link href="/dashboard/agents">
                  <Button variant="outline" className="w-full mt-4">
                    Näytä kaikki agentit
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Recent Activity */}
      <Card className="card-premium">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Activity className="mr-2 h-5 w-5" />
                  Viimeaikainen toiminta
                </CardTitle>
                <CardDescription>
                  Viimeisimmät tapahtumat agenteiltasi
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity) => (
                    <div key={activity.id} className="flex items-start space-x-3">
                      <div className={`h-2 w-2 rounded-full mt-2 ${
                        activity.status === "success" ? "bg-green-500" : 
                        activity.status === "warning" ? "bg-yellow-500" : "bg-red-500"
                      }`} />
                      <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-foreground">
                          {activity.agent}
                        </p>
            <p className="text-sm text-muted-foreground">{activity.action}</p>
            <p className="text-xs text-muted-foreground flex items-center mt-1">
                          <Clock className="h-3 w-3 mr-1" />
                          {activity.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <Link href="/dashboard/activity">
                  <Button variant="outline" className="w-full mt-4">
                    Näytä kaikki tapahtumat
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          {/* Performance Chart */}
          <div className="mt-8">
            <ChartAreaInteractive />
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
