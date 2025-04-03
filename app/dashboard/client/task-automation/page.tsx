"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { AIChatAssistant } from "@/components/ai-chat-assistant"
import { PingLatencyMonitor } from "@/components/ping-latency-monitor"
import {
  CheckCircle,
  Clock,
  AlertCircle,
  Plus,
  Search,
  Filter,
  Calendar,
  Mail,
  FileText,
  MessageSquare,
  Phone,
  Trash2,
  Edit,
  Play,
  Pause,
  Settings,
  ArrowRight,
  MoreHorizontal,
} from "lucide-react"

// Dummy data for tasks
const dummyTasks = [
  {
    id: 1,
    title: "Follow up with ABC Corp",
    description: "Send a follow-up email regarding the proposal we sent last week.",
    status: "pending",
    priority: "high",
    dueDate: "2023-10-18",
    assignee: "John Smith",
    category: "client",
  },
  {
    id: 2,
    title: "Prepare quarterly report",
    description: "Compile data and prepare the Q3 performance report for the board meeting.",
    status: "in-progress",
    priority: "medium",
    dueDate: "2023-10-20",
    assignee: "John Smith",
    category: "admin",
  },
  {
    id: 3,
    title: "Update client database",
    description: "Add new client information and update contact details for existing clients.",
    status: "completed",
    priority: "low",
    dueDate: "2023-10-15",
    assignee: "Sarah Johnson",
    category: "admin",
  },
  {
    id: 4,
    title: "Schedule meeting with XYZ Inc",
    description: "Arrange a demo meeting with the procurement team at XYZ Inc.",
    status: "pending",
    priority: "medium",
    dueDate: "2023-10-19",
    assignee: "John Smith",
    category: "client",
  },
  {
    id: 5,
    title: "Review marketing materials",
    description: "Review and approve the new marketing brochures for the Q4 campaign.",
    status: "pending",
    priority: "low",
    dueDate: "2023-10-22",
    assignee: "Emily Davis",
    category: "marketing",
  },
]

// Dummy data for automations
const dummyAutomations = [
  {
    id: 101,
    name: "Client Meeting Follow-up",
    description: "Automatically sends a follow-up email 24 hours after a client meeting.",
    status: "active",
    trigger: "Calendar Event Completed",
    action: "Send Email",
    lastRun: "Yesterday, 3:15 PM",
    runCount: 28,
  },
  {
    id: 102,
    name: "New Lead Assignment",
    description: "Assigns new leads to team members based on territory and expertise.",
    status: "active",
    trigger: "New CRM Lead Created",
    action: "Assign Task",
    lastRun: "Today, 9:30 AM",
    runCount: 45,
  },
  {
    id: 103,
    name: "Invoice Reminder",
    description: "Sends a reminder email for unpaid invoices 3 days before due date.",
    status: "paused",
    trigger: "Invoice Due Date Approaching",
    action: "Send Email",
    lastRun: "Oct 12, 2023",
    runCount: 17,
  },
  {
    id: 104,
    name: "Weekly Report Generation",
    description: "Generates and emails weekly performance reports every Monday morning.",
    status: "active",
    trigger: "Schedule (Weekly)",
    action: "Generate Report & Send Email",
    lastRun: "Oct 16, 2023",
    runCount: 42,
  },
]

