import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { PingLatencyMonitor } from "@/components/ping-latency-monitor"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import {
  ArrowUpRight,
  ArrowDownRight,
  BarChart2,
  PieChart,
  LineChart,
  Users,
  Clock,
  CheckCircle,
  XCircle,
} from "lucide-react"

export default function PerformanceDashboard() {
  return (
    <div className="flex-1 p-4 md:p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-[#0F4342]">Performance Dashboard</h1>
        <p className="text-gray-500">Monitor your business performance and system metrics</p>
      </div>

      <Tabs defaultValue="business" className="w-full">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
          <TabsTrigger value="business">Business Performance</TabsTrigger>
          <TabsTrigger value="system">System Performance</TabsTrigger>
          <TabsTrigger value="team">Team Performance</TabsTrigger>
          <TabsTrigger value="network">Network Performance</TabsTrigger>
        </TabsList>

        <TabsContent value="business" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Revenue</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">£24,500</div>
                <div className="mt-2 flex items-center text-xs text-green-500">
                  <ArrowUpRight className="mr-1 h-4 w-4" />
                  <span>12% from last month</span>
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

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Customer Engagement</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">87%</div>
                <div className="mt-2 flex items-center text-xs text-green-500">
                  <ArrowUpRight className="mr-1 h-4 w-4" />
                  <span>5% from last month</span>
                </div>
                <div className="mt-4 space-y-2">
                  <div>
                    <div className="mb-1 flex items-center justify-between text-xs">
                      <span>Email Response Rate</span>
                      <span>92%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-200">
                      <div className="h-2 rounded-full bg-[#0F4342]" style={{ width: "92%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-1 flex items-center justify-between text-xs">
                      <span>Call Response Rate</span>
                      <span>85%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-200">
                      <div className="h-2 rounded-full bg-[#0F4342]" style={{ width: "85%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-1 flex items-center justify-between text-xs">
                      <span>Meeting Follow-ups</span>
                      <span>78%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-200">
                      <div className="h-2 rounded-full bg-[#0F4342]" style={{ width: "78%" }}></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Task Completion</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">92%</div>
                <div className="mt-2 flex items-center text-xs text-red-500">
                  <ArrowDownRight className="mr-1 h-4 w-4" />
                  <span>3% from last month</span>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
                  <div className="flex items-center rounded-lg bg-green-100 p-2 text-green-700">
                    <CheckCircle className="mr-1 h-4 w-4" />
                    <span>156 Completed</span>
                  </div>
                  <div className="flex items-center rounded-lg bg-amber-100 p-2 text-amber-700">
                    <Clock className="mr-1 h-4 w-4" />
                    <span>14 Pending</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Monthly Performance</CardTitle>
                <CardDescription>Business metrics over the last 6 months</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] w-full">
                  <div className="flex h-full items-end space-x-2">
                    {Array.from({ length: 6 }).map((_, i) => (
                      <div key={i} className="flex w-full flex-col items-center">
                        <div
                          className="w-full rounded-t-sm bg-[#0F4342]"
                          style={{ height: `${Math.floor(Math.random() * 60) + 40}%` }}
                        ></div>
                        <div className="mt-2 text-xs">{getMonthName(i)}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Key Metrics</CardTitle>
                <CardDescription>Business health indicators</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <BarChart2 className="mr-2 h-5 w-5 text-[#0F4342]" />
                      <span className="text-sm font-medium">Sales Conversion</span>
                    </div>
                    <div className="text-sm font-bold">24%</div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <PieChart className="mr-2 h-5 w-5 text-[#0F4342]" />
                      <span className="text-sm font-medium">Market Share</span>
                    </div>
                    <div className="text-sm font-bold">18%</div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <LineChart className="mr-2 h-5 w-5 text-[#0F4342]" />
                      <span className="text-sm font-medium">Growth Rate</span>
                    </div>
                    <div className="text-sm font-bold">7.5%</div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Users className="mr-2 h-5 w-5 text-[#0F4342]" />
                      <span className="text-sm font-medium">Customer Retention</span>
                    </div>
                    <div className="text-sm font-bold">92%</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="system" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">System Uptime</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">99.8%</div>
                <div className="mt-2 text-xs text-gray-500">
                  <span>Last 30 days</span>
                </div>
                <div className="mt-4 space-y-2">
                  <div>
                    <div className="mb-1 flex items-center justify-between text-xs">
                      <span>Email System</span>
                      <span>100%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-200">
                      <div className="h-2 rounded-full bg-green-500" style={{ width: "100%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-1 flex items-center justify-between text-xs">
                      <span>CRM</span>
                      <span>99.9%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-200">
                      <div className="h-2 rounded-full bg-green-500" style={{ width: "99.9%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-1 flex items-center justify-between text-xs">
                      <span>Phone System</span>
                      <span>99.5%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-200">
                      <div className="h-2 rounded-full bg-green-500" style={{ width: "99.5%" }}></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">API Performance</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">124ms</div>
                <div className="mt-2 text-xs text-gray-500">
                  <span>Average response time</span>
                </div>
                <div className="mt-4 h-10">
                  <div className="flex h-full items-end space-x-1">
                    {Array.from({ length: 24 }).map((_, i) => (
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

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Error Rate</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">0.02%</div>
                <div className="mt-2 flex items-center text-xs text-green-500">
                  <ArrowDownRight className="mr-1 h-4 w-4" />
                  <span>0.01% from last month</span>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
                  <div className="flex items-center rounded-lg bg-green-100 p-2 text-green-700">
                    <CheckCircle className="mr-1 h-4 w-4" />
                    <span>99.98% Success</span>
                  </div>
                  <div className="flex items-center rounded-lg bg-red-100 p-2 text-red-700">
                    <XCircle className="mr-1 h-4 w-4" />
                    <span>0.02% Errors</span>
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
                  <div>
                    <div className="mb-1 flex items-center justify-between text-xs">
                      <span>Network</span>
                      <span>37%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-200">
                      <div className="h-2 rounded-full bg-[#0F4342]" style={{ width: "37%" }}></div>
                    </div>
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
                  <div className="flex items-center justify-between text-xs">
                    <span>Database</span>
                    <span className="text-green-500">Online</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span>File Storage</span>
                    <span className="text-green-500">Online</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="team" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Team Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">324 Actions</div>
                <div className="mt-2 text-xs text-gray-500">
                  <span>Last 7 days</span>
                </div>
                <div className="mt-4 h-10">
                  <div className="flex h-full items-end space-x-1">
                    {Array.from({ length: 7 }).map((_, i) => (
                      <div
                        key={i}
                        className="w-full rounded-sm bg-[#0F4342]"
                        style={{ height: `${Math.random() * 100}%` }}
                      ></div>
                    ))}
                  </div>
                  <div className="mt-2 flex justify-between text-xs text-gray-500">
                    <span>Mon</span>
                    <span>Tue</span>
                    <span>Wed</span>
                    <span>Thu</span>
                    <span>Fri</span>
                    <span>Sat</span>
                    <span>Sun</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Task Completion Rate</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">87%</div>
                <div className="mt-2 flex items-center text-xs text-green-500">
                  <ArrowUpRight className="mr-1 h-4 w-4" />
                  <span>5% from last month</span>
                </div>
                <div className="mt-4 space-y-2">
                  <div>
                    <div className="mb-1 flex items-center justify-between text-xs">
                      <span>John Smith</span>
                      <span>92%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-200">
                      <div className="h-2 rounded-full bg-[#0F4342]" style={{ width: "92%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-1 flex items-center justify-between text-xs">
                      <span>Sarah Johnson</span>
                      <span>88%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-200">
                      <div className="h-2 rounded-full bg-[#0F4342]" style={{ width: "88%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-1 flex items-center justify-between text-xs">
                      <span>Michael Brown</span>
                      <span>85%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-200">
                      <div className="h-2 rounded-full bg-[#0F4342]" style={{ width: "85%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-1 flex items-center justify-between text-xs">
                      <span>Emily Davis</span>
                      <span>82%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-200">
                      <div className="h-2 rounded-full bg-[#0F4342]" style={{ width: "82%" }}></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Response Time</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">24 min</div>
                <div className="mt-2 flex items-center text-xs text-green-500">
                  <ArrowDownRight className="mr-1 h-4 w-4" />
                  <span>8 min from last month</span>
                </div>
                <div className="mt-4 space-y-2">
                  <div>
                    <div className="mb-1 flex items-center justify-between text-xs">
                      <span>Email Response</span>
                      <span>32 min</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-200">
                      <div className="h-2 rounded-full bg-[#0F4342]" style={{ width: "65%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-1 flex items-center justify-between text-xs">
                      <span>Call Response</span>
                      <span>12 min</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-200">
                      <div className="h-2 rounded-full bg-[#0F4342]" style={{ width: "85%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-1 flex items-center justify-between text-xs">
                      <span>Task Assignment</span>
                      <span>18 min</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-200">
                      <div className="h-2 rounded-full bg-[#0F4342]" style={{ width: "75%" }}></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Team Performance</CardTitle>
                <CardDescription>Individual performance metrics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="rounded-md border">
                    <div className="grid grid-cols-5 gap-4 bg-gray-50 p-4 font-medium">
                      <div>Team Member</div>
                      <div>Tasks Completed</div>
                      <div>Response Time</div>
                      <div>Client Satisfaction</div>
                      <div>Efficiency Score</div>
                    </div>
                    <div className="divide-y">
                      <div className="grid grid-cols-5 gap-4 p-4">
                        <div>John Smith</div>
                        <div>42</div>
                        <div>18 min</div>
                        <div>95%</div>
                        <div>
                          <div className="flex items-center">
                            <div className="mr-2 w-24 rounded-full bg-gray-200">
                              <div className="h-2 rounded-full bg-[#0F4342]" style={{ width: "92%" }}></div>
                            </div>
                            <span className="text-xs">92%</span>
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-5 gap-4 p-4">
                        <div>Sarah Johnson</div>
                        <div>38</div>
                        <div>22 min</div>
                        <div>92%</div>
                        <div>
                          <div className="flex items-center">
                            <div className="mr-2 w-24 rounded-full bg-gray-200">
                              <div className="h-2 rounded-full bg-[#0F4342]" style={{ width: "88%" }}></div>
                            </div>
                            <span className="text-xs">88%</span>
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-5 gap-4 p-4">
                        <div>Michael Brown</div>
                        <div>35</div>
                        <div>25 min</div>
                        <div>90%</div>
                        <div>
                          <div className="flex items-center">
                            <div className="mr-2 w-24 rounded-full bg-gray-200">
                              <div className="h-2 rounded-full bg-[#0F4342]" style={{ width: "85%" }}></div>
                            </div>
                            <span className="text-xs">85%</span>
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-5 gap-4 p-4">
                        <div>Emily Davis</div>
                        <div>32</div>
                        <div>28 min</div>
                        <div>88%</div>
                        <div>
                          <div className="flex items-center">
                            <div className="mr-2 w-24 rounded-full bg-gray-200">
                              <div className="h-2 rounded-full bg-[#0F4342]" style={{ width: "82%" }}></div>
                            </div>
                            <span className="text-xs">82%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Team Insights</CardTitle>
                <CardDescription>AI-generated insights about team performance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="rounded-lg border p-4">
                    <p className="text-sm">
                      Team response times are 15% faster on Tuesdays and Wednesdays. Consider scheduling important
                      client communications on these days.
                    </p>
                  </div>
                  <div className="rounded-lg border p-4">
                    <p className="text-sm">
                      John Smith and Sarah Johnson have complementary skills. Pairing them on complex projects has shown
                      a 22% increase in efficiency.
                    </p>
                  </div>
                  <div className="rounded-lg border p-4">
                    <p className="text-sm">
                      Email templates created by Emily Davis have the highest client response rate. Consider using her
                      templates as a baseline.
                    </p>
                  </div>
                  <Button className="mt-4 w-full bg-[#DBCA91] text-[#0F4342] hover:bg-[#c9b87e]">
                    View All Insights
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="network" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle>Network Latency</CardTitle>
                <CardDescription>Real-time network performance monitoring</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <PingLatencyMonitor />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Connection Status</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center">
                  <div className="mr-2 h-3 w-3 rounded-full bg-green-500"></div>
                  <div className="text-sm">All connections online</div>
                </div>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span>Main Office</span>
                    <span className="text-green-500">Online</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span>Branch Office</span>
                    <span className="text-green-500">Online</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span>Cloud Services</span>
                    <span className="text-green-500">Online</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span>VPN</span>
                    <span className="text-green-500">Online</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Bandwidth Usage</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">42%</div>
                <div className="mt-2 text-xs text-gray-500">
                  <span>Of total capacity</span>
                </div>
                <div className="mt-4 space-y-2">
                  <div>
                    <div className="mb-1 flex items-center justify-between text-xs">
                      <span>Download</span>
                      <span>48 Mbps</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-200">
                      <div className="h-2 rounded-full bg-[#0F4342]" style={{ width: "48%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-1 flex items-center justify-between text-xs">
                      <span>Upload</span>
                      <span>12 Mbps</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-200">
                      <div className="h-2 rounded-full bg-[#0F4342]" style={{ width: "24%" }}></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Network Incidents</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">0</div>
                <div className="mt-2 text-xs text-gray-500">
                  <span>Current incidents</span>
                </div>
                <div className="mt-4 space-y-2">
                  <div className="rounded-lg border p-4">
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-medium">Last Incident</div>
                      <div className="text-xs text-gray-500">3 days ago</div>
                    </div>
                    <div className="mt-2 text-xs">
                      <p>Brief connectivity issue with cloud services. Resolved within 5 minutes.</p>
                    </div>
                  </div>
                  <Button className="mt-2 w-full bg-[#DBCA91] text-[#0F4342] hover:bg-[#c9b87e]">
                    View Incident History
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Network Security</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center">
                  <div className="mr-2 h-3 w-3 rounded-full bg-green-500"></div>
                  <div className="text-sm">All systems secure</div>
                </div>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span>Firewall</span>
                    <span className="text-green-500">Active</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span>Intrusion Detection</span>
                    <span className="text-green-500">Active</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span>VPN</span>
                    <span className="text-green-500">Active</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span>Encryption</span>
                    <span className="text-green-500">Active</span>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="rounded-lg border p-4">
                    <div className="text-sm font-medium">Last Security Scan</div>
                    <div className="mt-1 text-xs text-gray-500">Today, 04:30 AM</div>
                    <div className="mt-2 text-xs">
                      <p>No vulnerabilities detected. All systems operating within security parameters.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

// Helper function to get month name
function getMonthName(monthIndex: number): string {
  const date = new Date()
  date.setMonth(date.getMonth() - 5 + monthIndex)
  return date.toLocaleString("default", { month: "short" })
}

