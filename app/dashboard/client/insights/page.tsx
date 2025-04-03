import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AIChatAssistant } from "@/components/ai-chat-assistant"
import { PingLatencyMonitor } from "@/components/ping-latency-monitor"
import {
  TrendingUp,
  TrendingDown,
  AlertCircle,
  Clock,
  Users,
  BarChart2,
  ArrowUpRight,
  Calendar,
  DollarSign,
  Download,
  Share2,
  Filter,
  CheckCircle,
} from "lucide-react"

export default function BusinessInsightsPage() {
  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      <div className="flex flex-1 flex-col">
        <main className="flex-1 p-4 md:p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-[#0F4342]">Business Insights & Trends</h1>
            <p className="text-gray-500">AI-generated insights and pattern recognition for your business</p>
          </div>

          <div className="mb-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-sm text-gray-500">
              <span className="font-medium">Data period:</span> Last 30 days (Oct 1 - Oct 30, 2023)
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <Filter className="mr-2 h-4 w-4" /> Filter
              </Button>
              <Button variant="outline" size="sm">
                <Download className="mr-2 h-4 w-4" /> Export
              </Button>
              <Button variant="outline" size="sm">
                <Share2 className="mr-2 h-4 w-4" /> Share
              </Button>
            </div>
          </div>

          <Tabs defaultValue="insights" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
              <TabsTrigger value="insights">Key Insights</TabsTrigger>
              <TabsTrigger value="sales">Sales & Pipeline</TabsTrigger>
              <TabsTrigger value="team">Team Performance</TabsTrigger>
              <TabsTrigger value="forecasts">Forecasts</TabsTrigger>
            </TabsList>

            <TabsContent value="insights" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card className="border-l-4 border-l-amber-500">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Critical Insight</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center">
                      <AlertCircle className="mr-2 h-5 w-5 text-amber-500" />
                      <h3 className="font-medium">Lead Response Time</h3>
                    </div>
                    <p className="mt-2 text-sm text-gray-600">
                      Lead response times are 42% slower on Fridays, resulting in an estimated 15% decrease in
                      conversion rates for Friday leads.
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      <div className="text-xs text-gray-500">
                        <span className="font-medium">Avg. Friday response:</span> 4.2 hours
                      </div>
                      <div className="text-xs text-gray-500">
                        <span className="font-medium">Other days:</span> 1.8 hours
                      </div>
                    </div>
                    <Button className="mt-4 w-full bg-[#DBCA91] text-[#0F4342] hover:bg-[#c9b87e]">
                      View Recommendation
                    </Button>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-green-500">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Positive Trend</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center">
                      <TrendingUp className="mr-2 h-5 w-5 text-green-500" />
                      <h3 className="font-medium">Email Campaign Effectiveness</h3>
                    </div>
                    <p className="mt-2 text-sm text-gray-600">
                      Your email open rates have increased by 28% since implementing Vera's subject line optimization.
                      Click-through rates are up 15%.
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      <div className="text-xs text-gray-500">
                        <span className="font-medium">Current open rate:</span> 42%
                      </div>
                      <div className="text-xs text-gray-500">
                        <span className="font-medium">Previous:</span> 33%
                      </div>
                    </div>
                    <Button className="mt-4 w-full bg-[#DBCA91] text-[#0F4342] hover:bg-[#c9b87e]">View Details</Button>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-red-500">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Attention Required</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center">
                      <TrendingDown className="mr-2 h-5 w-5 text-red-500" />
                      <h3 className="font-medium">Client Retention Risk</h3>
                    </div>
                    <p className="mt-2 text-sm text-gray-600">
                      Three enterprise clients show decreased engagement patterns over the last 30 days. Historical data
                      suggests a 68% churn risk.
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      <div className="text-xs text-gray-500">
                        <span className="font-medium">At-risk revenue:</span> £42,500
                      </div>
                      <div className="text-xs text-gray-500">
                        <span className="font-medium">Engagement drop:</span> 35%
                      </div>
                    </div>
                    <Button className="mt-4 w-full bg-[#DBCA91] text-[#0F4342] hover:bg-[#c9b87e]">
                      View Action Plan
                    </Button>
                  </CardContent>
                </Card>

                <Card className="md:col-span-2">
                  <CardHeader>
                    <CardTitle>Workflow Bottlenecks</CardTitle>
                    <CardDescription>Areas where your business processes are experiencing delays</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="rounded-lg border p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <Clock className="mr-2 h-5 w-5 text-amber-500" />
                            <h3 className="font-medium">Proposal Approval Process</h3>
                          </div>
                          <div className="text-sm font-medium text-amber-500">3.2 days avg. delay</div>
                        </div>
                        <p className="mt-2 text-sm text-gray-600">
                          Proposals are waiting an average of 3.2 days for final approval, causing delays in client
                          responses. This is 40% longer than industry benchmarks.
                        </p>
                        <div className="mt-4">
                          <div className="mb-1 flex items-center justify-between text-xs">
                            <span>Process Efficiency</span>
                            <span>62%</span>
                          </div>
                          <div className="h-2 w-full rounded-full bg-gray-200">
                            <div className="h-2 rounded-full bg-amber-500" style={{ width: "62%" }}></div>
                          </div>
                        </div>
                      </div>

                      <div className="rounded-lg border p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <Users className="mr-2 h-5 w-5 text-red-500" />
                            <h3 className="font-medium">Client Onboarding</h3>
                          </div>
                          <div className="text-sm font-medium text-red-500">5.8 days avg. delay</div>
                        </div>
                        <p className="mt-2 text-sm text-gray-600">
                          New client onboarding is taking 5.8 days longer than your target timeline, primarily due to
                          delays in collecting required documentation.
                        </p>
                        <div className="mt-4">
                          <div className="mb-1 flex items-center justify-between text-xs">
                            <span>Process Efficiency</span>
                            <span>48%</span>
                          </div>
                          <div className="h-2 w-full rounded-full bg-gray-200">
                            <div className="h-2 rounded-full bg-red-500" style={{ width: "48%" }}></div>
                          </div>
                        </div>
                      </div>

                      <div className="rounded-lg border p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <Calendar className="mr-2 h-5 w-5 text-green-500" />
                            <h3 className="font-medium">Meeting Scheduling</h3>
                          </div>
                          <div className="text-sm font-medium text-green-500">0.8 days avg. delay</div>
                        </div>
                        <p className="mt-2 text-sm text-gray-600">
                          Meeting scheduling has improved by 65% since implementing Vera's automated scheduling. This
                          process is now more efficient than 85% of similar businesses.
                        </p>
                        <div className="mt-4">
                          <div className="mb-1 flex items-center justify-between text-xs">
                            <span>Process Efficiency</span>
                            <span>92%</span>
                          </div>
                          <div className="h-2 w-full rounded-full bg-gray-200">
                            <div className="h-2 rounded-full bg-green-500" style={{ width: "92%" }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>User Behavior Patterns</CardTitle>
                    <CardDescription>Insights from analyzing your team's work patterns</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="rounded-lg border p-4">
                        <div className="flex items-center">
                          <Clock className="mr-2 h-5 w-5 text-[#0F4342]" />
                          <h3 className="font-medium">Peak Productivity Times</h3>
                        </div>
                        <p className="mt-2 text-sm text-gray-600">
                          Your team shows highest productivity between 9:00 AM and 11:30 AM. Complex tasks are completed
                          28% faster during this window.
                        </p>
                        <div className="mt-2 text-xs text-gray-500">
                          <span className="font-medium">Recommendation:</span> Schedule challenging work and important
                          meetings during this time.
                        </div>
                      </div>

                      <div className="rounded-lg border p-4">
                        <div className="flex items-center">
                          <Users className="mr-2 h-5 w-5 text-[#0F4342]" />
                          <h3 className="font-medium">Collaboration Insights</h3>
                        </div>
                        <p className="mt-2 text-sm text-gray-600">
                          Cross-department collaboration is 35% higher on Tuesdays and Wednesdays. Projects involving
                          multiple teams progress faster when kickoffs happen on these days.
                        </p>
                        <div className="mt-2 text-xs text-gray-500">
                          <span className="font-medium">Recommendation:</span> Schedule cross-team initiatives midweek.
                        </div>
                      </div>

                      <div className="rounded-lg border p-4">
                        <div className="flex items-center">
                          <BarChart2 className="mr-2 h-5 w-5 text-[#0F4342]" />
                          <h3 className="font-medium">Communication Channels</h3>
                        </div>
                        <p className="mt-2 text-sm text-gray-600">
                          Email response rates are 42% higher in the morning, while chat/messaging is more effective in
                          the afternoon with 65% faster response times.
                        </p>
                        <div className="mt-2 text-xs text-gray-500">
                          <span className="font-medium">Recommendation:</span> Prioritize email in mornings, chat in
                          afternoons.
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="sales" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Sales Pipeline Health</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">£342,500</div>
                    <div className="mt-2 flex items-center text-xs text-green-500">
                      <ArrowUpRight className="mr-1 h-4 w-4" />
                      <span>18% increase from last month</span>
                    </div>
                    <div className="mt-4 space-y-2">
                      <div>
                        <div className="mb-1 flex items-center justify-between text-xs">
                          <span>Qualified Leads</span>
                          <span>£125,000</span>
                        </div>
                        <div className="h-2 w-full rounded-full bg-gray-200">
                          <div className="h-2 rounded-full bg-blue-500" style={{ width: "36%" }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="mb-1 flex items-center justify-between text-xs">
                          <span>Proposals</span>
                          <span>£98,500</span>
                        </div>
                        <div className="h-2 w-full rounded-full bg-gray-200">
                          <div className="h-2 rounded-full bg-purple-500" style={{ width: "29%" }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="mb-1 flex items-center justify-between text-xs">
                          <span>Negotiations</span>
                          <span>£85,000</span>
                        </div>
                        <div className="h-2 w-full rounded-full bg-gray-200">
                          <div className="h-2 rounded-full bg-amber-500" style={{ width: "25%" }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="mb-1 flex items-center justify-between text-xs">
                          <span>Closing</span>
                          <span>£34,000</span>
                        </div>
                        <div className="h-2 w-full rounded-full bg-gray-200">
                          <div className="h-2 rounded-full bg-green-500" style={{ width: "10%" }}></div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Conversion Rates</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">24.8%</div>
                    <div className="mt-2 flex items-center text-xs text-green-500">
                      <ArrowUpRight className="mr-1 h-4 w-4" />
                      <span>3.2% increase from last quarter</span>
                    </div>
                    <div className="mt-4 space-y-2">
                      <div>
                        <div className="mb-1 flex items-center justify-between text-xs">
                          <span>Lead to Opportunity</span>
                          <span>42%</span>
                        </div>
                        <div className="h-2 w-full rounded-full bg-gray-200">
                          <div className="h-2 rounded-full bg-[#0F4342]" style={{ width: "42%" }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="mb-1 flex items-center justify-between text-xs">
                          <span>Opportunity to Proposal</span>
                          <span>68%</span>
                        </div>
                        <div className="h-2 w-full rounded-full bg-gray-200">
                          <div className="h-2 rounded-full bg-[#0F4342]" style={{ width: "68%" }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="mb-1 flex items-center justify-between text-xs">
                          <span>Proposal to Close</span>
                          <span>35%</span>
                        </div>
                        <div className="h-2 w-full rounded-full bg-gray-200">
                          <div className="h-2 rounded-full bg-[#0F4342]" style={{ width: "35%" }}></div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 rounded-lg bg-amber-50 p-3 text-xs text-amber-800">
                      <div className="flex items-center">
                        <AlertCircle className="mr-2 h-4 w-4" />
                        <span className="font-medium">Insight:</span>
                      </div>
                      <p className="mt-1">
                        Your proposal to close rate is 12% below industry average. Vera has identified potential
                        improvements in your proposal templates.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Missed Opportunities</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">£78,500</div>
                    <div className="mt-2 flex items-center text-xs text-red-500">
                      <ArrowUpRight className="mr-1 h-4 w-4" />
                      <span>15% increase from last quarter</span>
                    </div>
                    <div className="mt-4 space-y-3">
                      <div className="rounded-lg border p-3">
                        <div className="flex items-center justify-between">
                          <div className="font-medium">Response Time</div>
                          <div className="text-red-500">£32,000</div>
                        </div>
                        <p className="mt-1 text-xs text-gray-500">
                          Opportunities lost due to slow response times to leads and inquiries.
                        </p>
                      </div>
                      <div className="rounded-lg border p-3">
                        <div className="flex items-center justify-between">
                          <div className="font-medium">Pricing Issues</div>
                          <div className="text-red-500">£24,500</div>
                        </div>
                        <p className="mt-1 text-xs text-gray-500">
                          Deals lost due to pricing objections and lack of value demonstration.
                        </p>
                      </div>
                      <div className="rounded-lg border p-3">
                        <div className="flex items-center justify-between">
                          <div className="font-medium">Follow-up Gaps</div>
                          <div className="text-red-500">£22,000</div>
                        </div>
                        <p className="mt-1 text-xs text-gray-500">
                          Opportunities that went cold due to inconsistent follow-up.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="md:col-span-2">
                  <CardHeader>
                    <CardTitle>Sales Performance by Channel</CardTitle>
                    <CardDescription>Conversion rates and revenue by acquisition channel</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="rounded-lg border p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="h-4 w-4 rounded-full bg-green-500 mr-2"></div>
                            <h3 className="font-medium">Referrals</h3>
                          </div>
                          <div className="text-sm font-medium">£125,000 (36.5%)</div>
                        </div>
                        <div className="mt-4">
                          <div className="mb-1 flex items-center justify-between text-xs">
                            <span>Conversion Rate: 42%</span>
                            <span>Avg. Deal Size: £12,500</span>
                          </div>
                          <div className="h-2 w-full rounded-full bg-gray-200">
                            <div className="h-2 rounded-full bg-green-500" style={{ width: "42%" }}></div>
                          </div>
                        </div>
                      </div>

                      <div className="rounded-lg border p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="h-4 w-4 rounded-full bg-blue-500 mr-2"></div>
                            <h3 className="font-medium">Website/Inbound</h3>
                          </div>
                          <div className="text-sm font-medium">£98,500 (28.8%)</div>
                        </div>
                        <div className="mt-4">
                          <div className="mb-1 flex items-center justify-between text-xs">
                            <span>Conversion Rate: 18%</span>
                            <span>Avg. Deal Size: £8,200</span>
                          </div>
                          <div className="h-2 w-full rounded-full bg-gray-200">
                            <div className="h-2 rounded-full bg-blue-500" style={{ width: "18%" }}></div>
                          </div>
                        </div>
                      </div>

                      <div className="rounded-lg border p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="h-4 w-4 rounded-full bg-purple-500 mr-2"></div>
                            <h3 className="font-medium">Outbound</h3>
                          </div>
                          <div className="text-sm font-medium">£85,000 (24.8%)</div>
                        </div>
                        <div className="mt-4">
                          <div className="mb-1 flex items-center justify-between text-xs">
                            <span>Conversion Rate: 12%</span>
                            <span>Avg. Deal Size: £9,400</span>
                          </div>
                          <div className="h-2 w-full rounded-full bg-gray-200">
                            <div className="h-2 rounded-full bg-purple-500" style={{ width: "12%" }}></div>
                          </div>
                        </div>
                      </div>

                      <div className="rounded-lg border p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="h-4 w-4 rounded-full bg-amber-500 mr-2"></div>
                            <h3 className="font-medium">Events/Partnerships</h3>
                          </div>
                          <div className="text-sm font-medium">£34,000 (9.9%)</div>
                        </div>
                        <div className="mt-4">
                          <div className="mb-1 flex items-center justify-between text-xs">
                            <span>Conversion Rate: 22%</span>
                            <span>Avg. Deal Size: £11,300</span>
                          </div>
                          <div className="h-2 w-full rounded-full bg-gray-200">
                            <div className="h-2 rounded-full bg-amber-500" style={{ width: "22%" }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Pipeline Bottlenecks</CardTitle>
                    <CardDescription>Stages where deals are getting stuck</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="rounded-lg border p-4">
                        <div className="flex items-center">
                          <AlertCircle className="mr-2 h-5 w-5 text-red-500" />
                          <h3 className="font-medium">Proposal Review</h3>
                        </div>
                        <p className="mt-2 text-sm text-gray-600">
                          Deals are spending an average of 12 days in the proposal review stage, 4 days longer than your
                          target.
                        </p>
                        <div className="mt-2 text-xs text-gray-500">
                          <span className="font-medium">Affected value:</span> £68,500
                        </div>
                      </div>

                      <div className="rounded-lg border p-4">
                        <div className="flex items-center">
                          <AlertCircle className="mr-2 h-5 w-5 text-amber-500" />
                          <h3 className="font-medium">Technical Validation</h3>
                        </div>
                        <p className="mt-2 text-sm text-gray-600">
                          Technical validation is taking 8 days on average, causing delays in 35% of enterprise deals.
                        </p>
                        <div className="mt-2 text-xs text-gray-500">
                          <span className="font-medium">Affected value:</span> £42,000
                        </div>
                      </div>

                      <Button className="mt-2 w-full bg-[#DBCA91] text-[#0F4342] hover:bg-[#c9b87e]">
                        View Detailed Analysis
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="team" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Team Performance Overview</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">87%</div>
                    <div className="mt-2 flex items-center text-xs text-green-500">
                      <ArrowUpRight className="mr-1 h-4 w-4" />
                      <span>5% increase from last quarter</span>
                    </div>
                    <div className="mt-4 space-y-2">
                      <div>
                        <div className="mb-1 flex items-center justify-between text-xs">
                          <span>Task Completion</span>
                          <span>92%</span>
                        </div>
                        <div className="h-2 w-full rounded-full bg-gray-200">
                          <div className="h-2 rounded-full bg-[#0F4342]" style={{ width: "92%" }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="mb-1 flex items-center justify-between text-xs">
                          <span>Response Time</span>
                          <span>85%</span>
                        </div>
                        <div className="h-2 w-full rounded-full bg-gray-200">
                          <div className="h-2 rounded-full bg-[#0F4342]" style={{ width: "85%" }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="mb-1 flex items-center justify-between text-xs">
                          <span>Client Satisfaction</span>
                          <span>89%</span>
                        </div>
                        <div className="h-2 w-full rounded-full bg-gray-200">
                          <div className="h-2 rounded-full bg-[#0F4342]" style={{ width: "89%" }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="mb-1 flex items-center justify-between text-xs">
                          <span>Goal Achievement</span>
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
                    <CardTitle className="text-sm font-medium">Productivity Insights</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="rounded-lg border p-4">
                        <div className="flex items-center">
                          <TrendingUp className="mr-2 h-5 w-5 text-green-500" />
                          <h3 className="font-medium">Peak Performance Times</h3>
                        </div>
                        <p className="mt-2 text-sm text-gray-600">
                          Team productivity peaks between 9:30 AM and 11:45 AM, with a secondary peak from 2:00 PM to
                          3:30 PM.
                        </p>
                      </div>

                      <div className="rounded-lg border p-4">
                        <div className="flex items-center">
                          <Clock className="mr-2 h-5 w-5 text-amber-500" />
                          <h3 className="font-medium">Meeting Efficiency</h3>
                        </div>
                        <p className="mt-2 text-sm text-gray-600">
                          Meetings longer than 45 minutes show a 32% decrease in participant engagement and action item
                          completion.
                        </p>
                      </div>

                      <div className="rounded-lg border p-4">
                        <div className="flex items-center">
                          <Users className="mr-2 h-5 w-5 text-blue-500" />
                          <h3 className="font-medium">Collaboration Patterns</h3>
                        </div>
                        <p className="mt-2 text-sm text-gray-600">
                          Cross-functional teams complete projects 28% faster when using shared digital workspaces
                          versus email-based collaboration.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Team Bottlenecks</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="rounded-lg border p-4">
                        <div className="flex items-center">
                          <AlertCircle className="mr-2 h-5 w-5 text-red-500" />
                          <h3 className="font-medium">Resource Constraints</h3>
                        </div>
                        <p className="mt-2 text-sm text-gray-600">
                          The design team is currently a bottleneck for 8 active projects, with an average delay of 4.2
                          days per request.
                        </p>
                      </div>

                      <div className="rounded-lg border p-4">
                        <div className="flex items-center">
                          <AlertCircle className="mr-2 h-5 w-5 text-amber-500" />
                          <h3 className="font-medium">Approval Workflows</h3>
                        </div>
                        <p className="mt-2 text-sm text-gray-600">
                          Final approvals are taking 3x longer than initial reviews, creating a bottleneck in project
                          completion.
                        </p>
                      </div>

                      <Button className="mt-2 w-full bg-[#DBCA91] text-[#0F4342] hover:bg-[#c9b87e]">
                        View Recommendations
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="md:col-span-2">
                  <CardHeader>
                    <CardTitle>Individual Performance</CardTitle>
                    <CardDescription>Performance metrics for team members</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="rounded-lg border p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="h-8 w-8 rounded-full bg-[#0F4342] text-white flex items-center justify-center mr-3">
                              JS
                            </div>
                            <div>
                              <h3 className="font-medium">John Smith</h3>
                              <p className="text-xs text-gray-500">Sales Representative</p>
                            </div>
                          </div>
                          <div className="text-sm font-medium">Performance: 94%</div>
                        </div>
                        <div className="mt-4 grid grid-cols-3 gap-4 text-xs">
                          <div>
                            <p className="font-medium">Tasks Completed</p>
                            <p className="text-gray-500">42 / 45</p>
                          </div>
                          <div>
                            <p className="font-medium">Response Time</p>
                            <p className="text-gray-500">1.2 hours avg.</p>
                          </div>
                          <div>
                            <p className="font-medium">Client Satisfaction</p>
                            <p className="text-gray-500">4.8 / 5.0</p>
                          </div>
                        </div>
                      </div>

                      <div className="rounded-lg border p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="h-8 w-8 rounded-full bg-[#0F4342] text-white flex items-center justify-center mr-3">
                              SJ
                            </div>
                            <div>
                              <h3 className="font-medium">Sarah Johnson</h3>
                              <p className="text-xs text-gray-500">Account Manager</p>
                            </div>
                          </div>
                          <div className="text-sm font-medium">Performance: 88%</div>
                        </div>
                        <div className="mt-4 grid grid-cols-3 gap-4 text-xs">
                          <div>
                            <p className="font-medium">Tasks Completed</p>
                            <p className="text-gray-500">38 / 42</p>
                          </div>
                          <div>
                            <p className="font-medium">Response Time</p>
                            <p className="text-gray-500">1.8 hours avg.</p>
                          </div>
                          <div>
                            <p className="font-medium">Client Satisfaction</p>
                            <p className="text-gray-500">4.6 / 5.0</p>
                          </div>
                        </div>
                      </div>

                      <div className="rounded-lg border p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="h-8 w-8 rounded-full bg-[#0F4342] text-white flex items-center justify-center mr-3">
                              MB
                            </div>
                            <div>
                              <h3 className="font-medium">Michael Brown</h3>
                              <p className="text-xs text-gray-500">Project Manager</p>
                            </div>
                          </div>
                          <div className="text-sm font-medium">Performance: 92%</div>
                        </div>
                        <div className="mt-4 grid grid-cols-3 gap-4 text-xs">
                          <div>
                            <p className="font-medium">Tasks Completed</p>
                            <p className="text-gray-500">52 / 55</p>
                          </div>
                          <div>
                            <p className="font-medium">Response Time</p>
                            <p className="text-gray-500">1.5 hours avg.</p>
                          </div>
                          <div>
                            <p className="font-medium">Client Satisfaction</p>
                            <p className="text-gray-500">4.7 / 5.0</p>
                          </div>
                        </div>
                      </div>

                      <Button className="w-full">View All Team Members</Button>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>AI-Generated Team Insights</CardTitle>
                    <CardDescription>Vera's analysis of team performance patterns</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="rounded-lg border p-4">
                        <div className="flex items-center">
                          <TrendingUp className="mr-2 h-5 w-5 text-[#0F4342]" />
                          <h3 className="font-medium">Complementary Skills</h3>
                        </div>
                        <p className="mt-2 text-sm text-gray-600">
                          John Smith and Sarah Johnson have highly complementary skills. Projects they collaborate on
                          are completed 32% faster than average.
                        </p>
                      </div>

                      <div className="rounded-lg border p-4">
                        <div className="flex items-center">
                          <Clock className="mr-2 h-5 w-5 text-[#0F4342]" />
                          <h3 className="font-medium">Time Management</h3>
                        </div>
                        <p className="mt-2 text-sm text-gray-600">
                          Team members who block focused work time on their calendars complete 28% more tasks and report
                          higher job satisfaction.
                        </p>
                      </div>

                      <div className="rounded-lg border p-4">
                        <div className="flex items-center">
                          <Users className="mr-2 h-5 w-5 text-[#0F4342]" />
                          <h3 className="font-medium">Communication Patterns</h3>
                        </div>
                        <p className="mt-2 text-sm text-gray-600">
                          Teams that have brief daily check-ins resolve issues 45% faster than those with only weekly
                          meetings.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="forecasts" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Revenue Forecast</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">£425,000</div>
                    <div className="mt-2 flex items-center text-xs text-green-500">
                      <ArrowUpRight className="mr-1 h-4 w-4" />
                      <span>18% projected increase</span>
                    </div>
                    <div className="mt-4 h-40">
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
                        {/* Forecast bars with different styling */}
                        {Array.from({ length: 3 }).map((_, i) => (
                          <div key={i + 6} className="flex w-full flex-col items-center">
                            <div
                              className="w-full rounded-t-sm bg-[#0F4342] opacity-60 border border-dashed border-[#0F4342]"
                              style={{ height: `${Math.floor(Math.random() * 60) + 40}%` }}
                            ></div>
                            <div className="mt-2 text-xs text-gray-400">{getMonthName(i + 6)} (Forecast)</div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="mt-4 text-xs text-gray-500">
                      <span className="font-medium">Forecast confidence:</span> 85%
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Pipeline Forecast</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">£625,000</div>
                    <div className="mt-2 flex items-center text-xs text-green-500">
                      <ArrowUpRight className="mr-1 h-4 w-4" />
                      <span>22% projected growth</span>
                    </div>
                    <div className="mt-4 space-y-2">
                      <div>
                        <div className="mb-1 flex items-center justify-between text-xs">
                          <span>Highly Likely ({">"}80%)</span>
                          <span>£185,000</span>
                        </div>
                        <div className="h-2 w-full rounded-full bg-gray-200">
                          <div className="h-2 rounded-full bg-green-500" style={{ width: "30%" }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="mb-1 flex items-center justify-between text-xs">
                          <span>Likely (50-80%)</span>
                          <span>£240,000</span>
                        </div>
                        <div className="h-2 w-full rounded-full bg-gray-200">
                          <div className="h-2 rounded-full bg-blue-500" style={{ width: "38%" }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="mb-1 flex items-center justify-between text-xs">
                          <span>Possible (20-50%)</span>
                          <span>£125,000</span>
                        </div>
                        <div className="h-2 w-full rounded-full bg-gray-200">
                          <div className="h-2 rounded-full bg-amber-500" style={{ width: "20%" }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="mb-1 flex items-center justify-between text-xs">
                          <span>Long Shot ({"<"}20%)</span>
                          <span>£75,000</span>
                        </div>
                        <div className="h-2 w-full rounded-full bg-gray-200">
                          <div className="h-2 rounded-full bg-red-500" style={{ width: "12%" }}></div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 rounded-lg bg-blue-50 p-3 text-xs text-blue-800">
                      <div className="flex items-center">
                        <TrendingUp className="mr-2 h-4 w-4" />
                        <span className="font-medium">Insight:</span>
                      </div>
                      <p className="mt-1">
                        Your pipeline has grown by 22% compared to the same period last year, with a higher percentage
                        of qualified opportunities.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Market Trends</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="rounded-lg border p-4">
                        <div className="flex items-center">
                          <TrendingUp className="mr-2 h-5 w-5 text-green-500" />
                          <h3 className="font-medium">Industry Growth</h3>
                        </div>
                        <p className="mt-2 text-sm text-gray-600">
                          Your industry is projected to grow by 12% over the next 12 months, with increased demand in
                          enterprise segments.
                        </p>
                      </div>

                      <div className="rounded-lg border p-4">
                        <div className="flex items-center">
                          <DollarSign className="mr-2 h-5 w-5 text-amber-500" />
                          <h3 className="font-medium">Pricing Pressure</h3>
                        </div>
                        <p className="mt-2 text-sm text-gray-600">
                          Market analysis indicates increasing price sensitivity in the SMB segment, with competitors
                          offering more aggressive discounts.
                        </p>
                      </div>

                      <div className="rounded-lg border p-4">
                        <div className="flex items-center">
                          <Users className="mr-2 h-5 w-5 text-blue-500" />
                          <h3 className="font-medium">Customer Behavior</h3>
                        </div>
                        <p className="mt-2 text-sm text-gray-600">
                          Buying cycles are extending by an average of 18 days compared to last year, with more
                          stakeholders involved in decisions.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="md:col-span-2">
                  <CardHeader>
                    <CardTitle>Opportunity Forecast</CardTitle>
                    <CardDescription>Projected outcomes for current opportunities</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="rounded-lg border p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="h-8 w-8 rounded-full bg-[#0F4342] text-white flex items-center justify-center mr-3">
                              AC
                            </div>
                            <div>
                              <h3 className="font-medium">Acme Corporation</h3>
                              <p className="text-xs text-gray-500">Enterprise Solution • £85,000</p>
                            </div>
                          </div>
                          <div className="text-sm font-medium text-green-500">85% Win Probability</div>
                        </div>
                        <div className="mt-4">
                          <div className="mb-1 flex items-center justify-between text-xs">
                            <span>Forecast Close Date: Nov 15, 2023</span>
                            <span>Current Stage: Negotiation</span>
                          </div>
                          <div className="h-2 w-full rounded-full bg-gray-200">
                            <div className="h-2 rounded-full bg-green-500" style={{ width: "85%" }}></div>
                          </div>
                        </div>
                      </div>

                      <div className="rounded-lg border p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="h-8 w-8 rounded-full bg-[#0F4342] text-white flex items-center justify-center mr-3">
                              GI
                            </div>
                            <div>
                              <h3 className="font-medium">Global Industries</h3>
                              <p className="text-xs text-gray-500">Platform Upgrade • £65,000</p>
                            </div>
                          </div>
                          <div className="text-sm font-medium text-blue-500">68% Win Probability</div>
                        </div>
                        <div className="mt-4">
                          <div className="mb-1 flex items-center justify-between text-xs">
                            <span>Forecast Close Date: Dec 5, 2023</span>
                            <span>Current Stage: Proposal</span>
                          </div>
                          <div className="h-2 w-full rounded-full bg-gray-200">
                            <div className="h-2 rounded-full bg-blue-500" style={{ width: "68%" }}></div>
                          </div>
                        </div>
                      </div>

                      <div className="rounded-lg border p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="h-8 w-8 rounded-full bg-[#0F4342] text-white flex items-center justify-center mr-3">
                              TS
                            </div>
                            <div>
                              <h3 className="font-medium">Tech Solutions</h3>
                              <p className="text-xs text-gray-500">Managed Services • £42,000</p>
                            </div>
                          </div>
                          <div className="text-sm font-medium text-amber-500">45% Win Probability</div>
                        </div>
                        <div className="mt-4">
                          <div className="mb-1 flex items-center justify-between text-xs">
                            <span>Forecast Close Date: Dec 20, 2023</span>
                            <span>Current Stage: Discovery</span>
                          </div>
                          <div className="h-2 w-full rounded-full bg-gray-200">
                            <div className="h-2 rounded-full bg-amber-500" style={{ width: "45%" }}></div>
                          </div>
                        </div>
                      </div>

                      <Button className="w-full">View All Opportunities</Button>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Risk Assessment</CardTitle>
                    <CardDescription>Potential risks to forecast accuracy</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="rounded-lg border p-4">
                        <div className="flex items-center">
                          <AlertCircle className="mr-2 h-5 w-5 text-red-500" />
                          <h3 className="font-medium">Resource Constraints</h3>
                        </div>
                        <p className="mt-2 text-sm text-gray-600">
                          Current implementation team capacity may impact ability to onboard new clients in Q4,
                          affecting £120,000 in potential revenue.
                        </p>
                      </div>

                      <div className="rounded-lg border p-4">
                        <div className="flex items-center">
                          <AlertCircle className="mr-2 h-5 w-5 text-amber-500" />
                          <h3 className="font-medium">Market Uncertainty</h3>
                        </div>
                        <p className="mt-2 text-sm text-gray-600">
                          Economic indicators suggest potential budget freezes in the financial sector, which could
                          delay £85,000 in forecasted deals.
                        </p>
                      </div>

                      <div className="rounded-lg border p-4">
                        <div className="flex items-center">
                          <AlertCircle className="mr-2 h-5 w-5 text-amber-500" />
                          <h3 className="font-medium">Competitive Threats</h3>
                        </div>
                        <p className="mt-2 text-sm text-gray-600">
                          A competitor has recently lowered pricing by 15%, which may impact 3 deals worth £65,000 in
                          your pipeline.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="md:col-span-2">
              <h2 className="mb-4 text-xl font-semibold text-[#0F4342]">Ask Vera About Your Business</h2>
              <AIChatAssistant initialMessage="Hello! I'm Vera's Business Insights engine. Ask me anything about your business data, trends, or performance metrics, and I'll provide AI-powered analysis to help you make informed decisions." />
            </div>
            <div className="space-y-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Data Sources</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                      <span>CRM Data (Salesforce)</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                      <span>Email Analytics</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                      <span>Financial Systems</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                      <span>Project Management</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                      <span>Website Analytics</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                      <span>Industry Benchmarks</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <PingLatencyMonitor />

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Suggested Questions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="rounded-lg border p-2 text-sm hover:bg-gray-50 cursor-pointer">
                      What are our top performing products this quarter?
                    </div>
                    <div className="rounded-lg border p-2 text-sm hover:bg-gray-50 cursor-pointer">
                      Which clients have the highest churn risk?
                    </div>
                    <div className="rounded-lg border p-2 text-sm hover:bg-gray-50 cursor-pointer">
                      What's our average sales cycle length?
                    </div>
                    <div className="rounded-lg border p-2 text-sm hover:bg-gray-50 cursor-pointer">
                      Where are our biggest workflow bottlenecks?
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

// Helper function to get month name
function getMonthName(monthIndex: number): string {
  const date = new Date()
  date.setMonth(date.getMonth() - 5 + monthIndex)
  return date.toLocaleString("default", { month: "short" })
}

