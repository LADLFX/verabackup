import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PingLatencyMonitor } from "@/components/ping-latency-monitor"
import { AIChatAssistant } from "@/components/ai-chat-assistant"
import {
  Brain,
  TrendingUp,
  AlertCircle,
  BarChart2,
  PieChart,
  ArrowUpRight,
  ArrowDownRight,
  Users,
  Clock,
  CheckCircle,
  Plus,
} from "lucide-react"

export default function BusinessBrainPage() {
  return (
    <div className="flex-1 p-4 md:p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-[#0F4342]">Business Brain</h1>
        <p className="text-gray-500">AI-powered insights and analytics for your business</p>
      </div>

      <Tabs defaultValue="insights" className="w-full">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
          <TabsTrigger value="insights">Key Insights</TabsTrigger>
          <TabsTrigger value="trends">Trends & Forecasts</TabsTrigger>
          <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
          <TabsTrigger value="reports">Custom Reports</TabsTrigger>
        </TabsList>

        <TabsContent value="insights" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-l-4 border-l-green-500">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Revenue Growth</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+12.5%</div>
                <div className="mt-2 flex items-center text-xs text-green-500">
                  <ArrowUpRight className="mr-1 h-4 w-4" />
                  <span>4.2% above industry average</span>
                </div>
                <div className="mt-4 text-sm text-gray-500">
                  <p>
                    Your revenue growth is outpacing competitors in your sector. Key drivers are new client acquisition
                    and increased service adoption.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-amber-500">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Client Retention</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">92%</div>
                <div className="mt-2 flex items-center text-xs text-amber-500">
                  <ArrowDownRight className="mr-1 h-4 w-4" />
                  <span>2% decrease from last quarter</span>
                </div>
                <div className="mt-4 text-sm text-gray-500">
                  <p>
                    While still strong, your retention rate has slightly decreased. Analysis suggests focusing on
                    improved onboarding and regular check-ins.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-blue-500">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Operational Efficiency</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+18.3%</div>
                <div className="mt-2 flex items-center text-xs text-green-500">
                  <ArrowUpRight className="mr-1 h-4 w-4" />
                  <span>Significant improvement</span>
                </div>
                <div className="mt-4 text-sm text-gray-500">
                  <p>
                    Vera AI has helped reduce administrative overhead by automating routine tasks and streamlining
                    workflows.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Business Health Score</CardTitle>
                <CardDescription>Overall assessment of your business performance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="text-4xl font-bold text-[#0F4342]">87/100</div>
                  <div className="text-sm text-gray-500">Very Good</div>
                </div>
                <div className="mt-6 space-y-4">
                  <div>
                    <div className="mb-1 flex items-center justify-between text-sm">
                      <span>Financial Health</span>
                      <span>92/100</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-200">
                      <div className="h-2 rounded-full bg-green-500" style={{ width: "92%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-1 flex items-center justify-between text-sm">
                      <span>Customer Satisfaction</span>
                      <span>88/100</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-200">
                      <div className="h-2 rounded-full bg-green-500" style={{ width: "88%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-1 flex items-center justify-between text-sm">
                      <span>Operational Efficiency</span>
                      <span>85/100</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-200">
                      <div className="h-2 rounded-full bg-green-500" style={{ width: "85%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-1 flex items-center justify-between text-sm">
                      <span>Growth Potential</span>
                      <span>83/100</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-200">
                      <div className="h-2 rounded-full bg-green-500" style={{ width: "83%" }}></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>AI-Generated Insights</CardTitle>
                <CardDescription>Vera's analysis of your business data</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="rounded-lg border p-4">
                    <div className="flex items-center">
                      <Brain className="mr-2 h-5 w-5 text-[#0F4342]" />
                      <h3 className="font-medium">Client Engagement Pattern</h3>
                    </div>
                    <p className="mt-2 text-sm">
                      Your clients are most responsive to communications sent on Tuesday and Wednesday mornings.
                      Consider scheduling important outreach during these times.
                    </p>
                  </div>
                  <div className="rounded-lg border p-4">
                    <div className="flex items-center">
                      <TrendingUp className="mr-2 h-5 w-5 text-[#0F4342]" />
                      <h3 className="font-medium">Revenue Opportunity</h3>
                    </div>
                    <p className="mt-2 text-sm">
                      Clients in the healthcare sector are showing increased interest in your premium services. Consider
                      a targeted campaign for this segment.
                    </p>
                  </div>
                  <div className="rounded-lg border p-4">
                    <div className="flex items-center">
                      <AlertCircle className="mr-2 h-5 w-5 text-[#0F4342]" />
                      <h3 className="font-medium">Attention Required</h3>
                    </div>
                    <p className="mt-2 text-sm">
                      Three of your enterprise clients have shown decreased engagement over the past month. Proactive
                      outreach is recommended.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="trends" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle>Revenue Trends</CardTitle>
                <CardDescription>6-month revenue analysis with forecast</CardDescription>
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
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Market Position</CardTitle>
                <CardDescription>Your standing in the industry</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-center py-4">
                  <div className="relative h-40 w-40">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-[#0F4342]">18%</div>
                        <div className="text-sm text-gray-500">Market Share</div>
                      </div>
                    </div>
                    {/* This would be a proper chart in a real implementation */}
                    <svg viewBox="0 0 100 100" className="h-full w-full">
                      <circle cx="50" cy="50" r="40" fill="none" stroke="#e2e8f0" strokeWidth="10" />
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        fill="none"
                        stroke="#0F4342"
                        strokeWidth="10"
                        strokeDasharray="251.2"
                        strokeDashoffset="206"
                        transform="rotate(-90 50 50)"
                      />
                    </svg>
                  </div>
                </div>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center">
                      <div className="mr-2 h-3 w-3 rounded-full bg-[#0F4342]"></div>
                      <span>Your Company</span>
                    </div>
                    <span>18%</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center">
                      <div className="mr-2 h-3 w-3 rounded-full bg-blue-500"></div>
                      <span>Competitor A</span>
                    </div>
                    <span>24%</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center">
                      <div className="mr-2 h-3 w-3 rounded-full bg-amber-500"></div>
                      <span>Competitor B</span>
                    </div>
                    <span>15%</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center">
                      <div className="mr-2 h-3 w-3 rounded-full bg-gray-300"></div>
                      <span>Others</span>
                    </div>
                    <span>43%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Client Acquisition Cost</CardTitle>
                <CardDescription>Trend analysis of acquisition costs</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">£1,250</div>
                <div className="mt-2 flex items-center text-xs text-green-500">
                  <ArrowDownRight className="mr-1 h-4 w-4" />
                  <span>15% decrease from last year</span>
                </div>
                <div className="mt-4 h-10">
                  <div className="flex h-full items-end space-x-1">
                    {Array.from({ length: 12 }).map((_, i) => (
                      <div
                        key={i}
                        className="w-full rounded-sm bg-[#0F4342]"
                        style={{ height: `${100 - i * 2}%` }}
                      ></div>
                    ))}
                  </div>
                </div>
                <div className="mt-4 text-sm text-gray-500">
                  <p>
                    Vera AI has helped reduce your client acquisition costs by automating outreach and improving
                    targeting accuracy.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle>Industry Trends</CardTitle>
                <CardDescription>Key trends affecting your business sector</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="rounded-lg border p-4">
                    <div className="flex items-center">
                      <TrendingUp className="mr-2 h-5 w-5 text-green-500" />
                      <h3 className="font-medium">Digital Transformation</h3>
                    </div>
                    <p className="mt-2 text-sm">
                      87% of businesses in your sector are accelerating digital transformation initiatives. Your current
                      implementation puts you ahead of 65% of competitors.
                    </p>
                  </div>
                  <div className="rounded-lg border p-4">
                    <div className="flex items-center">
                      <TrendingUp className="mr-2 h-5 w-5 text-green-500" />
                      <h3 className="font-medium">Remote Work Solutions</h3>
                    </div>
                    <p className="mt-2 text-sm">
                      Demand for remote work enablement services has increased by 42% year-over-year. This represents a
                      significant growth opportunity.
                    </p>
                  </div>
                  <div className="rounded-lg border p-4">
                    <div className="flex items-center">
                      <TrendingUp className="mr-2 h-5 w-5 text-amber-500" />
                      <h3 className="font-medium">Cybersecurity Concerns</h3>
                    </div>
                    <p className="mt-2 text-sm">
                      Security breaches in your industry have increased by 28%. Clients are increasingly prioritizing
                      vendors with strong security credentials.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="recommendations" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="lg:col-span-3">
              <CardHeader>
                <CardTitle>Strategic Recommendations</CardTitle>
                <CardDescription>AI-generated recommendations based on your business data</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="rounded-lg border p-6">
                    <div className="flex items-center">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-700">
                        <Users className="h-5 w-5" />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-medium">Client Retention Strategy</h3>
                        <p className="text-sm text-gray-500">High Priority • Estimated Impact: +5% Revenue</p>
                      </div>
                    </div>
                    <div className="mt-4 space-y-2">
                      <p>
                        Analysis of your client data shows that accounts without regular check-ins are 3x more likely to
                        churn. Implementing a structured account management program could significantly improve
                        retention.
                      </p>
                      <div className="mt-4 space-y-2">
                        <div className="flex items-center">
                          <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                          <span>Implement quarterly business reviews for all clients</span>
                        </div>
                        <div className="flex items-center">
                          <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                          <span>Develop an early warning system for at-risk accounts</span>
                        </div>
                        <div className="flex items-center">
                          <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                          <span>Create a client success playbook for account managers</span>
                        </div>
                      </div>
                      <Button className="mt-4 bg-[#DBCA91] text-[#0F4342] hover:bg-[#c9b87e]">
                        Implement This Strategy
                      </Button>
                    </div>
                  </div>

                  <div className="rounded-lg border p-6">
                    <div className="flex items-center">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                        <BarChart2 className="h-5 w-5" />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-medium">Service Expansion Opportunity</h3>
                        <p className="text-sm text-gray-500">Medium Priority • Estimated Impact: +8% Revenue</p>
                      </div>
                    </div>
                    <div className="mt-4 space-y-2">
                      <p>
                        Your data shows that 68% of your clients could benefit from your premium services, but only 24%
                        are currently using them. A targeted education campaign could significantly increase adoption.
                      </p>
                      <div className="mt-4 space-y-2">
                        <div className="flex items-center">
                          <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                          <span>Develop case studies showing ROI of premium services</span>
                        </div>
                        <div className="flex items-center">
                          <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                          <span>Create a tiered adoption program with incentives</span>
                        </div>
                        <div className="flex items-center">
                          <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                          <span>Train account managers on consultative selling</span>
                        </div>
                      </div>
                      <Button className="mt-4 bg-[#DBCA91] text-[#0F4342] hover:bg-[#c9b87e]">
                        Implement This Strategy
                      </Button>
                    </div>
                  </div>

                  <div className="rounded-lg border p-6">
                    <div className="flex items-center">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100 text-purple-700">
                        <Clock className="h-5 w-5" />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-medium">Operational Efficiency</h3>
                        <p className="text-sm text-gray-500">Medium Priority • Estimated Impact: 15% Time Savings</p>
                      </div>
                    </div>
                    <div className="mt-4 space-y-2">
                      <p>
                        Analysis of your workflow data indicates that your team spends approximately 12 hours per week
                        on manual reporting tasks that could be automated with Vera AI.
                      </p>
                      <div className="mt-4 space-y-2">
                        <div className="flex items-center">
                          <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                          <span>Set up automated weekly performance reports</span>
                        </div>
                        <div className="flex items-center">
                          <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                          <span>Implement AI-powered data extraction from emails</span>
                        </div>
                        <div className="flex items-center">
                          <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                          <span>Configure smart templates for common documents</span>
                        </div>
                      </div>
                      <Button className="mt-4 bg-[#DBCA91] text-[#0F4342] hover:bg-[#c9b87e]">
                        Implement This Strategy
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="reports" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Custom Reports</CardTitle>
              <CardDescription>Generate tailored reports for your business needs</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <div className="rounded-lg border p-6 hover:border-[#0F4342] hover:shadow-md transition-all cursor-pointer">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0F4342] text-white">
                    <PieChart className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-lg font-medium">Revenue Analysis</h3>
                  <p className="mt-2 text-sm text-gray-500">
                    Detailed breakdown of revenue streams, growth trends, and forecasts.
                  </p>
                  <Button className="mt-4 w-full bg-[#DBCA91] text-[#0F4342] hover:bg-[#c9b87e]">
                    Generate Report
                  </Button>
                </div>

                <div className="rounded-lg border p-6 hover:border-[#0F4342] hover:shadow-md transition-all cursor-pointer">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0F4342] text-white">
                    <Users className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-lg font-medium">Client Health</h3>
                  <p className="mt-2 text-sm text-gray-500">
                    Comprehensive analysis of client engagement, satisfaction, and retention metrics.
                  </p>
                  <Button className="mt-4 w-full bg-[#DBCA91] text-[#0F4342] hover:bg-[#c9b87e]">
                    Generate Report
                  </Button>
                </div>

                <div className="rounded-lg border p-6 hover:border-[#0F4342] hover:shadow-md transition-all cursor-pointer">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0F4342] text-white">
                    <TrendingUp className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-lg font-medium">Growth Opportunities</h3>
                  <p className="mt-2 text-sm text-gray-500">
                    Identification of untapped markets, cross-sell opportunities, and expansion strategies.
                  </p>
                  <Button className="mt-4 w-full bg-[#DBCA91] text-[#0F4342] hover:bg-[#c9b87e]">
                    Generate Report
                  </Button>
                </div>

                <div className="rounded-lg border p-6 hover:border-[#0F4342] hover:shadow-md transition-all cursor-pointer">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0F4342] text-white">
                    <Clock className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-lg font-medium">Operational Efficiency</h3>
                  <p className="mt-2 text-sm text-gray-500">
                    Analysis of workflow bottlenecks, resource allocation, and automation opportunities.
                  </p>
                  <Button className="mt-4 w-full bg-[#DBCA91] text-[#0F4342] hover:bg-[#c9b87e]">
                    Generate Report
                  </Button>
                </div>

                <div className="rounded-lg border p-6 hover:border-[#0F4342] hover:shadow-md transition-all cursor-pointer">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0F4342] text-white">
                    <BarChart2 className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-lg font-medium">Competitive Analysis</h3>
                  <p className="mt-2 text-sm text-gray-500">
                    Benchmark your performance against industry competitors and market leaders.
                  </p>
                  <Button className="mt-4 w-full bg-[#DBCA91] text-[#0F4342] hover:bg-[#c9b87e]">
                    Generate Report
                  </Button>
                </div>

                <div className="rounded-lg border border-dashed p-6 hover:border-[#0F4342] hover:shadow-md transition-all cursor-pointer">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 text-gray-500">
                    <Plus className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-lg font-medium">Custom Report</h3>
                  <p className="mt-2 text-sm text-gray-500">
                    Create a completely customized report tailored to your specific business questions.
                  </p>
                  <Button className="mt-4 w-full bg-[#DBCA91] text-[#0F4342] hover:bg-[#c9b87e]">
                    Create Custom Report
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2">
          <h2 className="mb-4 text-xl font-semibold text-[#0F4342]">Ask Business Brain</h2>
          <AIChatAssistant initialMessage="Hello! I'm Vera's Business Brain. Ask me anything about your business data, market trends, or strategic opportunities, and I'll provide AI-powered insights to help you make informed decisions." />
        </div>
        <div className="space-y-6">
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
                  <span>Data Processing</span>
                  <span className="text-green-500">Online</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span>AI Analysis</span>
                  <span className="text-green-500">Online</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span>Reporting Engine</span>
                  <span className="text-green-500">Online</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <PingLatencyMonitor />

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Data Sources</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm">
                <div className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                  <span>CRM System</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                  <span>Email Analytics</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                  <span>Financial Data</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                  <span>Website Analytics</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                  <span>Industry Benchmarks</span>
                </div>
                <Button className="mt-4 w-full text-xs" variant="outline">
                  Manage Data Sources
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
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

