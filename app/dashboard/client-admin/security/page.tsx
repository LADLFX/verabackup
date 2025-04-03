"use client"

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
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { PingLatencyMonitor } from "@/components/ping-latency-monitor"
import { Eye, Download, Search, Plus, Edit, Trash2, AlertCircle, CheckCircle, Clock, Filter } from "lucide-react"

// Dummy data for users
const dummyUsers = [
  {
    id: 1,
    name: "John Smith",
    email: "john.smith@company.com",
    role: "Standard User",
    status: "active",
    lastLogin: "Today, 9:30 AM",
    department: "Sales",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    email: "sarah.johnson@company.com",
    role: "Admin",
    status: "active",
    lastLogin: "Today, 10:15 AM",
    department: "Management",
  },
  {
    id: 3,
    name: "Michael Brown",
    email: "michael.brown@company.com",
    role: "Standard User",
    status: "active",
    lastLogin: "Yesterday, 4:45 PM",
    department: "Operations",
  },
  {
    id: 4,
    name: "Emily Davis",
    email: "emily.davis@company.com",
    role: "Standard User",
    status: "inactive",
    lastLogin: "Oct 12, 2023",
    department: "Marketing",
  },
  {
    id: 5,
    name: "David Wilson",
    email: "david.wilson@company.com",
    role: "Read Only",
    status: "active",
    lastLogin: "Today, 11:30 AM",
    department: "Finance",
  },
]

// Dummy data for audit logs
const dummyAuditLogs = [
  {
    id: 1001,
    user: "Sarah Johnson",
    action: "User Permission Changed",
    details: "Changed role for Emily Davis from Standard User to Read Only",
    timestamp: "Today, 10:30 AM",
    ipAddress: "192.168.1.45",
  },
  {
    id: 1002,
    user: "System",
    action: "Automated Backup",
    details: "Weekly data backup completed successfully",
    timestamp: "Today, 3:00 AM",
    ipAddress: "10.0.0.5",
  },
  {
    id: 1003,
    user: "John Smith",
    action: "Document Access",
    details: "Accessed sensitive financial report Q3_Results.pdf",
    timestamp: "Yesterday, 2:15 PM",
    ipAddress: "192.168.1.22",
  },
  {
    id: 1004,
    user: "Sarah Johnson",
    action: "User Created",
    details: "Created new user account for David Wilson",
    timestamp: "Oct 15, 2023",
    ipAddress: "192.168.1.45",
  },
  {
    id: 1005,
    user: "Michael Brown",
    action: "Data Export",
    details: "Exported client contact list to CSV",
    timestamp: "Oct 14, 2023",
    ipAddress: "192.168.1.30",
  },
]

