import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AIChatAssistant } from "@/components/ai-chat-assistant"
import { PingLatencyMonitor } from "@/components/ping-latency-monitor"
import { CheckCircle, Clock, AlertCircle, Users, Building, Server, Shield, HelpCircle } from "lucide-react"

export default function MasterAdminDashboard() {
  return (
    <main className="flex-1 p-4 md:p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-[#0F4342]">Master Admin Dashboard</h1>
        <p className="text-gray-500">Full system control and client management</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Client Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24 Clients</div>
            <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
              <div className="flex items-center rounded-lg bg-green-100 p-2 text-green-700">
                <CheckCircle className="mr-1 h-4 w-4" />
                <span>22 Active</span>
              </div>
              <div className="flex items-center rounded-lg bg-amber-100 p-2 text-amber-700">
                <Clock className="mr-1 h-4 w-4" />
                <span>2 Pending</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">System Health</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <div className="mr-2 h-3 w-3 rounded-full bg-green-500"></div>
              <div className="text-sm">99.8% Uptime</div>
            </div>
            <div className="mt-4 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span>Core Services</span>
                <span className="text-green-500">100%</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span>API Endpoints</span>
                <span className="text-green-500">99.9%</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span>Database Clusters</span>
                <span className="text-green-500">99.7%</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Support Tickets</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8 Open</div>
            <div className="mt-4 grid grid-cols-3 gap-2 text-xs">
              <div className="flex items-center rounded-lg bg-red-100 p-2 text-red-700">
                <AlertCircle className="mr-1 h-4 w-4" />
                <span>2 Critical</span>
              </div>
              <div className="flex items-center rounded-lg bg-amber-100 p-2 text-amber-700">
                <Clock className="mr-1 h-4 w-4" />
                <span>3 Medium</span>
              </div>
              <div className="flex items-center rounded-lg bg-blue-100 p-2 text-blue-700">
                <HelpCircle className="mr-1 h-4 w-4" />
                <span>3 Low</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <PingLatencyMonitor />

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Resource Usage</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div>
                <div className="mb-1 flex items-center justify-between text-xs">
                  <span>CPU</span>
                  <span>42%</span>
                </div>
                <div className="h-2 w-full rounded-full bg-gray-200">
                  <div className="h-2 rounded-full bg-[#0F4342]" style={{ width: "42%" }}></div>
                </div>
              </div>
              <div>
                <div className="mb-1 flex items-center justify-between text-xs">
                  <span>Memory</span>
                  <span>68%</span>
                </div>
                <div className="h-2 w-full rounded-full bg-gray-200">
                  <div className="h-2 rounded-full bg-[#0F4342]" style={{ width: "68%" }}></div>
                </div>
              </div>
              <div>
                <div className="mb-1 flex items-center justify-between text-xs">
                  <span>Storage</span>
                  <span>54%</span>
                </div>
                <div className="h-2 w-full rounded-full bg-gray-200">
                  <div className="h-2 rounded-full bg-[#0F4342]" style={{ width: "54%" }}></div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center rounded-lg border p-2 text-xs hover:bg-gray-50">
                <Building className="mr-2 h-4 w-4 text-[#0F4342]" />
                <span>Manage Clients</span>
              </div>
              <div className="flex items-center rounded-lg border p-2 text-xs hover:bg-gray-50">
                <Server className="mr-2 h-4 w-4 text-[#0F4342]" />
                <span>System Configuration</span>
              </div>
              <div className="flex items-center rounded-lg border p-2 text-xs hover:bg-gray-50">
                <Shield className="mr-2 h-4 w-4 text-[#0F4342]" />
                <span>Security Controls</span>
              </div>
              <div className="flex items-center rounded-lg border p-2 text-xs hover:bg-gray-50">
                <Users className="mr-2 h-4 w-4 text-[#0F4342]" />
                <span>User Management</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-6">
        <h2 className="mb-4 text-xl font-semibold text-[#0F4342]">Vera Assistant</h2>
        <AIChatAssistant />
      </div>
    </main>
  )
}

