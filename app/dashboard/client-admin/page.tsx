import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AIChatAssistant } from "@/components/ai-chat-assistant"
import { PingLatencyMonitor } from "@/components/ping-latency-monitor"
import { CheckCircle, Clock, AlertCircle, Users, Settings, Shield } from "lucide-react"

export default function ClientAdminDashboard() {
  return (
    <main className="flex-1 p-4 md:p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-[#0F4342]">Admin Dashboard</h1>
        <p className="text-gray-500">Manage your team and system performance</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Team Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8 Users</div>
            <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
              <div className="flex items-center rounded-lg bg-green-100 p-2 text-green-700">
                <CheckCircle className="mr-1 h-4 w-4" />
                <span>6 Active</span>
              </div>
              <div className="flex items-center rounded-lg bg-amber-100 p-2 text-amber-700">
                <Clock className="mr-1 h-4 w-4" />
                <span>2 Inactive</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">System Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <div className="mr-2 h-3 w-3 rounded-full bg-green-500"></div>
              <div className="text-sm">98.5% Uptime</div>
            </div>
            <div className="mt-4 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span>Email System</span>
                <span className="text-green-500">100%</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span>CRM Integration</span>
                <span className="text-green-500">99.2%</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span>Phone System</span>
                <span className="text-amber-500">96.8%</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">User Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">124 Actions</div>
            <div className="mt-2">
              <div className="text-xs text-gray-500">Last 24 hours</div>
            </div>
            <div className="mt-4 h-10">
              <div className="flex h-full items-end space-x-1">
                {Array.from({ length: 12 }).map((_, i) => (
                  <div
                    key={i}
                    className="w-full rounded-sm bg-[#0F4342]"
                    style={{ height: `${Math.random() * 100}%` }}
                  ></div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        <PingLatencyMonitor />

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Admin Controls</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center rounded-lg border p-2 text-xs hover:bg-gray-50">
                <Users className="mr-2 h-4 w-4 text-[#0F4342]" />
                <span>User Management</span>
              </div>
              <div className="flex items-center rounded-lg border p-2 text-xs hover:bg-gray-50">
                <Settings className="mr-2 h-4 w-4 text-[#0F4342]" />
                <span>System Configuration</span>
              </div>
              <div className="flex items-center rounded-lg border p-2 text-xs hover:bg-gray-50">
                <Shield className="mr-2 h-4 w-4 text-[#0F4342]" />
                <span>Security Settings</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Notifications</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-start rounded-lg bg-amber-50 p-2 text-xs">
                <AlertCircle className="mr-2 mt-0.5 h-3 w-3 text-amber-500" />
                <div>
                  <p className="font-medium">License expiring</p>
                  <p className="text-gray-500">Microsoft 365 license expires in 15 days</p>
                </div>
              </div>
              <div className="flex items-start rounded-lg bg-blue-50 p-2 text-xs">
                <AlertCircle className="mr-2 mt-0.5 h-3 w-3 text-blue-500" />
                <div>
                  <p className="font-medium">New user request</p>
                  <p className="text-gray-500">Pending approval for new team member</p>
                </div>
              </div>
              <div className="flex items-start rounded-lg bg-red-50 p-2 text-xs">
                <AlertCircle className="mr-2 mt-0.5 h-3 w-3 text-red-500" />
                <div>
                  <p className="font-medium">Security alert</p>
                  <p className="text-gray-500">Unusual login activity detected</p>
                </div>
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

