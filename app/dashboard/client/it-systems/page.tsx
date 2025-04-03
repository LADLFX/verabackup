"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { PingLatencyMonitor } from "@/components/ping-latency-monitor"
import { AIChatAssistant } from "@/components/ai-chat-assistant"
import {
  Wifi,
  Phone,
  Server,
  HardDrive,
  Printer,
  Smartphone,
  Globe,
  AlertTriangle,
  CheckCircle,
  Clock,
  RefreshCw,
  Pause,
  BarChart,
  ArrowUpRight,
  ArrowDownRight,
  Activity,
  Plus,
} from "lucide-react"

// Dummy data for systems
const systems = [
  {
    id: 1,
    name: "Office Broadband",
    type: "network",
    status: "online",
    uptime: "99.8%",
    lastIssue: "3 days ago",
    details: {
      provider: "Fiber Connect",
      speed: "1 Gbps",
      ipAddress: "192.168.1.1",
      lastReboot: "Oct 10, 2023",
    },
    metrics: [
      { time: "9:00", value: 45 },
      { time: "10:00", value: 52 },
      { time: "11:00", value: 49 },
      { time: "12:00", value: 65 },
      { time: "13:00", value: 59 },
      { time: "14:00", value: 48 },
      { time: "15:00", value: 56 },
    ],
  },
  {
    id: 2,
    name: "VoIP Phone System",
    type: "phone",
    status: "issue",
    uptime: "97.2%",
    lastIssue: "Current",
    details: {
      provider: "CloudTalk",
      extensions: "15",
      callVolume: "250/day",
      lastMaintenance: "Oct 5, 2023",
    },
    metrics: [
      { time: "9:00", value: 28 },
      { time: "10:00", value: 42 },
      { time: "11:00", value: 38 },
      { time: "12:00", value: 25 },
      { time: "13:00", value: 30 },
      { time: "14:00", value: 35 },
      { time: "15:00", value: 32 },
    ],
  },
  {
    id: 3,
    name: "Main Server",
    type: "server",
    status: "online",
    uptime: "99.9%",
    lastIssue: "2 weeks ago",
    details: {
      model: "Dell PowerEdge R740",
      os: "Windows Server 2022",
      cpu: "Intel Xeon Gold 6248R",
      memory: "128GB",
      storage: "4TB SSD RAID",
    },
    metrics: [
      { time: "9:00", value: 65 },
      { time: "10:00", value: 72 },
      { time: "11:00", value: 78 },
      { time: "12:00", value: 85 },
      { time: "13:00", value: 80 },
      { time: "14:00", value: 75 },
      { time: "15:00", value: 70 },
    ],
  },
  {
    id: 4,
    name: "Cloud Storage",
    type: "storage",
    status: "online",
    uptime: "99.95%",
    lastIssue: "1 month ago",
    details: {
      provider: "AWS S3",
      capacity: "5TB",
      used: "3.2TB",
      backupSchedule: "Daily at midnight",
    },
    metrics: [
      { time: "9:00", value: 40 },
      { time: "10:00", value: 42 },
      { time: "11:00", value: 45 },
      { time: "12:00", value: 44 },
      { time: "13:00", value: 46 },
      { time: "14:00", value: 48 },
      { time: "15:00", value: 50 },
    ],
  },
  {
    id: 5,
    name: "Office Printers",
    type: "printer",
    status: "warning",
    uptime: "98.5%",
    lastIssue: "Yesterday",
    details: {
      model: "HP LaserJet Pro M428fdw",
      count: "3",
      location: "Main Office",
      issue: "Low toner on 2nd floor printer",
    },
    metrics: [
      { time: "9:00", value: 15 },
      { time: "10:00", value: 22 },
      { time: "11:00", value: 18 },
      { time: "12:00", value: 25 },
      { time: "13:00", value: 20 },
      { time: "14:00", value: 15 },
      { time: "15:00", value: 10 },
    ],
  },
  {
    id: 6,
    name: "Mobile Devices",
    type: "mobile",
    status: "online",
    uptime: "99.7%",
    lastIssue: "1 week ago",
    details: {
      count: "24",
      platforms: "iOS, Android",
      mdm: "Microsoft Intune",
      lastUpdate: "Oct 12, 2023",
    },
    metrics: [
      { time: "9:00", value: 60 },
      { time: "10:00", value: 65 },
      { time: "11:00", value: 70 },
      { time: "12:00", value: 75 },
      { time: "13:00", value: 72 },
      { time: "14:00", value: 68 },
      { time: "15:00", value: 65 },
    ],
  },
]