export default function TaskAutomationPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedTask, setSelectedTask] = useState<any>(null)
  const [isTaskDialogOpen, setIsTaskDialogOpen] = useState(false)
  const [newTaskDialogOpen, setNewTaskDialogOpen] = useState(false)
  const [selectedAutomation, setSelectedAutomation] = useState<any>(null)
  const [isAutomationDialogOpen, setIsAutomationDialogOpen] = useState(false)
  const [newAutomationDialogOpen, setNewAutomationDialogOpen] = useState(false)

  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    priority: "medium",
    dueDate: "",
    assignee: "John Smith",
    category: "client",
  })

  const handleTaskClick = (task: any) => {
    setSelectedTask(task)
    setIsTaskDialogOpen(true)
  }

  const handleAutomationClick = (automation: any) => {
    setSelectedAutomation(automation)
    setIsAutomationDialogOpen(true)
  }

  const handleCreateTask = () => {
    if (!newTask.title.trim()) return

    // In a real app, this would send the new task to the backend
    // For now, we'll just close the dialog
    setNewTaskDialogOpen(false)

    // Reset form
    setNewTask({
      title: "",
      description: "",
      priority: "medium",
      dueDate: "",
      assignee: "John Smith",
      category: "client",
    })

    // Show success message
    alert("Task created successfully!")
  }

  const toggleAutomationStatus = (automation: any, e: React.MouseEvent) => {
    e.stopPropagation()
    // In a real app, this would update the automation status in the backend
    console.log(`Toggling automation ${automation.id} status`)
  }

  const filteredTasks = dummyTasks.filter(
    (task) =>
      task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      task.description.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const filteredAutomations = dummyAutomations.filter(
    (automation) =>
      automation.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      automation.description.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      <div className="flex flex-1 flex-col">
        <main className="flex-1 p-4 md:p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-[#0F4342]">Task & Admin Automation</h1>
            <p className="text-gray-500">Manage your tasks and automate routine processes</p>
          </div>

          <div className="mb-6 flex flex-col sm:flex-row items-center gap-4">
            <div className="relative w-full sm:w-auto flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <Input
                placeholder="Search tasks and automations..."
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
              onClick={() => setNewTaskDialogOpen(true)}
            >
              <Plus className="mr-2 h-4 w-4" /> New Task
            </Button>
          </div>

          <Tabs defaultValue="tasks" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="tasks">Tasks</TabsTrigger>
              <TabsTrigger value="automations">Automations</TabsTrigger>
            </TabsList>

            <TabsContent value="tasks" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>My Tasks</CardTitle>
                  <CardDescription>Manage and track your assigned tasks</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {filteredTasks.length > 0 ? (
                      filteredTasks.map((task) => (
                        <div
                          key={task.id}
                          className={`flex cursor-pointer items-start rounded-lg border p-4 hover:bg-gray-50 ${
                            task.status === "completed" ? "opacity-60" : ""
                          }`}
                          onClick={() => handleTaskClick(task)}
                        >
                          <div
                            className={`mr-4 rounded-full p-2 ${
                              task.status === "completed"
                                ? "bg-green-100 text-green-800"
                                : task.status === "in-progress"
                                  ? "bg-blue-100 text-blue-800"
                                  : task.priority === "high"
                                    ? "bg-red-100 text-red-800"
                                    : task.priority === "medium"
                                      ? "bg-amber-100 text-amber-800"
                                      : "bg-gray-100 text-gray-800"
                            }`}
                          >
                            {task.status === "completed" ? (
                              <CheckCircle className="h-5 w-5" />
                            ) : task.status === "in-progress" ? (
                              <Clock className="h-5 w-5" />
                            ) : (
                              <AlertCircle className="h-5 w-5" />
                            )}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <h4 className={`font-medium ${task.status === "completed" ? "line-through" : ""}`}>
                                {task.title}
                              </h4>
                              <span className="text-xs text-gray-500">Due: {task.dueDate}</span>
                            </div>
                            <div className="mt-1 text-sm text-gray-500 line-clamp-1">{task.description}</div>
                            <div className="mt-2 flex items-center gap-2">
                              <Badge
                                className={`${
                                  task.status === "completed"
                                    ? "bg-green-500"
                                    : task.status === "in-progress"
                                      ? "bg-blue-500"
                                      : "bg-amber-500"
                                }`}
                              >
                                {task.status === "completed"
                                  ? "Completed"
                                  : task.status === "in-progress"
                                    ? "In Progress"
                                    : "Pending"}
                              </Badge>
                              <Badge variant="outline" className="text-xs">
                                {task.category.charAt(0).toUpperCase() + task.category.slice(1)}
                              </Badge>
                            </div>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="text-center py-8 text-gray-500">No tasks found matching your search.</div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="automations" className="mt-6">
              <div className="flex justify-end mb-4">
                <Button
                  className="bg-[#DBCA91] text-[#0F4342] hover:bg-[#c9b87e]"
                  onClick={() => setNewAutomationDialogOpen(true)}
                >
                  <Plus className="mr-2 h-4 w-4" /> New Automation
                </Button>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Active Automations</CardTitle>
                  <CardDescription>Automated workflows that save you time</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {filteredAutomations.length > 0 ? (
                      filteredAutomations.map((automation) => (
                        <div
                          key={automation.id}
                          className="flex cursor-pointer items-start rounded-lg border p-4 hover:bg-gray-50"
                          onClick={() => handleAutomationClick(automation)}
                        >
                          <div
                            className={`mr-4 rounded-full p-2 ${
                              automation.status === "active"
                                ? "bg-green-100 text-green-800"
                                : "bg-gray-100 text-gray-800"
                            }`}
                          >
                            {automation.status === "active" ? (
                              <Play className="h-5 w-5" />
                            ) : (
                              <Pause className="h-5 w-5" />
                            )}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <h4 className="font-medium">{automation.name}</h4>
                              <Button
                                variant="ghost"
                                size="sm"
                                className={automation.status === "active" ? "text-green-600" : "text-gray-500"}
                                onClick={(e) => toggleAutomationStatus(automation, e)}
                              >
                                {automation.status === "active" ? "Active" : "Paused"}
                              </Button>
                            </div>
                            <div className="mt-1 text-sm text-gray-500 line-clamp-1">{automation.description}</div>
                            <div className="mt-2 flex items-center gap-2 text-xs text-gray-500">
                              <span>Trigger: {automation.trigger}</span>
                              <ArrowRight className="h-3 w-3" />
                              <span>Action: {automation.action}</span>
                            </div>
                            <div className="mt-2 flex items-center gap-4 text-xs text-gray-500">
                              <span>Last run: {automation.lastRun}</span>
                              <span>Total runs: {automation.runCount}</span>
                            </div>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="text-center py-8 text-gray-500">No automations found matching your search.</div>
                    )}
                  </div>
                </CardContent>
              </Card>

              <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Automation Templates</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex items-center rounded-lg border p-2 text-sm hover:bg-gray-50 cursor-pointer">
                        <Calendar className="mr-2 h-4 w-4 text-[#0F4342]" />
                        <span>Meeting Follow-up</span>
                      </div>
                      <div className="flex items-center rounded-lg border p-2 text-sm hover:bg-gray-50 cursor-pointer">
                        <Mail className="mr-2 h-4 w-4 text-[#0F4342]" />
                        <span>Email Response</span>
                      </div>
                      <div className="flex items-center rounded-lg border p-2 text-sm hover:bg-gray-50 cursor-pointer">
                        <FileText className="mr-2 h-4 w-4 text-[#0F4342]" />
                        <span>Document Approval</span>
                      </div>
                      <div className="flex items-center rounded-lg border p-2 text-sm hover:bg-gray-50 cursor-pointer">
                        <MessageSquare className="mr-2 h-4 w-4 text-[#0F4342]" />
                        <span>Client Onboarding</span>
                      </div>
                      <div className="flex items-center rounded-lg border p-2 text-sm hover:bg-gray-50 cursor-pointer">
                        <Phone className="mr-2 h-4 w-4 text-[#0F4342]" />
                        <span>Call Summary</span>
                      </div>
                      <Button className="mt-2 w-full text-xs" variant="outline">
                        View All Templates
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Automation Stats</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">132 hours</div>
                    <div className="mt-1 text-xs text-gray-500">Saved this month</div>
                    <div className="mt-4 space-y-2">
                      <div>
                        <div className="mb-1 flex items-center justify-between text-xs">
                          <span>Email Processing</span>
                          <span>48 hours</span>
                        </div>
                        <div className="h-2 w-full rounded-full bg-gray-200">
                          <div className="h-2 rounded-full bg-[#0F4342]" style={{ width: "36%" }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="mb-1 flex items-center justify-between text-xs">
                          <span>Meeting Summaries</span>
                          <span>35 hours</span>
                        </div>
                        <div className="h-2 w-full rounded-full bg-gray-200">
                          <div className="h-2 rounded-full bg-[#0F4342]" style={{ width: "26%" }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="mb-1 flex items-center justify-between text-xs">
                          <span>Data Entry</span>
                          <span>29 hours</span>
                        </div>
                        <div className="h-2 w-full rounded-full bg-gray-200">
                          <div className="h-2 rounded-full bg-[#0F4342]" style={{ width: "22%" }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="mb-1 flex items-center justify-between text-xs">
                          <span>Report Generation</span>
                          <span>20 hours</span>
                        </div>
                        <div className="h-2 w-full rounded-full bg-gray-200">
                          <div className="h-2 rounded-full bg-[#0F4342]" style={{ width: "16%" }}></div>
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
                    <div className="text-2xl font-bold">87%</div>
                    <div className="mt-1 text-xs text-gray-500">On-time completion rate</div>
                    <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
                      <div className="flex items-center rounded-lg bg-green-100 p-2 text-green-700">
                        <CheckCircle className="mr-1 h-4 w-4" />
                        <span>42 Completed</span>
                      </div>
                      <div className="flex items-center rounded-lg bg-amber-100 p-2 text-amber-700">
                        <Clock className="mr-1 h-4 w-4" />
                        <span>8 Pending</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <PingLatencyMonitor />
              </div>
            </TabsContent>
          </Tabs>

          <div className="mt-8">
            <h2 className="mb-4 text-xl font-semibold text-[#0F4342]">Vera Assistant</h2>
            <p className="mb-4 text-gray-500">Need help with task management or automation? Ask Vera.</p>
            <AIChatAssistant initialMessage="Hello! I'm Vera, your AI assistant for task management and automation. I can help you create tasks, set up automations, or answer questions about your workflow. What would you like help with today?" />
          </div>

          {/* Task Dialog */}
          <Dialog open={isTaskDialogOpen} onOpenChange={setIsTaskDialogOpen}>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>{selectedTask?.title}</DialogTitle>
                <DialogDescription>Task details and management</DialogDescription>
              </DialogHeader>
              {selectedTask && (
                <div className="space-y-4">
                  <div className="rounded-lg border p-4">
                    <div className="text-sm">{selectedTask.description}</div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="font-medium">Status</div>
                      <div className="mt-1">
                        <Badge
                          className={`${
                            selectedTask.status === "completed"
                              ? "bg-green-500"
                              : selectedTask.status === "in-progress"
                                ? "bg-blue-500"
                                : "bg-amber-500"
                          }`}
                        >
                          {selectedTask.status === "completed"
                            ? "Completed"
                            : selectedTask.status === "in-progress"
                              ? "In Progress"
                              : "Pending"}
                        </Badge>
                      </div>
                    </div>
                    <div>
                      <div className="font-medium">Priority</div>
                      <div className="mt-1">
                        <Badge variant="outline">
                          {selectedTask.priority.charAt(0).toUpperCase() + selectedTask.priority.slice(1)}
                        </Badge>
                      </div>
                    </div>
                    <div>
                      <div className="font-medium">Due Date</div>
                      <div>{selectedTask.dueDate}</div>
                    </div>
                    <div>
                      <div className="font-medium">Assignee</div>
                      <div>{selectedTask.assignee}</div>
                    </div>
                    <div>
                      <div className="font-medium">Category</div>
                      <div>{selectedTask.category.charAt(0).toUpperCase() + selectedTask.category.slice(1)}</div>
                    </div>
                  </div>

                  <div className="flex justify-end space-x-2">
                    {selectedTask.status !== "completed" && (
                      <Button variant="outline" className="border-green-500 text-green-500 hover:bg-green-50">
                        <CheckCircle className="mr-2 h-4 w-4" /> Mark Complete
                      </Button>
                    )}
                    <Button variant="outline">
                      <Edit className="mr-2 h-4 w-4" /> Edit
                    </Button>
                    <Button variant="outline" className="border-red-500 text-red-500 hover:bg-red-50">
                      <Trash2 className="mr-2 h-4 w-4" /> Delete
                    </Button>
                  </div>
                </div>
              )}
            </DialogContent>
          </Dialog>

          {/* New Task Dialog */}
          <Dialog open={newTaskDialogOpen} onOpenChange={setNewTaskDialogOpen}>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Create New Task</DialogTitle>
                <DialogDescription>Add a new task to your list</DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="title" className="text-sm font-medium">
                    Title
                  </label>
                  <Input
                    id="title"
                    placeholder="Task title"
                    value={newTask.title}
                    onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="description" className="text-sm font-medium">
                    Description
                  </label>
                  <Textarea
                    id="description"
                    placeholder="Task description"
                    rows={3}
                    value={newTask.description}
                    onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="priority" className="text-sm font-medium">
                      Priority
                    </label>
                    <select
                      id="priority"
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
                      value={newTask.priority}
                      onChange={(e) => setNewTask({ ...newTask, priority: e.target.value })}
                    >
                      <option value="low">Low</option>
                      <option value="medium">Medium</option>
                      <option value="high">High</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="dueDate" className="text-sm font-medium">
                      Due Date
                    </label>
                    <Input
                      id="dueDate"
                      type="date"
                      value={newTask.dueDate}
                      onChange={(e) => setNewTask({ ...newTask, dueDate: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="assignee" className="text-sm font-medium">
                      Assignee
                    </label>
                    <select
                      id="assignee"
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
                      value={newTask.assignee}
                      onChange={(e) => setNewTask({ ...newTask, assignee: e.target.value })}
                    >
                      <option value="John Smith">John Smith</option>
                      <option value="Sarah Johnson">Sarah Johnson</option>
                      <option value="Emily Davis">Emily Davis</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="category" className="text-sm font-medium">
                      Category
                    </label>
                    <select
                      id="category"
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
                      value={newTask.category}
                      onChange={(e) => setNewTask({ ...newTask, category: e.target.value })}
                    >
                      <option value="client">Client</option>
                      <option value="admin">Admin</option>
                      <option value="marketing">Marketing</option>
                      <option value="finance">Finance</option>
                    </select>
                  </div>
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setNewTaskDialogOpen(false)}>
                  Cancel
                </Button>
                <Button
                  className="bg-[#DBCA91] text-[#0F4342] hover:bg-[#c9b87e]"
                  onClick={handleCreateTask}
                  disabled={!newTask.title.trim()}
                >
                  Create Task
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          {/* Automation Dialog */}
          <Dialog open={isAutomationDialogOpen} onOpenChange={setIsAutomationDialogOpen}>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>{selectedAutomation?.name}</DialogTitle>
                <DialogDescription>Automation details and settings</DialogDescription>
              </DialogHeader>
              {selectedAutomation && (
                <div className="space-y-4">
                  <div className="rounded-lg border p-4">
                    <div className="text-sm">{selectedAutomation.description}</div>
                  </div>

                  <div className="space-y-2">
                    <div className="font-medium">Status</div>
                    <div className="flex items-center">
                      <div
                        className={`mr-2 h-2 w-2 rounded-full ${
                          selectedAutomation.status === "active" ? "bg-green-500" : "bg-gray-400"
                        }`}
                      ></div>
                      <span>{selectedAutomation.status === "active" ? "Active" : "Paused"}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="font-medium">Trigger</div>
                      <div>{selectedAutomation.trigger}</div>
                    </div>
                    <div>
                      <div className="font-medium">Action</div>
                      <div>{selectedAutomation.action}</div>
                    </div>
                    <div>
                      <div className="font-medium">Last Run</div>
                      <div>{selectedAutomation.lastRun}</div>
                    </div>
                    <div>
                      <div className="font-medium">Total Runs</div>
                      <div>{selectedAutomation.runCount}</div>
                    </div>
                  </div>

                  <div className="flex justify-end space-x-2">
                    <Button variant="outline">
                      <Settings className="mr-2 h-4 w-4" /> Configure
                    </Button>
                    {selectedAutomation.status === "active" ? (
                      <Button variant="outline" className="border-amber-500 text-amber-500 hover:bg-amber-50">
                        <Pause className="mr-2 h-4 w-4" /> Pause
                      </Button>
                    ) : (
                      <Button variant="outline" className="border-green-500 text-green-500 hover:bg-green-50">
                        <Play className="mr-2 h-4 w-4" /> Activate
                      </Button>
                    )}
                    <Button variant="outline" className="border-red-500 text-red-500 hover:bg-red-50">
                      <Trash2 className="mr-2 h-4 w-4" /> Delete
                    </Button>
                  </div>
                </div>
              )}
            </DialogContent>
          </Dialog>

          {/* New Automation Dialog */}
          <Dialog open={newAutomationDialogOpen} onOpenChange={setNewAutomationDialogOpen}>
            <DialogContent className="sm:max-w-lg">
              <DialogHeader>
                <DialogTitle>Create New Automation</DialogTitle>
                <DialogDescription>Set up a new automated workflow</DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="automation-name" className="text-sm font-medium">
                    Name
                  </label>
                  <Input id="automation-name" placeholder="Automation name" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="automation-description" className="text-sm font-medium">
                    Description
                  </label>
                  <Textarea id="automation-description" placeholder="Describe what this automation does" rows={2} />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Trigger</label>
                  <div className="rounded-lg border p-4">
                    <div className="flex items-center justify-between">
                      <div className="font-medium">When this happens...</div>
                      <Button variant="outline" size="sm">
                        <Plus className="mr-2 h-3 w-3" /> Select Trigger
                      </Button>
                    </div>
                    <div className="mt-4 space-y-2">
                      <div className="flex items-center rounded-lg border p-2 text-sm">
                        <Calendar className="mr-2 h-4 w-4 text-[#0F4342]" />
                        <span className="flex-1">When a calendar event ends</span>
                        <Button variant="ghost" size="sm">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Action</label>
                  <div className="rounded-lg border p-4">
                    <div className="flex items-center justify-between">
                      <div className="font-medium">Do this...</div>
                      <Button variant="outline" size="sm">
                        <Plus className="mr-2 h-3 w-3" /> Add Action
                      </Button>
                    </div>
                    <div className="mt-4 space-y-2">
                      <div className="flex items-center rounded-lg border p-2 text-sm">
                        <Mail className="mr-2 h-4 w-4 text-[#0F4342]" />
                        <span className="flex-1">Send an email</span>
                        <Button variant="ghost" size="sm">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setNewAutomationDialogOpen(false)}>
                  Cancel
                </Button>
                <Button className="bg-[#DBCA91] text-[#0F4342] hover:bg-[#c9b87e]">Create & Activate</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </main>
      </div>
    </div>
  )
}