export default function SecurityAccessPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedUser, setSelectedUser] = useState<any>(null)
  const [isUserDialogOpen, setIsUserDialogOpen] = useState(false)
  const [newUserDialogOpen, setNewUserDialogOpen] = useState(false)
  const [auditLogDateRange, setAuditLogDateRange] = useState("7days")

  const handleUserClick = (user: any) => {
    setSelectedUser(user)
    setIsUserDialogOpen(true)
  }

  const filteredUsers = dummyUsers.filter(
    (user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.department.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const filteredAuditLogs = dummyAuditLogs.filter(
    (log) =>
      log.user.toLowerCase().includes(searchQuery.toLowerCase()) ||
      log.action.toLowerCase().includes(searchQuery.toLowerCase()) ||
      log.details.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      <div className="flex flex-1 flex-col">
        <main className="flex-1 p-4 md:p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-[#0F4342]">Security & Access</h1>
            <p className="text-gray-500">Manage user permissions, security settings, and compliance</p>
          </div>

          <div className="mb-6 flex flex-col sm:flex-row items-center gap-4">
            <div className="relative w-full sm:w-auto flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <Input
                placeholder="Search users, permissions, or logs..."
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
              onClick={() => setNewUserDialogOpen(true)}
            >
              <Plus className="mr-2 h-4 w-4" /> Add User
            </Button>
          </div>

          <Tabs defaultValue="users" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
              <TabsTrigger value="users">User Management</TabsTrigger>
              <TabsTrigger value="roles">Roles & Permissions</TabsTrigger>
              <TabsTrigger value="audit">Audit Logs</TabsTrigger>
              <TabsTrigger value="compliance">Compliance & Privacy</TabsTrigger>
            </TabsList>

            <TabsContent value="users" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>User Accounts</CardTitle>
                  <CardDescription>Manage user access and permissions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="rounded-md border">
                    <div className="grid grid-cols-6 gap-4 bg-gray-50 p-4 font-medium">
                      <div className="col-span-2">User</div>
                      <div>Role</div>
                      <div>Department</div>
                      <div>Status</div>
                      <div>Last Login</div>
                    </div>
                    <div className="divide-y">
                      {filteredUsers.length > 0 ? (
                        filteredUsers.map((user) => (
                          <div
                            key={user.id}
                            className="grid grid-cols-6 gap-4 p-4 cursor-pointer hover:bg-gray-50"
                            onClick={() => handleUserClick(user)}
                          >
                            <div className="col-span-2">
                              <div className="font-medium">{user.name}</div>
                              <div className="text-sm text-gray-500">{user.email}</div>
                            </div>
                            <div>
                              <Badge
                                className={`${
                                  user.role === "Admin"
                                    ? "bg-purple-500"
                                    : user.role === "Standard User"
                                      ? "bg-blue-500"
                                      : "bg-gray-500"
                                }`}
                              >
                                {user.role}
                              </Badge>
                            </div>
                            <div>{user.department}</div>
                            <div>
                              <Badge className={`${user.status === "active" ? "bg-green-500" : "bg-gray-500"}`}>
                                {user.status === "active" ? "Active" : "Inactive"}
                              </Badge>
                            </div>
                            <div className="text-sm text-gray-500">{user.lastLogin}</div>
                          </div>
                        ))
                      ) : (
                        <div className="p-8 text-center text-gray-500">No users found matching your search.</div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">User Statistics</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="rounded-lg border p-4 text-center">
                          <div className="text-2xl font-bold text-[#0F4342]">5</div>
                          <div className="text-xs text-gray-500">Total Users</div>
                        </div>
                        <div className="rounded-lg border p-4 text-center">
                          <div className="text-2xl font-bold text-green-500">4</div>
                          <div className="text-xs text-gray-500">Active Users</div>
                        </div>
                        <div className="rounded-lg border p-4 text-center">
                          <div className="text-2xl font-bold text-purple-500">1</div>
                          <div className="text-xs text-gray-500">Admins</div>
                        </div>
                        <div className="rounded-lg border p-4 text-center">
                          <div className="text-2xl font-bold text-amber-500">3</div>
                          <div className="text-xs text-gray-500">Departments</div>
                        </div>
                      </div>
                      <div className="rounded-lg border p-4">
                        <div className="text-sm font-medium">Active Sessions</div>
                        <div className="mt-2 text-2xl font-bold">3</div>
                        <div className="mt-2 text-xs text-gray-500">3 users currently logged in</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Recent User Activity</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-start text-sm">
                        <Clock className="mr-2 mt-0.5 h-4 w-4 text-[#0F4342]" />
                        <div>
                          <p className="font-medium">Sarah Johnson logged in</p>
                          <p className="text-xs text-gray-500">Today, 10:15 AM</p>
                        </div>
                      </div>
                      <div className="flex items-start text-sm">
                        <Clock className="mr-2 mt-0.5 h-4 w-4 text-[#0F4342]" />
                        <div>
                          <p className="font-medium">John Smith logged in</p>
                          <p className="text-xs text-gray-500">Today, 9:30 AM</p>
                        </div>
                      </div>
                      <div className="flex items-start text-sm">
                        <Clock className="mr-2 mt-0.5 h-4 w-4 text-[#0F4342]" />
                        <div>
                          <p className="font-medium">David Wilson logged in</p>
                          <p className="text-xs text-gray-500">Today, 11:30 AM</p>
                        </div>
                      </div>
                      <div className="flex items-start text-sm">
                        <AlertCircle className="mr-2 mt-0.5 h-4 w-4 text-amber-500" />
                        <div>
                          <p className="font-medium">Failed login attempt</p>
                          <p className="text-xs text-gray-500">Today, 8:45 AM • IP: 192.168.1.60</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Security Alerts</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="rounded-lg border border-amber-200 bg-amber-50 p-4">
                        <div className="flex items-center">
                          <AlertCircle className="mr-2 h-5 w-5 text-amber-500" />
                          <h3 className="font-medium text-amber-800">Unusual Login Activity</h3>
                        </div>
                        <p className="mt-2 text-sm text-amber-800">
                          Multiple login attempts from unusual location detected for Emily Davis's account.
                        </p>
                        <Button className="mt-2 bg-amber-100 text-amber-800 hover:bg-amber-200">Review Activity</Button>
                      </div>

                      <div className="rounded-lg border border-red-200 bg-red-50 p-4">
                        <div className="flex items-center">
                          <AlertCircle className="mr-2 h-5 w-5 text-red-500" />
                          <h3 className="font-medium text-red-800">Password Expiring</h3>
                        </div>
                        <p className="mt-2 text-sm text-red-800">2 users have passwords expiring in the next 7 days.</p>
                        <Button className="mt-2 bg-red-100 text-red-800 hover:bg-red-200">Send Reminders</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="roles" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Role Definitions</CardTitle>
                    <CardDescription>Manage user roles and their permissions</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="rounded-lg border p-4">
                        <div className="flex items-center justify-between">
                          <h3 className="font-medium">Admin</h3>
                          <Badge className="bg-purple-500">1 User</Badge>
                        </div>
                        <p className="mt-2 text-sm text-gray-600">
                          Full system access with ability to manage users, view all data, and configure system settings.
                        </p>
                        <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
                          <div className="flex items-center">
                            <CheckCircle className="mr-1 h-3 w-3 text-green-500" />
                            <span>User Management</span>
                          </div>
                          <div className="flex items-center">
                            <CheckCircle className="mr-1 h-3 w-3 text-green-500" />
                            <span>System Configuration</span>
                          </div>
                          <div className="flex items-center">
                            <CheckCircle className="mr-1 h-3 w-3 text-green-500" />
                            <span>Data Export</span>
                          </div>
                          <div className="flex items-center">
                            <CheckCircle className="mr-1 h-3 w-3 text-green-500" />
                            <span>Audit Log Access</span>
                          </div>
                        </div>
                        <div className="mt-4 flex justify-end">
                          <Button variant="outline" size="sm">
                            <Edit className="mr-2 h-3 w-3" /> Edit Role
                          </Button>
                        </div>
                      </div>

                      <div className="rounded-lg border p-4">
                        <div className="flex items-center justify-between">
                          <h3 className="font-medium">Standard User</h3>
                          <Badge className="bg-blue-500">3 Users</Badge>
                        </div>
                        <p className="mt-2 text-sm text-gray-600">
                          Regular access to system features with ability to create and edit content within their
                          department.
                        </p>
                        <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
                          <div className="flex items-center">
                            <CheckCircle className="mr-1 h-3 w-3 text-green-500" />
                            <span>Content Creation</span>
                          </div>
                          <div className="flex items-center">
                            <CheckCircle className="mr-1 h-3 w-3 text-green-500" />
                            <span>Department Data Access</span>
                          </div>
                          <div className="flex items-center">
                            <CheckCircle className="mr-1 h-3 w-3 text-green-500" />
                            <span>Limited Reports</span>
                          </div>
                          <div className="flex items-center">
                            <CheckCircle className="mr-1 h-3 w-3 text-red-500" />
                            <span>No User Management</span>
                          </div>
                        </div>
                        <div className="mt-4 flex justify-end">
                          <Button variant="outline" size="sm">
                            <Edit className="mr-2 h-3 w-3" /> Edit Role
                          </Button>
                        </div>
                      </div>

                      <div className="rounded-lg border p-4">
                        <div className="flex items-center justify-between">
                          <h3 className="font-medium">Read Only</h3>
                          <Badge className="bg-gray-500">1 User</Badge>
                        </div>
                        <p className="mt-2 text-sm text-gray-600">
                          View-only access to system data without ability to create or modify content.
                        </p>
                        <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
                          <div className="flex items-center">
                            <CheckCircle className="mr-1 h-3 w-3 text-green-500" />
                            <span>View Content</span>
                          </div>
                          <div className="flex items-center">
                            <CheckCircle className="mr-1 h-3 w-3 text-green-500" />
                            <span>Run Reports</span>
                          </div>
                          <div className="flex items-center">
                            <CheckCircle className="mr-1 h-3 w-3 text-red-500" />
                            <span>No Content Creation</span>
                          </div>
                          <div className="flex items-center">
                            <CheckCircle className="mr-1 h-3 w-3 text-red-500" />
                            <span>No Data Export</span>
                          </div>
                        </div>
                        <div className="mt-4 flex justify-end">
                          <Button variant="outline" size="sm">
                            <Edit className="mr-2 h-3 w-3" /> Edit Role
                          </Button>
                        </div>
                      </div>

                      <Button className="w-full">
                        <Plus className="mr-2 h-4 w-4" /> Create New Role
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Permission Matrix</CardTitle>
                    <CardDescription>Detailed breakdown of permissions by role</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="rounded-md border overflow-hidden">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th
                              scope="col"
                              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                              Permission
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                              Admin
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                              Standard
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                              Read Only
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              View Dashboard
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-center">
                              <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-center">
                              <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-center">
                              <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                            </td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              Create Content
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-center">
                              <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-center">
                              <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-center">
                              <AlertCircle className="h-5 w-5 text-red-500 mx-auto" />
                            </td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              Edit Users
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-center">
                              <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-center">
                              <AlertCircle className="h-5 w-5 text-red-500 mx-auto" />
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-center">
                              <AlertCircle className="h-5 w-5 text-red-500 mx-auto" />
                            </td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              Export Data
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-center">
                              <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-center">
                              <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-center">
                              <AlertCircle className="h-5 w-5 text-red-500 mx-auto" />
                            </td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              System Settings
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-center">
                              <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-center">
                              <AlertCircle className="h-5 w-5 text-red-500 mx-auto" />
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-center">
                              <AlertCircle className="h-5 w-5 text-red-500 mx-auto" />
                            </td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              View Audit Logs
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-center">
                              <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-center">
                              <AlertCircle className="h-5 w-5 text-red-500 mx-auto" />
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-center">
                              <AlertCircle className="h-5 w-5 text-red-500 mx-auto" />
                            </td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              Run Reports
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-center">
                              <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-center">
                              <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-center">
                              <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <div className="mt-6 space-y-4">
                      <div className="rounded-lg border p-4">
                        <h3 className="font-medium">Department-Based Access</h3>
                        <p className="mt-2 text-sm text-gray-600">
                          Standard users can only access data within their assigned department. Admins can access all
                          departments.
                        </p>
                      </div>

                      <div className="rounded-lg border p-4">
                        <h3 className="font-medium">Custom Permissions</h3>
                        <p className="mt-2 text-sm text-gray-600">
                          Need more granular control? Create custom roles with specific permission sets.
                        </p>
                        <Button className="mt-2 w-full">Configure Custom Permissions</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="audit" className="mt-6">
              <div className="grid gap-6 md:grid-cols-3">
                <div className="md:col-span-2">
                  <Card>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div>
                          <CardTitle>Audit Logs</CardTitle>
                          <CardDescription>Track user actions and system events</CardDescription>
                        </div>
                        <div className="flex items-center gap-2">
                          <select
                            className="rounded-md border border-input bg-background px-3 py-1 text-sm ring-offset-background"
                            value={auditLogDateRange}
                            onChange={(e) => setAuditLogDateRange(e.target.value)}
                          >
                            <option value="today">Today</option>
                            <option value="7days">Last 7 Days</option>
                            <option value="30days">Last 30 Days</option>
                            <option value="custom">Custom Range</option>
                          </select>
                          <Button variant="outline" size="sm">
                            <Download className="mr-2 h-4 w-4" /> Export
                          </Button>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="rounded-md border">
                        <div className="grid grid-cols-4 gap-4 bg-gray-50 p-4 font-medium">
                          <div>User / System</div>
                          <div>Action</div>
                          <div>Timestamp</div>
                          <div>Details</div>
                        </div>
                        <div className="divide-y">
                          {filteredAuditLogs.length > 0 ? (
                            filteredAuditLogs.map((log) => (
                              <div key={log.id} className="grid grid-cols-4 gap-4 p-4">
                                <div className="font-medium">{log.user}</div>
                                <div>{log.action}</div>
                                <div className="text-sm text-gray-500">{log.timestamp}</div>
                                <div className="text-sm text-gray-600">{log.details}</div>
                              </div>
                            ))
                          ) : (
                            <div className="p-8 text-center text-gray-500">
                              No audit logs found matching your search.
                            </div>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="space-y-6">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium">Audit Summary</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="rounded-lg border p-4 text-center">
                            <div className="text-2xl font-bold text-[#0F4342]">42</div>
                            <div className="text-xs text-gray-500">Total Events</div>
                          </div>
                          <div className="rounded-lg border p-4 text-center">
                            <div className="text-2xl font-bold text-blue-500">28</div>
                            <div className="text-xs text-gray-500">User Actions</div>
                          </div>
                          <div className="rounded-lg border p-4 text-center">
                            <div className="text-2xl font-bold text-purple-500">14</div>
                            <div className="text-xs text-gray-500">System Events</div>
                          </div>
                          <div className="rounded-lg border p-4 text-center">
                            <div className="text-2xl font-bold text-amber-500">3</div>
                            <div className="text-xs text-gray-500">Security Events</div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium">GDPR Compliance</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="rounded-lg border p-4">
                          <h3 className="font-medium">Audit Log Retention</h3>
                          <p className="mt-2 text-sm text-gray-600">
                            Logs are retained for 90 days in compliance with your data retention policy.
                          </p>
                        </div>
                        <div className="rounded-lg border p-4">
                          <h3 className="font-medium">Data Access Records</h3>
                          <p className="mt-2 text-sm text-gray-600">
                            All personal data access is logged and available for GDPR compliance reporting.
                          </p>
                          <Button className="mt-2 w-full">Generate GDPR Report</Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <PingLatencyMonitor />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="compliance" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Privacy Settings</CardTitle>
                    <CardDescription>Configure data privacy and protection settings</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label htmlFor="data-retention">Data Retention Period</Label>
                            <div className="text-sm text-gray-500">How long to keep user activity data</div>
                          </div>
                          <select
                            id="data-retention"
                            className="rounded-md border border-input bg-background px-3 py-1 text-sm ring-offset-background"
                          >
                            <option value="30">30 days</option>
                            <option value="90">90 days</option>
                            <option value="180">180 days</option>
                            <option value="365">1 year</option>
                          </select>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label htmlFor="user-consent">User Consent Tracking</Label>
                            <div className="text-sm text-gray-500">
                              Track and store user consent for data processing
                            </div>
                          </div>
                          <Switch id="user-consent" checked />
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label htmlFor="data-anonymization">Data Anonymization</Label>
                            <div className="text-sm text-gray-500">Anonymize personal data in reports and exports</div>
                          </div>
                          <Switch id="data-anonymization" checked />
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label htmlFor="third-party-sharing">Third-Party Data Sharing</Label>
                            <div className="text-sm text-gray-500">
                              Allow sharing data with integrated third-party services
                            </div>
                          </div>
                          <Switch id="third-party-sharing" />
                        </div>
                      </div>

                      <div className="rounded-lg border p-4">
                        <h3 className="font-medium">Data Subject Rights</h3>
                        <p className="mt-2 text-sm text-gray-600">
                          Tools to handle data subject access requests (DSAR) and right to be forgotten requests.
                        </p>
                        <div className="mt-4 space-y-2">
                          <Button className="w-full">Process DSAR Request</Button>
                          <Button className="w-full">Process Deletion Request</Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Security Controls</CardTitle>
                    <CardDescription>Configure system security settings</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label htmlFor="two-factor">Two-Factor Authentication</Label>
                            <div className="text-sm text-gray-500">Require 2FA for all admin accounts</div>
                          </div>
                          <Switch id="two-factor" checked />
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label htmlFor="password-policy">Strong Password Policy</Label>
                            <div className="text-sm text-gray-500">Enforce complex passwords with regular rotation</div>
                          </div>
                          <Switch id="password-policy" checked />
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label htmlFor="session-timeout">Session Timeout</Label>
                            <div className="text-sm text-gray-500">Automatically log out inactive users</div>
                          </div>
                          <select
                            id="session-timeout"
                            className="rounded-md border border-input bg-background px-3 py-1 text-sm ring-offset-background"
                          >
                            <option value="15">15 minutes</option>
                            <option value="30" selected>
                              30 minutes
                            </option>
                            <option value="60">1 hour</option>
                            <option value="120">2 hours</option>
                          </select>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label htmlFor="ip-restriction">IP Restrictions</Label>
                            <div className="text-sm text-gray-500">Limit access to specific IP addresses</div>
                          </div>
                          <Switch id="ip-restriction" />
                        </div>
                      </div>

                      <div className="rounded-lg border p-4">
                        <h3 className="font-medium">Security Audit</h3>
                        <p className="mt-2 text-sm text-gray-600">
                          Run security audits to identify potential vulnerabilities and compliance issues.
                        </p>
                        <div className="mt-4 space-y-2">
                          <Button className="w-full bg-[#DBCA91] text-[#0F4342] hover:bg-[#c9b87e]">
                            Run Security Audit
                          </Button>
                          <div className="text-xs text-gray-500 text-center">
                            Last audit: Oct 15, 2023 • No issues found
                          </div>
                        </div>

                      <div className="rounded-lg border p-4">
                        <h3 className="font-medium">Compliance Reports</h3>
                        <p className="mt-2 text-sm text-gray-600">
                          Generate reports for various compliance frameworks.
                        </p>
                        <div className="mt-4 space-y-2">
                          <Button className="w-full">GDPR Compliance Report</Button>
                          <Button className="w-full">Data Processing Audit</Button>
                          <Button className="w-full">Security Controls Report</Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>

          {/* User Dialog */}
          <Dialog open={isUserDialogOpen} onOpenChange={setIsUserDialogOpen}>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>User Details</DialogTitle>
                <DialogDescription>View and manage user information</DialogDescription>
              </DialogHeader>
              {selectedUser && (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label>Name</Label>
                    <Input value={selectedUser.name} readOnly />
                  </div>
                  <div className="space-y-2">
                    <Label>Email</Label>
                    <Input value={selectedUser.email} readOnly />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Role</Label>
                      <select
                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
                        defaultValue={selectedUser.role}
                      >
                        <option value="Admin">Admin</option>
                        <option value="Standard User">Standard User</option>
                        <option value="Read Only">Read Only</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <Label>Department</Label>
                      <select
                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
                        defaultValue={selectedUser.department}
                      >
                        <option value="Sales">Sales</option>
                        <option value="Marketing">Marketing</option>
                        <option value="Operations">Operations</option>
                        <option value="Finance">Finance</option>
                        <option value="Management">Management</option>
                      </select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>Status</Label>
                    <div className="flex items-center space-x-2">
                      <Switch id="user-status" checked={selectedUser.status === "active"} />
                      <Label htmlFor="user-status">{selectedUser.status === "active" ? "Active" : "Inactive"}</Label>
                    </div>
                  </div>
                  <div className="rounded-lg border p-4">
                    <h3 className="text-sm font-medium">User Activity</h3>
                    <div className="mt-2 space-y-2 text-xs text-gray-500">
                      <div className="flex justify-between">
                        <span>Last Login:</span>
                        <span>{selectedUser.lastLogin}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Account Created:</span>
                        <span>Oct 1, 2023</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Password Last Changed:</span>
                        <span>Oct 5, 2023</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-end space-x-2">
                    <Button variant="outline">
                      <Eye className="mr-2 h-4 w-4" /> View Activity Log
                    </Button>
                    <Button variant="outline">
                      <Edit className="mr-2 h-4 w-4" /> Edit User
                    </Button>
                    <Button variant="outline" className="border-red-500 text-red-500 hover:bg-red-50">
                      <Trash2 className="mr-2 h-4 w-4" /> Delete User
                    </Button>
                  </div>
                </div>
              )}
            </DialogContent>
          </Dialog>

          {/* New User Dialog */}
          <Dialog open={newUserDialogOpen} onOpenChange={setNewUserDialogOpen}>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Add New User</DialogTitle>
                <DialogDescription>Create a new user account</DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="new-name">Full Name</Label>
                  <Input id="new-name" placeholder="Enter full name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="new-email">Email Address</Label>
                  <Input id="new-email" type="email" placeholder="Enter email address" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="new-role">Role</Label>
                    <select
                      id="new-role"
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
                    >
                      <option value="Admin">Admin</option>
                      <option value="Standard User" selected>
                        Standard User
                      </option>
                      <option value="Read Only">Read Only</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="new-department">Department</Label>
                    <select
                      id="new-department"
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
                    >
                      <option value="Sales">Sales</option>
                      <option value="Marketing">Marketing</option>
                      <option value="Operations">Operations</option>
                      <option value="Finance">Finance</option>
                      <option value="Management">Management</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="send-invite">Send Welcome Email</Label>
                    <Switch id="send-invite" checked />
                  </div>
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setNewUserDialogOpen(false)}>
                  Cancel
                </Button>
                <Button className="bg-[#DBCA91] text-[#0F4342] hover:bg-[#c9b87e]">Create User</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </main>
      </div>
    </div>
  )
}

