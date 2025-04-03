import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AIChatAssistant } from "@/components/ai-chat-assistant"
import { PingLatencyMonitor } from "@/components/ping-latency-monitor"
import { CheckCircle, Clock, AlertCircle, Calendar, FileText, Mail } from "lucide-react"

export default function ClientDashboard() {
  return (
    <div className="p-4 md:p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-[#0F4342]">Welcome back, John</h1>
        <p className="text-gray-500">Here's what's happening with your business today</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Tasks</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
              <div className="flex items-center rounded-lg bg-green-100 p-2 text-green-700">
                <CheckCircle className="mr-1 h-4 w-4" />
                <span>8 Completed</span>
              </div>
              <div className="flex items-center rounded-lg bg-amber-100 p-2 text-amber-700">
                <Clock className="mr-1 h-4 w-4" />
                <span>4 Pending</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Upcoming Meetings</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <div className="mt-2 space-y-2">
              <div className="flex items-center text-xs">
                <Calendar className="mr-1 h-4 w-4 text-[#0F4342]" />
                <span>Client Review - 2:00 PM</span>
              </div>
              <div className="flex items-center text-xs">
                <Calendar className="mr-1 h-4 w-4 text-[#0F4342]" />
                <span>Team Sync - 4:30 PM</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">System Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <div className="mr-2 h-3 w-3 rounded-full bg-green-500"></div>
              <div className="text-sm">All systems operational</div>
            </div>
            <div className="mt-4 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span>Email</span>
                <span className="text-green-500">Online</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span>CRM</span>
                <span className="text-green-500">Online</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span>Phone System</span>
                <span className="text-green-500">Online</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <PingLatencyMonitor />

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-start text-xs">
                <Mail className="mr-2 mt-0.5 h-3 w-3 text-[#0F4342]" />
                <div>
                  <p className="font-medium">Email sent to client</p>
                  <p className="text-gray-500">10 minutes ago</p>
                </div>
              </div>
              <div className="flex items-start text-xs">
                <FileText className="mr-2 mt-0.5 h-3 w-3 text-[#0F4342]" />
                <div>
                  <p className="font-medium">Document updated</p>
                  <p className="text-gray-500">1 hour ago</p>
                </div>
              </div>
              <div className="flex items-start text-xs">
                <CheckCircle className="mr-2 mt-0.5 h-3 w-3 text-[#0F4342]" />
                <div>
                  <p className="font-medium">Task completed</p>
                  <p className="text-gray-500">2 hours ago</p>
                </div>
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
                  <p className="font-medium">Follow-up reminder</p>
                  <p className="text-gray-500">Client meeting follow-up due today</p>
                </div>
              </div>
              <div className="flex items-start rounded-lg bg-blue-50 p-2 text-xs">
                <AlertCircle className="mr-2 mt-0.5 h-3 w-3 text-blue-500" />
                <div>
                  <p className="font-medium">System update</p>
                  <p className="text-gray-500">New features available</p>
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
    </div>
  )
}