// Dummy data for integrations
const integrations = [
  {
    id: 1,
    name: "CRM System",
    status: "connected",
    lastSync: "10 minutes ago",
    dataPoints: ["Contacts", "Deals", "Activities"],
  },
  {
    id: 2,
    name: "Email Platform",
    status: "connected",
    lastSync: "5 minutes ago",
    dataPoints: ["Inbox", "Sent Items", "Drafts"],
  },
  {
    id: 3,
    name: "Calendar",
    status: "connected",
    lastSync: "15 minutes ago",
    dataPoints: ["Appointments", "Meetings", "Reminders"],
  },
  {
    id: 4,
    name: "Document Storage",
    status: "connected",
    lastSync: "30 minutes ago",
    dataPoints: ["Files", "Folders", "Shared Items"],
  },
  {
    id: 5,
    name: "Accounting Software",
    status: "issue",
    lastSync: "Failed 2 hours ago",
    dataPoints: ["Invoices", "Expenses", "Reports"],
  },
]

// Dummy data for alerts
const alerts = [
  {
    id: 1,
    system: "VoIP Phone System",
    message: "Intermittent call quality issues detected",
    severity: "warning",
    time: "Today, 10:15 AM",
    status: "active",
  },
  {
    id: 2,
    system: "Office Printers",
    message: "2nd floor printer low on toner (10% remaining)",
    severity: "info",
    time: "Yesterday, 3:30 PM",
    status: "active",
  },
  {
    id: 3,
    system: "Accounting Software",
    message: "API connection failed - authentication error",
    severity: "error",
    time: "Today, 8:45 AM",
    status: "active",
  },
  {
    id: 4,
    system: "Main Server",
    message: "High CPU usage detected (85%)",
    severity: "warning",
    time: "Today, 11:20 AM",
    status: "resolved",
  },
  {
    id: 5,
    system: "Office Broadband",
    message: "Brief connectivity interruption detected",
    severity: "warning",
    time: "3 days ago",
    status: "resolved",
  },
]

