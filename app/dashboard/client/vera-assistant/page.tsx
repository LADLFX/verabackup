"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AIChatAssistant } from "@/components/ai-chat-assistant"
import { PingLatencyMonitor } from "@/components/ping-latency-monitor"
import {
  Bot,
  Calendar,
  Clock,
  CheckCircle,
  FileText,
  Mail,
  Phone,
  MessageSquare,
  Mic,
  Volume2,
  Settings,
} from "lucide-react"

export default function VeraAssistantPage() {
  const [voiceMode, setVoiceMode] = useState(false)

  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      <div className="flex flex-1 flex-col">
        <main className="flex-1 p-4 md:p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-[#0F4342]">Vera Assistant</h1>
            <p className="text-gray-500">Your AI-powered business assistant</p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="md:col-span-2">
              <Tabs defaultValue="chat" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="chat">Chat</TabsTrigger>
                  <TabsTrigger value="history">Conversation History</TabsTrigger>
                </TabsList>

                <TabsContent value="chat" className="mt-6">
                  <Card className="border shadow-sm">
                    <CardHeader className="pb-2">
                      <div className="flex items-center justify-between">
                        <div>
                          <CardTitle>Chat with Vera</CardTitle>
                          <CardDescription>Ask questions, give commands, or request assistance</CardDescription>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button
                            variant="outline"
                            size="sm"
                            className={voiceMode ? "bg-blue-50 text-blue-600" : ""}
                            onClick={() => setVoiceMode(!voiceMode)}
                          >
                            {voiceMode ? <Volume2 className="mr-2 h-4 w-4" /> : <Mic className="mr-2 h-4 w-4" />}
                            {voiceMode ? "Voice Mode On" : "Voice Mode Off"}
                          </Button>
                          <Button variant="ghost" size="icon">
                            <Settings className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-0">
                      <AIChatAssistant initialMessage="Hello John! I'm Vera, your AI business assistant. How can I help you today? You can ask me to schedule meetings, draft emails, find information, or automate tasks." />
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="history" className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Recent Conversations</CardTitle>
                      <CardDescription>Your conversation history with Vera</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="rounded-lg border p-4 hover:bg-gray-50 cursor-pointer">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <Bot className="mr-2 h-5 w-5 text-[#0F4342]" />
                              <h3 className="font-medium">Meeting Preparation</h3>
                            </div>
                            <span className="text-xs text-gray-500">Today, 10:30 AM</span>
                          </div>
                          <p className="mt-2 text-sm text-gray-600 line-clamp-2">
                            You asked Vera to prepare for your client meeting with ABC Corp, including gathering recent
                            emails, call notes, and account history.
                          </p>
                          <div className="mt-2 flex items-center text-xs text-[#0F4342]">
                            <CheckCircle className="mr-1 h-3 w-3" />
                            <span>3 actions completed</span>
                          </div>
                        </div>

                        <div className="rounded-lg border p-4 hover:bg-gray-50 cursor-pointer">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <Bot className="mr-2 h-5 w-5 text-[#0F4342]" />
                              <h3 className="font-medium">Email Draft</h3>
                            </div>
                            <span className="text-xs text-gray-500">Yesterday, 3:45 PM</span>
                          </div>
                          <p className="mt-2 text-sm text-gray-600 line-clamp-2">
                            You requested Vera to draft a follow-up email to the marketing team regarding the Q4
                            campaign launch timeline.
                          </p>
                          <div className="mt-2 flex items-center text-xs text-[#0F4342]">
                            <Mail className="mr-1 h-3 w-3" />
                            <span>Email drafted and sent</span>
                          </div>
                        </div>

                        <div className="rounded-lg border p-4 hover:bg-gray-50 cursor-pointer">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <Bot className="mr-2 h-5 w-5 text-[#0F4342]" />
                              <h3 className="font-medium">Task Automation</h3>
                            </div>
                            <span className="text-xs text-gray-500">Oct 15, 2023</span>
                          </div>
                          <p className="mt-2 text-sm text-gray-600 line-clamp-2">
                            You asked Vera to set up an automation for weekly report generation and distribution to the
                            management team.
                          </p>
                          <div className="mt-2 flex items-center text-xs text-[#0F4342]">
                            <CheckCircle className="mr-1 h-3 w-3" />
                            <span>Automation created and active</span>
                          </div>
                        </div>

                        <div className="rounded-lg border p-4 hover:bg-gray-50 cursor-pointer">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <Bot className="mr-2 h-5 w-5 text-[#0F4342]" />
                              <h3 className="font-medium">Data Analysis</h3>
                            </div>
                            <span className="text-xs text-gray-500">Oct 12, 2023</span>
                          </div>
                          <p className="mt-2 text-sm text-gray-600 line-clamp-2">
                            You requested Vera to analyze sales data for Q3 and identify key trends and opportunities.
                          </p>
                          <div className="mt-2 flex items-center text-xs text-[#0F4342]">
                            <FileText className="mr-1 h-3 w-3" />
                            <span>Report generated</span>
                          </div>
                        </div>

                        <Button variant="outline" className="w-full">
                          View All Conversations
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">What Vera Can Do</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center rounded-lg border p-2 text-sm hover:bg-gray-50 cursor-pointer">
                      <Calendar className="mr-2 h-4 w-4 text-[#0F4342]" />
                      <span>Schedule meetings & reminders</span>
                    </div>
                    <div className="flex items-center rounded-lg border p-2 text-sm hover:bg-gray-50 cursor-pointer">
                      <Mail className="mr-2 h-4 w-4 text-[#0F4342]" />
                      <span>Draft & send emails</span>
                    </div>
                    <div className="flex items-center rounded-lg border p-2 text-sm hover:bg-gray-50 cursor-pointer">
                      <FileText className="mr-2 h-4 w-4 text-[#0F4342]" />
                      <span>Create & update documents</span>
                    </div>
                    <div className="flex items-center rounded-lg border p-2 text-sm hover:bg-gray-50 cursor-pointer">
                      <Phone className="mr-2 h-4 w-4 text-[#0F4342]" />
                      <span>Make calls & transcribe</span>
                    </div>
                    <div className="flex items-center rounded-lg border p-2 text-sm hover:bg-gray-50 cursor-pointer">
                      <MessageSquare className="mr-2 h-4 w-4 text-[#0F4342]" />
                      <span>Answer questions & find info</span>
                    </div>
                    <div className="flex items-center rounded-lg border p-2 text-sm hover:bg-gray-50 cursor-pointer">
                      <Clock className="mr-2 h-4 w-4 text-[#0F4342]" />
                      <span>Automate routine tasks</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Recent Actions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-start text-xs">
                      <CheckCircle className="mr-2 mt-0.5 h-3 w-3 text-green-500" />
                      <div>
                        <p className="font-medium">Meeting scheduled</p>
                        <p className="text-gray-500">Client review with ABC Corp, tomorrow at 2:00 PM</p>
                        <p className="text-gray-400">10 minutes ago</p>
                      </div>
                    </div>
                    <div className="flex items-start text-xs">
                      <CheckCircle className="mr-2 mt-0.5 h-3 w-3 text-green-500" />
                      <div>
                        <p className="font-medium">Email drafted</p>
                        <p className="text-gray-500">Follow-up to marketing team about Q4 campaign</p>
                        <p className="text-gray-400">1 hour ago</p>
                      </div>
                    </div>
                    <div className="flex items-start text-xs">
                      <CheckCircle className="mr-2 mt-0.5 h-3 w-3 text-green-500" />
                      <div>
                        <p className="font-medium">CRM updated</p>
                        <p className="text-gray-500">Added notes from call with XYZ Inc</p>
                        <p className="text-gray-400">3 hours ago</p>
                      </div>
                    </div>
                    <div className="flex items-start text-xs">
                      <CheckCircle className="mr-2 mt-0.5 h-3 w-3 text-green-500" />
                      <div>
                        <p className="font-medium">Task created</p>
                        <p className="text-gray-500">Follow up with new lead from website inquiry</p>
                        <p className="text-gray-400">Yesterday</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <PingLatencyMonitor />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

