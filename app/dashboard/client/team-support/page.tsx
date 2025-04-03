"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { PingLatencyMonitor } from "@/components/ping-latency-monitor"
import { Users, Lightbulb, Play, FileText, Search, CheckCircle, Clock, ThumbsUp, Filter } from "lucide-react"

export default function TeamSupportPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [feedbackDialogOpen, setFeedbackDialogOpen] = useState(false)
  const [selectedVideo, setSelectedVideo] = useState<any>(null)
  const [videoDialogOpen, setVideoDialogOpen] = useState(false)

  const handleVideoClick = (video: any) => {
    setSelectedVideo(video)
    setVideoDialogOpen(true)
  }

  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      <div className="flex flex-1 flex-col">
        <main className="flex-1 p-4 md:p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-[#0F4342]">Team Support & Training</h1>
            <p className="text-gray-500">Onboarding, training resources, and team collaboration</p>
          </div>

          <div className="mb-6 flex flex-col sm:flex-row items-center gap-4">
            <div className="relative w-full sm:w-auto flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <Input
                placeholder="Search training materials, guides, and resources..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
            </Button>
            <Button
              className="bg-[#DBCA91] text-[#0F4342] hover:bg-[#c9b87e]"
              onClick={() => setFeedbackDialogOpen(true)}
            >
              <Lightbulb className="mr-2 h-4 w-4" /> Share Feedback
            </Button>
          </div>

          <Tabs defaultValue="onboarding" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
              <TabsTrigger value="onboarding">Onboarding</TabsTrigger>
              <TabsTrigger value="learning">Learning Center</TabsTrigger>
              <TabsTrigger value="feedback">Team Check-ins</TabsTrigger>
              <TabsTrigger value="ideas">Idea Exchange</TabsTrigger>
            </TabsList>

            <TabsContent value="onboarding" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card className="md:col-span-2">
                  <CardHeader>
                    <CardTitle>Onboarding Checklist</CardTitle>
                    <CardDescription>Track your progress through the onboarding process</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="rounded-lg border p-4">
                        <div className="flex items-center justify-between">
                          <h3 className="font-medium">Account Setup</h3>
                          <Badge className="bg-green-500">Completed</Badge>
                        </div>
                        <div className="mt-4 space-y-2">
                          <div className="flex items-center">
                            <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                            <span className="text-sm line-through text-gray-500">Create account and set password</span>
                          </div>
                          <div className="flex items-center">
                            <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                            <span className="text-sm line-through text-gray-500">Complete user profile</span>
                          </div>
                          <div className="flex items-center">
                            <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                            <span className="text-sm line-through text-gray-500">Set up two-factor authentication</span>
                          </div>
                        </div>
                      </div>

                      <div className="rounded-lg border p-4">
                        <div className="flex items-center justify-between">
                          <h3 className="font-medium">System Training</h3>
                          <Badge className="bg-amber-500">In Progress</Badge>
                        </div>
                        <div className="mt-4 space-y-2">
                          <div className="flex items-center">
                            <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                            <span className="text-sm line-through text-gray-500">Complete Vera AI introduction</span>
                          </div>
                          <div className="flex items-center">
                            <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                            <span className="text-sm line-through text-gray-500">Watch dashboard overview video</span>
                          </div>
                          <div className="flex items-center">
                            <Clock className="mr-2 h-4 w-4 text-amber-500" />
                            <span className="text-sm">Schedule 1:1 training session</span>
                          </div>
                          <div className="flex items-center">
                            <Clock className="mr-2 h-4 w-4 text-amber-500" />
                            <span className="text-sm">Complete practice exercises</span>
                          </div>
                        </div>
                      </div>

                      <div className="rounded-lg border p-4">
                        <div className="flex items-center justify-between">
                          <h3 className="font-medium">Tool Connections</h3>
                          <Badge className="bg-blue-500">Not Started</Badge>
                        </div>
                        <div className="mt-4 space-y-2">
                          <div className="flex items-center">
                            <Clock className="mr-2 h-4 w-4 text-blue-500" />
                            <span className="text-sm">Connect email account</span>
                          </div>
                          <div className="flex items-center">
                            <Clock className="mr-2 h-4 w-4 text-blue-500" />
                            <span className="text-sm">Connect calendar</span>
                          </div>
                          <div className="flex items-center">
                            <Clock className="mr-2 h-4 w-4 text-blue-500" />
                            <span className="text-sm">Set up CRM integration</span>
                          </div>
                        </div>
                      </div>

                      <div className="rounded-lg border p-4">
                        <div className="flex items-center justify-between">
                          <h3 className="font-medium">Team Integration</h3>
                          <Badge className="bg-blue-500">Not Started</Badge>
                        </div>
                        <div className="mt-4 space-y-2">
                          <div className="flex items-center">
                            <Clock className="mr-2 h-4 w-4 text-blue-500" />
                            <span className="text-sm">Join team workspace</span>
                          </div>
                          <div className="flex items-center">
                            <Clock className="mr-2 h-4 w-4 text-blue-500" />
                            <span className="text-sm">Set up communication preferences</span>
                          </div>
                          <div className="flex items-center">
                            <Clock className="mr-2 h-4 w-4 text-blue-500" />
                            <span className="text-sm">Schedule team introduction</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Onboarding Progress</CardTitle>
                    <CardDescription>Your journey to becoming a Vera AI expert</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div>
                        <div className="flex items-center justify-between text-sm">
                          <span>Overall Progress</span>
                          <span>35%</span>
                        </div>
                        <div className="mt-2 h-2 w-full rounded-full bg-gray-200">
                          <div className="h-2 rounded-full bg-[#0F4342]" style={{ width: "35%" }}></div>
                        </div>
                      </div>

                      <div className="rounded-lg border p-4">
                        <h3 className="font-medium">Upcoming Tasks</h3>
                        <div className="mt-4 space-y-3">
                          <div className="flex items-start">
                            <Clock className="mr-2 mt-0.5 h-4 w-4 text-amber-500" />
                            <div>
                              <p className="text-sm font-medium">Schedule 1:1 Training</p>
                              <p className="text-xs text-gray-500">Due in 3 days</p>
                            </div>
                          </div>
                          <div className="flex items-start">
                            <Clock className="mr-2 mt-0.5 h-4 w-4 text-amber-500" />
                            <div>
                              <p className="text-sm font-medium">Connect Email Account</p>
                              <p className="text-xs text-gray-500">Due in 5 days</p>
                            </div>
                          </div>
                          <div className="flex items-start">
                            <Clock className="mr-2 mt-0.5 h-4 w-4 text-amber-500" />
                            <div>
                              <p className="text-sm font-medium">Complete Practice Exercises</p>
                              <p className="text-xs text-gray-500">Due in 7 days</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="rounded-lg border p-4">
                        <h3 className="font-medium">Need Help?</h3>
                        <p className="mt-2 text-sm text-gray-600">
                          Your dedicated onboarding specialist is here to help you get started.
                        </p>
                        <Button className="mt-4 w-full bg-[#DBCA91] text-[#0F4342] hover:bg-[#c9b87e]">
                          Contact Support
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="lg:col-span-3">
                  <CardHeader>
                    <CardTitle>Getting Started Videos</CardTitle>
                    <CardDescription>Quick video tutorials to help you get up to speed</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-6 md:grid-cols-3">
                      <div
                        className="rounded-lg border p-4 cursor-pointer hover:border-[#0F4342] hover:shadow-md transition-all"
                        onClick={() =>
                          handleVideoClick({
                            title: "Welcome to Vera AI",
                            duration: "3:45",
                            views: 1245,
                            description:
                              "An introduction to Vera AI and how it can transform your business operations.",
                          })
                        }
                      >
                        <div className="aspect-video bg-gray-100 rounded-md flex items-center justify-center mb-3">
                          <Play className="h-8 w-8 text-[#0F4342]" />
                        </div>
                        <h3 className="font-medium">Welcome to Vera AI</h3>
                        <div className="mt-1 flex items-center justify-between text-xs text-gray-500">
                          <span>3:45</span>
                          <span>1,245 views</span>
                        </div>
                      </div>

                      <div
                        className="rounded-lg border p-4 cursor-pointer hover:border-[#0F4342] hover:shadow-md transition-all"
                        onClick={() =>
                          handleVideoClick({
                            title: "Dashboard Overview",
                            duration: "5:12",
                            views: 987,
                            description: "Learn how to navigate the Vera AI dashboard and access key features.",
                          })
                        }
                      >
                        <div className="aspect-video bg-gray-100 rounded-md flex items-center justify-center mb-3">
                          <Play className="h-8 w-8 text-[#0F4342]" />
                        </div>
                        <h3 className="font-medium">Dashboard Overview</h3>
                        <div className="mt-1 flex items-center justify-between text-xs text-gray-500">
                          <span>5:12</span>
                          <span>987 views</span>
                        </div>
                      </div>

                      <div
                        className="rounded-lg border p-4 cursor-pointer hover:border-[#0F4342] hover:shadow-md transition-all"
                        onClick={() =>
                          handleVideoClick({
                            title: "Connecting Your Tools",
                            duration: "7:30",
                            views: 756,
                            description: "Step-by-step guide to connecting your existing business tools with Vera AI.",
                          })
                        }
                      >
                        <div className="aspect-video bg-gray-100 rounded-md flex items-center justify-center mb-3">
                          <Play className="h-8 w-8 text-[#0F4342]" />
                        </div>
                        <h3 className="font-medium">Connecting Your Tools</h3>
                        <div className="mt-1 flex items-center justify-between text-xs text-gray-500">
                          <span>7:30</span>
                          <span>756 views</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="learning" className="mt-6">
              <div className="grid gap-6 md:grid-cols-3">
                <div className="md:col-span-2">
                  <Card>
                    <CardHeader>
                      <CardTitle>Learning Paths</CardTitle>
                      <CardDescription>Structured courses to build your Vera AI expertise</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        <div className="rounded-lg border p-4">
                          <div className="flex items-center justify-between">
                            <h3 className="font-medium">Vera AI Fundamentals</h3>
                            <Badge className="bg-amber-500">In Progress</Badge>
                          </div>
                          <p className="mt-2 text-sm text-gray-600">
                            Learn the core features and capabilities of Vera AI.
                          </p>
                          <div className="mt-4">
                            <div className="flex items-center justify-between text-sm">
                              <span>Progress</span>
                              <span>2/5 Modules</span>
                            </div>
                            <div className="mt-2 h-2 w-full rounded-full bg-gray-200">
                              <div className="h-2 rounded-full bg-[#0F4342]" style={{ width: "40%" }}></div>
                            </div>
                          </div>
                          <Button className="mt-4 w-full">Continue Learning</Button>
                        </div>

                        <div className="rounded-lg border p-4">
                          <div className="flex items-center justify-between">
                            <h3 className="font-medium">Advanced Automation</h3>
                            <Badge className="bg-blue-500">Not Started</Badge>
                          </div>
                          <p className="mt-2 text-sm text-gray-600">
                            Master the automation capabilities to streamline your workflows.
                          </p>
                          <div className="mt-4">
                            <div className="flex items-center justify-between text-sm">
                              <span>Progress</span>
                              <span>0/4 Modules</span>
                            </div>
                            <div className="mt-2 h-2 w-full rounded-full bg-gray-200">
                              <div className="h-2 rounded-full bg-[#0F4342]" style={{ width: "0%" }}></div>
                            </div>
                          </div>
                          <Button className="mt-4 w-full">Start Learning</Button>
                        </div>

                        <div className="rounded-lg border p-4">
                          <div className="flex items-center justify-between">
                            <h3 className="font-medium">Business Intelligence</h3>
                            <Badge className="bg-blue-500">Not Started</Badge>
                          </div>
                          <p className="mt-2 text-sm text-gray-600">
                            Learn how to leverage Vera AI's analytics and insights for better decision making.
                          </p>
                          <div className="mt-4">
                            <div className="flex items-center justify-between text-sm">
                              <span>Progress</span>
                              <span>0/6 Modules</span>
                            </div>
                            <div className="mt-2 h-2 w-full rounded-full bg-gray-200">
                              <div className="h-2 rounded-full bg-[#0F4342]" style={{ width: "0%" }}></div>
                            </div>
                          </div>
                          <Button className="mt-4 w-full">Start Learning</Button>
                        </div>

                        <div className="rounded-lg border p-4">
                          <div className="flex items-center justify-between">
                            <h3 className="font-medium">Team Collaboration</h3>
                            <Badge className="bg-blue-500">Not Started</Badge>
                          </div>
                          <p className="mt-2 text-sm text-gray-600">
                            Discover how to use Vera AI for effective team collaboration and communication.
                          </p>
                          <div className="mt-4">
                            <div className="flex items-center justify-between text-sm">
                              <span>Progress</span>
                              <span>0/3 Modules</span>
                            </div>
                            <div className="mt-2 h-2 w-full rounded-full bg-gray-200">
                              <div className="h-2 rounded-full bg-[#0F4342]" style={{ width: "0%" }}></div>
                            </div>
                          </div>
                          <Button className="mt-4 w-full">Start Learning</Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="space-y-6">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium">Quick Guides</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-center rounded-lg border p-2 text-sm hover:bg-gray-50 cursor-pointer">
                          <FileText className="mr-2 h-4 w-4 text-[#0F4342]" />
                          <span>How to create your first automation</span>
                        </div>
                        <div className="flex items-center rounded-lg border p-2 text-sm hover:bg-gray-50 cursor-pointer">
                          <FileText className="mr-2 h-4 w-4 text-[#0F4342]" />
                          <span>Connecting your email account</span>
                        </div>
                        <div className="flex items-center rounded-lg border p-2 text-sm hover:bg-gray-50 cursor-pointer">
                          <FileText className="mr-2 h-4 w-4 text-[#0F4342]" />
                          <span>Using Vera AI for meeting summaries</span>
                        </div>
                        <div className="flex items-center rounded-lg border p-2 text-sm hover:bg-gray-50 cursor-pointer">
                          <FileText className="mr-2 h-4 w-4 text-[#0F4342]" />
                          <span>Setting up custom notifications</span>
                        </div>
                        <div className="flex items-center rounded-lg border p-2 text-sm hover:bg-gray-50 cursor-pointer">
                          <FileText className="mr-2 h-4 w-4 text-[#0F4342]" />
                          <span>Generating reports with Vera AI</span>
                        </div>
                        <Button className="mt-2 w-full text-xs" variant="outline">
                          View All Guides
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium">Upcoming Webinars</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="rounded-lg border p-4">
                          <h3 className="font-medium">Advanced Automation Techniques</h3>
                          <div className="mt-2 space-y-1 text-xs text-gray-500">
                            <div className="flex items-center">
                              <Clock className="mr-1 h-3 w-3" />
                              <span>Oct 25, 2023 • 2:00 PM</span>
                            </div>
                            <div className="flex items-center">
                              <Users className="mr-1 h-3 w-3" />
                              <span>42 Registered</span>
                            </div>
                          </div>
                          <Button className="mt-3 w-full text-xs">Register Now</Button>
                        </div>

                        <div className="rounded-lg border p-4">
                          <h3 className="font-medium">Maximizing Business Intelligence</h3>
                          <div className="mt-2 space-y-1 text-xs text-gray-500">
                            <div className="flex items-center">
                              <Clock className="mr-1 h-3 w-3" />
                              <span>Nov 2, 2023 • 11:00 AM</span>
                            </div>
                            <div className="flex items-center">
                              <Users className="mr-1 h-3 w-3" />
                              <span>28 Registered</span>
                            </div>
                          </div>
                          <Button className="mt-3 w-full text-xs">Register Now</Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <PingLatencyMonitor />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="feedback" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card className="md:col-span-2">
                  <CardHeader>
                    <CardTitle>AI-Driven Team Check-ins</CardTitle>
                    <CardDescription>
                      Vera AI regularly checks in with your team to gather feedback and identify areas for improvement
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="rounded-lg border p-4">
                        <div className="flex items-center justify-between">
                          <h3 className="font-medium">Weekly Satisfaction Check</h3>
                          <Badge className="bg-green-500">Completed</Badge>
                        </div>
                        <p className="mt-2 text-sm text-gray-600">How satisfied are you with Vera AI this week?</p>
                        <div className="mt-4 flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="h-8 w-8 rounded-full bg-green-100 text-green-700 flex items-center justify-center mr-2">
                              <ThumbsUp className="h-4 w-4" />
                            </div>
                            <span className="text-sm">Very Satisfied</span>
                          </div>
                          <div className="text-xs text-gray-500">Submitted: Oct 15, 2023</div>
                        </div>
                      </div>

                      <div className="rounded-lg border p-4">
                        <div className="flex items-center justify-between">
                          <h3 className="font-medium">Feature Usage Survey</h3>
                          <Badge className="bg-amber-500">In Progress</Badge>
                        </div>
                        <p className="mt-2 text-sm text-gray-600">Which Vera AI features do you use most frequently?</p>
                        <Button className="mt-4 w-full">Complete Survey</Button>
                      </div>

                      <div className="rounded-lg border p-4">
                        <div className="flex items-center justify-between">
                          <h3 className="font-medium">Training Effectiveness</h3>
                          <Badge className="bg-blue-500">Upcoming</Badge>
                        </div>
                        <p className="mt-2 text-sm text-gray-600">How effective was your recent training session?</p>
                        <div className="mt-4 text-xs text-gray-500">Available after your next training session</div>
                      </div>

                      <div className="rounded-lg border p-4">
                        <div className="flex items-center justify-between">
                          <h3 className="font-medium">Monthly Team Pulse</h3>
                          <Badge className="bg-blue-500">Upcoming</Badge>
                        </div>
                        <p className="mt-2 text-sm text-gray-600">How is your team adapting to Vera AI?</p>
                        <div className="mt-4 text-xs text-gray-500">Available on Nov 1, 2023</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Team Insights</CardTitle>
                    <CardDescription>AI-generated insights based on team feedback</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="rounded-lg border p-4">
                        <h3 className="font-medium">Adoption Trends</h3>
                        <p className="mt-2 text-sm text-gray-600">
                          Your team is adopting Vera AI faster than 85% of similar-sized organizations.
                        </p>
                      </div>

                      <div className="rounded-lg border p-4">
                        <h3 className="font-medium">Feature Highlights</h3>
                        <p className="mt-2 text-sm text-gray-600">
                          Your team is making excellent use of automation features, but could benefit from more training
                          on analytics tools.
                        </p>
                      </div>

                      <div className="rounded-lg border p-4">
                        <h3 className="font-medium">Satisfaction Score</h3>
                        <div className="mt-4">
                          <div className="flex items-center justify-between text-sm">
                            <span>Team Satisfaction</span>
                            <span>92%</span>
                          </div>
                          <div className="mt-2 h-2 w-full rounded-full bg-gray-200">
                            <div className="h-2 rounded-full bg-green-500" style={{ width: "92%" }}></div>
                          </div>
                        </div>
                      </div>

                      <div className="rounded-lg border p-4">
                        <h3 className="font-medium">Recommended Actions</h3>
                        <div className="mt-4 space-y-2">
                          <div className="flex items-center">
                            <div className="h-6 w-6 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center mr-2">
                              <Lightbulb className="h-3 w-3" />
                            </div>
                            <span className="text-sm">Schedule analytics training session</span>
                          </div>
                          <div className="flex items-center">
                            <div className="h-6 w-6 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center mr-2">
                              <Lightbulb className="h-3 w-3" />
                            </div>
                            <span className="text-sm">Share best practices with new team members</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="ideas" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card className="md:col-span-2">
                  <CardHeader>
                    <CardTitle>Team Idea Exchange</CardTitle>
                    <CardDescription>Share and collaborate on ideas to improve your Vera AI experience</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="rounded-lg border p-4">
                        <div className="flex items-center justify-between">
                          <h3 className="font-medium">Custom Dashboard Widgets</h3>
                          <Badge className="bg-green-500">Trending</Badge>
                        </div>
                        <p className="mt-2 text-sm text-gray-600">
                          Allow team members to customize their dashboard with personalized widgets.
                        </p>
                        <div className="mt-4 flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="flex -space-x-2">
                              <div className="h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center text-xs">
                                JD
                              </div>
                              <div className="h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center text-xs">
                                SM
                              </div>
                              <div className="h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center text-xs">
                                +3
                              </div>
                            </div>
                            <span className="ml-2 text-xs text-gray-500">5 supporters</span>
                          </div>
                          <Button variant="outline" size="sm">
                            Support
                          </Button>
                        </div>
                      </div>

                      <div className="rounded-lg border p-4">
                        <div className="flex items-center justify-between">
                          <h3 className="font-medium">Mobile App for On-the-Go Access</h3>
                          <Badge className="bg-amber-500">New</Badge>
                        </div>
                        <p className="mt-2 text-sm text-gray-600">
                          Develop a mobile app for accessing Vera AI features while away from the desk.
                        </p>
                        <div className="mt-4 flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="flex -space-x-2">
                              <div className="h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center text-xs">
                                TS
                              </div>
                              <div className="h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center text-xs">
                                RK
                              </div>
                            </div>
                            <span className="ml-2 text-xs text-gray-500">2 supporters</span>
                          </div>
                          <Button variant="outline" size="sm">
                            Support
                          </Button>
                        </div>
                      </div>

                      <div className="rounded-lg border p-4">
                        <div className="flex items-center justify-between">
                          <h3 className="font-medium">Enhanced Team Collaboration Tools</h3>
                          <Badge className="bg-blue-500">Under Review</Badge>
                        </div>
                        <p className="mt-2 text-sm text-gray-600">
                          Add more collaborative features like shared workspaces and real-time editing.
                        </p>
                        <div className="mt-4 flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="flex -space-x-2">
                              <div className="h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center text-xs">
                                AL
                              </div>
                              <div className="h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center text-xs">
                                MJ
                              </div>
                              <div className="h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center text-xs">
                                +7
                              </div>
                            </div>
                            <span className="ml-2 text-xs text-gray-500">9 supporters</span>
                          </div>
                          <Button variant="outline" size="sm">
                            Support
                          </Button>
                        </div>
                      </div>

                      <div className="rounded-lg border p-4">
                        <div className="flex items-center justify-between">
                          <h3 className="font-medium">Integration with Project Management Tools</h3>
                          <Badge className="bg-purple-500">Planned</Badge>
                        </div>
                        <p className="mt-2 text-sm text-gray-600">
                          Add integrations with popular project management tools like Asana and Trello.
                        </p>
                        <div className="mt-4 flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="flex -space-x-2">
                              <div className="h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center text-xs">
                                PL
                              </div>
                              <div className="h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center text-xs">
                                KT
                              </div>
                              <div className="h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center text-xs">
                                +4
                              </div>
                            </div>
                            <span className="ml-2 text-xs text-gray-500">6 supporters</span>
                          </div>
                          <Button variant="outline" size="sm">
                            Support
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Submit Your Idea</CardTitle>
                      <CardDescription>Share your suggestions for improving Vera AI</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Idea Title</label>
                          <Input placeholder="Enter a concise title for your idea" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Category</label>
                          <select className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background">
                            <option>User Interface</option>
                            <option>Functionality</option>
                            <option>Integrations</option>
                            <option>Performance</option>
                            <option>Other</option>
                          </select>
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Description</label>
                          <textarea
                            className="w-full min-h-[100px] rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
                            placeholder="Describe your idea in detail. What problem does it solve?"
                          ></textarea>
                        </div>
                        <Button className="w-full bg-[#DBCA91] text-[#0F4342] hover:bg-[#c9b87e]">Submit Idea</Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium">Idea Status</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="h-3 w-3 rounded-full bg-blue-500 mr-2"></div>
                            <span className="text-sm">New</span>
                          </div>
                          <span className="text-xs text-gray-500">3 ideas</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="h-3 w-3 rounded-full bg-amber-500 mr-2"></div>
                            <span className="text-sm">Under Review</span>
                          </div>
                          <span className="text-xs text-gray-500">5 ideas</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="h-3 w-3 rounded-full bg-purple-500 mr-2"></div>
                            <span className="text-sm">Planned</span>
                          </div>
                          <span className="text-xs text-gray-500">2 ideas</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="h-3 w-3 rounded-full bg-green-500 mr-2"></div>
                            <span className="text-sm">Implemented</span>
                          </div>
                          <span className="text-xs text-gray-500">8 ideas</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="h-3 w-3 rounded-full bg-red-500 mr-2"></div>
                            <span className="text-sm">Not Planned</span>
                          </div>
                          <span className="text-xs text-gray-500">1 idea</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}