export default function ITSystemsPage() {
  const [selectedSystem, setSelectedSystem] = useState<any>(null)
  const [activeAlerts, setActiveAlerts] = useState(alerts.filter((alert) => alert.status === "active"))

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "online":
        return <CheckCircle className="h-5 w-5 text-green-500" />
      case "warning":
        return <Clock className="h-5 w-5 text-amber-500" />
      case "issue":
        return <AlertTriangle className="h-5 w-5 text-red-500" />
      default:
        return <CheckCircle className="h-5 w-5 text-green-500" />
    }
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "network":
        return <Wifi className="h-5 w-5" />
      case "phone":
        return <Phone className="h-5 w-5" />
      case "server":
        return <Server className="h-5 w-5" />
      case "storage":
        return <HardDrive className="h-5 w-5" />
      case "printer":
        return <Printer className="h-5 w-5" />
      case "mobile":
        return <Smartphone className="h-5 w-5" />
      default:
        return <Globe className="h-5 w-5" />
    }
  }

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "info":
        return "bg-blue-100 text-blue-800"
      case "warning":
        return "bg-amber-100 text-amber-800"
      case "error":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const resolveAlert = (alertId: number) => {
    setActiveAlerts(activeAlerts.filter((alert) => alert.id !== alertId))
  }

  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      <div className="flex flex-1 flex-col">
        <main className="flex-1 p-4 md:p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-[#0F4342]">IT Systems Hub</h1>
            <p className="text-gray-500">Monitor your technology infrastructure and integrations</p>
          </div>

          <div className="mb-6 grid gap-4 md:grid-cols-4">
            <Card>
              <CardContent className="p-4 flex flex-col items-center justify-center">
                <div className="rounded-full bg-green-100 p-3 mb-2">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
                <div className="text-2xl font-bold">4</div>
                <div className="text-sm text-gray-500">Systems Online</div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4 flex flex-col items-center justify-center">
                <div className="rounded-full bg-amber-100 p-3 mb-2">
                  <Clock className="h-6 w-6 text-amber-600" />
                </div>
                <div className="text-2xl font-bold">1</div>
                <div className="text-sm text-gray-500">Systems with Warnings</div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4 flex flex-col items-center justify-center">
                <div className="rounded-full bg-red-100 p-3 mb-2">
                  <AlertTriangle className="h-6 w-6 text-red-600" />
                </div>
                <div className="text-2xl font-bold">1</div>
                <div className="text-sm text-gray-500">Systems with Issues</div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4 flex flex-col items-center justify-center">
                <div className="rounded-full bg-blue-100 p-3 mb-2">
                  <Activity className="h-6 w-6 text-blue-600" />
                </div>
                <div className="text-2xl font-bold">99.2%</div>
                <div className="text-sm text-gray-500">Overall Uptime</div>
              </CardContent>
            </Card>
          </div>

          <div className="mb-6">
            <PingLatencyMonitor />
          </div>

          <Tabs defaultValue="systems" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="systems">Systems</TabsTrigger>
              <TabsTrigger value="integrations">Vera Integrations</TabsTrigger>
              <TabsTrigger value="alerts">Alerts & Notifications</TabsTrigger>
            </TabsList>

            <TabsContent value="systems" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {systems.map((system) => (
                  <Card key={system.id} className="overflow-hidden">
                    <CardHeader className="pb-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div
                            className={`mr-2 rounded-full p-1.5 ${
                              system.status === "online"
                                ? "bg-green-100"
                                : system.status === "warning"
                                  ? "bg-amber-100"
                                  : "bg-red-100"
                            }`}
                          >
                            {getTypeIcon(system.type)}
                          </div>
                          <CardTitle className="text-lg">{system.name}</CardTitle>
                        </div>
                        {getStatusIcon(system.status)}
                      </div>
                      <CardDescription>
                        {system.status === "online"
                          ? "Operating normally"
                          : system.status === "warning"
                            ? "Minor issues detected"
                            : "Service disruption"}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pb-2">
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-500">Uptime:</span>
                          <span className="font-medium">{system.uptime}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-500">Last Issue:</span>
                          <span className="font-medium">{system.lastIssue}</span>
                        </div>
                      </div>

                      <div className="mt-4 h-24">
                        <div className="flex items-center justify-between text-xs mb-2">
                          <span>Usage Trend (Today)</span>
                          <div className="flex items-center">
                            {system.metrics[system.metrics.length - 1].value > system.metrics[0].value ? (
                              <>
                                <ArrowUpRight className="h-3 w-3 text-green-500 mr-1" />
                                <span className="text-green-500">
                                  {Math.round(
                                    ((system.metrics[system.metrics.length - 1].value - system.metrics[0].value) /
                                      system.metrics[0].value) *
                                      100,
                                  )}
                                  %
                                </span>
                              </>
                            ) : (
                              <>
                                <ArrowDownRight className="h-3 w-3 text-red-500 mr-1" />
                                <span className="text-red-500">
                                  {Math.round(
                                    ((system.metrics[0].value - system.metrics[system.metrics.length - 1].value) /
                                      system.metrics[0].value) *
                                      100,
                                  )}
                                  %
                                </span>
                              </>
                            )}
                          </div>
                        </div>
                        <div className="flex h-16 items-end space-x-1">
                          {system.metrics.map((metric, index) => (
                            <div
                              key={index}
                              className="flex-1 bg-[#0F4342] opacity-80 rounded-t"
                              style={{ height: `${metric.value}%` }}
                            ></div>
                          ))}
                        </div>
                        <div className="flex justify-between text-xs text-gray-400 mt-1">
                          <span>{system.metrics[0].time}</span>
                          <span>{system.metrics[system.metrics.length - 1].time}</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full" onClick={() => setSelectedSystem(system)}>
                        View Details
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="integrations" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Connected Tools</CardTitle>
                    <CardDescription>Systems and services integrated with Vera AI</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {integrations.map((integration) => (
                        <div key={integration.id} className="rounded-lg border p-4">
                          <div className="flex items-center justify-between">
                            <h3 className="font-medium">{integration.name}</h3>
                            <Badge className={integration.status === "connected" ? "bg-green-500" : "bg-red-500"}>
                              {integration.status.charAt(0).toUpperCase() + integration.status.slice(1)}
                            </Badge>
                          </div>
                          <div className="mt-2 text-sm text-gray-500">Last synchronized: {integration.lastSync}</div>
                          <div className="mt-3 flex flex-wrap gap-2">
                            {integration.dataPoints.map((dataPoint, index) => (
                              <Badge key={index} variant="outline">
                                {dataPoint}
                              </Badge>
                            ))}
                          </div>
                          <div className="mt-4 flex justify-end">
                            <Button variant="outline" size="sm">
                              <RefreshCw className="mr-2 h-3 w-3" />
                              Sync Now
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Suggested Integrations</CardTitle>
                      <CardDescription>Tools Vera AI recommends connecting for enhanced functionality</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="rounded-lg border p-4">
                          <div className="flex items-center">
                            <div className="mr-3 rounded-full bg-blue-100 p-2">
                              <Globe className="h-4 w-4 text-blue-700" />
                            </div>
                            <div>
                              <h3 className="font-medium">Website Analytics</h3>
                              <p className="text-sm text-gray-500">
                                Connect your website analytics to track visitor behavior
                              </p>
                            </div>
                          </div>
                          <Button className="mt-3 w-full bg-[#DBCA91] text-[#0F4342] hover:bg-[#c9b87e]">
                            Connect
                          </Button>
                        </div>

                        <div className="rounded-lg border p-4">
                          <div className="flex items-center">
                            <div className="mr-3 rounded-full bg-purple-100 p-2">
                              <BarChart className="h-4 w-4 text-purple-700" />
                            </div>
                            <div>
                              <h3 className="font-medium">Marketing Platform</h3>
                              <p className="text-sm text-gray-500">
                                Integrate your marketing tools for campaign insights
                              </p>
                            </div>
                          </div>
                          <Button className="mt-3 w-full bg-[#DBCA91] text-[#0F4342] hover:bg-[#c9b87e]">
                            Connect
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Integration Health</CardTitle>
                      <CardDescription>Overall status of your connected systems</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <div className="flex items-center justify-between text-sm">
                            <span>Connected Systems</span>
                            <span>4/5 Healthy</span>
                          </div>
                          <div className="mt-2 h-2 w-full rounded-full bg-gray-200">
                            <div className="h-2 rounded-full bg-[#0F4342]" style={{ width: "80%" }}></div>
                          </div>
                        </div>

                        <div>
                          <div className="flex items-center justify-between text-sm">
                            <span>Data Sync Success Rate</span>
                            <span>95%</span>
                          </div>
                          <div className="mt-2 h-2 w-full rounded-full bg-gray-200">
                            <div className="h-2 rounded-full bg-[#0F4342]" style={{ width: "95%" }}></div>
                          </div>
                        </div>

                        <div>
                          <div className="flex items-center justify-between text-sm">
                            <span>API Response Time</span>
                            <span>320ms (Good)</span>
                          </div>
                          <div className="mt-2 h-2 w-full rounded-full bg-gray-200">
                            <div className="h-2 rounded-full bg-[#0F4342]" style={{ width: "85%" }}></div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="alerts" className="mt-6">
              <div className="grid gap-6 md:grid-cols-3">
                <Card className="md:col-span-2">
                  <CardHeader>
                    <CardTitle>Active Alerts</CardTitle>
                    <CardDescription>Current issues requiring attention</CardDescription>
                  </CardHeader>
                  <CardContent>
                    {activeAlerts.length > 0 ? (
                      <div className="space-y-4">
                        {activeAlerts.map((alert) => (
                          <div key={alert.id} className="rounded-lg border p-4">
                            <div className="flex items-start justify-between">
                              <div className="flex items-start">
                                <div className={`mr-3 mt-0.5 rounded-full p-1 ${getSeverityColor(alert.severity)}`}>
                                  <AlertTriangle className="h-4 w-4" />
                                </div>
                                <div>
                                  <h3 className="font-medium">{alert.system}</h3>
                                  <p className="text-sm text-gray-600">{alert.message}</p>
                                  <p className="mt-1 text-xs text-gray-500">{alert.time}</p>
                                </div>
                              </div>
                              <Button variant="outline" size="sm" onClick={() => resolveAlert(alert.id)}>
                                Resolve
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="flex flex-col items-center justify-center py-12 text-center">
                        <CheckCircle className="mb-4 h-12 w-12 text-green-500" />
                        <h3 className="text-lg font-medium">All Clear!</h3>
                        <p className="mt-2 text-gray-500">There are no active alerts at this time.</p>
                      </div>
                    )}
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Automated Workflows</CardTitle>
                    <CardDescription>Actions triggered by system events</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="rounded-lg border p-4">
                        <div className="flex items-center justify-between">
                          <h3 className="font-medium">Network Monitoring</h3>
                          <div className="flex items-center">
                            <div className="mr-2 h-2 w-2 rounded-full bg-green-500"></div>
                            <span className="text-xs">Active</span>
                          </div>
                        </div>
                        <p className="mt-1 text-sm text-gray-500">
                          Alerts team when network performance drops below threshold
                        </p>
                        <div className="mt-3 flex items-center justify-between">
                          <span className="text-xs text-gray-500">Last triggered: 3 days ago</span>
                          <Button variant="ghost" size="icon" className="h-6 w-6">
                            <Pause className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>

                      <div className="rounded-lg border p-4">
                        <div className="flex items-center justify-between">
                          <h3 className="font-medium">Server Backup</h3>
                          <div className="flex items-center">
                            <div className="mr-2 h-2 w-2 rounded-full bg-green-500"></div>
                            <span className="text-xs">Active</span>
                          </div>
                        </div>
                        <p className="mt-1 text-sm text-gray-500">Performs daily backup of critical server data</p>
                        <div className="mt-3 flex items-center justify-between">
                          <span className="text-xs text-gray-500">Last triggered: Today, 12:00 AM</span>
                          <Button variant="ghost" size="icon" className="h-6 w-6">
                            <Pause className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>

                      <div className="rounded-lg border p-4">
                        <div className="flex items-center justify-between">
                          <h3 className="font-medium">Printer Supply Order</h3>
                          <div className="flex items-center">
                            <div className="mr-2 h-2 w-2 rounded-full bg-green-500"></div>
                            <span className="text-xs">Active</span>
                          </div>
                        </div>
                        <p className="mt-1 text-sm text-gray-500">Orders new toner when levels fall below 15%</p>
                        <div className="mt-3 flex items-center justify-between">
                          <span className="text-xs text-gray-500">Last triggered: Yesterday</span>
                          <Button variant="ghost" size="icon" className="h-6 w-6">
                            <Pause className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>

                      <Button className="w-full">
                        <Plus className="mr-2 h-4 w-4" /> Create New Workflow
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>

          <div className="mt-8">
            <h2 className="mb-4 text-xl font-semibold text-[#0F4342]">Need IT Support?</h2>
            <AIChatAssistant initialMessage="Hello! I'm Vera, your AI IT assistant. How can I help with your technology systems today?" />
          </div>
        </main>
      </div>
    </div>
  )
}

